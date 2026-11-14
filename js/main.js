/* SecurIoT landing: interaction layer for mobile nav, language toggle, a11y announcer. */
(function () {
  "use strict";

  var i18n = window.SecurIoTI18n;

  function applyLocale(locale) {
    var dict = i18n.dictionaries[locale];
    if (!dict) return;

    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("data-locale", locale);
    document.title = dict.doc_title;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    var langSwitch = document.getElementById("lang-switch");
    if (langSwitch) {
      langSwitch.setAttribute("aria-label", dict.lang_selector_group_label);
      langSwitch.querySelectorAll("[data-lang]").forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === locale ? "true" : "false");
      });
    }
  }

  function announce(message) {
    var region = document.getElementById("a11y-announcer");
    if (region) region.textContent = message;
  }

  function initLocale() {
    var current = i18n.getLocale();
    applyLocale(current);

    var langSwitch = document.getElementById("lang-switch");
    if (!langSwitch) return;

    langSwitch.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = btn.getAttribute("data-lang");
        if (next === (document.documentElement.getAttribute("data-locale") || current)) return;
        current = next;
        i18n.setLocale(next);
        applyLocale(next);
        announce(i18n.dictionaries[next].lang_toggle_announce);
      });
    });
  }

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && window.innerWidth <= 900) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.focus();
      }
    });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* Header gains a blur and border once the page scrolls. */
  function initHeader() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* Scroll reveal: fade and rise once. Content stays visible without JS or with reduced motion.
     The hidden state only exists after this script marks the root as ready, and anything the
     reader scrolled past (fast scroll, anchor jump, End key) is revealed too. */
  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!items.length || reduceMotion.matches) return;
    document.documentElement.classList.add("reveal-ready");
    var pending = items.slice();
    var ticking = false;
    function check() {
      ticking = false;
      var limit = window.innerHeight * 0.94;
      pending = pending.filter(function (el) {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("is-visible");
          return false;
        }
        return true;
      });
      if (!pending.length) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    }
    function onScroll() {
      if (!ticking) { ticking = true; window.requestAnimationFrame(check); }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
  }

  /* Pointer spotlight on cards: fine pointers only, transforms and opacity via CSS variables. */
  function initSpotlight() {
    if (reduceMotion.matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll(".spot").forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", (event.clientX - rect.left) + "px");
        card.style.setProperty("--my", (event.clientY - rect.top) + "px");
      }, { passive: true });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLocale();
    initNav();
    initHeader();
    initReveal();
    initSpotlight();
  });
})();

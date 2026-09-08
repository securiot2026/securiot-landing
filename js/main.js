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

  document.addEventListener("DOMContentLoaded", function () {
    initLocale();
    initNav();
  });
})();

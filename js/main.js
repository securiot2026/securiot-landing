/* SecurIoT landing: interaction layer for mobile nav, language toggle, a11y announcer. */
(function () {
  "use strict";

  var i18n = window.SecurIoTI18n;

  function applyLocale(locale) {
    var dict = i18n.dictionaries[locale];
    if (!dict) return;

    document.documentElement.setAttribute("lang", locale === "en-US" ? "en" : "es-419");
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

    var langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      var mark = langToggle.querySelector("[aria-hidden]");
      if (mark) mark.textContent = locale === "en-US" ? "EN" : "ES";
      langToggle.setAttribute("aria-pressed", locale === "en-US" ? "true" : "false");
    }
  }

  function announce(message) {
    var region = document.getElementById("a11y-announcer");
    if (region) region.textContent = message;
  }

  function initLocale() {
    var current = i18n.getLocale();
    applyLocale(current);

    var toggle = document.getElementById("lang-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var next = i18n.other(document.documentElement.getAttribute("data-locale") || current);
      current = next;
      i18n.setLocale(next);
      applyLocale(next);
      announce(i18n.dictionaries[next].lang_toggle_announce);
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

/* SecurIoT i18n: plain dictionary objects, no external library needed at this scale. */
(function () {
  "use strict";

  var STORAGE_KEY = "securiot:locale";

  var DICTIONARIES = {
    "es-419": {
      html_lang: "es-419",
      doc_title: "SecurIoT: seguridad patrimonial industrial en tiempo real",
      skip_link: "Saltar al contenido principal",
      nav_toggle: "Abrir menú",
      nav_how: "Cómo funciona",
      nav_for_whom: "Para quién es",
      nav_dashboard: "Panel",
      nav_about: "El proyecto",
      nav_cta: "Ir al panel",
      lang_toggle_label: "Cambiar idioma a inglés",
      lang_toggle_announce: "Idioma cambiado a español",

      hero_title: "Vigila el perímetro.<br>Responde antes que el intruso.",
      hero_subhead: "SecurIoT detecta personas en accesos y zonas restringidas, valida si están autorizadas y activa la respuesta en el mismo instante, no al día siguiente cuando alguien revisa la grabación.",
      hero_cta_primary: "Ir al panel de SecurIoT",
      hero_cta_secondary: "Ver cómo funciona",
      hero_status_caption: "Vista ilustrativa de un perímetro bajo monitoreo SecurIoT",
      status_zone_a: "ZONA A · ALMACÉN · OK",
      status_zone_b: "ZONA B · CARGA/DESCARGA · OK",
      status_zone_c: "ZONA C · PERÍMETRO NORTE · ALERTA",

      problem_before_title: "Hoy: vigilancia que reacciona tarde",
      problem_before_body: "Guardias humanos y cámaras que solo se revisan después del hecho. El intruso ya salió de la instalación para cuando alguien vuelve a ver la grabación.",
      problem_before_1: "Rondas físicas que no cubren todo el perímetro a la vez",
      problem_before_2: "Grabación que se revisa después del incidente, no durante",
      problem_before_3: "Sistemas avanzados priceados para grandes corporaciones",
      problem_after_title: "Con SecurIoT: detección y respuesta en el instante",
      problem_after_body: "Sensores y cámara en el perímetro, procesamiento en el borde y una nube centralizada que valida accesos y activa la respuesta sin esperar revisión humana.",
      problem_after_1: "Monitoreo casi en tiempo real de cada zona y dispositivo",
      problem_after_2: "Alerta automática apenas se detecta una intrusión",
      problem_after_3: "Costo pensado para la mediana empresa industrial, no solo la grande",

      pipeline_title: "De la cámara al protocolo de respuesta, en cuatro pasos",
      pipeline_1_title: "Detectar",
      pipeline_1_body: "La cámara identifica personas y objetos en el perímetro, con seguimiento pan-tilt del punto de interés.",
      pipeline_2_title: "Validar",
      pipeline_2_body: "El Edge API procesa localmente y valida en tiempo real si el ingreso está autorizado para esa zona.",
      pipeline_3_title: "Responder",
      pipeline_3_body: "Ante una intrusión detectada: alarma local, notificación inmediata al personal de seguridad y a los responsables designados por la empresa, sin esperar revisión manual.",
      pipeline_4_title: "Registrar",
      pipeline_4_body: "Cada evento queda trazable en un historial auditable, listo para investigación interna o reporte a autoridades y aseguradoras.",

      stakeholders_title: "Pensado para las dos personas que deciden",
      stakeholder_admin_title: "Administrador de seguridad",
      stakeholder_admin_body: "Visibilidad centralizada del estado de zonas, dispositivos y alertas de todas las sedes desde un solo panel, sin depender solo de rondas físicas.",
      stakeholder_owner_title: "Gerente o dueño de la pyme industrial",
      stakeholder_owner_body: "Evidencia trazable y auditable de cada incidente para reducir exposición legal y agilizar el reporte a aseguradoras, con un modelo de suscripción por sede pensado para el presupuesto de una mediana empresa, no el de una gran corporación.",

      dashboard_title: "Una sola cuenta, todas las sedes",
      dashboard_body: "El dashboard Web centraliza zonas, dispositivos y alertas de cada planta o almacén. La aplicación Mobile llega después, para el personal de vigilancia en ronda.",
      dashboard_note: "Vista conceptual del panel: ilustrativa, no una captura del producto final.",
      dashboard_mock_panel: "PANEL",
      dashboard_mock_live: "EN VIVO",
      dashboard_mock_site_a: "PLANTA NORTE",
      dashboard_mock_alert: "1 ALERTA",
      dashboard_mock_site_b: "ALMACÉN CENTRAL",
      dashboard_mock_ok: "OK",
      dashboard_mock_site_c: "CENTRO DE DISTRIBUCIÓN",

      about_title: "Sobre el proyecto",
      about_body: "SecurIoT es el producto de Centinela Labs, desarrollado como proyecto final del curso Desarrollo de Soluciones IoT en la Universidad Peruana de Ciencias Aplicadas (UPC). El foco inicial es la mediana empresa industrial y logística de Lima Metropolitana.",

      final_cta_title: "Deja de revisar grabaciones. Empieza a responder en el instante.",
      final_cta_button: "Ir al panel de SecurIoT",

      footer_tagline: "Un producto de Centinela Labs.",
      footer_legal: "El tratamiento de datos de imagen y biometría se realiza conforme a la Ley N.° 29733 de Protección de Datos Personales (Perú).",
      footer_meta: "Proyecto académico, Ingeniería de Software, UPC."
    },

    "en-US": {
      html_lang: "en-US",
      doc_title: "SecurIoT: real-time industrial perimeter security",
      skip_link: "Skip to main content",
      nav_toggle: "Open menu",
      nav_how: "How it works",
      nav_for_whom: "Who it's for",
      nav_dashboard: "Dashboard",
      nav_about: "The project",
      nav_cta: "Go to dashboard",
      lang_toggle_label: "Switch language to Spanish",
      lang_toggle_announce: "Language changed to English",

      hero_title: "Watch the perimeter.<br>Respond before the intruder does.",
      hero_subhead: "SecurIoT detects people at access points and restricted zones, validates whether they're authorized, and triggers a response in the same instant, not the next day when someone finally reviews the footage.",
      hero_cta_primary: "Go to the SecurIoT dashboard",
      hero_cta_secondary: "See how it works",
      hero_status_caption: "Illustrative view of a perimeter under SecurIoT monitoring",
      status_zone_a: "ZONE A · WAREHOUSE · OK",
      status_zone_b: "ZONE B · LOADING DOCK · OK",
      status_zone_c: "ZONE C · NORTH PERIMETER · ALERT",

      problem_before_title: "Today: surveillance that reacts too late",
      problem_before_body: "Human guards and cameras that only get reviewed after the fact. The intruder is long gone by the time anyone watches the footage.",
      problem_before_1: "Physical rounds that can't cover the whole perimeter at once",
      problem_before_2: "Footage reviewed after the incident, never during it",
      problem_before_3: "Advanced systems priced for large corporations only",
      problem_after_title: "With SecurIoT: detection and response in the instant",
      problem_after_body: "Sensors and a camera on the perimeter, edge processing on-site, and a centralized cloud that validates access and triggers the response without waiting on a human review.",
      problem_after_1: "Near real-time monitoring of every zone and device",
      problem_after_2: "Automatic alert the moment an intrusion is detected",
      problem_after_3: "A cost built for the medium industrial company, not only the large one",

      pipeline_title: "From camera to response protocol, in four steps",
      pipeline_1_title: "Detect",
      pipeline_1_body: "The camera identifies people and objects on the perimeter, with pan-tilt tracking of the point of interest.",
      pipeline_2_title: "Validate",
      pipeline_2_body: "The Edge API processes locally and validates in real time whether entry is authorized for that zone.",
      pipeline_3_title: "Respond",
      pipeline_3_body: "When an intrusion is detected: local alarm, immediate notification to security staff and the company's designated officers, no manual review required.",
      pipeline_4_title: "Log",
      pipeline_4_body: "Every event is kept in an auditable, traceable history, ready for internal investigation or reporting to authorities and insurers.",

      stakeholders_title: "Built for the two people who decide",
      stakeholder_admin_title: "Security administrator",
      stakeholder_admin_body: "Centralized visibility into the status of zones, devices, and alerts across every site from a single panel, without relying only on physical rounds.",
      stakeholder_owner_title: "Owner or manager of the industrial SME",
      stakeholder_owner_body: "Traceable, auditable evidence of every incident to reduce legal exposure and speed up reporting to insurers, with a per-site subscription model built for a medium company's budget, not a large corporation's.",

      dashboard_title: "One account, every site",
      dashboard_body: "The Web dashboard centralizes zones, devices, and alerts for every plant or warehouse. The Mobile app comes next, for guards on their rounds.",
      dashboard_note: "Conceptual view of the panel: illustrative, not a screenshot of the final product.",
      dashboard_mock_panel: "DASHBOARD",
      dashboard_mock_live: "LIVE",
      dashboard_mock_site_a: "NORTH PLANT",
      dashboard_mock_alert: "1 ALERT",
      dashboard_mock_site_b: "CENTRAL WAREHOUSE",
      dashboard_mock_ok: "OK",
      dashboard_mock_site_c: "DISTRIBUTION CENTER",

      about_title: "About the project",
      about_body: "SecurIoT is Centinela Labs' product, developed as the capstone project for the IoT Solutions Development course at Universidad Peruana de Ciencias Aplicadas (UPC). The initial focus is medium-sized industrial and logistics companies in Lima Metropolitana.",

      final_cta_title: "Stop reviewing footage. Start responding in the instant.",
      final_cta_button: "Go to the SecurIoT dashboard",

      footer_tagline: "A Centinela Labs product.",
      footer_legal: "Image and biometric data is processed in accordance with Peru's Law N.° 29733 on Personal Data Protection.",
      footer_meta: "Academic project, Software Engineering, UPC."
    }
  };

  function getStoredLocale() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLocale(locale) {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch (e) {
      /* Private mode or storage disabled: fall back to in-memory only. */
    }
  }

  function detectDefaultLocale() {
    var nav = window.navigator.language || "";
    return nav.toLowerCase().indexOf("en") === 0 ? "en-US" : "es-419";
  }

  window.SecurIoTI18n = {
    dictionaries: DICTIONARIES,
    getLocale: function () {
      return getStoredLocale() || detectDefaultLocale();
    },
    setLocale: storeLocale,
    other: function (locale) {
      return locale === "en-US" ? "es-419" : "en-US";
    }
  };
})();

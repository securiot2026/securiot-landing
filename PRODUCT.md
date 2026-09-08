# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML/CSS/vanilla JS (no framework, no build step). Reasoning: the course requires open-source tooling only, the surface is a marketing landing page with no dynamic backend, and a static deploy keeps it decoupled from the Web App repo being built in parallel. i18n and theme state are handled with a small hand-written JS module (dictionary objects + `localStorage`), no i18n library needed at this scale.

## Users

- **Administrador de seguridad patrimonial** (usuario principal del futuro producto, visitante principal de esta landing): decide o influye en la contratación de la suscripción. Llega comparando esta alternativa contra vigilancia humana y CCTV pasivo tradicional. Necesita entender rápido qué hace distinto a SecurIoT y qué pasa cuando detecta una intrusión.
- **Gerente/dueño de la pyme industrial o logística** (usuario secundario, con frecuencia quien firma el gasto): le interesa el retorno del gasto en seguridad, el riesgo legal/financiero cubierto (evidencia trazable) y que el costo sea accesible frente a soluciones de gama alta.
- Ambos visitan desde Lima Metropolitana, en el contexto de una fábrica, almacén o planta de producción con múltiples accesos y activos de alto valor.

## Product Purpose

SecurIoT (por Centinela Labs) es una plataforma de monitoreo de seguridad patrimonial que combina sensores + cámara en el perímetro físico, una Edge API que procesa localmente con baja latencia, y una Cloud API que centraliza la gestión remota multi-sede, sirviendo un dashboard Web (y luego una app Mobile). Existe para cerrar la brecha entre el riesgo patrimonial real que enfrentan las pymes industriales y logísticas, y su capacidad real de pagar sistemas de seguridad proactivos y escalables, hoy priceados solo para grandes corporaciones. Esta landing es la superficie de venta/persuasión: su éxito es que un visitante entienda la propuesta, confíe en ella y llegue al login/CTA del Web App.

## Positioning

A diferencia de la vigilancia humana y el CCTV pasivo (que reaccionan revisando grabaciones después del hecho), SecurIoT identifica personas en tiempo real, valida automáticamente si el acceso está autorizado, y activa protocolos de respuesta (alarma, notificación, registro trazable) en el momento de la intrusión — con hardware IoT + edge computing de bajo costo, no con la infraestructura de gama alta que hoy solo pueden pagar las grandes corporaciones.

## Operating Context

- El visitante llega desde búsqueda, referidos o material de venta directa del equipo (contexto B2B, no autoservicio impulsivo).
- Decisión de compra con más de un stakeholder (administrador de seguridad + gerente), así que la landing debe servir a ambos sin obligar a elegir un único mensaje.
- El producto real corre en instalaciones físicas con múltiples accesos, zonas restringidas (almacenes, líneas de producción, zonas de carga/descarga) y condiciones de planta (luz variable, ambientes industriales).
- El CTA principal apunta al login del Web App (repositorio y dominio separados, aún en construcción en paralelo). Se linkea con una ruta/placeholder marcada con TODO hasta que el Web App publique su URL real.

## Capabilities and Constraints

- Monitoreo casi en tiempo real de zonas y dispositivos (estado por punto de acceso).
- Motor de alertas basado en reglas: notifica automáticamente ante intrusión detectada, sin esperar revisión humana.
- Detección de personas/objetos por cámara con seguimiento pan-tilt.
- Registro histórico trazable de eventos y telemetría, con fines de auditoría y reporte a autoridades/aseguradoras.
- Gestión remota multi-sede desde una sola cuenta (Cloud API).
- Sitio estático, sin dependencia de backend pesado; el CTA de login es un enlace externo hacia el Web App (URL/ruta pendiente, marcada con TODO).
- Tratamiento de datos biométricos/imágenes debe alinearse con la Ley N° 29733 (protección de datos personales, Perú) — mencionar privacidad como principio, sin inventar certificaciones o compliance que el equipo no tiene aún.
- No inventar precios, clientes, testimonios ni benchmarks: el equipo no tiene evidencia real de ninguno todavía (ver Evidence on Hand).

## Brand Commitments

- Nombre de producto: **SecurIoT**. Nombre de la startup/equipo: **Centinela Labs**.
- Sin guía de marca, paleta o tipografía previa — se define en esta primera superficie (ver Direction contract en el surface brief).

## Evidence on Hand

- No hay clientes, testimonios, casos de estudio, precios ni cifras de producto reales todavía: es un proyecto de capstone universitario (curso Desarrollo de Soluciones IoT, UPC) con framing real de startup, no una empresa con historial comercial.
- Contenido factual disponible: el problem statement, las Lean UX assumptions/hypotheses y el análisis 5W+2H en `securiot-report/README.md` (secciones 1.1.1 y 1.2.2), que sí se pueden citar/parafrasear como narrativa de producto.
- Cualquier cifra de mercado citada (ej. "1 de cada 5 industrias víctima de delincuencia", "solo 5% de pymes aseguradas") debe atribuirse a la fuente (SNI) y no presentarse como dato propio de SecurIoT.
- No hay activos de marca (logo, fotografía real de hardware) todavía: cualquier imagen usada debe ser generada/ilustrada y queda marcada como sintética, nunca presentada como fotografía real del producto.

## Product Principles

1. Hablar en el lenguaje del riesgo patrimonial industrial real (accesos, perímetros, zonas restringidas), no en jerga genérica de "seguridad IoT".
2. Demostrar el mecanismo (detección → validación → respuesta automática), no solo enunciarlo.
3. Servir a los dos stakeholders de la decisión (seguridad operativa y gerencia/costo) sin forzar un único ángulo de venta.
4. Nunca inventar prueba social, precios o certificaciones que el equipo no tiene.
5. Ser honesto sobre el estado del producto (capstone universitario con ambición real de startup) sin que eso debilite la autoridad del pitch.

## Accessibility & Inclusion

Debe cumplir estrictamente las reglas de A11Y.md (fecarrico/A11Y.md, en_US doc): contraste AA mínimo (4.5:1 texto, 3:1 componentes/gráficos), operabilidad 100% por teclado, foco visible ≥2px con 3:1 de contraste, HTML semántico con ARIA solo donde falte semántica nativa, formularios con labels explícitos, `lang` correcto por idioma activo, `prefers-reduced-motion` respetado como rama por defecto, y anuncios `aria-live`/`role="status"` para cambios dinámicos (ej. cambio de idioma). Sitio bilingüe (en_US / es_419) con selector persistente en `localStorage`, todo el texto visible traducido en ambos idiomas.

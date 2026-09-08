# Design

<!-- impeccable:design-schema 1 -->

Recorded from the shipped landing page (`index.html`), not from intention. See `.impeccable/surfaces/index-html.md` for the direction contract this build followed.

## World

Industrial site-plan / control-room fusion. The page reads like a live facility perimeter readout rather than a generic security-SaaS marketing page: engineering-drawing line art (perimeter polygon, sensor nodes, camera field-of-view cone) over a graphite ground, with control-room status chips and a mono-type telemetry register.

## Color

- Ground: `--bg-0 #0f1116`, `--bg-1 #12151a`, `--bg-2 #171b21`, `--bg-3 #1e232b` (graphite family, darkest at the hero, stepping up per section).
- Accent (committed, ~30-45% of visual weight on CTAs/active states/line art): `--amber #f5a623`, hover `--amber-strong #ffb838`, ink-on-amber `--amber-ink #1a1305`.
- Text: `--ink #eef1f4` (primary), `--ink-dim #a9b2bf` (secondary, tinted blue-gray off the graphite hue), `--ink-faint #8b93a0` (tertiary captions/labels; brightened during the audit pass to clear 4.5:1 against both `--bg-0` and `--bg-2`).
- Status: `--ok #3ecf8e`, `--danger #ef4444` — always paired with a text label (e.g. "OK", "ALERTA"/"ALERT"), never color alone.
- Strategy: Committed (one accent, dark neutrals), chosen for the use scene — a security control room, evaluated under dim/night monitoring conditions — not picked by category default.

## Type

- Display (`--font-display`): Big Shoulders Display, 600–800. Condensed industrial/stencil character, used for all headings; tracking kept at or above 0 (the face is already condensed, so no added negative tracking).
- Body (`--font-body`): IBM Plex Sans, 400–600.
- Data/telemetry (`--font-mono`): IBM Plex Mono, 400–500 — used for nav zone labels, status chips, dashboard mock, kicker-style small caps.

## Structure & components

- `.wrap`: `width: min(1200px, 100% - 3rem)` centering utility; sections additionally carry their own `padding-inline` as a defensive gutter.
- Hairline rules (`--line-soft`, `--line-amber`) instead of cards; no icon+heading+text card grid as page structure. The "who it's for" section uses two asymmetric blocks (not a uniform grid) to serve both stakeholders without flattening them into identical cards.
- The four-step process (`Detectar → Validar → Responder → Registrar` / `Detect → Validate → Respond → Log`) uses numbered steps because the sequence itself is meaningful (an ordered pipeline), which is the one case the craft floor allows numbering.
- Buttons: square-ish corners (`--radius: 3px`), amber-filled primary, ghost secondary with hairline border.
- No gradient text, no glassmorphism as decoration (the header's `backdrop-filter: blur` is a functional sticky-nav legibility aid, not a decorative panel), no card-in-card nesting, no kicker/eyebrow labels.

## Motion

- Hero SVG: sensor-node pulse rings and a slow camera field-of-view sweep, all gated behind `@media (prefers-reduced-motion: no-preference)` — static by default.
- A single alert-status dot pulse, same reduced-motion gating.
- No entrance-animation-on-scroll library; content is visible by default.

## Accessibility baseline (see PRODUCT.md → Accessibility & Inclusion for the source rules)

- Skip link to `#main`; landmark elements (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`).
- Keyboard: mobile nav toggle manages `aria-expanded`/`aria-controls`, closes on `Escape` and returns focus to the toggle; all interactive elements are native `button`/`a`.
- Focus: `:focus-visible` ring, 2px offset + 4px amber ring, never suppressed.
- i18n: `<html lang>` and `data-locale` updated on toggle; `document.title` retranslated; locale choice persisted in `localStorage`; a `role="status"` live region announces the language change for assistive tech.
- Color contrast audited with `impeccable detect`; `--ink-faint` was raised from `#6d7684` to `#8b93a0` to clear 4.5:1 on both `--bg-0` and `--bg-2`.
- No informative image lacks alt text; decorative SVG marked `aria-hidden="true"`; the illustrative dashboard mock carries a descriptive `role="img"` + `aria-label` since it is a static illustration, not live data.

## Known open item

The primary CTA (`#app-login`) is a placeholder until the `securiot-web` repository publishes its real login URL — marked with a `TODO` comment in `index.html`.

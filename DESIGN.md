# Design

<!-- impeccable:design-schema 1 -->

Superseded. The direction below was locked by Centinela Labs' `SecurIOT Visual Direction.pdf` (9 pages, 2026) and replaces the previous graphite/amber industrial-siteplan world recorded in this file's earlier version. That prior build is now anti-reference, not incumbent — the PDF is client-approved visual authority for every SecurIoT surface. This file records the target direction; the page itself has not been rebuilt to it yet (see "Known open item").

Source assets: `SecurIOT Visual Direction.pdf` and `SecurIOT (1).zip` (12 icons: `icono-1..12`, mixed SVG/PNG — `icono-2.svg`/`icono-12.svg` are the brand mark icon-solo lockup in the marca teal, the rest are line-art topic icons for feature/benefit blocks).

## World

Grano y color sobre negro — "grain and color on black." Radial color blooms (heavy-gaussian-blur ellipses, blended by overlay on near-black), captured as real photographic film grain baked into a lightweight JPEG background — never a CSS gradient, because gradients wash the blacks out and this world depends on black staying black. The reference format: meta line at top, large title with part of the text dimmed to `texto-mute`, short body, footer contact info in columns. A giant cropped wordmark can sit behind the hero as an editorial-style background device (in place of a person photo) — coherent with a product that "sees" through sensors, not people.

Mode: Persuade. The visitor is a pyme industrial/logística/comercial decision-maker; design is the product's first proof of competence.

## Color

Seven tokens total, no more — this is a hard constraint from the brief, not a starting palette:

| Token | Value | Job |
|---|---|---|
| `--marca` | `#1FD3C4` | Logo, CTA, the one dominant background bloom — never a status color |
| `--senal` | `#6C7CE8` | Status: validating (rare on this surface — mostly a product-UI color) |
| `--verificado` | `#22DD66` | Status: authorized |
| `--alerta` | `#FF5C6C` | Status: intrusion |
| `--noche` | `#0B0E14` | Base ground |
| `--texto` | `#EEF0F4` | Primary text — inside the product this is the white, never `#FFFFFF` |
| `--texto-mute` | `#8B93A3` | Secondary text, dimmed title clauses |

Two jobs, never mixed in one view: a **background bloom** (radial, blurred, grain on top, darkening at the edges, exactly one per screen — never two color blooms competing) versus **interface state** (badges/overlays: flat, no grain, no blur, because data precision beats visual weather there). `#FFFFFF`/pure black are brand-collateral neutrals (stationery, print, partner lockups) only — never interface tokens.

## Type

- Display/H1 — Sora 700, 40–52px.
- H2 — Sora 700, 28px.
- Body — Schibsted Grotesk 400, 16px.
- Data/telemetry register (timestamps, zone codes, status strings) — Martian Mono 400, 15px.

One family per job, matching the PDF's fundidora-tipográfica reference (editorial type foundries, typography as protagonist).

## Structure & components

- Nav: wordmark + primary links + "Iniciar sesión" — matches the PDF's reference header exactly (`SecurIoT · Cómo funciona · Panel · El proyecto · Iniciar sesión`).
- Hero: one dominant color bloom (marca teal → señal blue-purple blend, per the PDF comp), grain baked into the image, headline in `--texto` with the second clause dimmed to `--texto-mute`, one primary CTA (pill-shaped, white fill on the bloom, matching the reference button).
- Footer: contact info in columns (location, product surfaces list), plain `--noche` ground, no bloom.
- Icon set from `SecurIOT (1).zip`: line-art topic icons for feature/benefit sections, rendered in `--marca` on `--noche` per the icon-solo lockup precedent (`icono-2.svg`/`icono-12.svg`), never recolored per-section.

## Motion

Only loop: the "en vivo" (live) status dot — it confirms something real. Everything else is a response to user action, per the brief.

## Accessibility baseline (see PRODUCT.md → Accessibility & Inclusion, A11Y.md)

Unchanged from the prior build's baseline and still binding on the rebuild: skip link, landmark elements, keyboard-manageable nav toggle, visible `:focus-visible` ring, i18n locale persistence + live-region announcement, no color-alone status (every state badge pairs color with an icon and a text label — `--senal`/`--verificado`/`--alerta` are functional, not decorative, so this rule applies directly). Contrast must be re-verified with `impeccable detect` once the rebuild ships: `--texto-mute` (#8B93A3) on `--noche` (#0B0E14) and on the color blooms both need checking before reuse at small sizes.

## Cross-surface consistency

This palette and type system is now the single source of truth for **all three** SecurIoT interfaces (Landing, Web App, Mobile App) — it replaces the earlier per-surface split (graphite/amber Persuade vs. near-white/navy/teal Operate). See `securiot-web-app/DESIGN.md` and `securiot-mobile-app/DESIGN.md` for how the same seven tokens translate into their Operate-mode dashboards, including the extension needed for states the brief doesn't cover (offline, alert severity tiers).

## Known open item

This file records the **target** direction; `index.html` still ships the prior graphite/amber build. Rebuilding the page to this direction is a redesign (new-work), not a refinement, and is separate follow-up work — not done in this pass. The primary CTA's real login URL is still a placeholder pending the Web App's published URL, unchanged from before.

---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: Landing page (index.html) — Persuade

Process note: this run had no live interactive session for the concept-seed / decision-page rounds (automated multi-agent delegation, no user watching a browser). Per the skill's autonomy directive, the direction below was chosen directly against the seven-candidate discipline instead of running `impeccable concept-seed` / `serve-question`, and is disclosed here rather than silently skipped. No image generation was invoked; build is **code-led** by necessity (no image-gen tool available in this environment) — ambition is carried in the FIRST VIEWPORT block and the signature interaction below, audited at finish.

Scope: single landing page, no established DESIGN.md yet (greenfield). Audience: industrial/logistics security administrators and pyme owners/managers in Lima Metropolitana, deciding between SecurIoT and human-guard/passive-CCTV status quo.

Candidate visual worlds considered (audience's own reading world, not category default):
1. Industrial site-plan / engineering blueprint (perimeter outlines, sensor legends, hairline drafting rules) — audience reads these documents constantly (facility layouts, evacuation plans).
2. Control-room monitor wall (multi-feed grid, telemetry readouts) — the literal room a security administrator works in.
3. Warning/hazard signage system (amber/black chevrons, safety placards) — plant-floor visual language.
4. Night-vision/thermal camera feed aesthetic — closest to "product screenshot" cliché, high risk of generic-security-SaaS default.
5. Access-control badge/turnstile ledger (tabular, stamped) — logistics/warehouse paperwork world.
6. Cargo/logistics manifest (waybills, pallet labels, barcode) — logistics segment's own documents.
7. Perimeter fence line itself, drawn as topographic/survey line art — the physical asset being protected.

Chosen direction fuses (1) as the dominant grammar with accents of (2): the page reads like a live facility site-plan/control-room readout, not a generic SaaS marketing page. This avoids the two ruts named up front: the "hero-metric SaaS" template (big number, icon cards, gradient blob) and its predictable opposite (flat corporate stock-photo security page).

## Direction contract

**THESIS:** The visitor is looking at a live perimeter readout, not a sales brochure — SecurIoT proves itself by showing the plant it is already watching, refusing the generic shield-icon/gradient-blob security-SaaS hero.

**OWN-WORLD:** Graphite/charcoal ground (#12151a family) as the committed neutral; one saturated signal-amber accent (~#f5a623 family, warning/alert register, never neon) carrying 30–60% of visual weight on CTAs, active states and the perimeter line art. Structure drawn as engineering site-plan line art: perimeter polygon, sensor node markers, camera field-of-view cones, hairline 1px rules like a drafting sheet. Display type: Space Grotesk (headlines) — a grotesque with enough personality to avoid system-sans default. Data/telemetry labels and monospaced readouts: IBM Plex Mono. Body copy: Inter. Corners mostly square/1px-radius (drafting sheet, not rounded SaaS cards); no soft glassmorphism.

**STORY:** Visitor understands in seconds: a perimeter breach today goes undetected until someone reviews footage later; SecurIoT detects, validates and responds automatically, in real time, at a cost pymes industriales can actually pay. They believe it because they see the mechanism (detection → validation → response) demonstrated as a live-looking diagram, not just claimed in a bullet list. They act via a CTA into the Web App login.

**FIRST VIEWPORT:** Full-bleed site-plan line art of an industrial facility perimeter as the hero's structural layer (SVG, animated sensor pulses + a camera FOV cone that sweeps slowly), headline + one-line subhead + primary CTA ("Ir al panel" / "Go to dashboard") and secondary CTA ("Cómo funciona" / "How it works") set on the left third over a graphite scrim; a thin live-style status strip along the bottom edge showing zone/sensor state labels in mono type. No stock photography, no gradient blob, no icon-plus-card grid in the hero.

**FORM:** Authored directly, code-led (no image generation available in this environment; no interactive decision round run — disclosed above). Site-plan/control-room fusion, ranked #1 of the seven candidates above.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Notes

- Visitor mode: Persuade.
- Must serve two stakeholders (security administrator + owner/manager) without picking one angle: hero speaks to the mechanism (administrator's concern), a proof/value-prop section speaks to cost-accessibility and legal/audit trail (manager's concern).
- No invented pricing, customers, testimonials, or certifications (see PRODUCT.md Evidence on Hand).
- CTA to Web App login is a placeholder route (`#` or `/app` with a `TODO` comment) until the Web App repo publishes a real URL.
- i18n (en_US / es_419) and full WCAG AA per A11Y.md are hard requirements, not polish.

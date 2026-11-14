# Landing design rationale

Mode: Persuade. Brand fixed by DESIGN.md and PRODUCT.md (dark ground, teal, Sora, Schibsted Grotesk, Martian Mono). This note records the references studied and what the page borrows in spirit.

## What I studied

| Page | What it does well | Adopted | Rejected |
|---|---|---|---|
| Verkada (security) | Alternates headline blocks, feature lists and card grids. Gives privacy its own block of pillars. Keeps the demo and login actions in the header. | A dedicated privacy section with three pillars. Login stays in the nav. | Customer logo strip, review scores and any "30,000 organizations" style claim. We have no customers. |
| Linear (developer tooling) | Hero with the real product screen. Short numbered positioning cards. Alternating feature blocks with cropped UI. | Real screenshot in the hero. Cropped, framed screens in the tour. | Testimonials, changelog feed and team count. None of those exist for us. |
| Vercel (developer tooling) | Few words per section, one repeated call to action, quiet footer. | One primary action repeated at hero, plans and the final band. | Metric-led case studies. |
| Stripe (payments) | Strong rhythm between dense and spacious sections. Motion limited to entrance and hover. | Reveal on scroll that fades and rises once. Hover states that respond to the pointer. | Animated wave backdrops and logo loops. |
| Ring (home security) | Plain language about privacy and what the product does when the connection fails. | Plain language for the offline siren and for data consent. | Consumer lifestyle imagery with people. |

The Ring page redirected to a regional site, so I read it only for its privacy and offline messaging.

## Decisions

- Hero: promise, one primary action, and a real mobile screenshot in a CSS-only device frame. Night industrial photo sits under a heavy scrim so text keeps AA contrast.
- Proof without invented proof: real screens, honest limits line (no 24/7 center, no armed response, simulated checkout), and a comparison table that names categories, never companies, and uses no numbers.
- Sections: problem, how it works, features, product tour, hardware, privacy and offline resilience, stakeholders, pricing, comparison, FAQ, about, final call to action, footer with navigation, contact and photo credits.
- Motion: reveal on scroll via IntersectionObserver, hero entrance, online pulse on status dots, pointer spotlight on cards (fine pointer only), header blur after scroll, smooth anchors with offset, FAQ height animation through `details` and `::details-content`, scroll-driven drift on the hero phone. Only transform and opacity. All of it turns off under `prefers-reduced-motion: reduce`. Content is visible without JavaScript.
- Photos are stock references and say so on the page. Real prototype photos are a pending slot for the owner.

# prtf_1 — Latest Portfolio (Riddhi Shah)

This folder is the **latest portfolio site**. It showcases 3 projects as cards on the home page.
The `project-*.html` files are **detail pages for those cards** — not separate stray projects.

## Home + Cards

`index.html` > `#projects` contains:

| # | Card | Type | Detail page |
|---|------|------|-------------|
| 1 | DuePilot AI | Personal / Flagship | `project-duepilot.html` |
| 2 | ASSETrix | Team / Odoo Hackathon 2026 Finalist | `project-assetrix.html` |
| 3 | GlobeTrotter | Team / Hackathon, frontend (2 pages) | `project-globetrotter.html` |

All card buttons say **View Case Study** and link to the matching detail page.

## File Map

```
prtf_1/
├── index.html               # Home: hero, about, skills, projects (3 cards), contact
├── styles.css               # Home stylesheet
├── script.js                # Home JS: theme, nav, animations, typing, particles
├── project-duepilot.html    # Card #1 detail: DuePilot AI full case study
├── project-duepilot.css     # Card #1 styles
├── project-duepilot.js      # Card #1 JS
├── project-assetrix.html    # Card #2 detail: ASSETrix showcase page only
├── project-globetrotter.html# Card #3 detail: GlobeTrotter showcase page only
├── project-page.css         # Shared styles for card #2 + #3
└── DESIGN-SYSTEM.md         # Design tokens and patterns
```

Notes:

- `project-assetrix.html` and `project-globetrotter.html` are lightweight showcase pages (hero + mockup + details). They are not the full app source code.
- Team repos live on GitHub (links inside each detail page). This folder only hosts the portfolio presentation.
- Theme (`dark`/`light` via `localStorage`) and scroll-reveal (`.anim-fade-up` + `IntersectionObserver`) are shared patterns across all pages.
```

## How to add a 4th project

1. Copy `project-assetrix.html` → `project-newname.html`, update the header comment, title, and content.
2. Add a new card in `index.html` > `#projects` linking to it.
3. Add a row to the table above.

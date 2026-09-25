# Riddhi Shah — Portfolio Design System

## Visual Direction

- **70% modern & creative** / **30% developer/tech-focused**
- Premium but authentic — reflects a BCA student who is learning, not a senior developer
- Dark mode as default, light mode via toggle
- No profile photo, no heavy 3D, no excessive futuristic effects, no flashy animations
- Feels like a real developer's personal portfolio, not a generic template

---

## Color System

### Dark Mode (Default)
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0f` | Page background |
| `--bg-secondary` | `#12121a` | Alternate section background |
| `--bg-card` | `#16161f` | Card backgrounds |
| `--bg-card-hover` | `#1c1c28` | Card hover state |
| `--text-primary` | `#e8e8ed` | Headings, primary text |
| `--text-secondary` | `#9898a8` | Body text, descriptions |
| `--text-muted` | `#5a5a6e` | Labels, meta text |
| `--accent` | `#6c5ce7` | Primary accent (purple) |
| `--accent-2` | `#00cec9` | Secondary accent (teal) |
| `--accent-3` | `#fd79a8` | Tertiary accent (pink) |
| `--border` | `#1e1e2e` | All borders |
| `--nav-bg` | `rgba(10,10,15,0.85)` | Navbar backdrop |
| `--shadow` | `rgba(0,0,0,0.4)` | Box shadows |

### Light Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#f5f5f7` | Page background |
| `--bg-secondary` | `#ffffff` | Alternate section background |
| `--bg-card` | `#ffffff` | Card backgrounds |
| `--bg-card-hover` | `#f0f0f5` | Card hover state |
| `--text-primary` | `#1a1a2e` | Headings, primary text |
| `--text-secondary` | `#4a4a5e` | Body text, descriptions |
| `--text-muted` | `#8a8a9e` | Labels, meta text |
| `--accent` | `#6c5ce7` | Primary accent (same) |
| `--accent-2` | `#00b894` | Secondary accent (slightly different green) |
| `--accent-3` | `#e84393` | Tertiary accent |
| `--border` | `#e0e0e8` | All borders |
| `--nav-bg` | `rgba(245,245,247,0.88)` | Navbar backdrop |
| `--shadow` | `rgba(0,0,0,0.08)` | Box shadows |

### Gradient Text
```css
.text-gradient {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Accent Usage Rules
- `--accent` (purple): Primary CTAs, active states, section labels, icons
- `--accent-2` (teal/green): Secondary highlights, success states, learning badges
- `--accent-3` (pink): Tertiary accents, select card highlights
- Gradients always go purple → teal (135deg)

---

## Typography

### Font Stack
- **Headings:** `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Monospace/Labels:** `'JetBrains Mono', monospace`
- **Body:** `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`

### Type Scale
| Element | Size | Weight | Letter-spacing |
|---------|------|--------|----------------|
| Hero Name | `clamp(3rem, 8vw, 6.5rem)` | 800 | -3px |
| Section Title | `clamp(2rem, 5vw, 3.2rem)` | 800 | -1.5px |
| Block Title | `1.35rem` | 700 | -0.3px |
| Card Title | `1.05rem` | 700 | — |
| Body Large | `1.05–1.15rem` | 400–500 | — |
| Body | `0.92–1rem` | 400 | — |
| Small/Meta | `0.82–0.88rem` | 500 | — |
| Badge/Label | `0.65–0.72rem` | 600 | 0.03–0.06em |
| Code/Monospace | `0.85rem` | 400–700 | — |

### Typography Rules
- Headings use negative letter-spacing (-0.3px to -3px)
- Section labels use monospace with `text-transform: uppercase` and `letter-spacing: 0.05em`
- Body text line-height: 1.65–1.85
- Never use font sizes below 0.65rem
- Gradient text on key words (section titles, hero highlights)

---

## Spacing System

### Section Spacing
| Context | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Section padding | `7rem 2rem` | `5rem 1.5rem` | `4rem 1.25rem` |
| Compact section | `5rem 2rem` | `4rem 1.5rem` | `3.5rem 1.25rem` |
| Container max-width | `960px` | `100%` | `100%` |
| Header margin-bottom | `3–4rem` | `2.5–3rem` | `2–2.5rem` |

### Card Spacing
| Element | Value |
|---------|-------|
| Card padding | `1.25–1.75rem` |
| Card gap | `1–1.25rem` |
| Card border-radius | `12–16px` |
| Inner element gap | `0.3–0.85rem` |

### Component Spacing
| Element | Value |
|---------|-------|
| Nav height | `72px` (main) / `64px` (case study) |
| Button padding | `0.85rem 2rem` (standard) / `0.6rem 1.25rem` (small) |
| Badge padding | `0.2rem 0.6rem` |
| Icon container | `40–48px` |

---

## Components

### Navigation
- Fixed position, backdrop blur (`blur(20px)`)
- Border-bottom: `1px solid var(--border)`
- Logo: `<RS />` in monospace with accent brackets
- Links: `0.875rem`, weight 500, `var(--text-secondary)`
- Active link: `var(--accent)`
- Hover: `rgba(var(--accent-rgb), 0.08)` background
- Hamburger at 900px breakpoint
- Mobile menu slides down from top

### Buttons
```css
/* Primary */
.btn--primary {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 80%, var(--accent-2)));
  color: #fff;
  box-shadow: 0 4px 20px rgba(var(--accent-rgb), 0.3);
}
/* Hover: translateY(-2px), increased shadow */

/* Secondary */
.btn--secondary {
  background: transparent;
  border: 1.5px solid var(--border);
  color: var(--text-primary);
}
/* Hover: border-color accent, color accent, subtle bg */
```

- Border-radius: `12px`
- Font: `0.9rem`, weight 600
- Transition: `0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Ripple effect on click (white, 0.25 opacity)
- Arrow icon slides right on primary hover

### Cards (General)
- Background: `var(--bg-card)`
- Border: `1px solid var(--border)`
- Border-radius: `12–16px`
- Hover: `translateY(-3px to -6px)`, border glow, shadow
- Transition: `0.35s ease`

### Cards (Project)
- Grid layout: `1.1fr 1fr` (flagship) or single column
- Preview area with browser mockup (dots bar + wireframe blocks)
- Tags: monospace pills with border
- Category badge: monospace, uppercase, accent bg
- Links: small buttons

### Section Headers
Pattern repeated across all sections:
```html
<span class="section__label anim-fade-up">// label</span>
<h2 class="section__title anim-fade-up anim-delay-1">
  Heading <span class="text-gradient">highlight.</span>
</h2>
```

### Status Badges
- Green (`#00e676`): Comfortable, completed, base
- Purple (`var(--accent)`): Learning, active
- Gray (`var(--text-muted)`): Exploring, upcoming
- Gold (`#febc2e`): Hackathon, finalist
- Teal (`var(--accent-2)`): Coordination, event

---

## Animations

### Entrance Animations
```css
.anim-fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.anim-fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Delay Classes
| Class | Delay |
|-------|-------|
| `anim-delay-1` | 0.1s |
| `anim-delay-2` | 0.2s |
| `anim-delay-3` | 0.35s |
| `anim-delay-4` | 0.5s |
| `anim-delay-5` | 0.65s |
| `anim-delay-6` | 0.8s |
| `anim-delay-7` | 0.95s |

### Trigger
- `IntersectionObserver` with `threshold: 0.1`, `rootMargin: '0px 0px -40px 0px'`
- Fires once per element, then unobserves

### Micro-interactions
- **Buttons:** translateY(-2px) on hover, ripple on click
- **Cards:** translateY(-3px to -6px), border glow, shadow increase
- **Icons:** scale(1.08–1.1) on card hover
- **Arrows:** translateX(3–4px) on hover
- **Nav links:** background fade on hover
- **Theme toggle:** rotate(15deg) on hover
- **Step markers:** glow pulse on active

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
  .anim-fade-up { opacity: 1; transform: none; }
}
```

---

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `> 900px` | Desktop |
| `≤ 900px` | Tablet |
| `≤ 600px` | Mobile |

### Desktop (default)
- Full navigation visible
- 2–3 column grids
- Full card layouts with side-by-side elements

### Tablet (≤ 900px)
- Hamburger menu
- Grids collapse to single column
- Card grids: `repeat(auto-fill, minmax(155px, 1fr))`
- Mockup sidebars hidden

### Mobile (≤ 600px)
- Stacked layouts
- Buttons go full-width
- Card padding reduced
- Font sizes clamp down
- Footer stacks vertically

---

## Accessibility

### Semantic HTML
- `<nav>`, `<main>`, `<section>`, `<footer>` used throughout
- `<h1>`–`<h4>` hierarchy maintained
- `<a>` for links, `<button>` for actions
- `aria-label` on icon-only buttons

### Keyboard Navigation
- All interactive elements focusable
- Visible focus states (browser default outline)
- Skip links not implemented (potential improvement)

### Color Contrast
- Dark mode: `#e8e8ed` on `#0a0a0f` = **15.4:1** (AAA)
- Light mode: `#1a1a2e` on `#f5f5f7` = **14.8:1** (AAA)
- Accent on dark: `#6c5ce7` on `#0a0a0f` = **4.6:1** (AA)
- Muted text: `#5a5a6e` on `#0a0a0f` = **3.8:1** (AA for large text)

### Images & Icons
- All SVG icons are decorative (no alt text needed)
- Mockup wireframes are CSS-based (no images)
- No `<img>` tags in use

---

## File Structure

```
prtf_1/
├── index.html              # Main portfolio page (3 project cards)
├── README.md               # Folder map: cards -> detail pages
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript
├── project-duepilot.html   # Card #1 detail: DuePilot AI case study (personal/flagship)
├── project-duepilot.css    # DuePilot styles (renamed from case-study.css)
├── project-duepilot.js     # DuePilot JavaScript (renamed from case-study.js)
├── project-assetrix.html   # Card #2 detail: ASSETrix showcase (team/Odoo finalist)
├── project-globetrotter.html # Card #3 detail: GlobeTrotter showcase (team/frontend)
├── project-page.css        # Shared project page styles (cards #2 + #3)
```

---

## Design Principles

1. **Honesty over hype** — No fake percentages, no exaggerated claims
2. **Learning is the story** — Every section reflects growth, not mastery
3. **Developer authenticity** — Monospace labels, terminal widget, code references
4. **Premium simplicity** — Clean layouts, strong typography, subtle depth
5. **Consistent patterns** — Same section header structure, same card patterns, same spacing
6. **Accessible by default** — Semantic HTML, reduced motion, contrast ratios
7. **Mobile-first responsive** — Works at every breakpoint without breakpoints feeling forced

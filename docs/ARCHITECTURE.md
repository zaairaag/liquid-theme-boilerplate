# Architecture

A neutral-niche **Shopify (Liquid)** theme boilerplate. Pure Liquid, no framework,
focused on performance and modularity.

## Philosophy
- **Reusable base.** Every new store starts from this theme.
- **Modular & removable.** Each piece is self-contained — drop what you don't use.
- **Grows with use.** New, generic components are folded back in for future reuse.

## Principles

### Removable modularity
Each section/snippet is self-contained: owns its CSS and JS, with no hidden
cross-dependencies. Where a dependency exists (a section uses a snippet), it is
declared in a comment at the top of the file.

### Token-based design system
The visual identity lives in CSS variables on `:root` (`layout/theme.liquid`), fed
by `settings_schema.json`. Re-theming = swapping tokens in a single place.

### Performance by default
Loading decisions are already solved in the skeleton (see Engines).

## Stack
Liquid · CSS custom properties (scoped per section) · vanilla JavaScript ·
Shopify CLI · Theme Check · Prettier. Default locale: English (structure ready for more).

## Structure
```
├── assets/        # minimal global CSS/JS, fonts, favicons
├── config/        # settings_schema.json (tokens) + settings_data.json (mock)
├── layout/        # theme.liquid (tokens + engines)
├── locales/       # en.default.json
├── sections/      # self-contained sections (mock content)
├── snippets/      # generic globals (window.Theme namespace)
├── templates/     # JSON for every route
└── docs/          # documentation
```

## Design system
- **Colors:** `--color-brand`, `--color-brand-dark`, `--color-accent`, `--color-text`,
  `--color-bg` + surface/muted/border
- **Fluid type:** `--f0`…`--f8` with `clamp()`
- **Fonts:** `--font-heading`, `--font-body`

## Engines
- **Entrance effects** — `data-reveal` / `data-reveal="up"` on the root `<section>` +
  a single `IntersectionObserver`; respects `prefers-reduced-motion`; fails safe
  (no JS → content shows normally).
- **Anti-flash** — `scrollbar-gutter: stable` (no horizontal jump between loads),
  transitions disabled on first paint (no sliding drawers/toasts), reset inlined in `<head>`.
- **Anti-FOUC** — dynamic CSS via `{% style %}` **before** the markup; static CSS via
  `{% stylesheet %}` (goes to `<head>`).
- **Fonts** — `font-display: swap` + preload of above-the-fold weights.
- **LCP** — hero image preload slot in `<head>` for immediate discovery.

## Globals
`window.Theme`:
- `Theme.cart` — cart drawer (`open`, `close`, `refresh`, `add`)
- `Theme.favorites` — localStorage wishlist
- `Theme.alert(message, type, duration)` — global toast

## Conventions
- **Dynamic CSS** (uses `{{ section.id }}`/settings): `{% style %}` before the markup.
  **Static CSS:** `{% stylesheet %}`.
- Scope by `section.id`; BEM-like classes `.block__element--modifier`.
- Vanilla JS scoped per section; supports `shopify:section:load`; `data-*` selectors.
- Mobile-first; fluid type with `clamp()`.
- Images via `placeholder_svg_tag` / mock (no real assets).
- `| escape` for user text; use double quotes (don't escape `\'`, it breaks the upload).

## Catalog
The browsable index of all sections and components lives in `docs/CATALOG.md`.

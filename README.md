# liquid-theme-boilerplate

A neutral, performance-first **Shopify (Liquid)** theme boilerplate — an
architected, documented base to kick off any new store. Neutral niche, mock
content, ready to adapt per client.

> Built and maintained by [@zaairaag](https://github.com/zaairaag). MIT licensed — use it freely.

## Philosophy
- **Start here.** Every new store begins from this boilerplate.
- **Remove what you don't use.** Everything is modular and self-contained (delete pieces without breaking the rest).
- **Give back what you build.** New, generic components flow back here — never build the same thing twice.

## What's inside
- Token-based design system (swap colors/fonts in one place)
- Battle-tested engines: entrance effects, anti-flash (FOUC, scrollbar, transitions), LCP preload slot
- Generic sections and snippets with mock content
- Theme Check + Prettier (Liquid plugin) preconfigured
- Full documentation in [`docs/`](docs/)

## Stack
Liquid · CSS custom properties · vanilla JS · Shopify CLI · Theme Check · Prettier

## Commands
```bash
npm install
npm run dev      # local development (hot reload)
npm run lint     # Theme Check
npm run format   # Prettier (.liquid)
npm run push     # deploy
```

## Documentation
- [Architecture](docs/ARCHITECTURE.md) — vision, principles, design system, engines
- [Catalog](docs/CATALOG.md) — index of sections and components

## Adapting to a new store
1. Clone/duplicate this repo for the client project
2. Edit the tokens (colors/fonts) in `layout/theme.liquid` `:root`
3. Swap logo, content and settings (admin)
4. Remove the sections/snippets you won't use
5. Configure the store and theme IDs

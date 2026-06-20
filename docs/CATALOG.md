# Component catalog

Index of available sections and snippets. Each piece is self-contained and removable.

## Global snippets (`window.Theme`)
| Snippet | What it does | Depends on |
|---------|--------------|------------|
| `alert` | Global toast — `Theme.alert(message, type, duration)` | — |
| `cart-drawer` | Cart drawer — `Theme.cart.{open,close,refresh,add}` | `alert` (optional) |
| `favorites` | localStorage wishlist — `Theme.favorites.{toggle,has,ids,count}` | — |
| `logo` | Logo with store-name fallback | — |
| `product-card` | Reusable product card (favorite + add to cart) | `Theme.cart`, `Theme.favorites` |
| `seo-jsonld` | Structured data (Organization + WebSite) | — |

## Chrome (global)
| Section | What it does | Depends on |
|---------|--------------|------------|
| `header` | Logo, menu, search, wishlist, cart | `logo`, `Theme.cart`, `Theme.favorites` |
| `footer` | Brand, menu, contact, copyright | `logo` |

## Home
| Section | What it does | Effect | Depends on |
|---------|--------------|--------|------------|
| `hero` | Main banner (eyebrow, title, text, CTA) | fade | — |
| `trust-badges` | Trust badges strip (blocks) | fade | — |
| `collection-list` | Collection circles grid (blocks) | up | — |
| `product-grid` | Product grid from a collection | up | `product-card` |
| `services` | Value-prop cards (blocks) | up | — |
| `banners` | Promo banners with image (blocks) | up | — |
| `about` | Institutional block (text + image) | up | — |
| `faq` | Accordion FAQ (blocks) | up | — |
| `newsletter` | Email capture | fade | — |

## Effect convention
`data-reveal` (fade) on central/reading blocks · `data-reveal="up"` (fade + rise) on content blocks.

## Roadmap
- E-commerce: `product`, `collection` (with facets), `search`, `cart`, `list-collections`
- Account: login, register, account, order, addresses, password
- Scripts: CSV/spreadsheet product import scaffold

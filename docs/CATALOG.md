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

## E-commerce
| Section | Template | What it does |
|---------|----------|--------------|
| `main-product` | `product.json` | Product page: gallery, variant selector, qty, add to cart, favorite, JSON-LD |
| `main-collection` | `collection.json` | Collection grid with sort + pagination |
| `main-cart` | `cart.json` | Cart page (native cart form) |
| `main-search` | `search.json` | Search form + product results |
| `main-list-collections` | `list-collections.json` | All collections grid |
| `main-page` | `page.json` | Generic page (title + rich text) |
| `contact` | `page.contact.json` | Contact page with native form |
| `main-404` | `404.json` | Not-found page |

## Account
Shared styles in `snippets/account-styles.liquid`.
| Section | Template |
|---------|----------|
| `main-login` | `customers/login.json` |
| `main-register` | `customers/register.json` |
| `main-account` | `customers/account.json` |
| `main-order` | `customers/order.json` |
| `main-addresses` | `customers/addresses.json` |
| `main-reset-password` | `customers/reset_password.json` |
| `main-activate-account` | `customers/activate_account.json` |

## Roadmap
- Scripts: CSV/spreadsheet product import scaffold

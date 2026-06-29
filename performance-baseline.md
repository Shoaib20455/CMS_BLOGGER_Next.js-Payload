# Performance Baseline

Recorded: 2026-06-29
Build: Next.js 16.2.9, Turbopack

## Routing Strategy

### Public static pages (9)
| Route | Strategy |
|---|---|
| `/` | Static |
| `/about` | Static |
| `/blog` | Static |
| `/contact` | Static |
| `/pricing` | Static |
| `/service` | Static |
| `/service/load-booking` | Static |
| `/state` | Static |
| `/state/stateDetails` | Static |

### Dynamic routes (7)
| Route | Strategy | Reason |
|---|---|---|
| `/blog/[slug]` | Dynamic | Payload CMS query per request |
| `/admin/[[...segments]]` | Dynamic | Payload admin panel |
| `/api/[...slug]` | Dynamic | Payload REST API |
| `/api/graphql` | Dynamic | Payload GraphQL |
| `/api/graphql-playground` | Dynamic | Payload GraphQL playground |
| `/my-route` | Dynamic | Custom route handler |
| `/_not-found` | Static | Framework |

## Known Issues

- LandingPageFrame is a Client Component (ResizeObserver, DOM measurements, pixel scaling)
- SiteShell is a Client Component (usePathname)
- Navbar is a Client Component (useState for mobile menu)
- Hero renders two separate DOM trees (desktop + mobile) with duplicate eager images
- 85.4 MB of static assets in /public
- 91 KB globals.css with render-blocking Google Fonts @import
- Geist fonts loaded via next/font but unused (app uses Outfit, DM Sans, Poppins)
- All forms are presentational (no submission handlers)
- Only /blog/[slug] fetches from Payload; all other pages use hardcoded data
- Blog list page shows mock blog content, not CMS data

## Performance Budgets (Targets)

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| TBT | < 200ms |
| CLS | < 0.1 |
| Initial JS (public routes) | < 100 KB gzip |
| LCP image | < 200 KB |
| Initial page transfer | < 1 MB |

## Lighthouse Measurements

Run `npm run lighthouse` after starting the production server to generate reports in `./lighthouse-reports/`.

## Commands

```bash
# Clean build (remove .next and rebuild)
npm run clean

# Bundle analysis (generates report in .next/diagnostics/analyze)
npm run analyze

# E2E tests
npm run test:e2e

# Lighthouse tests (requires production server running)
npm run build
npm run start
npm run lighthouse
```

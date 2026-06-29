# Performance deployment requirements

- Set `NEXT_PUBLIC_MEDIA_URL` to the exact HTTPS origin used for Payload media. The Next.js image allow-list is derived from this origin.
- Put `/_next/static`, optimized image responses, and Payload media behind the deployment CDN. Keep application and PostgreSQL in the same region.
- The application sends one-day browser caching plus seven-day stale-while-revalidate for legacy public media paths. Fingerprinted `/_next/static` assets remain immutable under Next.js defaults.
- Next.js compression is enabled. Terminate HTTP/2 or HTTP/3 and Brotli at the hosting proxy/CDN.
- Multi-instance self-hosting requires a shared Cache Components handler (Redis/KV or the platform cache). Do not rely on the default in-memory runtime cache across instances.
- Use `sslmode=verify-full` in `DATABASE_URL` to retain strict PostgreSQL certificate verification with upcoming pg versions.
- Run `npm run build:clean`, `npm run analyze`, and `npm run lighthouse` for each release candidate. Set `LHCI_BLOG_SLUG` to include a stable published article in Lighthouse CI.
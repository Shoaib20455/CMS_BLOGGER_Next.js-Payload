Overview
A Next.js 16 + Payload CMS 3 marketing website for a box truck dispatch service called "Box Truck Dispatching" (branded under Resolute Logistics). It's built by BitBlazeTec. The site targets owner-operators and small fleets needing load booking, rate negotiation, and dispatch support.
Tech Stack
Layer	Technology
Framework	Next.js 16.2.9 (App Router)
CMS	Payload CMS 3.85.1
Database	PostgreSQL via Neon (serverless)
Rich Text	Payload Lexical Editor
Styling	Tailwind CSS v4 + custom utility classes
Fonts	Geist (system), Outfit, DM Sans, Poppins (Google Fonts)
Image Opt	sharp + next/image
Project Structure
box-truck/
├── .env                          # PAYLOAD_SECRET + DATABASE_URL (Neon)
├── Blog-page-details/            # Design reference (Figjam exports)
│   ├── Blog Detail.png
│   ├── code.txt                  # Pixel-perfect div layout from design
│   └── text-styles.txt           # Extracted text style tokens
├── CMS Guidelines(detailed).pdf  # CMS usage guide
├── Blog Page & CMS Guidelines.pdf
├── media/                        # Uploaded media assets
└── src/
    ├── payload.config.ts         # Payload CMS configuration
    ├── payload-types.ts          # Auto-generated TS types
    ├── collections/
    │   ├── Users.ts              # Auth collection (email/password)
    │   ├── Media.ts              # Upload collection (images)
    │   ├── Categories.ts         # Blog categories (name, slug)
    │   └── Posts.ts              # Blog posts (the richest collection)
    ├── lib/
    │   └── extract-headings.ts   # Walks Lexical JSON → h2/h3 headings + reading time
    └── app/
        ├── (app)/                # Public facing site
        │   ├── layout.tsx        # Root layout (fonts, metadata, SEO)
        │   ├── page.tsx          # Home/landing page (assembles all sections)
        │   ├── globals.css       # ALL styles (1257 lines of Tailwind @apply)
        │   ├── sitemap.ts        # Dynamic sitemap
        │   ├── robots.ts         # Robots.txt config
        │   ├── blog/[slug]/     # Blog detail page
        │   │   ├── page.tsx      # SSG blog post with metadata, TOC, JSON-LD
        │   │   └── components/
        │   │       ├── BlogContent.tsx     # Lexical JSON → React renderer
        │   │       ├── SchemaJsonLd.tsx    # Organization + Article + FAQ schema
        │   │       ├── TableOfContents.tsx # Sticky TOC with IntersectionObserver
        │   │       ├── RelatedPosts.tsx    # Server component, same-category posts
        │   │       ├── FaqBlock.tsx        # Post-specific FAQs renderer
        │   │       └── CtaBlock.tsx        # "Grow Your Business Faster" CTA
        │   └── components/       # Landing page sections (15 components)
        │       ├── Navbar.tsx              # Desktop/mobile nav with hamburger
        │       ├── Hero.tsx                # Hero with truck image, orange strips
        │       ├── StatePickerCard.tsx     # State/city/type dropdown picker
        │       ├── IntroSections.tsx       # 3 dark intro sections with images
        │       ├── ServicesProcessSection.tsx  # Accordion: how dispatch works
        │       ├── WhyChooseUsSection.tsx  # 6-card grid of value props
        │       ├── PricingSection.tsx      # Pricing card with feature lists
        │       ├── ReadyTruckSection.tsx   # "Your Truck Is Ready" CTA banner
        │       ├── BlogSection.tsx         # Featured + small blog cards
        │       ├── TestimonialsSection.tsx # Carousel + grid of testimonials
        │       ├── FaqSection.tsx          # Two-column FAQ accordion
        │       ├── CtaSection.tsx          # Bottom CTA
        │       ├── Footer.tsx              # Multi-column footer
        │       └── LandingPageFrame.tsx    # Context wrapper with pixel-perfect scaling
        ├── (payload)/             # Payload CMS admin
        │   ├── layout.tsx         # Auto-generated Payload admin layout
        │   ├── admin/[[...segments]]/  # Admin panel pages
        │   ├── api/[...slug]/     # REST API routes
        │   ├── api/graphql/       # GraphQL endpoint
        │   └── api/graphql-playground/ # GraphQL playground
        └── my-route/route.ts      # Example custom route
Collections (Payload CMS)
Posts (src/collections/Posts.ts)
The core content model with:
- title (H1), slug (auto-generated from title)
- author (→ Users), category (→ Categories)
- featureImage (→ Media upload)
- content (Lexical rich text - the article body)
- faqs (array: question + rich text answer)
- metaTitle, metaDescription, focusKeyphrase (SEO fields)
- publishedDate, status (draft/published)
Categories (src/collections/Categories.ts)
Simple name + auto-slug taxonomy.
Media (src/collections/Media.ts)
Upload collection with required alt text.
Users (src/collections/Users.ts)
Auth-enabled, email as title.
Key Architectural Decisions
1. Dual Rendering Strategy
Each landing page section has two visual variants - a pixel-perfect absolute-positioned desktop version (lg:block hidden) and a responsive mobile/tablet version (lg:hidden). The desktop version uses exact pixel coordinates matching a 1920px Figma design.
2. Pixel-Perfect Canvas Scaling (LandingPageFrame.tsx)
The desktop layout wraps all sections in a 1920px-wide "canvas" that's scaled down with CSS transform: scale() based on viewport width. The page height is computed as max(canvasScale * baseHeight, naturalHeight) to ensure the scrollbar works correctly.
3. Atomic CSS Utility Classes
Rather than writing inline Tailwind on each component, all styles live in globals.css as @apply classes with bb-* prefixes (e.g., bb-hero-001 through .bb-dynamic-065). This likely came from a Figma-to-code export pipeline.
4. Custom Lexical Renderer
BlogContent.tsx manually traverses Lexical's JSON tree to render headings (with IDs for TOC linking), paragraphs, text formatting (bold/italic/underline/strikethrough), lists, blockquotes, and links.
5. JSON-LD Structured Data
SchemaJsonLd.tsx injects Organization, Article, and FAQPage schemas on each blog post.
6. SEO Optimization
- Per-post metaTitle/metaDescription
- generateStaticParams for SSG blog posts
- generateMetadata for dynamic <head>
- Sitemap + robots.txt
- Canonical URLs, OG tags, Twitter cards
- Table of Contents with IntersectionObserver-based active highlighting
Data Flow
Figma Design → code.txt/text-styles.txt → globals.css (bb-* classes)
                                              ↓
LandingPageFrame (scale context) → Navbar, Hero, ...Footer (use bb-* classes)
                                              ↓
Payload CMS Admin → Postgres DB (Neon)
                      ↓
Blog Post Pages: getPayload() → Lexical JSON → BlogContent renderer
                      ↓
RelatedPosts: getPayload() where category/slug
Current State Notes
- The BlogSection has hardcoded demo blog data (not yet pulling from Payload)
- The FAQ data in LandingPageFrame.tsx is hardcoded for the landing page FAQ section
- Post-specific FAQs come from the CMS via the faqs array field
- The PDF files listed cannot be previewed (unsupported format), but appear to be CMS/design guidelines
- The CMS is connected to a Neon PostgreSQL database (credentials in .env)
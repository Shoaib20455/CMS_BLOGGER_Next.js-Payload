const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteName = "Box Truck Dispatching";

export default function SchemaJsonLd({
  post,
}: {
  post: {
    title: string;
    slug: string;
    metaDescription?: string | null;
    featureImage?: { url?: string } | null;
    publishedDate?: string | null;
    updatedAt: string;
    author?: { email?: string } | string | null;
    faqs?: Array<{ question: string; answer: unknown }> | null;
  };
}) {
  const schemas = [];

  // Organization Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
  });

  // Article Schema
  const authorName =
    typeof post.author === "object" && post.author
      ? (post.author as { email?: string }).email ?? "Author"
      : "Author";

  schemas.push({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || undefined,
    image: post.featureImage
      ? `${siteUrl}${typeof post.featureImage === "object" ? (post.featureImage as { url?: string }).url ?? "" : ""}`
      : undefined,
    datePublished: post.publishedDate || undefined,
    dateModified: post.updatedAt || undefined,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
  });

  // FAQ Schema
  const faqs = post.faqs as
    | Array<{ question: string; answer: Record<string, unknown> }>
    | undefined;
  if (faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: extractPlainText(faq.answer),
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

function extractPlainText(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const raw = node as Record<string, unknown>;
  const n = (raw.root as Record<string, unknown> | undefined)?.type === "root"
    ? (raw.root as Record<string, unknown>)
    : raw;
  if (n.type === "text") return String(n.text ?? "");
  if (Array.isArray(n.children)) {
    return n.children.map(extractPlainText).join(" ");
  }
  return "";
}

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReadyTruckSection from "../../components/ReadyTruckSection";
import BlogSection from "../../components/BlogSection";
import configPromise from "@payload-config";
import { getPayload } from "payload";

function extractSectionText(node: Record<string, unknown>): string {
  if (!node.children) return "";
  return (node.children as Array<Record<string, unknown>>)
    .map((child) => String(child.text ?? ""))
    .join("");
}

function parseContentToSections(content: unknown): Array<{ heading: string; body: string[] }> {
  const root = (content as Record<string, unknown>)?.root as Record<string, unknown> | undefined;
  const children = root?.children as Array<Record<string, unknown>> | undefined;
  if (!children) return [];

  const sections: Array<{ heading: string; body: string[] }> = [];
  let currentHeading = "";
  let currentBody: string[] = [];

  for (const child of children) {
    if (child.type === "heading" && (child.tag === "h2" || child.tag === "h3")) {
      if (currentBody.length > 0 || sections.length > 0) {
        sections.push({ heading: currentHeading, body: currentBody });
      }
      currentHeading = extractSectionText(child);
      currentBody = [];
    } else if (child.type === "paragraph") {
      const text = extractSectionText(child);
      if (text) currentBody.push(text);
    }
  }

  if (currentBody.length > 0 || currentHeading) {
    sections.push({ heading: currentHeading, body: currentBody });
  }

  return sections;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });

  const post = result.docs[0];
  if (!post) notFound();

  const author = post.author && typeof post.author === "object" ? (post.author as unknown as Record<string, unknown>) : null;
  const category = post.category && typeof post.category === "object" ? (post.category as unknown as Record<string, unknown>) : null;
  const featureImage = post.featureImage && typeof post.featureImage === "object" ? (post.featureImage as unknown as Record<string, unknown>) : null;

  const authorName = (author?.name as string) || (author?.email as string) || "";
  const categoryName = (category?.name as string) || "";
  const categorySlug = (category?.slug as string) || "";
  const featureImageUrl = (featureImage?.url as string) || "";
  const featureImageAlt = (featureImage?.alt as string) || "";
  const title = post.title;
  const articleSections = parseContentToSections(post.content);
  return (
    <div className="bg-[#F8FAFC] pb-1 text-[#012F42]">
      <section className="mx-auto mt-[70px] w-[calc(100%_-_40px)] max-w-[1082px]">
        <p className="font-['DM_Sans'] mb-3 text-[14px] font-bold uppercase tracking-[0.12em] text-[#FE8F02]">
          {categoryName || "Category (from Payload)"}
        </p>

        <h1 className="font-['Outfit'] max-w-[900px] text-[48px] font-bold capitalize leading-[58px] text-[#012F42] max-lg:text-[40px] max-lg:leading-[50px] max-sm:text-[34px] max-sm:leading-[42px]">
          {title}
        </h1>
      </section>

      <section className="mx-auto mt-8 flex w-[calc(100%_-_40px)] max-w-[1082px] items-center justify-between gap-8 border-y border-[#D9DEE5] py-5 max-sm:flex-col max-sm:items-start">
        <div className="flex items-center gap-5">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#012F42] text-[28px] font-bold text-white">
            {authorName ? authorName.charAt(0).toUpperCase() : "?"}
          </div>

          <div>
            <h3 className="font-['Outfit'] mb-2 text-[22px] font-semibold leading-[22px] text-[#012F42]">
              {authorName || "Author (from Payload)"}
            </h3>

            <p className="font-['DM_Sans'] text-[16px] font-normal leading-[25px] text-[#575D67]">
              Author
            </p>
          </div>
        </div>

        <Link
          href={categorySlug ? `/blog/category/${categorySlug}` : "#"}
          className="font-['Outfit'] inline-flex min-h-[44px] items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 py-2.5 text-[16px] font-medium text-white no-underline transition-colors duration-300 hover:bg-[#E07D02] max-sm:w-full"
        >
          {categoryName || "Category (from Payload)"}
        </Link>
      </section>

      <section className="mx-auto mt-[30px] h-[470px] w-[calc(100%_-_40px)] max-w-[1082px] overflow-hidden rounded-[10px] bg-[#E2E8F0] max-lg:h-[360px] max-sm:h-[260px]">
        {featureImageUrl ? (
          <Image
            src={featureImageUrl}
            alt={featureImageAlt || ""}
            width={1200}
            height={600}
            className="h-full w-full object-contain"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-['DM_Sans'] text-[18px] text-[#575D67]">
            Featured Image (from Payload)
          </div>
        )}
      </section>

      <section className="mx-auto mt-10 w-[calc(100%_-_40px)] max-w-[1082px]">
        <div className="font-['Outfit'] flex h-[50px] w-full items-center justify-center rounded-[5px] bg-[#FE8F02] text-[18px] font-medium text-white">
          Table of Contents
        </div>
        <article className="font-['DM_Sans'] mt-[30px] text-[18px] font-normal leading-[30px] text-[#575D67]">
          {articleSections.map((section, index) => (
            <div key={`${section.heading}-${index}`}>
              {section.heading && (
                <h2 className="font-['DM_Sans'] mt-[18px] text-[22px] font-semibold leading-[30px] text-[#012F42]">
                  {section.heading}
                </h2>
              )}

              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>

      <ReadyTruckSection variant="flow" />

      <BlogSection variant="flow" title="Box Truck Dispatching Related Blog" />
    </div>
  );
}

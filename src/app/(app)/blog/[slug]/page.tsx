import configPromise from "@payload-config";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { calculateReadingTime, extractHeadings, type Heading } from "../../../../lib/extract-headings";
import BlogSection from "../../components/BlogSection";
import CtaSection from "../../components/CtaSection";
import FaqSection from "../../components/FaqSection";
import Footer from "../../components/Footer";
import LandingPageFrame from "../../components/LandingPageFrame";
import Navbar from "../../components/Navbar";
import BlogContent from "./components/BlogContent";
import SchemaJsonLd from "./components/SchemaJsonLd";
import TableOfContents from "./components/TableOfContents";

type Props = {
  params: Promise<{ slug: string }>;
};

/* Local type matching the Posts collection (until Payload types are generated) */
type PostData = {
  id: string;
  title: string;
  slug: string;
  content: unknown;
  author: { email?: string; id: string } | string | null;
  category: { id: string; name?: string; slug?: string } | string | null;
  featureImage: { url?: string; alt?: string; width?: number; height?: number } | null;
  faqs: Array<{ question: string; answer: Record<string, unknown> }> | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  publishedDate?: string | null;
  updatedAt: string;
};

async function getPostBySlug(slug: string): Promise<PostData | null> {
  const payload = await getPayload({ config: configPromise });
  const posts = (await (
    payload as unknown as {
      find: (args: { collection: string; where?: Record<string, unknown>; limit?: number; depth?: number; draft?: boolean }) => Promise<{ docs: unknown[] }>;
    }
  ).find({
    collection: "posts",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    draft: false,
  })) as unknown as { docs: PostData[] };
  return posts.docs[0] ?? null;
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const posts = (await (
    payload as unknown as {
      find: (args: { collection: string; limit?: number; draft?: boolean }) => Promise<{ docs: unknown[] }>;
    }
  ).find({ collection: "posts", limit: 0, draft: false })) as unknown as { docs: PostData[] };
  return posts.docs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const headings: Heading[] = extractHeadings(post.content);
  const readingTime = calculateReadingTime(post.content);

  const author = post.author as { email?: string; id: string } | null;
  const category = post.category as { id: string; name?: string; slug?: string } | null;
  const featureImage = post.featureImage;
  const authorName = author?.email?.split("@")[0] ?? "Author";
  const heroImage = "/Images/Truck_Original_Sourced.png";
  const articleImage = featureImage?.url ?? "/Images/Rectangle 1120.png";
  const articleImageAlt = featureImage?.alt || post.title;

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#171717]">
      <SchemaJsonLd post={post} />
      <SharedComponentStyles />

      <div className="blog-shared-nav">
        <Navbar currentActive="Blog" />
      </div>

      <section className="px-5 pt-10 sm:px-8 lg:px-0 lg:pt-20">
        <div className="relative mx-auto flex min-h-[360px] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42] px-6 py-14 shadow-[0_12px_30px_rgba(1,47,66,0.08)] sm:px-10 lg:min-h-[500px] lg:px-[100px] lg:py-[156px]">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover opacity-55"
            sizes="(max-width: 1024px) 100vw, 1520px"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(1,47,66,0.92)] to-[rgba(3,48,67,0.30)]" />
          <div className="relative z-10 max-w-[770px]">
            <h1 className="font-['Outfit'] text-[40px] font-bold capitalize leading-[48px] text-white sm:text-[52px] sm:leading-[62px] lg:text-[60px] lg:leading-[70px]">
              Box Truck Dispatching Blog
            </h1>
            <p className="mt-5 font-['DM_Sans'] text-[18px] leading-[28px] text-white sm:text-[20px] lg:text-[22px] lg:leading-[32px]">
              Insights, strategies, and real dispatch knowledge to help owner-operators and trucking businesses increase revenue, reduce deadhead, and run smarter operations across the US.
            </p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-[1200px] px-5 pb-20 pt-14 sm:px-8 lg:px-0 lg:pt-20">
        <div className="mb-[30px] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/Images/James Carter.png"
              alt=""
              width={70}
              height={70}
              className="h-[70px] w-[70px] rounded-full object-cover"
            />
            <div>
              <p className="font-['Outfit'] text-[22px] font-semibold leading-[22px] text-[#012F42]">
                {authorName}
              </p>
              <p className="mt-2 font-['DM_Sans'] text-[16px] leading-[25px] text-[#575D67]">
                Professional
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            {post.publishedDate && (
              <span className="font-['DM_Sans'] text-[15px] text-[#575D67]">
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            )}
            <span className="font-['DM_Sans'] text-[15px] text-[#575D67]">
              {readingTime} min read
            </span>
            <span className="inline-flex h-[50px] min-w-[181px] items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-['Outfit'] text-[18px] font-medium text-white shadow-[0_8px_18px_rgba(254,143,2,0.18)]">
              {category?.name ?? "Category"}
            </span>
          </div>
        </div>

        <div className="relative mb-[30px] aspect-[2/1] overflow-hidden rounded-[15px] bg-[#012F42] shadow-[0_10px_28px_rgba(1,47,66,0.08)]">
          <Image
            src={articleImage}
            alt={articleImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
            preload
          />
        </div>

        <TableOfContents headings={headings} />
        <BlogContent data={post.content} />
      </article>

      <div className="blog-shared-section">
        <LandingPageFrame>
          <FaqSection />
          <CtaSection />
        </LandingPageFrame>
      </div>

      <div className="blog-shared-section blog-shared-blog">
        <BlogSection />
      </div>

      <div className="blog-shared-section">
        <LandingPageFrame>
          <Footer />
        </LandingPageFrame>
      </div>
    </main>
  );
}

function SharedComponentStyles() {
  return (
    <style>{`
      .blog-shared-nav {
        position: relative;
        height: 5rem;
        overflow: hidden;
        background: #fff;
        border-bottom: 1px solid #878B92;
      }

      .blog-shared-section .bb-landing-page-001 {
        display: block !important;
        height: auto !important;
        min-height: 0 !important;
        overflow: visible !important;
        background: #F8FAFC !important;
      }

      .blog-shared-section .bb-landing-page-002 {
        position: relative !important;
        left: auto !important;
        top: auto !important;
        width: 100% !important;
        height: auto !important;
        transform: none !important;
        overflow: visible !important;
        background: #F8FAFC !important;
      }

      .blog-shared-section .bb-blog-001 {
        display: none !important;
      }

      .blog-shared-section [data-responsive-section] {
        display: block !important;
      }

      .blog-shared-section .bb-blog-021,
      .blog-shared-section .bb-footer-022,
      .blog-shared-section .bb-footer-033 {
        max-width: 95rem !important;
      }
    `}</style>
  );
}

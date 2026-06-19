import configPromise from "@payload-config";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";

type RelatedPost = {
  id: string;
  title: string;
  slug: string;
  featureImage: { url?: string; alt?: string } | null;
  metaDescription?: string | null;
  publishedDate?: string | null;
};

const fallbackPosts: RelatedPost[] = [
  {
    id: "fallback-1",
    title: "Why Box Truck Owners Lose Profitable Loads",
    slug: "#",
    featureImage: { url: "/Images/Rectangle 1131.png", alt: "Box truck freight loading" },
    metaDescription:
      "Stop waiting 30-90 days for broker payments. Learn how freight factoring works, what to watch for, and when it makes sense for your trucking business.",
    publishedDate: "2026-06-12",
  },
  {
    id: "fallback-2",
    title: "How Dispatch Services Save Time for Owner-Operators",
    slug: "#",
    featureImage: { url: "/Images/Rectangle 1132.png", alt: "Dispatcher planning routes" },
    publishedDate: "2026-06-10",
  },
  {
    id: "fallback-3",
    title: "Top Mistakes New Box Truck Businesses Make",
    slug: "#",
    featureImage: { url: "/Images/Rectangle 1133.png", alt: "Box truck on the road" },
    publishedDate: "2026-06-08",
  },
  {
    id: "fallback-4",
    title: "How to Reduce Empty Miles and Increase Revenue",
    slug: "#",
    featureImage: { url: "/Images/Rectangle 1134.png", alt: "Truck driving on highway" },
    publishedDate: "2026-06-03",
  },
];

export default async function RelatedPosts({
  currentSlug,
  categoryId,
}: {
  currentSlug: string;
  categoryId?: string | null;
}) {
  const payload = await getPayload({ config: configPromise });

  const where: Record<string, unknown> = {
    slug: { not_equals: currentSlug },
    status: { equals: "published" },
  };
  if (categoryId) {
    where.category = { equals: categoryId };
  }

  const posts = (await (
    payload as unknown as {
      find: (args: { collection: string; where?: Record<string, unknown>; limit?: number; sort?: string }) => Promise<{ docs: unknown[] }>;
    }
  ).find({
    collection: "posts",
    where,
    limit: 4,
    sort: "-publishedDate",
  })) as unknown as { docs: RelatedPost[] };

  const displayPosts = [...posts.docs, ...fallbackPosts].slice(0, 4);
  const [featured, ...sidePosts] = displayPosts;

  if (!featured) return null;

  return (
    <section>
      <div className="mb-[55px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-['Outfit'] text-[36px] font-bold leading-[44px] text-[#012F42] sm:text-[48px] sm:leading-[58px]">
          Box Truck Dispatching Related Blog
        </h2>
        <Link
          href="/#blog"
          className="inline-flex h-[50px] w-[152px] items-center justify-center rounded-[5px] bg-[#FE8F02] font-['Outfit'] text-[18px] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#E07D02] active:scale-95"
        >
          View All Blogs
        </Link>
      </div>

      <div className="grid gap-[30px] lg:grid-cols-[742px_1fr]">
        <RelatedFeatured post={featured} />
        <div className="grid gap-[30px]">
          {sidePosts.map((post) => (
            <RelatedSmall key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedFeatured({ post }: { post: RelatedPost }) {
  const img = post.featureImage;

  return (
    <Link href={post.slug === "#" ? "/#blog" : `/blog/${post.slug}`} className="group block min-h-[600px] overflow-hidden rounded-[10px] border border-[#878B92] bg-white transition-all duration-300 hover:border-[#FE8F02] hover:shadow-[0_12px_28px_rgba(1,47,66,0.07)]">
      {img?.url && (
        <div className="relative h-[250px] overflow-hidden sm:h-[317px]">
          <Image
            src={img.url}
            alt={img.alt || post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 742px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-[30px]">
        <DateLine date={post.publishedDate} />
        <h3 className="mt-6 font-['Outfit'] text-[22px] font-semibold leading-[33px] text-[#012F42] transition-colors group-hover:text-[#FE8F02]">
          {post.title}
        </h3>
        {post.metaDescription && (
          <p className="mt-5 max-w-[636px] font-['DM_Sans'] text-[18px] leading-[28px] text-[#595E68]">
            {post.metaDescription}
          </p>
        )}
        <span className="mt-8 inline-block border-b border-[#FE8F02] pb-1 font-['Outfit'] text-[18px] font-medium capitalize text-[#FE8F02]">
          Read More
        </span>
      </div>
    </Link>
  );
}

function RelatedSmall({ post }: { post: RelatedPost }) {
  const img = post.featureImage;

  return (
    <Link href={post.slug === "#" ? "/#blog" : `/blog/${post.slug}`} className="group grid min-h-[180px] overflow-hidden rounded-[10px] border border-[#878B92] bg-white p-[15px] transition-all duration-300 hover:border-[#FE8F02] hover:shadow-[0_12px_28px_rgba(1,47,66,0.07)] sm:grid-cols-[220px_1fr] sm:gap-[15px]">
      {img?.url && (
        <div className="relative h-[180px] overflow-hidden rounded-[10px] sm:h-[150px]">
          <Image
            src={img.url}
            alt={img.alt || post.title}
            fill
            sizes="(max-width: 640px) 100vw, 220px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="pt-4 sm:pt-0">
        <DateLine date={post.publishedDate} />
        <h3 className="mt-3 max-w-[448px] font-['Outfit'] text-[22px] font-semibold leading-[33px] text-[#012F42] transition-colors group-hover:text-[#FE8F02]">
          {post.title}
        </h3>
        <span className="mt-5 inline-block border-b border-[#FE8F02] pb-1 font-['Outfit'] text-[18px] font-medium capitalize text-[#FE8F02]">
          Read More
        </span>
      </div>
    </Link>
  );
}

function DateLine({ date }: { date?: string | null }) {
  if (!date) return null;

  return (
    <div className="flex items-center gap-[5px]">
      <Image src="/Images/Rectangle 1130.png" alt="" width={10} height={10} className="h-[10px] w-[10px]" />
      <span className="font-['DM_Sans'] text-[14px] text-[#595E68]">
        {new Date(date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </span>
    </div>
  );
}

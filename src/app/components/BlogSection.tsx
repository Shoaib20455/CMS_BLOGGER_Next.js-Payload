

import Image from "next/image";
import Link from "next/link";

const smallPostTopClasses: Record<number, string> = {
  6676: "top-[417.25rem]",
  6886: "top-[430.375rem]",
  7096: "top-[443.5rem]"
};

const featuredPost = {
  title: "Why Box Truck Owners Lose Profitable Loads",
  date: "12 June 2026",
  img: "/Images/Rectangle 1131.png",
  desc: "Stop waiting 30-90 days for broker payments. Learn how freight factoring works, what to watch for, and when it makes sense for your trucking business."
};

const smallPosts = [
  { title: "How Dispatch Services Save Time for Owner-Operators", date: "10 June 2026", img: "/Images/Rectangle 1132.png", top: 6676 },
  { title: "Top Mistakes New Box Truck Businesses Make", date: "08 June 2026", img: "/Images/Rectangle 1133.png", top: 6886 },
  { title: "How to Reduce Empty Miles and Increase Revenue", date: "03 June 2026", img: "/Images/Rectangle 1134.png", top: 7096 }
];

export default function BlogSection() {
  return (
    <>
    <div className="hidden lg:block">

      {/* Section: Box Truck Dispatching Blog */}

      <div className="left-[12.5rem] top-[409.75rem] absolute text-[#012F42] text-[3rem] font-['Outfit'] font-bold" >

        Box Truck Dispatching Blog

      </div>

      

      <button 

        className="hover:bg-[#E07D02] hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95 border-none w-[9.5rem] h-[3.125rem] pl-[1.25rem] pr-[1.25rem] pt-[0.625rem] pb-[0.625rem] left-[98rem] top-[410.0625rem] absolute bg-[#FE8F02] rounded-[0.3125rem] text-white text-[1.125rem] font-['Outfit'] font-medium"

        

      >

        View All Blogs

      </button>

      

      {/* Main Featured Blog Post */}

      <div className="w-[46.375rem] h-[37.5rem] left-[12.5rem] top-[417.25rem] absolute bg-white rounded-[0.625rem] border-[0.0625rem] border-solid border-[#878B92] overflow-hidden shadow-[0_0.25rem_0.625rem_rgba(0,0,0,0.01)]"  />

      <Image className="w-[46.375rem] h-[19.8125rem] left-[12.5rem] top-[417.25rem] absolute rounded-tl-[0.625rem] rounded-tr-[0.625rem] object-cover" src="/Images/Rectangle 1131.png" alt="Featured Blog Image" width={742} height={317} />
      

      <div className="left-[15.3125rem] top-[440.1875rem] absolute flex gap-[0.5rem] items-center" >

        <Image className="w-[0.875rem] h-[0.875rem] mt-[0.1875rem]" src="/Images/Rectangle 1130.png" alt="Date Bullet" width={14} height={14} />
        <span className="text-[#595E68] text-[0.875rem] font-['DM_Sans'] font-normal" >12 June 2026</span>

      </div>

      

      <div className="left-[14.375rem] top-[442.5625rem] w-[42.5rem] absolute text-[#012F42] text-[1.375rem] font-['Outfit'] font-semibold leading-[2.0625rem]" >

        Why Box Truck Owners Lose Profitable Loads

      </div>

      <div className="w-[39.75rem] left-[14.375rem] top-[445.875rem] absolute text-[#595E68] text-[1.125rem] font-['DM_Sans'] font-normal leading-[1.625rem]" >

        Stop waiting 30-90 days for broker payments. Learn how freight factoring works, what to watch for, and when it makes sense for your trucking business.

      </div>

      <Link 
        href="#blog" 

        className="hover:text-[#E07D02] hover:underline left-[14.375rem] top-[451.4375rem] absolute text-[#FE8F02] text-[1.125rem] font-['Outfit'] font-medium capitalize no-underline"

        

      >

        Read More

      </Link>
      <div className="w-[5.4375rem] h-[0.0625rem] left-[14.375rem] top-[453rem] absolute bg-[#FE8F02]"  />

      

      {/* Small Blog Posts Right Column */}

      {smallPosts.map((post, idx) => (

        <div
          key={idx}
          className={`absolute left-[60.75rem] h-[11.25rem] w-[46.75rem] overflow-hidden rounded-[0.625rem] border border-solid border-[#878B92] bg-white ${smallPostTopClasses[post.top]}`}
        >
          <Image className="w-[13.75rem] h-[9.375rem] left-[0.9375rem] top-[0.9375rem] absolute rounded-[0.625rem] object-cover" src={post.img} alt={post.title} width={220} height={150} />
          

          <div className="left-[15.9375rem] top-[1.3125rem] absolute flex gap-[0.5rem] items-center" >

            <Image className="w-[0.625rem] h-[0.625rem] mt-[0.3125rem]" src="/Images/Rectangle 1130.png" alt="Date Bullet" width={10} height={10} />
            <span className="text-[#595E68] text-[0.875rem] font-['DM_Sans'] font-normal" >{post.date}</span>

          </div>

          

          <div className="w-[28rem] left-[15.9375rem] top-[3.375rem] absolute text-[#012F42] text-[1.375rem] font-['Outfit'] font-semibold leading-[1.875rem]" >

            {post.title}

          </div>

          

          <Link 
            href="#blog" 

            className="hover:text-[#E07D02] hover:underline left-[15.9375rem] top-[8.4375rem] absolute text-[#FE8F02] text-[1.125rem] font-['Outfit'] font-medium capitalize no-underline"

            

          >

            Read More

          </Link>
          <div className="w-[5.4375rem] h-[0.0625rem] left-[15.9375rem] top-[10rem] absolute bg-[#FE8F02]"  />

        </div>

      ))}

    </div>

      <section
        data-responsive-section="blog"
        className="relative z-[26] w-full overflow-hidden bg-[#F8FAFC] px-5 py-10 sm:px-8 sm:py-12 lg:hidden"
      >
        <div className="mx-auto max-w-[58rem]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-['Outfit'] text-[2rem] font-bold leading-[2.45rem] text-[#012F42] sm:text-[2.25rem] sm:leading-[2.75rem]">
              Box Truck Dispatching Blog
            </h2>
            <button className="flex h-[3rem] w-full cursor-pointer items-center justify-center rounded-[0.3125rem] border-none bg-[#FE8F02] px-5 font-['Outfit'] text-[1rem] font-medium text-white transition-all duration-300 hover:bg-[#E07D02] active:scale-95 sm:w-[9.5rem]">
              View All Blogs
            </button>
          </div>

          <div className="mt-7 grid gap-4 min-[860px]:grid-cols-[1.05fr_0.95fr]">
            <article className="overflow-hidden rounded-[0.625rem] border border-solid border-[#878B92] bg-white shadow-[0_0.25rem_0.625rem_rgba(0,0,0,0.01)]">
              <Image
                className="aspect-[16/10] h-auto w-full object-cover"
                src={featuredPost.img}
                alt="Featured Blog Image"
                width={742}
                height={317}
              />
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <Image className="h-[0.75rem] w-[0.75rem]" src="/Images/Rectangle 1130.png" alt="Date Bullet" width={14} height={14} />
                  <span className="font-['DM_Sans'] text-[0.875rem] text-[#595E68]">{featuredPost.date}</span>
                </div>
                <h3 className="mt-3 font-['Outfit'] text-[1.25rem] font-semibold leading-[1.65rem] text-[#012F42] sm:text-[1.375rem] sm:leading-[1.875rem]">
                  {featuredPost.title}
                </h3>
                <p className="mt-3 font-['DM_Sans'] text-[0.95rem] leading-[1.55rem] text-[#595E68] sm:text-[1rem]">
                  {featuredPost.desc}
                </p>
                <Link href="#blog" className="mt-4 inline-block font-['Outfit'] text-[1rem] font-medium capitalize text-[#FE8F02] no-underline hover:text-[#E07D02] hover:underline">
                  Read More
                </Link>
              </div>
            </article>

            <div className="grid gap-4">
              {smallPosts.map((post) => (
                <article
                  key={post.title}
                  className="grid overflow-hidden rounded-[0.625rem] border border-solid border-[#878B92] bg-white min-[500px]:grid-cols-[9.5rem_1fr] min-[860px]:grid-cols-[10rem_1fr]"
                >
                  <Image
                    className="aspect-[16/10] h-full w-full object-cover"
                    src={post.img}
                    alt={post.title}
                    width={220}
                    height={150}
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Image className="h-[0.625rem] w-[0.625rem]" src="/Images/Rectangle 1130.png" alt="Date Bullet" width={10} height={10} />
                      <span className="font-['DM_Sans'] text-[0.8125rem] text-[#595E68]">{post.date}</span>
                    </div>
                    <h3 className="mt-2 font-['Outfit'] text-[1rem] font-semibold leading-[1.35rem] text-[#012F42] sm:text-[1.125rem] sm:leading-[1.5rem]">
                      {post.title}
                    </h3>
                    <Link href="#blog" className="mt-3 inline-block font-['Outfit'] text-[0.95rem] font-medium capitalize text-[#FE8F02] no-underline hover:text-[#E07D02] hover:underline">
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>

  );

}

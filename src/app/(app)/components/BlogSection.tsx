

import Image from "next/image";
import Link from "next/link";

const smallPostTopClasses: Record<number, string> = {
  6676: "bb-dynamic-001",
  6886: "bb-dynamic-002",
  7096: "bb-dynamic-003"
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
{ title: "How to Reduce Empty Miles and Increase Revenue", date: "03 June 2026", img: "/Images/Rectangle 1134.png", top: 7096 }];


export default function BlogSection() {
  return (
    <>
    <div className="bb-blog-001">

      {/* Section: Box Truck Dispatching Blog */}

      <div className="bb-blog-002">

        Box Truck Dispatching Blog

      </div>

      

      <button

          className="bb-blog-003">



          

        View All Blogs

      </button>

      

      {/* Main Featured Blog Post */}

      <div className="bb-blog-004" />

      <Image className="bb-blog-005" src="/Images/Rectangle 1131.png" alt="Featured Blog Image" width={742} height={317} />
      

      <div className="bb-blog-006">

        <Image className="bb-blog-007" src="/Images/Rectangle 1130.png" alt="Date Bullet" width={14} height={14} />
        <span className="bb-blog-008">12 June 2026</span>

      </div>

      

      <div className="bb-blog-009">

        Why Box Truck Owners Lose Profitable Loads

      </div>

      <div className="bb-blog-010">

        Stop waiting 30-90 days for broker payments. Learn how freight factoring works, what to watch for, and when it makes sense for your trucking business.

      </div>

      <Link
          href="#blog"

          className="bb-blog-011">



          

        Read More

      </Link>
      <div className="bb-blog-012" />

      

      {/* Small Blog Posts Right Column */}

      {smallPosts.map((post, idx) =>

        <div
          key={idx}
          className={`bb-blog-013 ${smallPostTopClasses[post.top]}`}>
          
          <Image className="bb-blog-014" src={post.img} alt={post.title} width={220} height={150} />
          

          <div className="bb-blog-015">

            <Image className="bb-blog-016" src="/Images/Rectangle 1130.png" alt="Date Bullet" width={10} height={10} />
            <span className="bb-blog-008">{post.date}</span>

          </div>

          

          <div className="bb-blog-017">

            {post.title}

          </div>

          

          <Link
            href="#blog"

            className="bb-blog-018">



            

            Read More

          </Link>
          <div className="bb-blog-019" />

        </div>

        )}

    </div>

      <section
        data-responsive-section="blog"
        className="bb-blog-020">
        
        <div className="bb-blog-021">
          <div className="bb-blog-022">
            <h2 className="bb-blog-023">
              Box Truck Dispatching Blog
            </h2>
            <button className="bb-blog-024">
              View All Blogs
            </button>
          </div>

          <div className="bb-blog-025">
            <article className="bb-blog-026">
              <Image
                className="bb-blog-027"
                src={featuredPost.img}
                alt="Featured Blog Image"
                width={742}
                height={317} />
              
              <div className="bb-blog-028">
                <div className="bb-blog-029">
                  <Image className="bb-blog-030" src="/Images/Rectangle 1130.png" alt="Date Bullet" width={14} height={14} />
                  <span className="bb-blog-031">{featuredPost.date}</span>
                </div>
                <h3 className="bb-blog-032">
                  {featuredPost.title}
                </h3>
                <p className="bb-blog-033">
                  {featuredPost.desc}
                </p>
                <Link href="#blog" className="bb-blog-034">
                  Read More
                </Link>
              </div>
            </article>

            <div className="bb-blog-035">
              {smallPosts.map((post) =>
              <article
                key={post.title}
                className="bb-blog-036">
                
                  <Image
                  className="bb-blog-037"
                  src={post.img}
                  alt={post.title}
                  width={220}
                  height={150} />
                
                  <div className="bb-blog-038">
                    <div className="bb-blog-029">
                      <Image className="bb-blog-039" src="/Images/Rectangle 1130.png" alt="Date Bullet" width={10} height={10} />
                      <span className="bb-blog-040">{post.date}</span>
                    </div>
                    <h3 className="bb-blog-041">
                      {post.title}
                    </h3>
                    <Link href="#blog" className="bb-blog-042">
                      Read More
                    </Link>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </section>
    </>);



}

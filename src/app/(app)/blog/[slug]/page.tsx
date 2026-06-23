import Image from "next/image";
import Link from "next/link";
import ReadyTruckSection from "../../components/ReadyTruckSection";
import BlogSection from "../../components/BlogSection";

const images = {
  hero: "/images/blog-detail-hero.jpg",
  author: "/images/author.jpg",
  main: "/images/blog-main.jpg",
};

const articleSections = [
  {
    heading: "",
    body: [
      "Box truck dispatching helps owner-operators and small fleets find better loads, reduce empty miles, and keep daily operations organized. A good dispatcher does more than book freight. They check lanes, negotiate rates, confirm paperwork, track delivery times, and protect your truck from weak-paying loads.",
      "This guide explains how dispatch support works, why it matters for box truck owners, and what features make a dispatch service useful for carriers working across the United States.",
    ],
  },
  {
    heading: "Box Truck Dispatching Features",
    body: [
      "A strong dispatch setup gives your truck a steady operating rhythm. The dispatcher watches load boards, communicates with brokers, checks rate history, and keeps the driver focused on the road instead of chasing calls all day.",
    ],
  },
  {
    heading: "Load Booking",
    body: [
      "Load booking is the core part of dispatching. Dispatchers search for suitable loads based on your box truck size, location, available hours, lane preference, and rate target. They avoid random freight and focus on loads that make financial sense after fuel, tolls, deadhead, and delivery timing.",
    ],
  },
  {
    heading: "Rate Negotiation",
    body: [
      "Dispatchers negotiate with brokers before the load is accepted. They check pickup time, delivery time, detention terms, weight, commodity type, and lane demand. The goal is simple: secure loads that pay fairly and do not waste your driver’s hours.",
    ],
  },
  {
    heading: "Paperwork Support",
    body: [
      "Paperwork mistakes can delay payment. Dispatchers help manage rate confirmations, proof of delivery, broker packets, carrier setup documents, lumper receipts, and invoice details. Clean paperwork keeps the payment cycle moving without back-and-forth delays.",
    ],
  },
  {
    heading: "Route Planning",
    body: [
      "Good dispatching is not only about finding a load. The route matters too. Dispatchers check mileage, delivery windows, traffic risks, fuel stops, and reload options near the destination. Better route planning helps reduce wasted miles and improves weekly revenue.",
    ],
  },
  {
    heading: "Broker Communication",
    body: [
      "Box truck owners often lose time answering broker calls while driving. Dispatchers handle updates, appointment times, check calls, delays, and basic issue resolution. This keeps the carrier professional and responsive without distracting the driver.",
    ],
  },
  {
    heading: "Revenue Cycle",
    body: [
      "Dispatching affects the full revenue cycle of a trucking business. Better loads improve gross revenue. Cleaner paperwork supports faster payment. Strong broker follow-up reduces unpaid invoices. Every small process adds up.",
    ],
  },
  {
    heading: "Factoring Coordination",
    body: [
      "Many box truck owners use factoring to get paid faster. Dispatchers can help organize the documents needed for factoring submission, including rate confirmation, invoice, and signed POD. Faster submission usually means faster cash flow.",
    ],
  },
  {
    heading: "Compliance Support",
    body: [
      "Dispatchers also help carriers stay organized with insurance documents, MC authority details, W-9 forms, certificate of insurance requests, and broker setup requirements. They do not replace legal compliance, but they keep routine documents ready when brokers ask.",
    ],
  },
  {
    heading: "Empty Mile Reduction",
    body: [
      "Empty miles eat profit quietly. A dispatcher watches destination markets before accepting a load. They try to avoid sending the truck into weak freight zones without a reload plan. That one habit can protect the weekly numbers.",
    ],
  },
  {
    heading: "Performance Tracking",
    body: [
      "Tracking matters. Dispatchers can monitor average rate per mile, loaded miles, deadhead miles, broker quality, cancelled loads, detention issues, and weekly gross. These numbers show what is working and what needs to change.",
    ],
  },
  {
    heading: "Pricing Model",
    body: [
      "Most dispatch services charge a percentage of the gross load amount or a fixed weekly fee. The right model depends on your truck count, weekly load volume, and support needs. Owner-operators should look for transparent pricing with no surprise charges.",
    ],
  },
];

export default function BlogDetailPage() {
  return (
    <main className="bg-[#F8FAFC] text-[#012F42]">
      <section className="mx-auto mt-20 h-[500px] w-[min(1520px,calc(100%-40px))] overflow-hidden rounded-[20px] bg-[url('/images/blog-detail-hero.jpg')] bg-cover bg-center max-lg:mt-10 max-lg:h-[420px]">
        <div className="flex h-full w-full items-center rounded-[20px] bg-[linear-gradient(90deg,rgba(1,47,66,0.90)_0%,rgba(3,48,67,0.30)_89%)]">
          <div className="ml-[100px] max-w-[770px] max-lg:mx-8">
            <h1 className="font-outfit mb-[30px] text-[60px] font-bold capitalize leading-[70px] text-white max-lg:text-[42px] max-lg:leading-[50px]">
              Box Truck Dispatching Blog
            </h1>

            <p className="font-dm-sans text-[22px] font-normal leading-8 text-white max-lg:text-[18px] max-lg:leading-7">
              Insights, strategies, and real dispatch knowledge to help
              owner-operators and trucking businesses increase revenue, reduce
              deadhead, and run smarter operations across the US.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 flex w-[min(1200px,calc(100%-40px))] items-center justify-between gap-8 max-sm:flex-col max-sm:items-start">
        <div className="flex items-center gap-5">
          <Image
            src={images.author}
            alt="Ahmad Churahi"
            width={70}
            height={70}
            className="h-[70px] w-[70px] rounded-full object-cover"
          />

          <div>
            <h3 className="font-outfit mb-2 text-[22px] font-semibold leading-[22px] text-[#012F42]">
              Ahmad Churahi
            </h3>

            <p className="font-dm-sans text-[16px] font-normal leading-[25px] text-[#575D67]">
              Professional
            </p>
          </div>
        </div>

        <Link
          href="/blog/category/dispatching"
          className="font-outfit inline-flex min-h-[50px] items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 py-2.5 text-[18px] font-medium text-white max-sm:w-full"
        >
          Category
        </Link>
      </section>

      <section className="mx-auto mt-[30px] h-[600px] w-[min(1200px,calc(100%-40px))] overflow-hidden rounded-[15px] max-lg:h-[360px]">
        <Image
          src={images.main}
          alt="Box truck fleet"
          width={1200}
          height={600}
          className="h-full w-full object-cover"
          priority
        />
      </section>

      <section className="mx-auto mt-10 w-[min(1200px,calc(100%-40px))]">
        <div className="font-outfit flex h-[50px] w-full items-center justify-center rounded-[5px] bg-[#FE8F02] text-[18px] font-medium text-white">
          Table of Contents
        </div>

        <article className="font-dm-sans mt-[30px] text-[18px] font-normal leading-[30px] text-[#575D67]">
          {articleSections.map((section, index) => (
            <div key={`${section.heading}-${index}`}>
              {section.heading && (
                <h2 className="font-dm-sans mt-[18px] text-[22px] font-semibold leading-[30px] text-[#012F42]">
                  {section.heading}
                </h2>
              )}

              {section.body.map((paragraph) => (
                <p key={paragraph} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>

      <div className="blog-detail-flow-sections">
  <ReadyTruckSection />
  <BlogSection />
</div>
    </main>
  );
}
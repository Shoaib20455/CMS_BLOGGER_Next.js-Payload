"use client";

import { useState } from "react";

const leftClassByColumn = [
  "left-[12.5rem]",
  "left-[36.5625rem]",
  "left-[60.625rem]",
  "left-[84.6875rem]"
];

const topClassByRow = ["top-[281.375rem]", "top-[297.5625rem]"];

const whyChooseCards = [
  { title: "Dedicated Box Truck Dispatch Experts", desc: "Our experienced dispatchers understand the box truck market and work hard to keep your truck loaded with profitable freight.", col: 0, row: 0 },
  { title: "Reduced Empty Miles", desc: "Strategic route planning helps minimize deadhead miles, lower fuel costs, and increase overall profitability.", col: 0, row: 1 },
  { title: "Higher-Paying Loads", desc: "We negotiate aggressively with brokers to secure the best possible rates and maximize your weekly revenue.", col: 1, row: 0 },
  { title: "Fast & Reliable Communication", desc: "We maintain constant communication with brokers, shippers, and drivers to prevent delays and keep every load on track.", col: 1, row: 1 },
  { title: "24/7 Dispatch Support", desc: "Questions, issues, or load updates? Our team is available around the clock to keep your operations running smoothly.", col: 2, row: 0 },
  { title: "Paperwork & Broker Follow-Up", desc: "From rate confirmations to proof of delivery submissions, we handle the administrative work so you can focus on driving.", col: 2, row: 1 },
  { title: "No Forced Dispatch", desc: "You remain in control. We present the opportunities, and you decide which loads fit your business goals.", col: 3, row: 0 },
  { title: "Nationwide Coverage", desc: "Whether you operate locally, regionally, or across the country, we help you find consistent freight opportunities throughout all 48 states.", col: 3, row: 1 }
];

export default function WhyChooseUsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      <div className="hidden lg:block">
        <div className="absolute left-[35.5625rem] top-[273.875rem] w-[48.8125rem] text-center font-['Outfit'] text-[3rem] font-bold break-words text-[#012F42]">
          WHY CHOOSE US
        </div>

        {whyChooseCards.map((card, idx) => {
          const isHovered = hoveredCard === idx;

          return (
            <div
              key={card.title}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`absolute h-[14.9375rem] w-[22.8125rem] overflow-hidden rounded-[0.625rem] bg-white transition-all duration-300 ${
                leftClassByColumn[card.col]
              } ${topClassByRow[card.row]} ${
                isHovered
                  ? "-translate-y-[0.3125rem] border-[0.0938rem] border-solid border-[#FE8F02] shadow-[0_0.625rem_1.875rem_rgba(254,143,2,0.08)]"
                  : "translate-y-0 border border-solid border-[rgba(17,24,39,0.15)]"
              }`}
            >
              <div className={`h-[0.625rem] w-[22.8125rem] transition-colors duration-300 ${isHovered ? "bg-[#FE8F02]" : "bg-[#012F42]"}`} />
              <div className="absolute left-[1.25rem] top-[1.875rem] w-[20.5rem] font-['Outfit'] text-[1.375rem] font-semibold leading-[2.0625rem] text-[#012F42]">
                {card.title}
              </div>
              <div className="absolute left-[1.25rem] top-[7.25rem] w-[20.1875rem] font-['DM_Sans'] text-[1.125rem] font-normal leading-[1.6rem] text-[rgba(17,24,39,0.70)]">
                {card.desc}
              </div>
            </div>
          );
        })}
      </div>

      <section
        data-responsive-section="why"
        className="relative z-[23] w-full overflow-hidden bg-[#F8FAFC] px-5 py-10 sm:px-8 sm:py-12 lg:hidden"
      >
        <div className="mx-auto max-w-[58rem]">
          <h2 className="text-center font-['Outfit'] text-[1.875rem] font-bold leading-[2.3rem] text-[#012F42] sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2rem] md:leading-[2.45rem]">
            WHY CHOOSE US
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 min-[860px]:grid-cols-4">
            {whyChooseCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[0.625rem] border border-solid border-[rgba(17,24,39,0.15)] bg-white"
              >
                <div className="h-[0.5rem] bg-[#012F42]" />
                <div className="p-4 sm:p-5 md:p-4">
                  <h3 className="font-['Outfit'] text-[1.125rem] font-semibold leading-[1.45rem] text-[#012F42] sm:text-[1.25rem] sm:leading-[1.625rem] min-[860px]:text-[1.0625rem] min-[860px]:leading-[1.35rem]">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-['DM_Sans'] text-[0.95rem] leading-[1.55rem] text-[rgba(17,24,39,0.70)] sm:text-[1rem] min-[860px]:text-[0.9375rem] min-[860px]:leading-[1.45rem]">
                    {card.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

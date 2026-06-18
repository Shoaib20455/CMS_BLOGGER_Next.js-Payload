"use client";

import { useLandingPageLayout } from "./LandingPageFrame";

type Faq = {
  q: string;
  a: string;
};

const faqTopClassByValue: Record<number, string> = {
  8095: "top-[505.9375rem]",
  8188: "top-[511.75rem]",
  8281: "top-[517.5625rem]",
  8295: "top-[518.4375rem]",
  8374: "top-[523.375rem]",
  8388: "top-[524.25rem]",
  8481: "top-[530.0625rem]"
};

function FaqCard({
  faq,
  isOpen,
  leftClass,
  topClass,
  onClick
}: {
  faq: Faq;
  isOpen: boolean;
  leftClass: string;
  topClass: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`absolute ${leftClass} ${topClass} w-[46.875rem] cursor-pointer overflow-hidden rounded-[0.625rem] bg-white transition-all duration-500 ${
        isOpen
          ? "h-[11.25rem] border-[0.125rem] border-solid border-[#FE8F02] shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.05)]"
          : "h-[4.5625rem] border border-solid border-[rgba(17,24,39,0.15)]"
      }`}
    >
      <div className="absolute left-[1.25rem] top-[1.25rem] w-[37.5rem] font-['DM_Sans'] text-[1.125rem] font-medium leading-[2.0625rem] text-[#012F42]">
        {faq.q}
      </div>
      {isOpen && (
        <div className="absolute left-[1.25rem] top-[4.25rem] w-[44.375rem] font-['DM_Sans'] text-[1rem] font-normal leading-[1.5rem] text-[rgba(17,24,39,0.70)]">
          {faq.a}
        </div>
      )}
      <div className="absolute right-[1.5625rem] top-[1.75rem] flex h-[1rem] w-[1rem] items-center justify-center">
        <div className="absolute h-[0.125rem] w-[1rem] rounded-[0.0625rem] bg-[#012F42]" />
        <div
          className={`absolute h-[0.125rem] w-[1rem] rounded-[0.0625rem] bg-[#012F42] transition-transform duration-300 ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
      </div>
    </div>
  );
}

export default function FaqSection() {
  const {
    leftFaqs,
    rightFaqs,
    activeLeftFaq,
    activeRightFaq,
    setActiveLeftFaq,
    setActiveRightFaq,
    leftFaqTops,
    rightFaqTops
  } = useLandingPageLayout();

  const allFaqs = [...leftFaqs, ...rightFaqs];
  const activeMobileFaq =
    activeLeftFaq !== null ? activeLeftFaq : activeRightFaq !== null ? activeRightFaq + leftFaqs.length : null;

  const toggleMobileFaq = (idx: number) => {
    if (idx < leftFaqs.length) {
      setActiveRightFaq(null);
      setActiveLeftFaq(activeLeftFaq === idx ? null : idx);
      return;
    }

    setActiveLeftFaq(null);
    const rightIdx = idx - leftFaqs.length;
    setActiveRightFaq(activeRightFaq === rightIdx ? null : rightIdx);
  };

  return (
    <>
    <div className="hidden lg:block">
      <div className="absolute left-[35.5625rem] top-[498.4375rem] w-[48.8125rem] text-center font-['Outfit'] text-[3rem] font-bold text-[#012F42]">
        Frequently Asked Questions
      </div>

      {leftFaqs.map((faq, idx) => {
        const isOpen = activeLeftFaq === idx;

        return (
          <FaqCard
            key={faq.q}
            faq={faq}
            isOpen={isOpen}
            leftClass="left-[12.5rem]"
            topClass={faqTopClassByValue[leftFaqTops[idx]]}
            onClick={() => setActiveLeftFaq(isOpen ? null : idx)}
          />
        );
      })}

      {rightFaqs.map((faq, idx) => {
        const isOpen = activeRightFaq === idx;

        return (
          <FaqCard
            key={faq.q}
            faq={faq}
            isOpen={isOpen}
            leftClass="left-[60.625rem]"
            topClass={faqTopClassByValue[rightFaqTops[idx]]}
            onClick={() => setActiveRightFaq(isOpen ? null : idx)}
          />
        );
      })}
    </div>

      <section
        data-responsive-section="faq"
        className="relative z-[28] w-full overflow-hidden bg-[#F8FAFC] px-5 py-10 sm:px-8 sm:py-12 lg:hidden"
      >
        <div className="mx-auto max-w-[58rem]">
          <h2 className="text-center font-['Outfit'] text-[2rem] font-bold leading-[2.45rem] text-[#012F42] sm:text-[2.25rem] sm:leading-[2.75rem]">
            Frequently Asked Questions
          </h2>

          <div className="mt-7 grid gap-3 min-[860px]:grid-cols-2">
            {allFaqs.map((faq, idx) => {
              const isOpen = activeMobileFaq === idx;

              return (
                <button
                  key={faq.q}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleMobileFaq(idx)}
                  className={`w-full cursor-pointer overflow-hidden rounded-[0.625rem] bg-white text-left transition-all duration-300 ${
                    isOpen
                      ? "border-[0.125rem] border-solid border-[#FE8F02] shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.05)]"
                      : "border border-solid border-[rgba(17,24,39,0.15)]"
                  }`}
                >
                  <div className="flex min-h-[4rem] items-center justify-between gap-4 px-4 py-3">
                    <span className="min-w-0 font-['DM_Sans'] text-[1rem] font-medium leading-[1.45rem] text-[#012F42] sm:text-[1.0625rem]">
                      {faq.q}
                    </span>
                    <span className="relative h-4 w-4 shrink-0">
                      <span className="absolute left-0 top-1/2 h-[0.125rem] w-4 -translate-y-1/2 rounded-[0.0625rem] bg-[#012F42]" />
                      <span className={`absolute left-0 top-1/2 h-[0.125rem] w-4 -translate-y-1/2 rounded-[0.0625rem] bg-[#012F42] transition-transform duration-300 ${isOpen ? "rotate-0" : "-rotate-90"}`} />
                    </span>
                  </div>
                  {isOpen && (
                    <p className="px-4 pb-4 font-['DM_Sans'] text-[0.95rem] leading-[1.55rem] text-[rgba(17,24,39,0.70)]">
                      {faq.a}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

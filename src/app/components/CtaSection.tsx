"use client";

import { useLandingPageLayout } from "./LandingPageFrame";

const ctaTopClasses: Record<number, { frame: string; title: string; copy: string; button: string }> = {
  8477: {
    frame: "top-[529.8125rem]",
    title: "top-[531.6875rem]",
    copy: "top-[536.375rem]",
    button: "top-[540.5rem]"
  },
  8584: {
    frame: "top-[536.5rem]",
    title: "top-[538.375rem]",
    copy: "top-[543.0625rem]",
    button: "top-[547.1875rem]"
  }
};

export default function CtaSection() {
  const { ctaTop } = useLandingPageLayout();
  const topClasses = ctaTopClasses[ctaTop];

  return (
    <>
    <div className="hidden lg:block">
      <div className={`absolute left-[12.5rem] h-[15.6875rem] w-[95rem] rounded-[0.625rem] bg-[#012F42] shadow-[0_0.625rem_1.875rem_rgba(0,0,0,0.1)] ${topClasses.frame}`} />
      <div className={`absolute left-[39.9375rem] w-[40.0625rem] text-center font-['Outfit'] text-[2.875rem] font-bold leading-[3.4375rem] text-white capitalize ${topClasses.title}`}>
        Grow Your Business Faster
      </div>
      <div className={`absolute left-[40.0625rem] w-[39.75rem] text-center font-['DM_Sans'] text-[1.125rem] font-normal leading-[1.75rem] text-white ${topClasses.copy}`}>
        From load booking to payment follow-up, we handle the hard work behind the scenes so you can stay focused on the road ahead.
      </div>

      <button
        className={`absolute left-[55.125rem] h-[3.125rem] w-[9.6875rem] cursor-pointer rounded-[0.3125rem] border-none bg-[#FE8F02] px-[1.25rem] py-[0.625rem] font-['Outfit'] text-[1.125rem] font-medium text-white capitalize transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95 ${topClasses.button}`}
      >
        Get Started
      </button>
    </div>

      <section
        data-responsive-section="cta"
        className="relative z-[29] w-full overflow-hidden bg-[#F8FAFC] px-5 py-8 sm:px-8 sm:py-10 lg:hidden"
      >
        <div className="mx-auto max-w-[58rem] rounded-[0.625rem] bg-[#012F42] px-5 py-8 text-center shadow-[0_0.625rem_1.875rem_rgba(0,0,0,0.1)] sm:px-8 sm:py-10">
          <h2 className="font-['Outfit'] text-[2rem] font-bold capitalize leading-[2.45rem] text-white sm:text-[2.25rem] sm:leading-[2.75rem]">
            Grow Your Business Faster
          </h2>
          <p className="mx-auto mt-4 max-w-[42rem] font-['DM_Sans'] text-[1rem] leading-[1.625rem] text-white sm:text-[1.0625rem] sm:leading-[1.75rem]">
            From load booking to payment follow-up, we handle the hard work behind the scenes so you can stay focused on the road ahead.
          </p>
          <button className="mt-6 h-[3.125rem] w-full cursor-pointer rounded-[0.3125rem] border-none bg-[#FE8F02] px-5 font-['Outfit'] text-[1.0625rem] font-medium text-white capitalize transition-all duration-300 hover:bg-[#E07D02] active:scale-95 sm:w-[9.6875rem]">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

type Step = {
  title: string;
  desc: string;
};

const stepTopClassByValue: Record<number, string> = {
  3784: "top-[236.5rem]",
  3877: "top-[242.3125rem]",
  3950: "top-[246.875rem]",
  3970: "top-[248.125rem]",
  4043: "top-[252.6875rem]",
  4063: "top-[253.9375rem]",
  4136: "top-[258.5rem]",
  4156: "top-[259.75rem]",
  4229: "top-[264.3125rem]"
};

const stepsData: Step[] = [
  {
    title: "Consultation & Carrier Onboarding",
    desc: "We learn about your equipment, preferred lanes, operating region, and revenue goals. Then we complete the onboarding process and set up communication channels."
  },
  {
    title: "Load Planning & Rate Negotiation",
    desc: "We search premium load boards and utilize direct broker networks to find high-paying cargo. We negotiate rates aggressively to secure the highest RPM possible."
  },
  {
    title: "Dispatch & Route Coordination",
    desc: "Once a load is accepted, we handle dispatching details and map out the optimal routes to minimize deadhead miles and keep fuel costs low."
  },
  {
    title: "Real-Time Load Management",
    desc: "We track the cargo in real-time, maintain communication with brokers and shippers, and handle check-calls so you can stay focused on driving safely."
  },
  {
    title: "Paperwork & Payment Follow-Up",
    desc: "We take care of all rate confirmations, setup packets, and invoices. We coordinate with your factoring company to ensure you receive payments within 24-48 hours."
  }
];

export default function ServicesProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepHeight = (index: number) => (activeStep === index ? 146 : 73);
  const stepTops: number[] = [];
  let currentStepTop = 3784;

  for (let i = 0; i < 5; i++) {
    stepTops.push(currentStepTop);
    currentStepTop += stepHeight(i) + 20;
  }

  return (
    <>
      <div className="hidden lg:block">
        <div className="absolute left-[35.5625rem] top-[225.25rem] w-[48.8125rem] text-center font-['Outfit'] text-[3rem] font-bold break-words text-[#012F42]">
          How We Manage Your Box Truck in 5 Simple Steps
        </div>
        <Image
          className="absolute left-[12.5rem] top-[236.5rem] h-[32.375rem] w-[46.875rem] rounded-[0.625rem] object-cover"
          src="/Images/Rectangle 1093.png"
          alt="Managing Box Truck"
          width={750}
          height={518}
        />

        {stepsData.map((step, idx) => {
          const isOpen = activeStep === idx;

          return (
            <div
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`absolute left-[60.625rem] w-[46.875rem] cursor-pointer overflow-hidden rounded-[0.625rem] bg-white transition-all duration-500 ${
                isOpen
                  ? "h-[9.125rem] border-[0.125rem] border-solid border-[#FE8F02] shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.06)]"
                  : "h-[4.5625rem] border border-solid border-[rgba(17,24,39,0.15)]"
              } ${stepTopClassByValue[stepTops[idx]]}`}
            >
              <div className="absolute left-[1.25rem] top-[1.25rem] w-[37.5rem] font-['Outfit'] text-[1.375rem] font-semibold leading-[2.0625rem] text-[#012F42]">
                {step.title}
              </div>

              {isOpen && (
                <div className="absolute left-[1.25rem] top-[4.25rem] w-[44.375rem] font-['DM_Sans'] text-[1.125rem] font-normal leading-[1.6rem] text-[rgba(17,24,39,0.70)]">
                  {step.desc}
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
        })}
      </div>

      <section
        data-responsive-section="process"
        className="relative z-[22] w-full overflow-hidden bg-[#F8FAFC] px-5 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8 lg:hidden"
      >
        <div className="mx-auto max-w-[58rem]">
          <h2 className="mx-auto max-w-[36rem] text-center font-['Outfit'] text-[1.875rem] font-bold leading-[2.3rem] text-[#012F42] sm:text-[2.25rem] sm:leading-[2.75rem] min-[860px]:text-[2rem] min-[860px]:leading-[2.45rem]">
            How We Manage Your Box Truck in 5 Simple Steps
          </h2>

          <div className="mt-7 grid gap-5 min-[860px]:grid-cols-[0.95fr_1.05fr] min-[860px]:items-start">
            <Image
              className="aspect-[16/11] h-auto w-full rounded-[0.625rem] object-cover min-[860px]:sticky min-[860px]:top-6"
              src="/Images/Rectangle 1093.png"
              alt="Managing Box Truck"
              width={750}
              height={518}
            />

            <div className="space-y-3">
              {stepsData.map((step, idx) => {
                const isOpen = activeStep === idx;

                return (
                  <button
                    key={step.title}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full cursor-pointer overflow-hidden rounded-[0.625rem] bg-white text-left transition-all duration-300 ${
                      isOpen
                        ? "border-[0.125rem] border-solid border-[#FE8F02] shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.06)]"
                        : "border border-solid border-[rgba(17,24,39,0.15)]"
                    }`}
                  >
                    <div className="flex min-h-[4rem] items-center justify-between gap-4 px-4 py-3">
                      <span className="min-w-0 font-['Outfit'] text-[1.125rem] font-semibold leading-[1.45rem] text-[#012F42] sm:text-[1.25rem] sm:leading-[1.625rem]">
                        {step.title}
                      </span>
                      <span className="relative h-4 w-4 shrink-0">
                        <span className="absolute left-0 top-1/2 h-[0.125rem] w-4 -translate-y-1/2 rounded-[0.0625rem] bg-[#012F42]" />
                        <span
                          className={`absolute left-0 top-1/2 h-[0.125rem] w-4 -translate-y-1/2 rounded-[0.0625rem] bg-[#012F42] transition-transform duration-300 ${
                            isOpen ? "rotate-0" : "-rotate-90"
                          }`}
                        />
                      </span>
                    </div>

                    {isOpen && (
                      <p className="px-4 pb-4 font-['DM_Sans'] text-[0.95rem] leading-[1.55rem] text-[rgba(17,24,39,0.70)] sm:text-[1rem]">
                        {step.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

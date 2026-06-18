import Image from "next/image";

const includedItems = [
  "Dedicated Dispatcher",
  "Load Search & Booking",
  "Rate Negotiation",
  "Broker Communication",
  "Route Planning Support",
  "Rate Confirmations",
  "Setup Packet Assistance",
  "Detention & TONU Support",
  "Paperwork Management",
  "24/7 Dispatch Support"
];

const statItems = [
  { label: "Average Weekly Gross", value: "$5,500 - $7,500+" },
  { label: "Average Rate Per Mile", value: "$1.50 - $2.20+" }
];

export default function PricingSection() {
  return (
    <>
      <div className="hidden lg:block">
        {/* Section: Affordable Pricing for Box Truck Owners */}

        <div className="w-[95rem] h-[45.6875rem] left-[12.5rem] top-[317.5rem] absolute bg-white rounded-[0.625rem] shadow-[0_0.625rem_2.5rem_rgba(0,0,0,0.03)]" />

        <Image className="w-[38.5625rem] h-[45.6875rem] left-[12.5rem] top-[317.5rem] absolute rounded-[0.625rem] object-cover" src="/Images/Rectangle 1120.png" alt="6% Pricing Plan" width={617} height={731} />
        <div className="w-[38.5625rem] h-[45.6875rem] left-[12.5rem] top-[317.5rem] absolute bg-[rgba(1,47,66,0.75)] rounded-[0.625rem]" />

        <div className="w-[27.0625rem] left-[18.25rem] top-[326.1875rem] absolute text-center text-white text-[3rem] font-['Outfit'] font-bold">
          Box Truck Dispatching
        </div>

        <div className="left-[26.625rem] top-[334.9375rem] absolute text-[#FE8F02] text-[8.125rem] font-['Outfit'] font-bold">
          6%
        </div>

        <div className="left-[26.1875rem] top-[346.4375rem] absolute text-white text-[1.375rem] font-['Outfit'] font-semibold leading-[2.0625rem]">
          Per Load Revenue
        </div>

        <div className="w-[23.6875rem] left-[19.875rem] top-[349.75rem] absolute text-center text-white text-[1.125rem] font-['DM_Sans'] font-normal leading-[1.6rem]">
          For owner-operators and fleet owners who want consistent freight, higher-paying loads, and a dedicated dispatch team.
        </div>

        {/* Pricing Info Right Column */}

        <div className="w-[43rem] left-[54.1875rem] top-[320rem] absolute text-[#012F42] text-[3rem] font-['Outfit'] font-bold">
          Affordable Pricing for Box Truck Owners
        </div>

        <div className="w-[27.4375rem] left-[54.1875rem] top-[329.375rem] absolute text-[#012F42] text-[1.375rem] font-['Outfit'] font-semibold leading-[2.0625rem]">
          Simple. Transparent. Results-Driven.
        </div>

        <div className="w-[44.375rem] left-[54.1875rem] top-[332.6875rem] absolute text-[rgba(17,24,39,0.70)] text-[1.125rem] font-['DM_Sans'] font-normal leading-[1.6rem]">
          No setup fees. No monthly subscriptions. No long-term contract
        </div>

        <div className="w-[27.4375rem] left-[54.1875rem] top-[335.5625rem] absolute text-[#012F42] text-[1.375rem] font-['Outfit'] font-semibold leading-[2.0625rem]">
          WHAT&apos;S INCLUDED
        </div>

        {/* Pricing Checklists Grid */}

        <div className="left-[54.1875rem] top-[338.4375rem] absolute flex gap-[6.25rem]">
          <div className="flex flex-col gap-[0.625rem]">
            {includedItems.slice(0, 5).map((incl) => (
              <div key={incl} className="flex gap-2 items-center">
                <Image className="w-[1.125rem] h-[1.125rem]" src="/Images/Rectangle 1122.png" alt="Checked" width={18} height={18} />
                <span className="text-[rgba(17,24,39,0.70)] text-[1.125rem] font-['DM_Sans'] font-normal">{incl}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[0.625rem]">
            {includedItems.slice(5).map((incl) => (
              <div key={incl} className="flex gap-2 items-center">
                <Image className="w-[1.125rem] h-[1.125rem]" src="/Images/Rectangle 1122.png" alt="Checked" width={18} height={18} />
                <span className="text-[rgba(17,24,39,0.70)] text-[1.125rem] font-['DM_Sans'] font-normal">{incl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Revenue Stats */}

        <div className="left-[54.1875rem] top-[350.75rem] absolute text-[#012F42] text-[1.375rem] font-['Outfit'] font-semibold leading-[2.0625rem]">
          Average Weekly Gross
        </div>

        <div className="left-[54.1875rem] top-[354.0625rem] absolute text-[rgba(17,24,39,0.70)] text-[1.125rem] font-['DM_Sans'] font-normal leading-[1.6rem]">
          $5,500 - $7,500+
        </div>

        <div className="left-[75rem] top-[350.75rem] absolute text-[#012F42] text-[1.375rem] font-['Outfit'] font-semibold leading-[2.0625rem]">
          Average Rate Per Mile
        </div>

        <div className="left-[75rem] top-[354.0625rem] absolute text-[rgba(17,24,39,0.70)] text-[1.125rem] font-['DM_Sans'] font-normal leading-[1.6rem]">
          $1.50 - $2.20+
        </div>

        <button
          className="hover:bg-[#E07D02] hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95 border-none w-[15.875rem] h-[3.125rem] pl-[1.25rem] pr-[1.25rem] pt-[0.625rem] pb-[0.625rem] left-[54.1875rem] top-[357.5625rem] absolute bg-[#FE8F02] rounded-[0.3125rem] text-white text-[1.125rem] font-['Outfit'] font-medium capitalize"
        >
          Start Dispatching Today
        </button>
      </div>

      <section
        data-responsive-section="pricing"
        className="relative z-[24] w-full overflow-hidden bg-[#F8FAFC] px-5 py-10 sm:px-8 sm:py-12 lg:hidden"
      >
        <div className="mx-auto max-w-[58rem] overflow-hidden rounded-[0.625rem] bg-white shadow-[0_0.625rem_2.5rem_rgba(0,0,0,0.04)] md:grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[25rem] overflow-hidden bg-[#012F42] px-5 py-8 text-center sm:px-8 md:min-h-full md:px-6 md:py-10">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/Images/Rectangle 1120.png"
              alt="6% Pricing Plan"
              width={617}
              height={731}
            />
            <div className="absolute inset-0 bg-[rgba(1,47,66,0.75)]" />
            <div className="relative z-10 flex min-h-[19rem] flex-col items-center justify-center md:min-h-full">
              <h2 className="max-w-[22rem] font-['Outfit'] text-[2rem] font-bold leading-[2.45rem] text-white sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2rem] md:leading-[2.45rem]">
                Box Truck Dispatching
              </h2>
              <div className="mt-4 font-['Outfit'] text-[6rem] font-bold leading-none text-[#FE8F02] sm:text-[7rem] md:text-[6.25rem]">
                6%
              </div>
              <div className="mt-3 font-['Outfit'] text-[1.25rem] font-semibold leading-[1.75rem] text-white sm:text-[1.375rem]">
                Per Load Revenue
              </div>
              <p className="mt-4 max-w-[24rem] font-['DM_Sans'] text-[1rem] leading-[1.625rem] text-white sm:text-[1.0625rem]">
                For owner-operators and fleet owners who want consistent freight, higher-paying loads, and a dedicated dispatch team.
              </p>
            </div>
          </div>

          <div className="px-5 py-8 sm:px-8 md:px-7 md:py-10">
            <h2 className="font-['Outfit'] text-[2rem] font-bold leading-[2.45rem] text-[#012F42] sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2rem] md:leading-[2.45rem]">
              Affordable Pricing for Box Truck Owners
            </h2>

            <h3 className="mt-5 font-['Outfit'] text-[1.25rem] font-semibold leading-[1.75rem] text-[#012F42]">
              Simple. Transparent. Results-Driven.
            </h3>
            <p className="mt-2 font-['DM_Sans'] text-[1rem] leading-[1.625rem] text-[rgba(17,24,39,0.70)]">
              No setup fees. No monthly subscriptions. No long-term contract
            </p>

            <h3 className="mt-6 font-['Outfit'] text-[1.25rem] font-semibold leading-[1.75rem] text-[#012F42]">
              WHAT&apos;S INCLUDED
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-1 min-[900px]:grid-cols-2">
              {includedItems.map((incl) => (
                <div key={incl} className="flex min-w-0 items-center gap-2">
                  <Image className="h-[1.125rem] w-[1.125rem] shrink-0" src="/Images/Rectangle 1122.png" alt="Checked" width={18} height={18} />
                  <span className="min-w-0 font-['DM_Sans'] text-[1rem] leading-[1.45rem] text-[rgba(17,24,39,0.70)]">
                    {incl}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {statItems.map((stat) => (
                <div key={stat.label} className="rounded-[0.5rem] border border-solid border-[rgba(17,24,39,0.12)] px-4 py-3">
                  <div className="font-['Outfit'] text-[1.125rem] font-semibold leading-[1.5rem] text-[#012F42]">
                    {stat.label}
                  </div>
                  <div className="mt-2 font-['DM_Sans'] text-[1rem] leading-[1.5rem] text-[rgba(17,24,39,0.70)]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-7 flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-[0.3125rem] border-none bg-[#FE8F02] px-5 font-['Outfit'] text-[1.0625rem] font-medium capitalize text-white transition-all duration-300 hover:bg-[#E07D02] active:scale-95 sm:w-[15.875rem]">
              Start Dispatching Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

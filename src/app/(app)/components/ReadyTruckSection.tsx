import Image from "next/image";

type ReadyTruckSectionProps = {
  variant?: "absolute" | "flow";
};

export default function ReadyTruckSection({
  variant = "absolute",
}: ReadyTruckSectionProps) {
  if (variant === "flow") {
    return (
      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1082px] overflow-hidden rounded-[10px] bg-[#012F42]">
        <div className="grid min-h-[416px] grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-9 lg:px-9">
            <h2 className="font-['Outfit'] text-[34px] font-bold leading-[44px] text-[#FE8F02] sm:text-[38px] sm:leading-[48px] lg:text-[36px] lg:leading-[46px]">
              Your Truck Is Ready.
            </h2>

            <h3 className="mt-5 font-['Outfit'] text-[24px] font-bold leading-[34px] text-white sm:text-[28px] sm:leading-[38px] lg:text-[22px] lg:leading-[30px]">
              Are You Maximizing Every Mile?
            </h3>

            <p className="mt-5 max-w-[440px] font-['DM_Sans'] text-[16px] font-normal leading-[26px] text-white">
              Every empty mile costs money. Let our dispatch experts find
              better loads, negotiate higher rates, and keep your box truck
              moving profitably across all 48 states.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="h-[44px] rounded-[5px] bg-[#FE8F02] px-5 font-['Outfit'] text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#E07D02]">
                Start Dispatching Today
              </button>

              <button className="h-[44px] rounded-[5px] border border-[#FE8F02] px-5 font-['Outfit'] text-[14px] font-medium text-[#FE8F02] transition-all duration-300 hover:bg-[#FE8F02] hover:text-white">
                Talk to a Dispatcher
              </button>
            </div>
          </div>

          <Image
            src="/Images/Rectangle 1117.png"
            alt="Ready Truck Black"
            width={760}
            height={585}
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="bb-blog-001">
        <div className="bb-ready-truck-001" />

        <div className="bb-ready-truck-002">Your Truck Is Ready.</div>

        <div className="bb-ready-truck-003">
          Are You Maximizing Every Mile?
        </div>

        <div className="bb-ready-truck-004">
          Every empty mile costs money. Let our dispatch experts find better
          loads, negotiate higher rates, and keep your box truck moving
          profitably across all 48 states.
        </div>

        <button className="bb-ready-truck-005">
          Start Dispatching Today
        </button>

        <button className="bb-ready-truck-006">
          Talk to a Dispatcher
        </button>

        <Image
          className="bb-ready-truck-007"
          src="/Images/Rectangle 1117.png"
          alt="Ready Truck Black"
          width={760}
          height={585}
        />
      </div>

      <section data-responsive-section="ready-truck" className="bb-ready-truck-008">
        <div className="bb-ready-truck-009">
          <div className="bb-ready-truck-010">
            <h2 className="bb-ready-truck-011">Your Truck Is Ready.</h2>

            <h3 className="bb-ready-truck-012">
              Are You Maximizing Every Mile?
            </h3>

            <p className="bb-ready-truck-013">
              Every empty mile costs money. Let our dispatch experts find better
              loads, negotiate higher rates, and keep your box truck moving
              profitably across all 48 states.
            </p>

            <div className="bb-ready-truck-014">
              <button className="bb-ready-truck-015">
                Start Dispatching Today
              </button>

              <button className="bb-ready-truck-016">
                Talk to a Dispatcher
              </button>
            </div>
          </div>

          <Image
            className="bb-ready-truck-017"
            src="/Images/Rectangle 1117.png"
            alt="Ready Truck Black"
            width={760}
            height={585}
          />
        </div>
      </section>
    </>
  );
}

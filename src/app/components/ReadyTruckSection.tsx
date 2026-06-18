

import Image from "next/image";

export default function ReadyTruckSection() {
  return (
    <>
      <div className="hidden lg:block">
        {/* Section: Your Truck Is Ready */}

        <div className="w-[95rem] h-[36.5625rem] left-[12.5rem] top-[368.1875rem] absolute bg-[#012F42] rounded-[0.625rem]"  />

        <div className="left-[15.625rem] top-[377.4375rem] absolute text-[#FE8F02] text-[3rem] font-['Outfit'] font-bold capitalize leading-[3.75rem]" >
          Your Truck Is Ready.
        </div>

        <div className="w-[40.0625rem] left-[15.625rem] top-[383.0625rem] absolute text-white text-[1.875rem] font-['Outfit'] font-bold capitalize leading-[2.5rem]" >
          Are You Maximizing Every Mile?
        </div>

        <div className="w-[39.75rem] left-[15.625rem] top-[386.8125rem] absolute text-white text-[1.125rem] font-['DM_Sans'] font-normal leading-[1.75rem]" >
          Every empty mile costs money. Let our dispatch experts find better loads, negotiate higher rates, and keep your box truck moving profitably across all 48 states.
        </div>

        <button
          className="hover:bg-[#E07D02] hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95 border-none w-[15.875rem] h-[3.125rem] pl-[1.25rem] pr-[1.25rem] pt-[0.625rem] pb-[0.625rem] left-[15.625rem] top-[392.375rem] absolute bg-[#FE8F02] rounded-[0.3125rem] text-white text-[1.125rem] font-['Outfit'] font-medium capitalize"
        >
          Start Dispatching Today
        </button>

        <button
          className="hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95 bg-transparent w-[13.9375rem] h-[3.125rem] pl-[1.25rem] pr-[1.25rem] pt-[0.625rem] pb-[0.625rem] left-[32.75rem] top-[392.375rem] absolute rounded-[0.3125rem] border-[0.0625rem] border-solid border-[#FE8F02] text-[#FE8F02] text-[1.125rem] font-['Outfit'] font-medium capitalize"
        >
          Talk to a Dispatcher
        </button>

        <Image className="w-[47.5rem] h-[36.5625rem] left-[60rem] top-[368.1875rem] absolute rounded-tr-[0.625rem] rounded-br-[0.625rem] object-cover" src="/Images/Rectangle 1117.png" alt="Ready Truck Black" width={760} height={585} />
      </div>

      <section
        data-responsive-section="ready-truck"
        className="relative z-[25] w-full overflow-hidden bg-[#F8FAFC] px-5 py-10 sm:px-8 sm:py-12 lg:hidden"
      >
        <div className="mx-auto overflow-hidden rounded-[0.625rem] bg-[#012F42] md:grid md:max-w-[58rem] md:grid-cols-[0.95fr_1.05fr]">
          <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-7 md:py-8">
            <h2 className="font-['Outfit'] text-[2rem] font-bold capitalize leading-[2.45rem] text-[#FE8F02] sm:text-[2.25rem] sm:leading-[2.75rem] md:text-[2rem] md:leading-[2.45rem]">
              Your Truck Is Ready.
            </h2>
            <h3 className="mt-4 font-['Outfit'] text-[1.5rem] font-bold capitalize leading-[2rem] text-white sm:text-[1.875rem] sm:leading-[2.5rem] md:text-[1.375rem] md:leading-[1.85rem]">
              Are You Maximizing Every Mile?
            </h3>
            <p className="mt-4 font-['DM_Sans'] text-[1rem] leading-[1.625rem] text-white sm:text-[1.0625rem] sm:leading-[1.75rem] md:text-[0.9375rem] md:leading-[1.55rem]">
              Every empty mile costs money. Let our dispatch experts find better loads, negotiate higher rates, and keep your box truck moving profitably across all 48 states.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 min-[900px]:grid-cols-2">
              <button className="flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-[0.3125rem] border-none bg-[#FE8F02] px-5 font-['Outfit'] text-[1.0625rem] font-medium capitalize text-white transition-all duration-300 hover:bg-[#E07D02] active:scale-95">
                Start Dispatching Today
              </button>
              <button className="flex h-[3.125rem] w-full cursor-pointer items-center justify-center rounded-[0.3125rem] border border-solid border-[#FE8F02] bg-transparent px-5 font-['Outfit'] text-[1.0625rem] font-medium capitalize text-[#FE8F02] transition-all duration-300 hover:bg-white/10 active:scale-95">
                Talk to a Dispatcher
              </button>
            </div>
          </div>

          <Image
            className="aspect-[16/11] h-auto w-full object-cover md:h-full"
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

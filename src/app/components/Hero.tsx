import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="absolute left-[0.1875rem] top-[4.9375rem] hidden h-[43.75rem] w-[120rem] overflow-hidden bg-[#012F42] lg:block">

        {/* Background Texture */}
        <Image
          className="w-[120rem] h-[43.75rem] left-[0rem] top-[0rem] absolute opacity-[0.05] object-cover z-[1]"
          src="/Images/Rectangle 1071.png"
          alt="Background Texture"
          width={1920}
          height={700}
        />

{/* Main thick orange strip */}
<div className="absolute left-[131.25rem] top-[-23.0625rem] w-[11.1681rem] h-[96.6331rem] origin-top-left rotate-[30deg] bg-[#FE8F02] z-[3]" />

{/* Thin orange strip */}
<div className="absolute left-[100rem] top-[14.5369rem] w-[5.7019rem] h-[51.5375rem] origin-top-left rotate-[30deg] bg-[#FE8F02] z-[3]" />

        {/* Heading */}
        <div className="w-[36.25rem] left-[12.5rem] top-[3.75rem] absolute z-[10]">
          <span className="text-[#FE8F02] text-[4.375rem] font-['Outfit'] font-bold capitalize leading-[5rem] break-words">
            Box Truck{" "}
          </span>
          <span className="text-white text-[4.375rem] font-['Outfit'] font-bold capitalize leading-[5rem] break-words">
            Dispatch Service
          </span>
        </div>

        {/* Paragraph 1 */}
        <div className="w-[44.8125rem] left-[12.5rem] top-[15.625rem] absolute text-white text-[1.375rem] font-['DM_Sans'] font-normal break-words leading-[2rem] z-[10]">
          Sick and tired of struggling with paperwork and hunting for decent freight rates in between trips? Our box truck dispatch service will relieve you of all the common headaches truck drivers are forced to encounter daily.
        </div>

        {/* Paragraph 2 */}
        <div className="w-[43.4375rem] left-[12.5rem] top-[23.5rem] absolute text-white text-[1.375rem] font-['DM_Sans'] font-normal break-words leading-[2rem] z-[10]">
          No more clashes with greedy brokers or deadhead trips! Resolute Logisticsâ€™ box truck dispatch service will ensure that your box truck is always loaded and keeps generating profit for you instead of burning money as well as time and gas. You drive, we care!
        </div>

        {/* Button */}
        <button className="hover:bg-[#E07D02] hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95 w-[15.5rem] h-[3.125rem] pl-[1.25rem] pr-[1.25rem] pt-[0.625rem] pb-[0.625rem] left-[12.5rem] top-[32.625rem] absolute bg-[#FE8F02] rounded-[0.3125rem] justify-center items-center inline-flex border-none text-white text-[1.125rem] font-['Outfit'] font-medium capitalize z-[10]">
          Start Trucking Dispatch
        </button>

        {/* Truck Image */}
        <Image
          className="w-[66.625rem] h-[39.0625rem] left-[57.6875rem] top-[0rem] absolute object-contain z-[20]"
          src="/Images/Truck_Original_Sourced.png"
          alt="White Box Truck Dispatch"
          width={1066}
          height={625}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <section
        className="relative z-20 h-[43.75rem] w-full overflow-hidden bg-[#012F42] lg:hidden"
      >
        <Image
          className="absolute inset-0 z-[1] h-full w-full object-cover opacity-[0.05]"
          src="/Images/Rectangle 1071.png"
          alt="Background Texture"
          width={1920}
          height={700}
        />

        <div className="relative z-10 flex h-full flex-col px-5 pb-0 pt-8 sm:px-8 sm:pt-10 md:px-10">
          <div className="max-w-[42rem]">
            <h1 className="font-['Outfit'] text-[2.25rem] font-bold capitalize leading-[2.625rem] text-white sm:text-[3.25rem] sm:leading-[3.75rem]">
              <span className="text-[#FE8F02]">Box Truck </span>
              Dispatch Service
            </h1>

            <p className="mt-4 font-['DM_Sans'] text-[1rem] font-normal leading-[1.55rem] text-white sm:text-[1.125rem] sm:leading-[1.75rem]">
              Sick and tired of struggling with paperwork and hunting for decent freight rates in between trips? Our box truck dispatch service will relieve you of all the common headaches truck drivers are forced to encounter daily.
            </p>

            <p className="mt-3 font-['DM_Sans'] text-[1rem] font-normal leading-[1.55rem] text-white sm:text-[1.125rem] sm:leading-[1.75rem]">
              No more clashes with greedy brokers or deadhead trips! Resolute Logistics&apos; box truck dispatch service will ensure that your box truck is always loaded and keeps generating profit for you instead of burning money as well as time and gas. You drive, we care!
            </p>

            <button className="mt-5 inline-flex h-[3.125rem] w-full items-center justify-center rounded-[0.3125rem] border-none bg-[#FE8F02] px-5 font-['Outfit'] text-[1.0625rem] font-medium capitalize text-white transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95 sm:w-[15.5rem]">
              Start Trucking Dispatch
            </button>
          </div>

          <div className="relative mt-5 min-h-0 flex-1 overflow-visible sm:mt-6">
            <div className="absolute bottom-7 left-1/2 w-[21rem] max-w-[88vw] -translate-x-1/2 sm:bottom-8 sm:w-[24rem] sm:max-w-[68vw] md:w-[31rem] md:max-w-[62vw]">
              <div className="absolute bottom-[-20%] right-[25%] z-10 h-[118%] w-[12%] rotate-[30deg] bg-[#FE8F02]" />
              <div className="absolute bottom-[-10%] right-[18%] z-10 h-[82%] w-[6%] rotate-[30deg] bg-[#FE8F02]" />
              <Image
                className="relative z-20 h-auto w-full object-contain"
                src="/Images/Truck_Original_Sourced.png"
                alt="White Box Truck Dispatch"
                width={1650}
                height={953}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

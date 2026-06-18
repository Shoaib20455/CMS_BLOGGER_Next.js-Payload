import Image from "next/image";

export default function IntroSections() {
  return (
    <>
      <div className="hidden lg:block">
      {/* Section: Experts in Dispatching Box Trucks Help You Grow */}

      <div className="w-[60rem] h-[41.25rem] left-[0rem] top-[58.375rem] absolute bg-[#012F42]" />

      <div className="w-[35.1875rem] left-[12.5rem] top-[68.125rem] absolute text-white text-[3rem] font-['Outfit'] font-bold break-words">
        Experts in Dispatching Box Trucks Help You Grow
      </div>

      <div className="w-[35.8125rem] h-[8.5625rem] left-[12.5rem] top-[81.25rem] absolute text-[rgba(255,255,255,0.70)] text-[1.125rem] font-['DM_Sans'] font-normal break-words leading-[1.75rem]">
        Having 15 years of experience in freight brokerage, we are very much
        aware of the benefits you can derive from owning or leasing a box
        truck.&nbsp;
        <br />
        This type of equipment, also sometimes known as straight truck, comes
        with better maneuverability and lower gas mileage than those of
        semi-trucks, which makes it a perfect choice for local runs.
      </div>

      <Image
        className="w-[60rem] h-[41.25rem] left-[60rem] top-[58.375rem] absolute object-cover"
        src="/Images/Rectangle 1080.png"
        alt="Red Box Truck"
        width={960}
        height={660}
      />

      {/* Section: Box Truck Dispatchers for Owner Operators & Fleet Owners */}

      <Image
        className="w-[60rem] h-[41.25rem] left-[0rem] top-[99.625rem] absolute object-cover"
        src="/Images/Rectangle 1082.png"
        alt="Owner Operator Driver"
        width={960}
        height={660}
      />
      <div className="w-[60rem] h-[41.25rem] left-[60rem] top-[99.625rem] absolute bg-[#012F42]" />

      <div className="w-[35.1875rem] left-[71.6875rem] top-[105.8125rem] absolute text-white text-[3rem] font-['Outfit'] font-bold break-words">
        Box Truck Dispatchers for Owner Operators &amp; Fleet Owners
      </div>

      <div className="w-[35.8125rem] h-[15.75rem] left-[71.6875rem] top-[118.9375rem] absolute text-[rgba(255,255,255,0.70)] text-[1.125rem] font-['DM_Sans'] font-normal break-words leading-[1.75rem]">
        However, we also know that local delivery and relocations are not the
        only way for you to make money with your box truck. After all, the
        demand for moving services and goods delivery can be sporadic in your
        location, and you will need to fill in the gaps in order to receive a
        steady income.
        <br />
        But if entrusting the development of your business to our box truck
        dispatch company, you will be able to enjoy long-haul trips as well and
        add them to a continuous string of loads found by Resolute Logistics on
        your behalf.&nbsp;
        <br />
        To get more business even on a bad day, apply for straight truck
        dispatch service with us.
        <br />
      </div>

      {/* Section: Why Resolute Logistics? */}

      <div className="w-[60rem] h-[41.25rem] left-[0rem] top-[140.875rem] absolute bg-[#012F42]" />

      <div className="w-[35.1875rem] left-[12.5rem] top-[147.9375rem] absolute text-white text-[3rem] font-['Outfit'] font-bold break-words">
        Why Resolute Logistics?
      </div>

      <div className="w-[35.8125rem] h-[21.5rem] left-[12.5rem] top-[153.5625rem] absolute text-[rgba(255,255,255,0.70)] text-[1.125rem] font-['DM_Sans'] font-normal break-words leading-[1.75rem]">
        While box truck prices are quite affordable to start your own business
        and the operational costs are usually lower than expenditures associated
        with semi-trucks, you should keep in mind tough competition on the
        market: this accessibility means many other truckers are eager to start
        their business and make money.
        <br />
        Besides, box trucks cannot compete with semi-trailers in load capacity
        and cargo room flexibility, making many shippers give preference to the
        latter option and, thus, limiting your earning opportunities. These are
        all why it might be tricky to even find dispatching companies for box
        trucks.
        <br />
        Resolute Logistics, however, are happy to work with all non-local box
        truck owners and all drivers of straight box trucks having 26 ft or more
        in length and equipped with a lift gate. We are pros in dispatching box
        trucks, and you can leave all “back office” aspects to us!
        <br />
      </div>

      <Image
        className="w-[60rem] h-[41.25rem] left-[60rem] top-[140.875rem] absolute object-cover"
        src="/Images/Rectangle 1084.png"
        alt="Warehouse Coordination"
        width={960}
        height={660}
      />

      {/* Section: Full Range of Dispatch Services */}

      <Image
        className="w-[120rem] h-[38.125rem] left-[0rem] top-[182.125rem] absolute object-cover"
        src="/Images/Rectangle 1078.png"
        alt="Full Range of Dispatch Services"
        width={1920}
        height={610}
        loading="eager"
        fetchPriority="high"
      />
      <div className="w-[120rem] h-[38.125rem] left-[0rem] top-[182.125rem] absolute bg-[rgba(1,47,66,0.75)]" />

      <div className="w-[43.625rem] h-[15rem] left-[14.625rem] top-[191.3125rem] absolute text-[#F8FAFC] text-[3rem] font-['Outfit'] font-bold break-words leading-[3.625rem]">
        We provide a full range of dispatch services for straight box trucks
        having 26 ft or more in length, including:
      </div>

      <div className="w-[41.5625rem] left-[14.625rem] top-[208.1875rem] absolute text-white text-[1.125rem] font-['DM_Sans'] font-normal break-words leading-[1.75rem]">
        We are pros in dispatching box trucks, and you can leave all back-office
        aspects to us!
      </div>

      <div className="left-[70.75rem] top-[192.75rem] absolute flex flex-col gap-[1.75rem]">
        {[
          { num: "01.", text: "Goal-Oriented Approach" },

          { num: "02.", text: "Your Dedicated Box Truck Dispatcher" },

          { num: "03.", text: "Search For The Best Loads And Rates" },

          { num: "04.", text: "Meaningful Negotiations" },

          { num: "05.", text: "Paperwork Service For Box Truck" },
        ].map((item) => (
          <div key={item.num} className="flex gap-4 items-center">
            <span className="text-[#FE8F02] text-[1.875rem] font-['Outfit'] font-semibold capitalize">
              {item.num}
            </span>

            <span className="text-white text-[1.875rem] font-['Outfit'] font-semibold capitalize">
              {item.text}
            </span>
          </div>
        ))}
      </div>
      </div>

      <section
        data-responsive-section="intro"
        className="relative z-[21] w-full overflow-hidden bg-[#F8FAFC] lg:hidden"
      >
        <div className="bg-[#012F42] px-5 py-9 sm:px-8 sm:py-10">
          <div className="mx-auto grid max-w-[58rem] gap-6 min-[860px]:grid-cols-2 min-[860px]:items-center">
            <div>
              <h2 className="font-['Outfit'] text-[2rem] font-bold leading-[2.45rem] text-white sm:text-[2.25rem] sm:leading-[2.75rem]">
                Experts in Dispatching Box Trucks Help You Grow
              </h2>
              <p className="mt-4 font-['DM_Sans'] text-[1rem] leading-[1.625rem] text-[rgba(255,255,255,0.72)]">
                Having 15 years of experience in freight brokerage, we are very much aware of the benefits you can derive from owning or leasing a box truck. This type of equipment, also sometimes known as straight truck, comes with better maneuverability and lower gas mileage than semi-trucks.
              </p>
            </div>
            <Image
              className="aspect-[16/11] h-auto w-full object-cover"
              src="/Images/Rectangle 1080.png"
              alt="Red Box Truck"
              width={960}
              height={660}
            />
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#012F42] px-5 py-9 sm:px-8 sm:py-10">
          <div className="mx-auto grid max-w-[58rem] gap-6 min-[860px]:grid-cols-2 min-[860px]:items-center">
            <Image
              className="order-2 aspect-[16/11] h-auto w-full object-cover min-[860px]:order-1"
              src="/Images/Rectangle 1082.png"
              alt="Owner Operator Driver"
              width={960}
              height={660}
            />
            <div className="order-1 min-[860px]:order-2">
              <h2 className="font-['Outfit'] text-[2rem] font-bold leading-[2.45rem] text-white sm:text-[2.25rem] sm:leading-[2.75rem]">
                Box Truck Dispatchers for Owner Operators &amp; Fleet Owners
              </h2>
              <p className="mt-4 font-['DM_Sans'] text-[1rem] leading-[1.625rem] text-[rgba(255,255,255,0.72)]">
                If entrusting the development of your business to our box truck dispatch company, you will be able to enjoy long-haul trips and add them to a continuous string of loads found by Resolute Logistics on your behalf.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#012F42] px-5 py-9 sm:px-8 sm:py-10">
          <div className="mx-auto grid max-w-[58rem] gap-6 min-[860px]:grid-cols-2 min-[860px]:items-center">
            <div>
              <h2 className="font-['Outfit'] text-[2rem] font-bold leading-[2.45rem] text-white sm:text-[2.25rem] sm:leading-[2.75rem]">
                Why Resolute Logistics?
              </h2>
              <p className="mt-4 font-['DM_Sans'] text-[1rem] leading-[1.625rem] text-[rgba(255,255,255,0.72)]">
                We are happy to work with non-local box truck owners and drivers of straight box trucks having 26 ft or more in length and equipped with a lift gate. You can leave all back-office aspects to us.
              </p>
            </div>
            <Image
              className="aspect-[16/11] h-auto w-full object-cover"
              src="/Images/Rectangle 1084.png"
              alt="Warehouse Coordination"
              width={960}
              height={660}
            />
          </div>
        </div>

        <div className="relative min-h-[31.5rem] overflow-hidden px-5 py-10 sm:min-h-[32.5rem] sm:px-8 sm:py-12 min-[860px]:min-h-[23rem]">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="/Images/Rectangle 1078.png"
            alt="Full Range of Dispatch Services"
            width={1920}
            height={610}
          />
          <div className="absolute inset-0 bg-[rgba(1,47,66,0.78)]" />
          <div className="relative mx-auto grid max-w-[58rem] gap-7 min-[860px]:grid-cols-[1.05fr_0.95fr] min-[860px]:items-start">
            <div>
              <h2 className="font-['Outfit'] text-[1.875rem] font-bold leading-[2.3rem] text-white sm:text-[2.25rem] sm:leading-[2.75rem] min-[860px]:text-[2rem] min-[860px]:leading-[2.45rem]">
                We provide a full range of dispatch services for straight box trucks having 26 ft or more in length.
              </h2>
              <p className="mt-4 font-['DM_Sans'] text-[1rem] leading-[1.625rem] text-white">
                We are pros in dispatching box trucks, and you can leave all back-office aspects to us!
              </p>
            </div>
            <div className="space-y-3 min-[860px]:pt-1">
              {[
                { num: "01.", text: "Goal-Oriented Approach" },
                { num: "02.", text: "Your Dedicated Box Truck Dispatcher" },
                { num: "03.", text: "Search For The Best Loads And Rates" },
                { num: "04.", text: "Meaningful Negotiations" },
                { num: "05.", text: "Paperwork Service For Box Truck" },
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
                  <span className="shrink-0 font-['Outfit'] text-[1rem] font-semibold text-[#FE8F02] sm:text-[1.25rem] min-[860px]:text-[1.0625rem]">
                    {item.num}
                  </span>
                  <span className="min-w-0 font-['Outfit'] text-[1rem] font-semibold leading-[1.4rem] text-white sm:text-[1.25rem] sm:leading-[1.75rem] min-[860px]:text-[1.0625rem] min-[860px]:leading-[1.45rem]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

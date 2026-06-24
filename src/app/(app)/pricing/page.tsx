import type { Metadata } from "next";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Box Truck Dispatching Pricing",
  description:
    "Transparent box truck dispatching pricing, dispatch fee ranges, and benefits for owner-operators and fleets.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Box Truck Dispatching Pricing",
    description:
      "See box truck dispatching fee ranges, expected gross revenue ranges, and the benefits of working with our dispatch team.",
    url: "/pricing",
    type: "website",
  },
};

const feeRows = [
  {
    truckType: "Box Truck",
    ratePerMile: "$1.50 - $2.20",
    weeklyGross: "$5,500 - $7,500",
    dispatchFee: "6% - 8%",
  },
];

const advantages = [
  {
    title: "24/7 Support",
    description:
      "We are available around the clock to assist you and keep you on the road.",
  },
  {
    title: "Best Load Options",
    description:
      "Access high-paying loads from trusted brokers and shippers across the nation.",
  },
  {
    title: "Reliable & Transparent",
    description:
      "No hidden fees. We believe in clear communication and honest service.",
  },
  {
    title: "More Miles, More Profit",
    description:
      "Our dispatching solutions are designed to maximize your miles and earnings.",
  },
];

const benefits = [
  "Experienced dispatchers with industry expertise",
  "Strong network of brokers and quality loads",
  "Dedicated support for owner-operators and fleets",
  "Customized solutions to fit your business needs",
  "Committed to your success on every mile",
];

export default function PricingPage() {
  return (
    <div className="bg-[#F8FAFC] pt-8 lg:pt-20">
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42]">
  <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-r from-[#012F42]/95 to-[#012F42]/70 px-6 py-16 sm:px-10 lg:min-h-[500px] lg:px-[100px] lg:py-[122px]">
    <Image
      src="/Images/pricing hero.png"
      alt="Box truck dispatching pricing hero"
      fill
      priority
      sizes="(min-width: 1280px) 1520px, 100vw"
      className="absolute inset-0 object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#012F42]/95 to-[#012F42]/70" />

    <div className="relative z-10 max-w-[967px]">
      <h1 className="font-['Outfit'] text-[42px] font-bold capitalize leading-[52px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
        Reliable Dispatching. More Miles. More Profit.
      </h1>

      <p className="mt-8 max-w-[687px] font-['DM_Sans'] text-[18px] leading-8 text-white sm:text-[20px]">
        We specialize in box truck dispatching, connecting you with the
        best loads at competitive rates. Our goal is to keep your trucks
        moving and your business growing with reliable support 24/7.
      </p>
    </div>
  </div>
</section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="mx-auto max-w-[547px] text-center font-['Outfit'] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Box Truck Dispatching Fee Chart
        </h2>

        <div className="mt-[70px] overflow-hidden rounded-[10px] border border-[#012F42]">
          <div className="grid bg-[#FE8F02] text-white md:grid-cols-4">
            {["Truck Type", "Rate Per Mile", "Weekly Gross", "Dispatch Fee"].map(
              (heading) => (
                <div
                  key={heading}
                  className="border-b border-[#012F42] px-6 py-5 font-['Outfit'] text-[20px] font-semibold leading-8 md:border-b-0 md:border-r md:last:border-r-0 lg:px-[50px]"
                >
                  {heading}
                </div>
              ),
            )}
          </div>

          {feeRows.map((row) => (
            <div
              key={row.truckType}
              className="grid bg-white md:grid-cols-4"
            >
              <TableCell>{row.truckType}</TableCell>
              <TableCell>{row.ratePerMile}</TableCell>
              <TableCell>{row.weeklyGross}</TableCell>
              <TableCell last>{row.dispatchFee}</TableCell>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="text-center font-['Outfit'] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Our Key Advantages
        </h2>

        <div className="mt-[70px] grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="overflow-hidden rounded-[10px] border border-[#111827]/50 bg-white/20"
            >
              <div className="h-2.5 bg-[#012F42]" />
              <div className="p-5">
                <h3 className="min-h-16 font-['Outfit'] text-[20px] font-semibold leading-8 text-[#012F42]">
                  {advantage.title}
                </h3>
                <p className="mt-6 font-['DM_Sans'] text-[18px] leading-6 text-[#111827]/70">
                  {advantage.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-10 lg:grid-cols-[1fr_750px] lg:items-center lg:gap-[60px]">
        <div>
          <h2 className="font-['Outfit'] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
            Why Choose Us?
          </h2>

          <p className="mt-8 max-w-[710px] font-['DM_Sans'] text-[18px] leading-6 text-[#111827]/70">
            Our experienced dispatchers work hard to keep your trucks loaded
            and profitable. We focus on finding quality freight opportunities
            while reducing downtime and unnecessary deadhead miles.
          </p>

          <h3 className="mt-12 font-['Outfit'] text-[20px] font-semibold leading-8 text-[#012F42]">
            Benefits of Working With Us
          </h3>

          <ul className="mt-6 grid gap-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 font-['DM_Sans'] text-[16px] leading-6 text-[#5B6472]"
              >
                <CheckIcon />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[750/434] overflow-hidden rounded-[10px] bg-[#E2E8F0]">
          <Image
            src="/Images/Rectangle 1686@2x.png"
            alt="Dispatcher supporting box truck business growth"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px] rounded-[10px] bg-[#012F42] px-6 py-12 sm:px-10 lg:grid lg:min-h-[535px] lg:grid-cols-[1fr_720px] lg:gap-20 lg:px-[100px] lg:py-[50px]">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-[462px] font-['Outfit'] text-[42px] font-bold leading-[54px] text-white lg:text-[48px] lg:leading-[60px]">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-10 max-w-[395px] font-['DM_Sans'] text-[18px] leading-7 text-white/70">
            Contact us today and start running high-paying loads!
          </p>
        </div>

        <form className="mt-10 rounded-[10px] bg-white/10 p-6 lg:mt-0 lg:p-[50px]">
          <div className="grid gap-5 sm:grid-cols-2">
            <CtaField label="First Name" placeholder="Enter First Name" />
            <CtaField label="Last Name" placeholder="Enter Last Name" />
            <CtaField label="Phone Number" placeholder="+1 (000) 123-1234" />
            <CtaField label="Email Address" placeholder="email@gmail.com" />
            <CtaField label="Truck Type" placeholder="Enter Truck Type" />
            <CtaField label="MC Number" placeholder="Enter MC Number" />
          </div>

          <button
            type="submit"
            className="mt-6 flex h-12 w-full items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-['Outfit'] text-[18px] font-medium capitalize text-white transition-colors hover:bg-[#E07D02]"
          >
            Get Started Now
          </button>
        </form>
      </section>
    </div>
  );
}

function TableCell({
  children,
  last = false,
}: {
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`border-b border-[#012F42] px-6 py-5 font-['DM_Sans'] text-[18px] leading-6 text-[#111827]/70 md:border-b-0 lg:px-[50px] ${
        last ? "" : "md:border-r"
      }`}
    >
      {children}
    </div>
  );
}

function CtaField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="font-['Outfit'] text-[16px] font-medium text-white">
        {label}
      </span>

      <input
        className="mt-2.5 h-11 w-full rounded-[5px] border border-white/5 bg-[#012F42]/60 px-5 font-['DM_Sans'] text-[14px] font-light text-white outline-none transition-colors placeholder:text-white/70 focus:border-[#FE8F02]"
        placeholder={placeholder}
      />
    </label>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#FE8F02]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

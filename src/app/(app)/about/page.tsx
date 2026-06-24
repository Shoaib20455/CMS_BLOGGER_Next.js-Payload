import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "About Box Truck Dispatching",
  description:
    "Learn about Box Truck Dispatching, our story, founder, services, coverage areas, and carrier support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Box Truck Dispatching",
    description:
      "Learn about Box Truck Dispatching, our story, founder, services, coverage areas, and carrier support.",
    url: "/about",
    type: "website",
  },
};

const storyParagraphs = [
  "Box Truck Dispatching was founded with a vision to simplify freight operations for independent carriers and small fleet owners.",
  "After years of experience working with brokers, shippers, dispatch teams, and owner-operators, our leadership recognized a common challenge: many box truck businesses spend too much time searching for loads and handling paperwork instead of generating revenue.",
  "To solve this problem, we built a dedicated dispatching company focused exclusively on helping box truck operators find consistent freight opportunities while reducing administrative burdens.",
  "Today, we proudly support carriers across multiple states and continue helping trucking businesses scale with confidence.",
];

const founderValues = ["Transparency", "Profitability", "Long-Term Relationship"];

const services = [
  "Load Booking Services",
  "Dedicated Truck Dispatcher",
  "Factoring Assistance",
  "Paperwork Management",
  "Driver Hiring Support",
  "MC Setup Services",
  "Accounting Support",
  "Lease On Assistance",
];

const industries = [
  "Independent Owner Operators",
  "Box Truck Carriers",
  "Last-Mile Delivery Companies",
  "Regional Freight Operators",
  "Local Delivery Providers",
  "Expedited Freight Businesses",
  "Fleet Owners",
  "Contract Carriers",
];

const areas = [
  { title: "Ohio", image: "/Images/Rectangle 237.png" },
  { title: "Indiana", image: "/Images/Rectangle 237 (1).png" },
  { title: "Texas", image: "/Images/Rectangle 237 (2).png" },
  { title: "Florida", image: "/Images/Rectangle 237 (3).png" },
  { title: "New York", image: "/Images/Rectangle 237 (4).png" },
  { title: "California", image: "/Images/Rectangle 1138@2x.png" },
  { title: "Kentucky", image: "/Images/Rectangle 1138@2x (1).png" },
  { title: "Illinois", image: "/Images/Rectangle 1138@2x (2).png" },
];

const contactCards = [
  { label: "Phone:", value: "(800) 555-2478", icon: <PhoneIcon /> },
  {
    label: "Email:",
    value: "info@boxtruckdispatching.com",
    icon: <MailIcon />,
  },
  {
    label: "Business Hours:",
    value: "Monday - Friday: 8:00 AM - 6:00 PM",
    icon: <ClockIcon />,
  },
  {
    label: "Service Area:",
    value: "1250 Logistics Parkway, Suite 400 Columbus, OH 43215",
    icon: <MapPinIcon />,
  },
];

const benefits = [
  "Dedicated Box Truck Dispatchers",
  "Quality Freight Opportunities",
  "Rate Negotiation Support",
  "Broker Management",
  "Documentation Assistance",
  "Nationwide Dispatch Coverage",
];

const carrierReasons = [
  {
    title: "Dedicated Dispatch Support",
    description:
      "Every client receives personalized dispatch assistance focused on maximizing profitability.",
    open: true,
  },
  { title: "Strong Broker Relationships" },
  { title: "Rate Negotiation Expertise" },
  { title: "Administrative Relief" },
  { title: "Growth-Oriented Partnership" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] pt-8 lg:pt-20">
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42]">
        <div className="relative min-h-[500px] overflow-hidden bg-gradient-to-r from-[#012F42]/95 to-[#012F42]/70 px-6 py-14 sm:px-10 lg:px-[100px] lg:py-[69px]">
          <div className="absolute right-[-120px] top-[-180px] h-[760px] w-[170px] rotate-[15deg] bg-[#FE8F02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(254,143,2,0.24),transparent_35%)]" />

          <div className="relative z-10 max-w-[1156px]">
            <h1 className="font-['Outfit'] text-[42px] font-bold capitalize leading-[52px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
              About Box Truck Dispatching
            </h1>

            <p className="mt-7 font-['DM_Sans'] text-[20px] font-bold text-white">
              Keeping Box Trucks Moving Across America
            </p>

            <div className="mt-7 grid max-w-[1143px] gap-5 font-['DM_Sans'] text-[18px] leading-8 text-white sm:text-[20px]">
              <p>
                At Box Truck Dispatching, we help owner-operators and fleet
                owners find profitable freight, reduce deadhead miles, and keep
                their trucks moving consistently. Our mission is simple: handle
                the time-consuming dispatching work so drivers can focus on the
                road and growing their business.
              </p>
              <p>
                From load booking and rate negotiation to paperwork management
                and driver support, we provide complete dispatch solutions
                designed specifically for box truck carriers operating
                throughout the United States.
              </p>
              <p>
                Whether you run a single truck or manage a growing fleet, our
                team works as an extension of your business, helping you secure
                quality freight and maximize revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-6 lg:grid-cols-[1fr_626px] lg:items-start">
        <div className="flex h-full flex-col">
          <h2 className="font-['Outfit'] text-[32px] font-bold leading-[40px] text-[#012F42] lg:text-[36px] lg:leading-[44px]">
            Our Story
          </h2>

          <div className="mt-6 grid max-w-[857px] gap-3 font-['DM_Sans'] text-[14px] leading-5 text-[#5B6472] lg:text-[15px] lg:leading-6">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="relative mt-10 aspect-[857/296] overflow-hidden rounded-[10px] bg-[#E2E8F0] lg:mt-auto">
            <Image
              src="/Images/load-booking.png"
              alt="Box truck outside a warehouse"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative aspect-[626/700] overflow-hidden rounded-[10px] bg-[#E2E8F0]">
          <Image
            src="/Images/Truck_Original_Sourced.png"
            alt="Box truck parked roadside"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-12 lg:grid-cols-[750px_1fr] lg:items-center lg:gap-14">
        <div className="relative aspect-[750/700] overflow-hidden rounded-[10px] bg-[#012F42]">
          <Image
            src="/Images/James Carter.png"
            alt="Michael Carter"
            fill
            className="object-cover object-top"
          />
        </div>

        <div>
          <p className="font-['Outfit'] text-[20px] font-semibold leading-8 text-[#FE8F02]">
            Meet Our Founder
          </p>
          <div className="mt-3 h-0.5 w-14 bg-[#FE8F02]" />

          <h2 className="mt-10 font-['Outfit'] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
            Michael Carter
          </h2>

          <p className="mt-7 font-['Outfit'] text-[20px] font-semibold leading-8 text-[#012F42]">
            Founder &amp; Operations Director
          </p>

          <div className="mt-7 grid gap-4 font-['DM_Sans'] text-[18px] leading-7 text-[#5B6472]">
            <p>
              Michael Carter brings years of transportation and logistics
              experience to the company. Having worked closely with carriers,
              freight brokers, and dispatch operations, he understands the daily
              challenges box truck businesses face.
            </p>
            <p>
              His goal has always been to create a dispatch service that
              prioritizes transparency, profitability, and long-term
              relationships. Under his leadership, Box Truck Dispatching has
              grown into a trusted dispatch partner for carriers across the
              country.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {founderValues.map((value) => (
              <div key={value} className="text-center">
                <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-[10px] bg-[#FE8F02]/15 text-[#FE8F02]">
                  <CheckIcon large />
                </span>
                <h3 className="mt-5 font-['Outfit'] text-[20px] font-semibold leading-8 text-[#012F42]">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-10 lg:grid-cols-[570px_1fr] lg:items-center">
        <div>
          <h2 className="font-['Outfit'] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
            What We Do
          </h2>
          <p className="mt-7 font-['DM_Sans'] text-[18px] leading-7 text-[#5B6472]">
            We provide comprehensive dispatching and trucking support services
            including:
          </p>

          <div className="relative mt-10 aspect-[570/344] overflow-hidden rounded-[10px] bg-[#E2E8F0]">
            <Image
              src="/Images/load-booking.png"
              alt="Load booking dispatch service"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service}
              className="flex min-h-24 items-center rounded-[10px] border border-[#A3A3A3] bg-white px-7"
            >
              <h3 className="font-['Outfit'] text-[20px] font-semibold leading-8 text-[#012F42]">
                {service}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 overflow-hidden bg-[#012F42]">
        <div className="relative mx-auto min-h-[610px] w-full max-w-[1920px] px-5 py-20 text-center sm:px-8">
          <Image
            src="/Images/Truck_Original_Sourced.png"
            alt=""
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[#012F42]/60" />

          <div className="relative z-10 mx-auto max-w-[1520px]">
            <h2 className="font-['Outfit'] text-[40px] font-bold leading-[50px] text-[#F8FAFC] lg:text-[48px] lg:leading-[58px]">
              Industries We Serve
            </h2>

            <div className="mt-[70px] flex flex-wrap justify-center gap-6">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-[5px] bg-white/10 px-8 py-5 font-['Outfit'] text-[24px] font-semibold capitalize text-white backdrop-blur-lg lg:px-12 lg:py-6 lg:text-[30px]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-10 lg:grid-cols-[570px_1fr]">
        <div>
          <h2 className="max-w-[597px] font-['Outfit'] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
            Areas We Serve
          </h2>
          <p className="mt-7 max-w-[522px] font-['DM_Sans'] text-[18px] leading-7 text-[#5B6472]">
            We provide dispatch services across all major and regional cities in
            Ohio, ensuring consistent load availability and strong lane coverage.
            From high-demand freight hubs to local delivery routes, our network
            keeps your truck moving efficiently statewide.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {areas.map((area) => (
            <TileCard key={area.title} title={area.title} image={area.image} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-10 lg:grid-cols-[802px_1fr] lg:items-start">
        <div className="rounded-[10px] bg-[#012F42] p-6 sm:p-10 lg:p-[50px]">
          <h2 className="font-['Outfit'] text-[30px] font-semibold leading-10 text-white">
            Contact Information
          </h2>

          <div className="mt-8 grid gap-6 lg:mt-10">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="flex min-h-24 items-center gap-5 rounded-[10px] bg-white/20 p-5"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[5px] bg-[#FE8F02] text-white">
                  {card.icon}
                </span>

                <div>
                  <h3 className="font-['Outfit'] text-[20px] font-semibold leading-8 text-white">
                    {card.label}
                  </h3>
                  <p className="mt-1 font-['DM_Sans'] text-[18px] leading-7 text-white">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-['Outfit'] text-[30px] font-semibold leading-10 text-white lg:mt-[74px]">
            Connect with me
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            {["f", "x", "in", "ig"].map((item) => (
              <a
                key={item}
                href="#social"
                className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-[#FE8F02] font-['Outfit'] text-[14px] font-semibold uppercase text-[#012F42] transition-colors hover:bg-white"
                aria-label={`Follow us on ${item}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[10px] border border-[#A3A3A3] bg-white p-8">
          <h2 className="font-['Outfit'] text-[20px] font-semibold leading-8 text-[#012F42]">
            Why Work With Us?
          </h2>

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
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="mx-auto max-w-[781px] text-center font-['Outfit'] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Why Carriers Choose Us
        </h2>

        <div className="mt-[70px] grid gap-5 lg:grid-cols-[750px_1fr]">
          <div className="relative aspect-[750/518] overflow-hidden rounded-[10px] bg-[#E2E8F0]">
            <Image
              src="/Images/Rectangle 1120.png"
              alt="Carrier support"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid gap-5">
            {carrierReasons.map((reason) => (
              <article
                key={reason.title}
                className={`rounded-[10px] border border-gray-900/50 bg-white px-5 ${
                  reason.open ? "py-5" : "py-6"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-['Outfit'] text-[20px] font-semibold leading-8 text-[#012F42]">
                      {reason.title}
                    </h3>
                    {reason.description && (
                      <p className="mt-4 max-w-[710px] font-['DM_Sans'] text-[18px] leading-6 text-gray-900/70">
                        {reason.description}
                      </p>
                    )}
                  </div>
                  <span className="mt-3 text-[#012F42]" aria-hidden="true">
                    {reason.open ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[10px] bg-[#012F42] lg:grid-cols-2">
        <div className="px-6 py-12 sm:px-10 lg:px-[50px] lg:py-[145px]">
          <h2 className="max-w-[641px] font-['Outfit'] text-[40px] font-bold capitalize leading-[52px] text-[#FE8F02] lg:text-[48px] lg:leading-[60px]">
            Contact Our Dispatch Team
          </h2>

          <p className="mt-8 font-['DM_Sans'] text-[18px] font-bold leading-7 text-white">
            Ready to keep your box truck moving?
          </p>
          <p className="mt-3 max-w-[636px] font-['DM_Sans'] text-[18px] leading-7 text-white">
            Whether you need help finding freight, negotiating rates, managing
            paperwork, or growing your operation, our team is ready to help.
          </p>
          <p className="mt-3 max-w-[636px] font-['DM_Sans'] text-[18px] leading-7 text-white">
            Visit our Contact Us page or call today to speak with a dedicated
            box truck dispatch specialist.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-['Outfit'] text-[18px] font-medium capitalize text-white no-underline transition-colors hover:bg-[#E07D02]"
            >
              Start Dispatching Today
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[5px] border border-[#FE8F02] px-5 font-['Outfit'] text-[18px] font-medium capitalize text-[#FE8F02] no-underline transition-colors hover:bg-white/10"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[585px]">
          <Image
            src="/Images/Rectangle 1138@2x.png"
            alt="Dispatch consultation"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}

function TileCard({ title, image }: { title: string; image: string }) {
  return (
    <article className="group relative aspect-square overflow-hidden rounded-[10px] bg-[#012F42]">
      <Image
        src={image}
        alt={`${title} dispatch coverage`}
        fill
        sizes="(min-width: 1280px) 288px, (min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#012F42]/10 to-[#012F42]/80" />
      <div className="absolute inset-x-0 bottom-0 h-2.5 bg-[#012F42]" />
      <h3 className="absolute bottom-8 left-5 right-4 font-['Outfit'] text-[18px] font-semibold leading-7 text-white xl:text-[20px] xl:leading-8">
        {title}
      </h3>
    </article>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.92.33 1.82.62 2.68a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.4-1.19a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.68.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon({ large = false }: { large?: boolean }) {
  return (
    <svg
      className={large ? "h-9 w-9" : "h-5 w-5 shrink-0 text-[#FE8F02]"}
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

function PlusIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

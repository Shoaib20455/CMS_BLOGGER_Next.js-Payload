import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Load Booking",
    description:
      "We negotiate with brokers, find high-paying loads, and keep your truck moving with profitable freight. Our team focuses on maximizing revenue while minimizing deadhead miles.",
    image: "/Images/Rectangle 1078.png",
    featured: true,
  },
  {
    title: "Dedicated Truck Dispatcher",
    image: "/Images/Rectangle 1080.png",
  },
  {
    title: "Factoring",
    image: "/Images/Rectangle 1082.png",
  },
  {
    title: "Paper Work",
    image: "/Images/Rectangle 1084.png",
  },
  {
    title: "Driver Hiring",
    image: "/Images/Rectangle 1093.png",
  },
  {
    title: "MC Setup",
    image: "/Images/Rectangle 11.png",
  },
  {
    title: "Accounting",
    image: "/Images/Rectangle 1120.png",
  },
  {
    title: "Lease On",
    image: "/Images/Rectangle 1117.png",
  },
];

const quickLinks = ["Home", "About", "Service", "States", "Blog", "Contact"];
const serviceLinks = [
  "Load Booking",
  "Dedicated Truck Dispatcher",
  "Factoring",
  "Paper Work",
  "Driver Hiring",
  "MC Setup",
  "Accounting",
  "Lease On",
];

export default function ServiceDetailPage() {
  return (
    <div className="bg-[#F8FAFC] pt-16 lg:pt-40">
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42]">
        <div className="relative min-h-[420px] overflow-hidden px-6 py-16 sm:px-10 lg:min-h-[500px] lg:px-[100px] lg:py-[121px]">
          <Image
            src="/Images/Rectangle 1071.png"
            alt=""
            fill
            priority
            className="object-cover opacity-10"
          />
          <div className="absolute right-[-160px] top-[-160px] h-[720px] w-[150px] rotate-[15deg] bg-[#FE8F02]" />

          <div className="relative z-10 max-w-[970px]">
            <h1 className="font-['Outfit'] text-[42px] font-bold capitalize leading-[52px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
              Providing Best Box Trucking Services in the USA
            </h1>

            <p className="mt-8 max-w-[904px] font-['DM_Sans'] text-[18px] leading-8 text-white sm:text-[20px]">
              Our commitment to reliability, compliance, and 24/7 availability
              drives us to deliver the best truck dispatch services, tailored to
              meet the operational needs of owner-operators and small fleets
              across all 48 states in the USA.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="text-center font-['Outfit'] text-[42px] font-bold leading-[52px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Our Services
        </h2>

        <div className="mt-[70px] grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative h-[350px] overflow-hidden rounded-[10px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b ${
                  service.featured
                    ? "from-[#FE8F02]/10 to-[#FE8F02]"
                    : "from-[#012F42]/10 to-[#012F42]/80"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 h-2.5 w-full ${
                  service.featured ? "bg-[#FE8F02]" : "bg-[#012F42]"
                }`}
              />

              <div className="absolute inset-x-5 bottom-8">
                {service.description && (
                  <p className="mb-[92px] font-['DM_Sans'] text-[18px] leading-[25px] text-white">
                    {service.description}
                  </p>
                )}

                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-['Outfit'] text-[22px] font-semibold leading-8 text-white">
                    {service.title}
                  </h3>

                  <span
                    className={`flex h-6 w-8 shrink-0 items-center justify-center rounded-[2px] ${
                      service.featured ? "bg-white/30" : "bg-[#FE8F02]"
                    }`}
                  >
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px] rounded-[10px] bg-[#012F42] px-6 py-12 sm:px-10 lg:grid lg:min-h-[535px] lg:grid-cols-[1fr_720px] lg:gap-20 lg:px-[100px] lg:py-[50px]">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-[420px] font-['Outfit'] text-[42px] font-bold leading-[54px] text-white lg:text-[48px] lg:leading-[60px]">
            Box Truck Dispatching
          </h2>

          <p className="mt-10 max-w-[395px] font-['DM_Sans'] text-[18px] leading-7 text-white/70">
            Fill out the form to connect with our expert dispatch team and
            start getting high-paying loads with full support and zero stress.
          </p>
        </div>

        <form className="mt-10 rounded-[10px] bg-white/10 p-6 lg:mt-0 lg:p-[50px]">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="First Name" placeholder="Enter First Name" />
            <FormField label="Last Name" placeholder="Enter Last Name" />
            <FormField label="Phone Number" placeholder="+1 (000) 123-1234" />
            <FormField label="Email Address" placeholder="email@gmail.com" />
            <FormField label="Truck Type" placeholder="Enter Truck Type" />
            <FormField label="MC Number" placeholder="Enter MC Number" />
          </div>

          <button
            type="submit"
            className="mt-6 flex h-12 w-full items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-['Outfit'] text-[18px] font-medium capitalize text-white transition-colors hover:bg-[#E07D02]"
          >
            Get Started Now
          </button>
        </form>
      </section>

      <LandingStyleFooter />
    </div>
  );
}

function FormField({
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

function LandingStyleFooter() {
  return (
    <footer className="mt-20 bg-[#012F42] text-white">
      <div className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1520px] gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_1fr_0.95fr] lg:gap-[110px]">
        <div>
          <Image
            src="/Images/Rectangle 6.png"
            alt="Box Truck Dispatching Logo"
            width={109}
            height={80}
            className="h-20 w-[109px] object-contain"
          />
          <p className="mt-5 max-w-[337px] font-['Poppins'] text-[14px] font-medium leading-6">
            Box Truck Dispatching offers reliable and profit driven truck
            dispatching services across the United States. We help owner
            operators and fleets secure high-paying loads, reduce deadhead
            miles, and streamline operations for maximum efficiency.
          </p>
          <div className="mt-9 flex gap-3">
            {["f", "t", "in", "ig"].map((item) => (
              <span
                key={item}
                className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-[#003951] font-['DM_Sans'] text-[12px] font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links" items={quickLinks} />
        <FooterColumn title="Our Services" items={serviceLinks} />

        <div>
          <h3 className="font-['Outfit'] text-[22px] font-semibold leading-[30px] text-[#FE8F02]">
            Get In Touch
          </h3>
          <div className="mt-6 space-y-5 font-['DM_Sans']">
            <ContactItem label="Phone" value="(555) 123-4567" icon="phone" />
            <ContactItem label="Email" value="info@avenuemh.com" icon="mail" />
            <ContactItem
              label="Location"
              value="Serving All 48 States"
              icon="pin"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-[#003951]">
        <div className="mx-auto flex w-[calc(100%_-_40px)] max-w-[1520px] flex-col gap-4 py-6 font-['DM_Sans'] text-[14px] leading-[25px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; 2026, Box Truck Dispatching, Design &amp; Developed By{" "}
            <strong>BitBlazeTec</strong>
          </p>
          <div className="flex flex-wrap gap-[30px]">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
              (item) => (
                <Link
                  key={item}
                  href="/"
                  className="text-white no-underline transition-colors hover:text-[#FE8F02]"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-['Outfit'] text-[22px] font-semibold leading-[30px] text-[#FE8F02]">
        {title}
      </h3>
      <div className="mt-6 grid gap-[15px]">
        {items.map((item) => (
          <Link
            key={item}
            href="/"
            className="font-['DM_Sans'] text-[18px] font-medium leading-5 text-white no-underline transition-colors hover:text-[#FE8F02]"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ContactItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: "phone" | "mail" | "pin";
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-[14px] font-semibold">
        <ContactIcon type={icon} />
        {label}
      </p>
      <p className="mt-2 text-[18px] font-medium">{value}</p>
    </div>
  );
}

function ContactIcon({ type }: { type: "phone" | "mail" | "pin" }) {
  if (type === "mail") {
    return (
      <svg className="h-[14px] w-[14px] text-[#FE8F02]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg className="h-[14px] w-[14px] text-[#FE8F02]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  return (
    <svg className="h-[14px] w-[14px] text-[#FE8F02]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

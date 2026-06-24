import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Contact Box Truck Dispatching",
  description:
    "Contact Box Truck Dispatching for dispatch support, load booking, rate negotiation, and a free consultation for your trucking operation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Box Truck Dispatching",
    description:
      "Request a free consultation with our dispatch specialists and keep your trucks moving with reliable freight support.",
    url: "/contact",
    type: "website",
  },
};

const contactCards = [
  {
    label: "Phone:",
    value: "+1 (555) 123-4567",
    icon: <PhoneIcon />,
  },
  {
    label: "Email:",
    value: "boxtruckdispatch@gmail.com",
    icon: <MailIcon />,
  },
  {
    label: "Business Hours:",
    value: "Monday - Friday: 8:00 AM - 6:00 PM",
    icon: <ClockIcon />,
  },
  {
    label: "Service Area:",
    value: "All 50 U.S. States",
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

const testimonials = [
  {
    name: "James Carter",
    role: "Owner Operator",
    quote:
      "Consistent loads with better rates every week. I no longer waste time searching or negotiating.",
    active: true,
  },
  {
    name: "Sophia Williams",
    role: "Fleet Owner",
    quote:
      "Dispatch runs smoothly without stress. My trucks stay loaded, and downtime has dropped significantly.",
  },
  {
    name: "David Thompson",
    role: "Flatbed Driver",
    quote:
      "Strong rate negotiation and proper load planning. I am seeing higher RPM and fewer empty miles.",
  },
  {
    name: "Emily Johnson",
    role: "New Authority",
    quote:
      "Got loads quickly after setup. Clear guidance and full support made the process simple.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] pt-8 lg:pt-20">
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42]">
        <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-r from-[#012F42]/95 to-[#012F42]/70 px-6 py-16 sm:px-10 lg:min-h-[500px] lg:px-[100px] lg:py-[137px]">
          <div className="absolute right-[-120px] top-[-180px] h-[760px] w-[170px] rotate-[15deg] bg-[#FE8F02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(254,143,2,0.24),transparent_35%)]" />

          <div className="relative z-10 max-w-[970px]">
            <h1 className="font-['Outfit'] text-[42px] font-bold capitalize leading-[52px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
              Contact Us
            </h1>

            <p className="mt-6 font-['Outfit'] text-[24px] font-bold leading-8 text-[#FE8F02] sm:text-[30px] sm:leading-10">
              Let&apos;s Keep Your Trucks Moving
            </p>

            <p className="mt-8 max-w-[687px] font-['DM_Sans'] text-[18px] leading-8 text-white sm:text-[20px]">
              Get in touch today to learn how our dispatching services can help
              you increase revenue and spend more time on the road.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-10 lg:grid-cols-[626px_1fr] lg:items-start lg:gap-[176px]">
        <div>
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

          <div className="mt-[30px] rounded-[10px] border border-[#A3A3A3] bg-white p-8">
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
        </div>

        <div className="rounded-[10px] border border-[#A3A3A3] bg-white/60 p-6 sm:p-10 lg:p-[50px]">
          <h2 className="font-['Outfit'] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
            Request a Free Consultation
          </h2>

          <p className="mt-6 max-w-[614px] font-['DM_Sans'] text-[18px] leading-7 text-[#5B6472]">
            Complete the form below and one of our dispatch specialists will
            contact you shortly.
          </p>

          <form className="mt-8 grid gap-5 lg:mt-12">
            <ContactField label="Full Name" placeholder="John Doe" />
            <ContactField label="Phone Number" placeholder="(555) 000-0000" />
            <ContactField
              label="Email Address"
              placeholder="name@company.com"
              type="email"
            />
            <ContactField
              label="Company Name (OPTIONAL)"
              placeholder="Logistics LLC"
            />
            <ContactField label="MC Number" placeholder="MC# 000000" />

            <label className="block">
              <span className="font-['Outfit'] text-[16px] font-semibold leading-6 text-[#012F42]">
                Truck Type
              </span>

              <select className="mt-2 h-14 w-full rounded-[5px] border border-[#D4D4D4] bg-[#F8FAFC] px-4 font-['DM_Sans'] text-[16px] text-[#5B6472] outline-none transition-colors focus:border-[#FE8F02]">
                <option>Box Truck</option>
                <option>Dry Van</option>
                <option>Flatbed</option>
                <option>Reefer</option>
                <option>Power Only</option>
              </select>
            </label>

            <ContactField
              label="Preferred Lanes or States"
              placeholder="e.g. TX, GA, FL, or Midwest Region"
            />

            <label className="block">
              <span className="font-['Outfit'] text-[16px] font-semibold leading-6 text-[#012F42]">
                Message
              </span>

              <textarea
                className="mt-2 min-h-[132px] w-full resize-y rounded-[5px] border border-[#D4D4D4] bg-[#F8FAFC] px-4 py-4 font-['DM_Sans'] text-[16px] text-[#111827] outline-none transition-colors placeholder:text-[#6B7280] focus:border-[#FE8F02]"
                placeholder="Tell us about your current operation..."
              />
            </label>

            <button
              type="submit"
              className="mt-4 flex h-12 w-full items-center justify-center rounded-[5px] bg-[#FE8F02] px-8 font-['Outfit'] text-[16px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#E07D02]"
            >
              Request Free Consultation
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-['Outfit'] text-[40px] font-semibold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
            What Our Clients Say
          </h2>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-[#012F42] text-white"
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-[#FE8F02] text-white"
              aria-label="Next testimonial"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={`rounded-[10px] border bg-white px-7 py-8 text-center ${
                testimonial.active ? "border-[#FE8F02]" : "border-[#A3A3A3]"
              }`}
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#012F42] font-['Outfit'] text-[28px] font-semibold text-white">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>

              <div
                className={`mx-auto mt-5 h-0.5 w-40 rounded-full ${
                  testimonial.active ? "bg-[#FE8F02]" : "bg-[#A3A3A3]"
                }`}
              />

              <h3 className="mt-5 font-['Outfit'] text-[20px] font-semibold leading-8 text-[#012F42]">
                {testimonial.name}
              </h3>

              <p className="font-['DM_Sans'] text-[14px] font-medium leading-6 text-[#FE8F02]">
                {testimonial.role}
              </p>

              <div className="mt-6 flex justify-center gap-1 text-[#FE8F02]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>

              <p className="mt-4 font-['DM_Sans'] text-[18px] leading-7 text-[#5B6472]">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px] rounded-[10px] bg-[#012F42] px-6 py-12 sm:px-10 lg:grid lg:min-h-[535px] lg:grid-cols-[1fr_720px] lg:gap-20 lg:px-[100px] lg:py-[50px]">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-[462px] font-['Outfit'] text-[42px] font-bold leading-[54px] text-white lg:text-[48px] lg:leading-[60px]">
            Ready to Find Better Loads?
          </h2>

          <p className="mt-10 max-w-[395px] font-['DM_Sans'] text-[18px] leading-7 text-white/70">
            Stop spending hours searching load boards. Let our experienced
            dispatch team handle the freight while you focus on driving and
            growing your business.
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

function ContactField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="font-['Outfit'] text-[16px] font-semibold leading-6 text-[#012F42]">
        {label}
      </span>

      <input
        type={type}
        className="mt-2 h-14 w-full rounded-[5px] border border-[#D4D4D4] bg-[#F8FAFC] px-4 font-['DM_Sans'] text-[16px] text-[#111827] outline-none transition-colors placeholder:text-[#6B7280] focus:border-[#FE8F02]"
        placeholder={placeholder}
      />
    </label>
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

function StarIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 2 2.9 6.26 6.85.82-5.06 4.69 1.34 6.76L12 17.14l-6.03 3.39 1.34-6.76-5.06-4.69 6.85-.82L12 2z" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

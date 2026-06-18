"use client";

import Image from "next/image";
import Link from "next/link";
import { useLandingPageLayout } from "./LandingPageFrame";

const footerTopClasses: Record<
  number,
  {
    footer: string;
    logo: string;
    description: string;
    socials: string;
    heading: string;
    links: string;
    phoneIcon: string;
    phoneLabel: string;
    phoneValue: string;
    emailIcon: string;
    emailLabel: string;
    emailValue: string;
    locationIcon: string;
    locationLabel: string;
    locationValue: string;
    divider: string;
    bottom: string;
  }
> = {
  8808: {
    footer: "top-[550.5rem]",
    logo: "top-[553.625rem]",
    description: "top-[559.875rem]",
    socials: "top-[570.25rem]",
    heading: "top-[553.625rem]",
    links: "top-[556.75rem]",
    phoneIcon: "top-[556.75rem]",
    phoneLabel: "top-[556.875rem]",
    phoneValue: "top-[558.5rem]",
    emailIcon: "top-[561.125rem]",
    emailLabel: "top-[561.25rem]",
    emailValue: "top-[562.875rem]",
    locationIcon: "top-[565.5rem]",
    locationLabel: "top-[565.625rem]",
    locationValue: "top-[567.25rem]",
    divider: "top-[576.4375rem]",
    bottom: "top-[578.375rem]"
  },
  8915: {
    footer: "top-[557.1875rem]",
    logo: "top-[560.3125rem]",
    description: "top-[566.5625rem]",
    socials: "top-[576.9375rem]",
    heading: "top-[560.3125rem]",
    links: "top-[563.4375rem]",
    phoneIcon: "top-[563.4375rem]",
    phoneLabel: "top-[563.5625rem]",
    phoneValue: "top-[565.1875rem]",
    emailIcon: "top-[567.8125rem]",
    emailLabel: "top-[567.9375rem]",
    emailValue: "top-[569.5625rem]",
    locationIcon: "top-[572.1875rem]",
    locationLabel: "top-[572.3125rem]",
    locationValue: "top-[573.9375rem]",
    divider: "top-[583.125rem]",
    bottom: "top-[585.0625rem]"
  }
};

const socialLeftClasses = ["left-[15rem]", "left-[18.1875rem]", "left-[21.375rem]", "left-[24.5625rem]"];

export default function Footer() {
  const { footerTop } = useLandingPageLayout();
  const top = footerTopClasses[footerTop];

  return (
    <>
    <div className="hidden lg:block">
      <div className={`absolute left-0 h-[31.3125rem] w-[120rem] bg-[#012F42] ${top.footer}`} />

      <Image
        className={`absolute left-[15rem] h-[5rem] w-[6.8125rem] ${top.logo}`}
        src="/Images/Rectangle 6.png"
        alt="Box Truck Dispatching Logo"
        width={109}
        height={80}
      />

      <div className={`absolute left-[15rem] h-[9rem] w-[21.0625rem] font-['Poppins'] text-[0.875rem] font-medium leading-[1.5rem] text-white ${top.description}`}>
        Box Truck Dispatching offers reliable and profit driven truck dispatching services across the United States. We help owner operators and fleets secure high-paying loads, reduce deadhead miles, and streamline operations for maximum efficiency.
      </div>

      {[
        <svg key="facebook" className="h-[1.125rem] w-[1.125rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>,
        <svg key="twitter" className="h-[1.125rem] w-[1.125rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>,
        <svg key="linkedin" className="h-[1.125rem] w-[1.125rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>,
        <svg key="instagram" className="h-[1.125rem] w-[1.125rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ].map((icon, idx) => (
        <div
          key={idx}
          className={`absolute flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-[0.3125rem] bg-[#003951] text-white transition-all duration-300 hover:bg-[#FE8F02]/10 hover:text-[#FE8F02] ${socialLeftClasses[idx]} ${top.socials}`}
        >
          {icon}
        </div>
      ))}

      <div className={`absolute left-[46.5rem] font-['Outfit'] text-[1.375rem] font-semibold leading-[1.875rem] text-[#FE8F02] ${top.heading}`}>
        Quick Links
      </div>
      <div className={`absolute left-[46.5rem] flex flex-col gap-[0.9375rem] ${top.links}`}>
        {["Home", "About", "Service", "States", "Blog", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="cursor-pointer font-['DM_Sans'] text-[1.125rem] font-medium leading-[1.25rem] text-white no-underline transition-colors duration-200 hover:text-[#FE8F02]"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className={`absolute left-[65.0625rem] font-['Outfit'] text-[1.375rem] font-semibold leading-[1.875rem] text-[#FE8F02] ${top.heading}`}>
        Our Services
      </div>
      <div className={`absolute left-[65.0625rem] flex flex-col gap-[0.9375rem] ${top.links}`}>
        {[
          "Load Booking",
          "Dedicated Truck Dispatcher",
          "Factoring",
          "Paper Work",
          "Driver Hiring",
          "MC Setup",
          "Accounting",
          "Lease On"
        ].map((item) => (
          <Link
            key={item}
            href="#services"
            className="cursor-pointer font-['DM_Sans'] text-[1.125rem] font-medium leading-[1.25rem] text-white no-underline transition-colors duration-200 hover:text-[#FE8F02]"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className={`absolute left-[92.6875rem] font-['Outfit'] text-[1.375rem] font-semibold leading-[1.875rem] text-[#FE8F02] ${top.heading}`}>
        Get In Touch
      </div>

      <svg className={`absolute left-[92.6875rem] h-[1.125rem] w-[1.125rem] text-[#FE8F02] ${top.phoneIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <div className={`absolute left-[94.25rem] font-['DM_Sans'] text-[0.875rem] font-semibold leading-[0.875rem] text-white ${top.phoneLabel}`}>Phone</div>
      <div className={`absolute left-[92.6875rem] font-['DM_Sans'] text-[1.125rem] font-medium leading-[1.25rem] text-white ${top.phoneValue}`}>(555) 123-4567</div>

      <svg className={`absolute left-[92.6875rem] h-[1.125rem] w-[1.125rem] text-[#FE8F02] ${top.emailIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
      <div className={`absolute left-[94.25rem] font-['DM_Sans'] text-[0.875rem] font-semibold leading-[0.875rem] text-white ${top.emailLabel}`}>Email</div>
      <div className={`absolute left-[92.6875rem] font-['DM_Sans'] text-[1.125rem] font-medium leading-[1.25rem] text-white ${top.emailValue}`}>info@avenuemh.com</div>

      <svg className={`absolute left-[92.6875rem] h-[1.125rem] w-[1.125rem] text-[#FE8F02] ${top.locationIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <div className={`absolute left-[94.25rem] font-['DM_Sans'] text-[0.875rem] font-semibold leading-[0.875rem] text-white ${top.locationLabel}`}>Location</div>
      <div className={`absolute left-[92.6875rem] font-['DM_Sans'] text-[1.125rem] font-medium leading-[1.25rem] text-white ${top.locationValue}`}>Serving All 48 States</div>

      <div className={`absolute left-0 h-[0.0625rem] w-[120rem] bg-[#003951] ${top.divider}`} />

      <div className={`absolute left-[15rem] ${top.bottom}`}>
        <span className="font-['DM_Sans'] text-[0.875rem] font-normal leading-[1.5625rem] text-white">Â© 2026, Box Truck Dispatching, Design &amp; Developed By </span>
        <span className="font-['DM_Sans'] text-[0.875rem] font-bold leading-[1.5625rem] text-white">BitBlazeTec</span>
      </div>

      <div className={`absolute left-[87.625rem] flex gap-[1.875rem] ${top.bottom}`}>
        {["Privacy Policy", "Terms of Service", "Disclaimer"].map((policy) => (
          <Link
            key={policy}
            href="#policy"
            className="cursor-pointer font-['DM_Sans'] text-[0.875rem] font-normal leading-[1.5625rem] text-white transition-colors duration-200 hover:text-[#FE8F02]"
          >
            {policy}
          </Link>
        ))}
      </div>
    </div>

      <footer
        data-responsive-section="footer"
        className="relative z-[30] w-full overflow-hidden bg-[#012F42] px-5 py-10 sm:px-8 sm:py-12 lg:hidden"
      >
        <div className="mx-auto grid max-w-[58rem] gap-8 sm:grid-cols-2 min-[860px]:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <Image
              className="h-[5rem] w-[6.8125rem]"
              src="/Images/Rectangle 6.png"
              alt="Box Truck Dispatching Logo"
              width={109}
              height={80}
            />
            <p className="mt-4 font-['Poppins'] text-[0.875rem] font-medium leading-[1.5rem] text-white">
              Box Truck Dispatching offers reliable and profit driven truck dispatching services across the United States.
            </p>
            <div className="mt-5 flex gap-3">
              {["f", "t", "in", "ig"].map((item) => (
                <div key={item} className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-[0.3125rem] bg-[#003951] font-['DM_Sans'] text-[0.75rem] font-bold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-['Outfit'] text-[1.25rem] font-semibold leading-[1.75rem] text-[#FE8F02]">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              {["Home", "About", "Service", "States", "Blog", "Contact"].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="font-['DM_Sans'] text-[1rem] font-medium text-white no-underline transition-colors hover:text-[#FE8F02]">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-['Outfit'] text-[1.25rem] font-semibold leading-[1.75rem] text-[#FE8F02]">Our Services</h3>
            <div className="mt-4 flex flex-col gap-3">
              {["Load Booking", "Dedicated Truck Dispatcher", "Factoring", "Paper Work", "Driver Hiring", "MC Setup"].map((item) => (
                <Link key={item} href="#services" className="font-['DM_Sans'] text-[1rem] font-medium text-white no-underline transition-colors hover:text-[#FE8F02]">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-['Outfit'] text-[1.25rem] font-semibold leading-[1.75rem] text-[#FE8F02]">Get In Touch</h3>
            <div className="mt-4 space-y-4 font-['DM_Sans'] text-white">
              <div>
                <div className="text-[0.875rem] font-semibold">Phone</div>
                <div className="mt-1 text-[1rem] font-medium">(555) 123-4567</div>
              </div>
              <div>
                <div className="text-[0.875rem] font-semibold">Email</div>
                <div className="mt-1 text-[1rem] font-medium">info@avenuemh.com</div>
              </div>
              <div>
                <div className="text-[0.875rem] font-semibold">Location</div>
                <div className="mt-1 text-[1rem] font-medium">Serving All 48 States</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[58rem] border-t border-[#003951] pt-5 font-['DM_Sans'] text-[0.875rem] leading-[1.5rem] text-white sm:flex sm:items-center sm:justify-between">
          <div>© 2026, Box Truck Dispatching, Design &amp; Developed By <span className="font-bold">BitBlazeTec</span></div>
          <div className="mt-3 flex flex-wrap gap-4 sm:mt-0">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((policy) => (
              <Link key={policy} href="#policy" className="text-white no-underline transition-colors hover:text-[#FE8F02]">
                {policy}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

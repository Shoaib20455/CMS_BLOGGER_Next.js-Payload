"use client";

import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "James Carter",
    role: "Owner Operator",
    avatar: "/Images/James Carter.png",
    text: "Consistent loads with better rates every week. I no longer waste time searching or negotiating."
  },
  {
    name: "Sophia Williams",
    role: "Fleet Owner",
    avatar: "/Images/Sophia Williams.png",
    text: "Dispatch runs smoothly without stress. My trucks stay loaded, and downtime has dropped significantly."
  },
  {
    name: "David Thompson",
    role: "Flatbed Driver",
    avatar: "/Images/David Thompson.png",
    text: "Strong rate negotiation and proper load planning. IÃ¢â‚¬â„¢m seeing higher RPM and fewer empty miles."
  },
  {
    name: "Emily Johnson",
    role: "New Authority",
    avatar: "/Images/Emily Johnson.png",
    text: "Got loads quickly after setup. Clear guidance and full support made the process simple."
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
    <div className="hidden lg:block">
      <div className="absolute left-[45.5rem] top-[459.75rem] font-['Outfit'] text-[3rem] font-semibold text-[#012F42]">
        What Our Clients Say
      </div>

      <div
        onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
        className="absolute left-[102.0625rem] top-[467.25rem] flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-[0.3125rem] bg-[#012F42] transition-colors hover:bg-[#012F42]/90"
      >
        <Image className="h-[1.3844rem] w-[1.3844rem] rotate-[180deg]" src="/Images/Rectangle 41(right).png" alt="Prev" width={22} height={22} />
      </div>
      <div
        onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, 1))}
        className="absolute left-[104.9375rem] top-[467.25rem] flex h-[2.25rem] w-[2.25rem] cursor-pointer items-center justify-center rounded-[0.3125rem] bg-[#FE8F02] transition-colors hover:bg-[#E07D02]"
      >
        <Image className="h-[1.3844rem] w-[1.3844rem]" src="/Images/Rectangle 41(right).png" alt="Next" width={22} height={22} />
      </div>

      <div className="absolute left-[12.5rem] top-[470.125rem] h-[24.0625rem] w-[95rem] overflow-hidden">
        <div
          className={`absolute left-0 top-0 flex gap-[1.875rem] transition-transform duration-500 ease-in-out ${
            currentSlide === 0 ? "translate-x-0" : "-translate-x-[24.0625rem]"
          }`}
        >
          {testimonials.map((client, idx) => (
            <div
              key={client.name}
              className={`flex h-[23.3125rem] w-[22.1875rem] shrink-0 flex-col items-center rounded-[0.625rem] bg-white px-[1.25rem] py-[1.875rem] shadow-[0_0.25rem_0.9375rem_rgba(0,0,0,0.02)] ${
                idx === 0 ? "border border-solid border-[#FE8F02]" : "border border-solid border-[#878B92]"
              }`}
            >
              <Image className="h-[6.25rem] w-[6.25rem] rounded-[624.9375rem] object-cover" src={client.avatar} alt={client.name} width={100} height={100} />
              <div className={`mt-[1.25rem] h-[0.125rem] w-[10rem] rounded-[1.375rem] ${idx === 0 ? "bg-[#FE8F02]" : "bg-[#878B92]"}`} />

              <div className="mt-[1.25rem] font-['Outfit'] text-[1.375rem] font-semibold text-[#012F42]">
                {client.name}
              </div>
              <div className="mt-[0.3125rem] font-['DM_Sans'] text-[0.875rem] font-medium text-[#FE8F02]">
                {client.role}
              </div>

              <div className="mt-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image key={i} className="h-[0.875rem] w-[0.875rem]" src="/Images/Rectangle 278.png" alt="Star" width={14} height={14} />
                ))}
              </div>

              <div className="mt-[1.25rem] w-[18.5625rem] text-center font-['DM_Sans'] text-[1.125rem] font-normal leading-[1.625rem] text-[#595E68]">
                &quot;{client.text}&quot;
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      <section
        data-responsive-section="testimonials"
        className="relative z-[27] w-full overflow-hidden bg-[#F8FAFC] px-5 py-10 sm:px-8 sm:py-12 lg:hidden"
      >
        <div className="mx-auto max-w-[58rem]">
          <h2 className="text-center font-['Outfit'] text-[2rem] font-semibold leading-[2.45rem] text-[#012F42] sm:text-[2.25rem] sm:leading-[2.75rem]">
            What Our Clients Say
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 min-[860px]:grid-cols-4">
            {testimonials.map((client, idx) => (
              <article
                key={client.name}
                className={`flex flex-col items-center rounded-[0.625rem] bg-white px-4 py-6 text-center shadow-[0_0.25rem_0.9375rem_rgba(0,0,0,0.02)] ${
                  idx === 0 ? "border border-solid border-[#FE8F02]" : "border border-solid border-[#878B92]"
                }`}
              >
                <Image className="h-[5rem] w-[5rem] rounded-full object-cover" src={client.avatar} alt={client.name} width={100} height={100} />
                <div className={`mt-4 h-[0.125rem] w-[8rem] rounded-[1.375rem] ${idx === 0 ? "bg-[#FE8F02]" : "bg-[#878B92]"}`} />
                <h3 className="mt-4 font-['Outfit'] text-[1.25rem] font-semibold text-[#012F42]">
                  {client.name}
                </h3>
                <div className="mt-1 font-['DM_Sans'] text-[0.875rem] font-medium text-[#FE8F02]">
                  {client.role}
                </div>
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} className="h-[0.875rem] w-[0.875rem]" src="/Images/Rectangle 278.png" alt="Star" width={14} height={14} />
                  ))}
                </div>
                <p className="mt-4 font-['DM_Sans'] text-[0.95rem] leading-[1.55rem] text-[#595E68]">
                  &quot;{client.text}&quot;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

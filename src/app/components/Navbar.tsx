"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface NavbarProps {
  currentActive?: string;
}

export default function Navbar({ currentActive = "Home" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Blog", "Contact"];

  return (
    <>
      <div className="absolute left-0 top-0 z-10 hidden h-20 w-[120rem] bg-white shadow-[0_0.0625rem_0.1875rem_rgba(0,0,0,0.05)] lg:block" />

      <Link href="#home" aria-label="Box Truck Dispatching Home">
        <Image
          src="/Images/Rectangle 6 (1).png"
          alt="Box Truck Dispatching Logo"
          className="absolute left-[12.5rem] top-[0.9375rem] z-[11] hidden h-[3.125rem] w-[5.3125rem] object-contain lg:block"
          width={85}
          height={50}
          priority
        />
      </Link>

      <nav
        className="absolute left-[44.5625rem] top-[1.6875rem] z-[11] hidden gap-[3.125rem] lg:flex"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => {
          const isActive = item === currentActive;
          return (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-['DM_Sans'] text-[1.125rem] font-bold leading-[1.5625rem] no-underline transition-colors duration-200 ${
                isActive ? "text-[#FE8F02]" : "text-[#111827] hover:text-[#FE8F02]"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </nav>

      <button className="absolute left-[96.1875rem] top-[0.9375rem] z-[11] hidden h-[3.125rem] w-[11.3125rem] items-center justify-center rounded-[0.3125rem] border-none bg-[#FE8F02] font-['Outfit'] text-[1.125rem] font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95 lg:inline-flex">
        Schedule a Call
      </button>

      <header
        className="sticky top-0 z-50 h-16 w-full bg-white shadow-[0_0.0625rem_0.1875rem_rgba(0,0,0,0.05)] lg:hidden"
      >
        <div className="flex h-full w-full items-center justify-between px-5 sm:px-8">
          <Link
            href="#home"
            className="flex shrink-0 items-center"
            aria-label="Box Truck Dispatching Home"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/Images/Rectangle 6 (1).png"
              alt="Box Truck Dispatching Logo"
              className="h-[2.625rem] w-[4.5rem] object-contain"
              width={85}
              height={50}
              priority
            />
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[0.3125rem] border border-[#E5E7EB] bg-white text-[#111827] transition-colors hover:border-[#FE8F02] hover:text-[#FE8F02]"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isMenuOpen ? "translate-y-[0.5625rem] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[0.5625rem] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[1.125rem] h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isMenuOpen ? "-translate-y-[0.5625rem] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`absolute left-0 top-full w-screen overflow-hidden bg-white shadow-[0_0.75rem_1.5rem_rgba(15,23,42,0.08)] transition-[max-height,opacity] duration-300 ${
            isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex w-full flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = item === currentActive;
              return (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-[0.3125rem] px-3 py-3 font-['DM_Sans'] text-[1rem] font-bold leading-6 no-underline transition-colors ${
                    isActive
                      ? "bg-[#FFF4E5] text-[#FE8F02]"
                      : "text-[#111827] hover:bg-[#F8FAFC] hover:text-[#FE8F02]"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
            <button className="mt-3 h-[3.125rem] w-full rounded-[0.3125rem] border-none bg-[#FE8F02] font-['Outfit'] text-[1.125rem] font-medium text-white transition-colors hover:bg-[#E07D02] active:bg-[#C96F02] sm:w-[11.3125rem]">
              Schedule a Call
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

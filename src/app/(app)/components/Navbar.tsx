"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface NavbarProps {
  currentActive?: string;
  variant?: "absolute" | "flow";
}

const navItems = ["Home", "About", "Service", "Blog", "Contact"];

function getFlowHref(item: string) {
  if (item === "Home") return "/";
  return `/${item.toLowerCase()}`;
}

export default function Navbar({
  currentActive = "Home",
  variant = "absolute",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (variant === "flow") {
    return (
      <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="mx-auto flex h-14 w-[calc(100%_-_40px)] max-w-[1082px] items-center justify-between">
          <Link href="/" aria-label="Box Truck Dispatching Home">
            <Image
              src="/Images/Rectangle 6 (1).png"
              alt="Box Truck Dispatching Logo"
              width={42}
              height={25}
              priority
              className="h-[25px] w-[42px] object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-[38px] lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = item === currentActive;

              return (
                <Link
                  key={item}
                  href={getFlowHref(item)}
                  className={`font-['DM_Sans'] text-[12px] font-bold leading-[18px] no-underline transition-colors duration-200 ${
                    isActive
                      ? "text-[#FE8F02]"
                      : "text-[#111827] hover:text-[#FE8F02]"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden h-[36px] w-[130px] items-center justify-center rounded-[5px] bg-[#FE8F02] px-4 font-['Outfit'] text-[12px] font-medium text-white no-underline transition-all duration-300 hover:bg-[#E07D02] lg:inline-flex"
          >
            Schedule a Call
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[5px] border border-[#E5E7EB] bg-white text-[#111827] transition-colors hover:border-[#FE8F02] hover:text-[#FE8F02] lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isMenuOpen ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[18px] h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-[#E5E7EB] bg-white transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1082px] gap-3 py-4"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const isActive = item === currentActive;

              return (
                <Link
                  key={item}
                  href={getFlowHref(item)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-['DM_Sans'] text-[16px] font-bold no-underline transition-colors ${
                    isActive
                      ? "text-[#FE8F02]"
                      : "text-[#111827] hover:text-[#FE8F02]"
                  }`}
                >
                  {item}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex h-[48px] items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-['Outfit'] text-[16px] font-medium text-white no-underline"
            >
              Schedule a Call
            </Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <>
      <div className="bb-navbar-001" />

      <Link href="#home" aria-label="Box Truck Dispatching Home">
        <Image
          src="/Images/Rectangle 6 (1).png"
          alt="Box Truck Dispatching Logo"
          className="bb-navbar-002"
          width={85}
          height={50}
          priority
        />
      </Link>

      <nav className="bb-navbar-003" aria-label="Primary navigation">
        {navItems.map((item) => {
          const isActive = item === currentActive;

          return (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`bb-navbar-004 ${
                isActive ? "bb-hero-017" : "bb-navbar-005"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </nav>

      <button className="bb-navbar-006">Schedule a Call</button>

      <header className="bb-navbar-007">
        <div className="bb-navbar-008">
          <Link
            href="#home"
            className="bb-navbar-009"
            aria-label="Box Truck Dispatching Home"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/Images/Rectangle 6 (1).png"
              alt="Box Truck Dispatching Logo"
              className="bb-navbar-010"
              width={85}
              height={50}
              priority
            />
          </Link>

          <button
            type="button"
            className="bb-navbar-011"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="bb-navbar-012">
              <span
                className={`bb-navbar-013 ${
                  isMenuOpen ? "bb-navbar-014" : ""
                }`}
              />

              <span
                className={`bb-navbar-015 ${
                  isMenuOpen ? "bb-navbar-016" : "bb-navbar-017"
                }`}
              />

              <span
                className={`bb-navbar-018 ${
                  isMenuOpen ? "bb-navbar-019" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`bb-navbar-020 ${
            isMenuOpen ? "bb-navbar-021" : "bb-navbar-022"
          }`}
        >
          <nav className="bb-navbar-023" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = item === currentActive;

              return (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`bb-navbar-024 ${
                    isActive ? "bb-navbar-025" : "bb-navbar-026"
                  }`}
                >
                  {item}
                </Link>
              );
            })}

            <button className="bb-navbar-027">Schedule a Call</button>
          </nav>
        </div>
      </header>
    </>
  );
}

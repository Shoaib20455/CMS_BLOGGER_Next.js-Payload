"use client";

import { usePathname } from "next/navigation";

import CtaSection from "./CtaSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import LandingPageFrame from "./LandingPageFrame";
import Navbar from "./Navbar";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");
  const isServicePage = pathname.toLowerCase().startsWith("/service");

  if (isBlogPage) {
    return (
      <>
        <Navbar variant="flow" currentActive="Blog" />

        <main className="bg-[#F8FAFC]">{children}</main>

        <Footer variant="flow" />
      </>
    );
  }

  if (isServicePage) {
    return (
      <LandingPageFrame>
        <Navbar currentActive="Services" />

        <main className="flex-1">{children}</main>
      </LandingPageFrame>
    );
  }

  return (
    <LandingPageFrame>
      <Navbar />

      <main className="flex-1">{children}</main>

      <FaqSection />
      <CtaSection />
      <Footer />
    </LandingPageFrame>
  );
}

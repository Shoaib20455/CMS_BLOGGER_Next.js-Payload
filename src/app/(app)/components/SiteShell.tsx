"use client";

import { usePathname } from "next/navigation";

import CtaSection from "./CtaSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import LandingPageFrame from "./LandingPageFrame";
import Navbar from "./Navbar";

function getCurrentActive(pathname: string) {
  if (pathname === "/") return "Home";

  if (pathname.startsWith("/about")) return "About";
  if (pathname.startsWith("/service")) return "Service";
  if (pathname.startsWith("/blog")) return "Blog";
  if (pathname.startsWith("/contact")) return "Contact";

  return "Home";
}

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isBlogPage = pathname.startsWith("/blog");
  const isServicePage = pathname.toLowerCase().startsWith("/service");
  const isHomePage = pathname === "/";

  const currentActive = getCurrentActive(pathname);

  return (
    <>
      <Navbar currentActive={currentActive} />

      {isBlogPage ? (
        <main className="bg-[#F8FAFC]">{children}</main>
      ) : (
        <LandingPageFrame>
          <main className="flex-1">{children}</main>

          {isHomePage && (
            <>
              <FaqSection />
              <CtaSection />
              <Footer />
            </>
          )}

          {!isHomePage && !isServicePage && <Footer variant="flow" />}
        </LandingPageFrame>
      )}
    </>
  );
}
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from "react";

type Faq = {
  q: string;
  a: string;
};

type LandingPageLayoutContextValue = {
  leftFaqs: Faq[];
  rightFaqs: Faq[];
  activeLeftFaq: number | null;
  activeRightFaq: number | null;
  setActiveLeftFaq: Dispatch<SetStateAction<number | null>>;
  setActiveRightFaq: Dispatch<SetStateAction<number | null>>;
  leftFaqTops: number[];
  rightFaqTops: number[];
  ctaTop: number;
  footerTop: number;
};

const leftFaqs: Faq[] = [
  {
    q: "What types of box trucks do you dispatch?",
    a: "We work with straight box trucks that are 26 feet or more in length, equipped with a lift gate, and operating non-locally (interstate/regional)."
  },
  {
    q: "What are your requirements to start?",
    a: "You need an active MC/DOT authority, a certificate of insurance (at least $1,000,000 auto liability and $100,000 cargo), and a signed W-9 form."
  },
  {
    q: "Do you offer factoring setup assistance?",
    a: "Yes! We work with top factoring companies to help you set up and get quick payments (within 24-48 hours) instead of waiting 30-90 days."
  },
  {
    q: "Is there a long-term contract required?",
    a: "No. We offer dispatch services on a load-by-load basis with no long-term commitment. You are free to stop using our service at any time."
  }
];

const rightFaqs: Faq[] = [
  {
    q: "How do you find loads for my truck?",
    a: "We use premium load boards, direct broker relationships, and private shipper contracts to find the highest-paying box truck freight."
  },
  {
    q: "Do you force drivers to take loads?",
    a: "Absolutely not. We have a 'no forced dispatch' policy. We present you with the best load options, and you make the final decision."
  },
  {
    q: "What areas of the country do you cover?",
    a: "We cover all 48 continental states. Whether you prefer running regionally or coast-to-coast, we can keep your truck loaded."
  },
  {
    q: "How do you handle detention and TONU?",
    a: "We aggressively pursue detention pay and Truck Order Not Used (TONU) fees from brokers whenever shippers delay you or cancel loads."
  }
];

const LandingPageLayoutContext = createContext<LandingPageLayoutContextValue | null>(null);

export function useLandingPageLayout() {
  const context = useContext(LandingPageLayoutContext);

  if (!context) {
    throw new Error("useLandingPageLayout must be used inside LandingPageFrame");
  }

  return context;
}

export default function LandingPageFrame({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLeftFaq, setActiveLeftFaq] = useState<number | null>(null);
  const [activeRightFaq, setActiveRightFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScale(width / 1920);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measureHeight = () => {
      const containerRect = container.getBoundingClientRect();
      const childBottom = Array.from(container.children).reduce((maxBottom, child) => {
        const rect = child.getBoundingClientRect();
        return Math.max(maxBottom, rect.bottom - containerRect.top);
      }, 0);

      setMeasuredHeight(childBottom);
    };

    measureHeight();

    const resizeObserver = new ResizeObserver(measureHeight);
    resizeObserver.observe(container);
    Array.from(container.children).forEach((child) => resizeObserver.observe(child));

    window.addEventListener("resize", measureHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureHeight);
    };
  }, [children, scale]);

  const leftFaqHeights = leftFaqs.map((_, i) => (activeLeftFaq === i ? 180 : 73));
  const rightFaqHeights = rightFaqs.map((_, i) => (activeRightFaq === i ? 180 : 73));

  const leftFaqTops: number[] = [];
  let currentLeftFaqTop = 8095;
  for (let i = 0; i < 4; i++) {
    leftFaqTops.push(currentLeftFaqTop);
    currentLeftFaqTop += leftFaqHeights[i] + 20;
  }

  const rightFaqTops: number[] = [];
  let currentRightFaqTop = 8095;
  for (let i = 0; i < 4; i++) {
    rightFaqTops.push(currentRightFaqTop);
    currentRightFaqTop += rightFaqHeights[i] + 20;
  }

  const maxFaqEnd = Math.max(currentLeftFaqTop, currentRightFaqTop);
  const ctaTop = maxFaqEnd + 10;
  const footerTop = ctaTop + 251 + 80;
  const baseHeight = footerTop + 501;
  const scaledHeight = baseHeight * scale;
  const pageHeight = Math.max(scaledHeight, measuredHeight);
  const layoutVars = {
    "--page-height": `${pageHeight / 16}rem`,
    "--canvas-height": `${baseHeight / 16}rem`,
    "--canvas-scale": scale
  } as CSSProperties;

  return (
    <LandingPageLayoutContext.Provider
      value={{
        leftFaqs,
        rightFaqs,
        activeLeftFaq,
        activeRightFaq,
        setActiveLeftFaq,
        setActiveRightFaq,
        leftFaqTops,
        rightFaqTops,
        ctaTop,
        footerTop
      }}
    >
      <main
        className="relative flex min-h-screen w-full justify-center overflow-x-hidden bg-[#F8FAFC] lg:h-[var(--page-height)]"
        style={layoutVars}
      >
        <div
          ref={containerRef}
          className="relative w-full overflow-visible bg-[#F8FAFC] lg:absolute lg:left-1/2 lg:top-0 lg:h-[var(--canvas-height)] lg:w-[120rem] lg:origin-top lg:-translate-x-1/2 lg:scale-[var(--canvas-scale)] lg:overflow-hidden"
        >
          {children}
        </div>
      </main>
    </LandingPageLayoutContext.Provider>
  );
}

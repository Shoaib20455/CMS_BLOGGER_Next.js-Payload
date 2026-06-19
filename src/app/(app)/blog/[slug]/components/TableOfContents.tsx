"use client";

import { useEffect, useState } from "react";
import type { Heading } from "../../../../../lib/extract-headings";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids = headings.map((h) => h.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of Contents" className="mb-[30px]">
      <h2 className="flex h-[50px] items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-['Outfit'] text-[18px] font-medium text-white shadow-[0_8px_18px_rgba(254,143,2,0.14)]">
        Table of Contents
      </h2>
      <ul className="sr-only">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? "1.25rem" : "0" }}>
            <a
              href={`#${h.id}`}
              className={`block rounded px-2 py-1 text-sm no-underline transition-colors ${
                activeId === h.id
                  ? "bg-[#FE8F02]/10 font-medium text-[#FE8F02]"
                  : "text-gray-600 hover:text-[#E07D02]"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

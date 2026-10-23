"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

/**
 * PopeLeoSection Component (Image 1)
 * Placed immediately after Section 2 (Midterms 2026).
 */
export default function PopeLeoSection() {
  return (
    <section className="w-full pt-5 pb-8">
      {/* Top Divider across Main Content column */}
      <div className="w-full border-t border-[#121212] mb-5" />

      {/* Sub-Navbar: Pope Leo’s Cancer Diagnosis + Links */}
      <div className="w-full flex items-center justify-start gap-5 pb-3.5 mb-2 overflow-x-auto no-scrollbar">
        <span className="font-nyt-franklin font-bold text-[13px] text-[#121212] whitespace-nowrap">
          Pope Leo’s Cancer Diagnosis
        </span>
        <nav aria-label="Pope Leo Diagnosis Navigation" className="flex items-center gap-5">
          <Link
            href={getArticleHref("Pope Leo: What to Know")}
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            What to Know
          </Link>
          <Link
            href={getArticleHref("What Is Adenocarcinoma?")}
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            What Is Adenocarcinoma?
          </Link>
          <Link
            href={getArticleHref("Testing Longevity Assumptions")}
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            Testing Longevity Assumptions
          </Link>
        </nav>
      </div>

      {/* 2-Column Content: Left Story (~36%) + Right Photo (~64%) */}
      <div className="flex flex-row items-start gap-6 w-full">
        {/* Left Column */}
        <div className="w-[36%] shrink-0 flex flex-col">
          <article className="group cursor-pointer">
            <Link href={getArticleHref("Pope Leo Leaves Hospital, Days After Lung Surgery")}>
              <h3 className="font-nyt-serif font-bold text-[22px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Pope Leo Leaves Hospital, Days After Lung Surgery
              </h3>
            </Link>
            <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-2 font-normal">
              Leo XIV had been treated for lung cancer at Gemelli Hospital in Rome.
            </p>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              2 MIN READ
            </span>
          </article>
        </div>

        {/* Right Photo Column */}
        <div className="flex-1 min-w-0 flex flex-col">
          <Link
            href={getArticleHref("Pope Leo Leaves Hospital, Days After Lung Surgery")}
            className="w-full block group"
          >
            <div className="w-full relative aspect-[16/10.5] overflow-hidden bg-neutral-100">
              <img
                src="/images/pope_leo_car.jpg"
                alt="Pope Leo XIV waving from car window"
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>
          <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1 italic select-none">
            Alessandra Tarantino/Associated Press
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

/**
 * FranceProtestsSection Component (Image 2)
 * Placed immediately after third section (PopeLeoSection).
 */
export default function FranceProtestsSection() {
  return (
    <section className="w-full pt-5 pb-8">
      {/* Top Divider across Main Content column */}
      <div className="w-full border-t border-[#121212] mb-5" />

      {/* Sub-Navbar: Student Protests in France + Links */}
      <div className="w-full flex items-center justify-start gap-5 pb-3.5 mb-2 overflow-x-auto no-scrollbar">
        <span className="font-nyt-franklin font-bold text-[13px] text-[#121212] whitespace-nowrap">
          Student Protests in France
        </span>
        <nav aria-label="Student Protests Navigation" className="flex items-center gap-5">
          <Link
            href="#"
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            What to Know
          </Link>
          <Link
            href="#"
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            Photos
          </Link>
          <Link
            href="#"
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            Movement Broadens
          </Link>
          <Link
            href="#"
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            Macron’s Term
          </Link>
          <Link
            href="#"
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            History of French Protests
          </Link>
        </nav>
      </div>

      {/* 2-Column Content: Left Stories (~36%) + Right Photo (~64%) */}
      <div className="flex flex-row items-start gap-6 w-full">
        {/* Left Column */}
        <div className="w-[36%] shrink-0 flex flex-col">
          {/* Story 1 */}
          <article className="group cursor-pointer">
            <Link href={getArticleHref("The 53-Year-Old in a Suit Who’s the Face of France’s Youth Protests")}>
              <h3 className="font-nyt-serif font-bold text-[20px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                The 53-Year-Old in a Suit Who’s the Face of France’s Youth Protests
              </h3>
            </Link>
            <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-2 font-normal">
              Bally Bagayoko, the mayor of a working-class suburb near Paris, has been a regular presence at student demonstrations, prompting applause and condemnation.
            </p>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              6 MIN READ
            </span>
          </article>

          {/* Hairline Divider */}
          <div className="w-full border-t border-[#e2e2e2] my-4" />

          {/* Story 2 */}
          <article className="group cursor-pointer">
            <Link href={getArticleHref("Protests Spread to 140 Cities in France")}>
              <h4 className="font-nyt-serif font-bold text-[18px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Protests Spread to 140 Cities in France
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              4 MIN READ
            </span>
          </article>
        </div>

        {/* Right Photo Column */}
        <div className="flex-1 min-w-0 flex flex-col">
          <Link
            href={getArticleHref("The 53-Year-Old in a Suit Who’s the Face of France’s Youth Protests")}
            className="w-full block group"
          >
            <div className="w-full relative aspect-[16/10.5] overflow-hidden bg-neutral-100">
              <img
                src="/images/france_protests.jpg"
                alt="Bally Bagayoko surrounded by student protesters in France"
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>
          <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1 italic select-none">
            Le Pictorium, via Alamy
          </span>
        </div>
      </div>
    </section>
  );
}

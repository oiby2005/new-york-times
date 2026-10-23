"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";
import Election2026Section from "./Election2026Section";
import BrazilElectionAndTrumpSection from "./BrazilElectionAndTrumpSection";
import PopeLeoSection from "./PopeLeoSection";
import FranceProtestsSection from "./FranceProtestsSection";
import GotATipSection from "./GotATipSection";
import WhatToWatchSection from "./WhatToWatchSection";
import WeekendReadsSection from "./WeekendReadsSection";
import WeatherSection from "./WeatherSection";
import MoreNewsSection from "./MoreNewsSection";
import RightSidebar from "./RightSidebar";

/**
 * MainEditorialHero Component
 * Exact pixel & typographic replica of The New York Times Frontpage Main Content.
 *
 * Alignment Architecture:
 * - Outer boundary: Left edge aligns with "Today's Paper" (3.5cm container).
 * - Headline indent: "Trump Signs Order..." (letter 'T') has 24px inner padding, aligning with 'U' in "U.S.".
 * - Right edge: Extends to the right edge of dropdown arrow in "Games".
 * - Divider line: Positioned between dropdown arrow of "Games" and "Cooking".
 */
export default function MainEditorialHero() {
  return (
    <section className="w-full bg-white text-[#121212] pt-5 pb-10">
      {/* Outer Container with exact 3.5cm left/right padding (aligns with navbar) */}
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        <div className="flex flex-row items-stretch gap-6">
          {/* ============================================================ */}
          {/* MAIN CONTENT COLUMN (~70.5% width)                           */}
          {/* - Left side aligns with 'T' in Today's Paper (3.5cm margin)  */}
          {/* - Inside letter 'T' aligns with 'U' in U.S. (24px indent)    */}
          {/* - Right side aligns with dropdown icon right edge in Games   */}
          {/* ============================================================ */}
          <div className="w-[70.5%] shrink-0 flex flex-col">
            {/* Section 1: Main Content Box */}
            <div className="w-full border border-[#121212] pt-5 pb-5 px-6">
              {/* Top Banner: "These top stories are free to read." */}
              <div className="w-full flex flex-col items-center justify-center pb-3.5">
              <span className="font-nyt-franklin text-[13.5px] text-[#121212] tracking-tight">
                These top stories are <span className="font-bold">free to read.</span>
              </span>
              <div className="w-14 h-[2px] bg-[#2563eb] mt-1 rounded-full" />
            </div>

            {/* Upper Hero Grid: Headlines (Left ~36%) + Hero Photo (Right ~64%) */}
            <div className="flex flex-row items-start gap-5">
              {/* Left Stories Column */}
              <div className="w-[36%] shrink-0 flex flex-col">
                {/* Story 1: Lead Headline */}
                <article className="group cursor-pointer">
                  <Link href={getArticleHref("Trump Signs Order Exempting Russia From Sanctions Law")}>
                    <h2 className="font-nyt-serif font-bold text-[22px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                      Trump Signs Order Exempting Russia From Sanctions Law
                    </h2>
                  </Link>
                  <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-1.5 font-normal">
                    The sanctions were part of a measure that was named after Senator Lindsey Graham, the South Carolina Republican who died in July.
                  </p>
                  <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
                    3 MIN READ
                  </span>
                </article>

                {/* Subtle Divider between Story 1 and Story 2 */}
                <div className="w-full border-t border-[#e2e2e2] my-4" />

                {/* Story 2: Analysis Story */}
                <article className="group cursor-pointer">
                  <span className="font-nyt-franklin text-[10px] font-bold tracking-wider text-[#121212] uppercase mb-1 block">
                    ANALYSIS
                  </span>
                  <Link href={getArticleHref("Is This the Breaking Point for Trump and Zelensky?")}>
                    <h3 className="font-nyt-serif font-bold text-[18px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                      Is This the Breaking Point for Trump and Zelensky?
                    </h3>
                  </Link>
                  <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-1.5 font-normal">
                    If the two presidents’ war of words continues, it could threaten the crucial operational help that Ukraine still gets from the United States.
                  </p>
                  <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
                    5 MIN READ
                  </span>
                </article>
              </div>

              {/* Right Photo Column: Vladimir Putin & Donald Trump */}
              <div className="w-[64%] flex flex-col">
                <Link
                  href={getArticleHref("Trump Signs Order Exempting Russia From Sanctions Law")}
                  className="w-full block group"
                >
                  <div className="w-full relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src="/images/hero_putin_trump.jpg"
                      alt="Vladimir Putin and Donald Trump walking on red carpet"
                      className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
                    />
                  </div>
                </Link>
                <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1 italic select-none">
                  Doug Mills/The New York Times
                </span>
              </div>
            </div>

            {/* Horizontal Section Divider (Black, within the box content) */}
            <div className="w-full border-b border-[#121212] my-5" />

            {/* Lower Section: "More to read for free." */}
            <div className="w-full">
              <h3 className="font-nyt-serif font-bold text-[14px] text-[#121212] mb-3.5">
                More to read for free.
              </h3>

              {/* 2x2 Article Grid */}
              <div className="flex flex-col gap-3.5">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-6 items-start">
                  {/* Article 1 */}
                  <article className="flex items-start justify-between pr-4 border-r border-[#e2e2e2] group cursor-pointer">
                    <div className="flex-1 min-w-0 pr-2.5">
                      <Link href={getArticleHref("A Scandal in 1971, This Film Is Now a Respected Period Piece")}>
                        <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                          A Scandal in 1971, This Film Is Now a Respected Period Piece
                        </h4>
                      </Link>
                      <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                        5 MIN READ
                      </span>
                    </div>
                    <Link
                      href={getArticleHref("A Scandal in 1971, This Film Is Now a Respected Period Piece")}
                      className="w-[75px] h-[75px] shrink-0 overflow-hidden bg-neutral-100 block group-hover:opacity-90 transition-opacity"
                    >
                      <img
                        src="/images/thumb_scandal_1971.jpg"
                        alt="A Scandal in 1971"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </article>

                  {/* Article 2 */}
                  <article className="flex items-start justify-between group cursor-pointer">
                    <div className="flex-1 min-w-0 pr-2.5">
                      <Link href={getArticleHref("How Old Will I Be Before I Own a Home?")}>
                        <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                          How Old Will I Be Before I Own a Home?
                        </h4>
                      </Link>
                      <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                        2 MIN READ
                      </span>
                    </div>
                    <Link
                      href={getArticleHref("How Old Will I Be Before I Own a Home?")}
                      className="w-[75px] h-[75px] shrink-0 overflow-hidden bg-neutral-100 block group-hover:opacity-90 transition-opacity"
                    >
                      <img
                        src="/images/thumb_own_a_home.jpg"
                        alt="Suburban House"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </article>
                </div>

                {/* Sub-Divider between Row 1 and Row 2 */}
                <div className="w-full border-t border-[#e2e2e2]" />

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-6 items-start">
                  {/* Article 3 */}
                  <article className="flex items-start justify-between pr-4 border-r border-[#e2e2e2] group cursor-pointer">
                    <div className="flex-1 min-w-0 pr-2.5">
                      <Link href={getArticleHref("They Voted for Trump. How Are They Feeling About High Grocery Prices?")}>
                        <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                          They Voted for Trump. How Are They Feeling About High Grocery Prices?
                        </h4>
                      </Link>
                      <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                        5 MIN READ
                      </span>
                    </div>
                    <Link
                      href={getArticleHref("They Voted for Trump. How Are They Feeling About High Grocery Prices?")}
                      className="w-[75px] h-[75px] shrink-0 overflow-hidden bg-neutral-100 block group-hover:opacity-90 transition-opacity"
                    >
                      <img
                        src="/images/thumb_grocery_prices.jpg"
                        alt="Supermarket grocery prices"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </article>

                  {/* Article 4 */}
                  <article className="flex items-start justify-between group cursor-pointer">
                    <div className="flex-1 min-w-0 pr-2.5">
                      <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#121212] uppercase mb-0.5 block">
                        THE GREAT READ
                      </span>
                      <Link href={getArticleHref("Why One of the World’s Greatest Mathematicians Is on a ‘War Footing’")}>
                        <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                          Why One of the World’s Greatest Mathematicians Is on a ‘War Footing’
                        </h4>
                      </Link>
                      <div className="flex items-center gap-1 mt-1.5 text-[#727272]">
                        <svg className="w-3.5 h-3.5 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="font-nyt-franklin text-[10px] font-medium leading-none">
                          467
                        </span>
                      </div>
                    </div>
                    <Link
                      href={getArticleHref("Why One of the World’s Greatest Mathematicians Is on a ‘War Footing’")}
                      className="w-[75px] h-[75px] shrink-0 overflow-hidden bg-neutral-100 block group-hover:opacity-90 transition-opacity"
                    >
                      <img
                        src="/images/thumb_mathematician.jpg"
                        alt="Young Mathematician"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Midterms 2026 Coverage */}
          <Election2026Section />

          {/* Section: The World (Planet Earth & Brazil Election) & Trump Campaign Trail */}
          <BrazilElectionAndTrumpSection />

          {/* Section 3: Pope Leo (Image 1) */}
          <PopeLeoSection />

          {/* Section 4: Student Protests in France (Image 2) */}
          <FranceProtestsSection />

          {/* Section 5: Got a Tip? (Image 3) */}
          <GotATipSection />

          {/* Section 6: What to Watch (Image 4 from previous prompt) */}
          <WhatToWatchSection />

          {/* Section 7: Weekend Reads (Images 1, 2, 3, 4 as one section) */}
          <WeekendReadsSection />

          {/* Section 8: Weather (Image 1 from user prompt) */}
          <WeatherSection />

          {/* Section 9: More News (Images 2 & 3 from user prompt as one section) */}
          <MoreNewsSection />
        </div>

          {/* ============================================================ */}
          {/* VERTICAL DIVIDER LINE                                        */}
          {/* Positioned between dropdown arrow ∨ of Games and Cooking     */}
          {/* ============================================================ */}
          <div className="w-[1px] bg-[#e2e2e2] shrink-0 self-stretch" />

          {/* ============================================================ */}
          {/* RIGHT SIDEBAR (Images 1, 2, 3, 4)                            */}
          {/* Starts at first 'o' of Cooking, ends at right edge of LOG IN */}
          {/* ============================================================ */}
          <div className="flex-1 min-w-0">
            <RightSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

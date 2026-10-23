"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

/**
 * BrazilElectionAndTrumpSection Component
 * Pixel-perfect replica of The World (Planet Earth and Brazil's Election)
 * and Analysis (On the Campaign Trail, Trump Tries to Outrun a Bad Week in Washington).
 *
 * Positioned immediately after Election2026Section in MainEditorialHero.
 */
export default function BrazilElectionAndTrumpSection() {
  return (
    <section className="w-full pt-5 pb-8">
      {/* Top Divider across the Main Content column */}
      <div className="w-full border-t border-[#121212] mb-5" />

      {/* ============================================================ */}
      {/* PART 1: Top Story (The World: Planet Earth & Brazil Election) */}
      {/* Left Text (~64%) + Right Photo (~36%)                        */}
      {/* ============================================================ */}
      <div className="flex flex-row items-start gap-6 w-full">
        {/* Left Text Column */}
        <div className="flex-1 min-w-0 flex flex-col pr-2">
          <article className="group cursor-pointer">
            <span className="font-nyt-franklin text-[10px] font-bold tracking-wider text-[#121212] uppercase mb-1 block">
              THE WORLD
            </span>
            <Link href={getArticleHref("Today’s News: Planet Earth and Brazil’s Election")}>
              <h3 className="font-nyt-serif font-bold text-[22px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Today’s News: Planet Earth and Brazil’s Election
              </h3>
            </Link>
            <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-2 font-normal">
              The Amazon rainforest has been a crucial battleground in the country’s presidential runoff.
            </p>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              7 MIN READ
            </span>
          </article>
        </div>

        {/* Right Photo Column (~33-35%) */}
        <div className="w-[35%] shrink-0 flex flex-col">
          <Link
            href={getArticleHref("Today’s News: Planet Earth and Brazil’s Election")}
            className="w-full block group"
          >
            <div className="w-full relative aspect-[332/222] overflow-hidden bg-neutral-100">
              <img
                src="/images/amazon_rainforest_brazil.jpg"
                alt="Aerial view of Amazon rainforest in Brazil"
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>
          <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1 italic select-none">
            Edmar Barros/Associated Press
          </span>
        </div>
      </div>

      {/* Middle Divider between the two stories */}
      <div className="w-full border-t border-[#121212] my-5" />

      {/* ============================================================ */}
      {/* PART 2: Bottom Story (Analysis: Trump on Campaign Trail)     */}
      {/* Left Column (~36%) + Right Large Photo (~64%)                */}
      {/* ============================================================ */}
      <div className="flex flex-row items-start gap-6 w-full">
        {/* Left Column */}
        <div className="w-[36%] shrink-0 flex flex-col">
          {/* Story 1 */}
          <article className="group cursor-pointer">
            <span className="font-nyt-franklin text-[10px] font-bold tracking-wider text-[#121212] uppercase mb-1 block">
              ANALYSIS
            </span>
            <Link href={getArticleHref("On the Campaign Trail, Trump Tries to Outrun a Bad Week in Washington")}>
              <h3 className="font-nyt-serif font-bold text-[20px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                On the Campaign Trail, Trump Tries to Outrun a Bad Week in Washington
              </h3>
            </Link>
            <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-2 font-normal">
              As President Trump held rallies around the U.S., his White House was consumed by dramas that reinforce how his presidency has become a drag on G.O.P. prospects.
            </p>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              5 MIN READ
            </span>
          </article>

          {/* Divider between Story 1 and Story 2 */}
          <div className="w-full border-t border-[#e2e2e2] my-4" />

          {/* Story 2 */}
          <article className="group cursor-pointer">
            <Link href={getArticleHref("Trump Outlines Rapid Plan to Close and Overhaul Public D.C. Golf Course")}>
              <h4 className="font-nyt-serif font-bold text-[18px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Trump Outlines Rapid Plan to Close and Overhaul Public D.C. Golf Course
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              4 MIN READ
            </span>
          </article>
        </div>

        {/* Right Large Photo Column */}
        <div className="flex-1 min-w-0 flex flex-col">
          <Link
            href={getArticleHref("On the Campaign Trail, Trump Tries to Outrun a Bad Week in Washington")}
            className="w-full block group"
          >
            <div className="w-full relative aspect-[629/372] overflow-hidden bg-neutral-100">
              <img
                src="/images/trump_campaign_plane.jpg"
                alt="Donald Trump descending stairs from airplane on the campaign trail"
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>
          <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1 italic select-none">
            Haiyun Jiang/The New York Times
          </span>
        </div>
      </div>
    </section>
  );
}

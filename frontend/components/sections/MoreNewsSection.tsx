"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

/**
 * MoreNewsSection Component (Section 9)
 * Consolidated component combining Images 2 & 3 from user prompt:
 * - Lead Story: "The Leap Second Has Been Canceled" with Earth from space photo and NASA credit
 * - 3x3 Article Grid:
 *   - Row 1: Articles with thumbnails (Man City vs Ipswich, Yemen fighting, Oregon school hero)
 *   - Row 2: Text-only stories (Covid reporter, Oldest shipwreck, Israeli settlers)
 *   - Row 3: Text-only stories (M.I.T. scientist, Ilhan Omar's sister's phone, U.S. budget deficit)
 *
 * Positioned immediately after Section 8 (WeatherSection) with equal 20px top border spacing.
 */
export default function MoreNewsSection() {
  return (
    <section className="w-full pt-5 pb-10">
      {/* Top Divider with equal 20px padding */}
      <div className="w-full border-t border-[#121212] mb-5" />

      {/* Header */}
      <h2 className="font-nyt-franklin font-bold text-[14px] text-[#121212] mb-3 select-none">
        More News
      </h2>

      {/* ============================================================ */}
      {/* LEAD STORY: 2-COLUMN HERO (Left Story ~38%, Right Photo ~62%) */}
      {/* ============================================================ */}
      <div className="flex flex-row items-start gap-6 w-full mb-5">
        {/* Left Column */}
        <div className="w-[38%] shrink-0 flex flex-col">
          <article className="group cursor-pointer">
            <Link href={getArticleHref("The Leap Second Has Been Canceled")}>
              <h3 className="font-nyt-serif font-bold text-[22px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                The Leap Second Has Been Canceled
              </h3>
            </Link>
            <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-2 font-normal">
              Earth’s rotation subtly changes the length of the day. Now our clocks won’t change with it — at least not for a very long time.
            </p>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              3 MIN READ
            </span>
          </article>
        </div>

        {/* Right Photo Column */}
        <div className="flex-1 min-w-0 flex flex-col">
          <Link
            href={getArticleHref("The Leap Second Has Been Canceled")}
            className="w-full block group"
          >
            <div className="w-full relative aspect-[16/9.8] overflow-hidden bg-black rounded-[1px]">
              <img
                src="/images/earth_space_night.jpg"
                alt="Planet Earth seen from space at night with glowing city lights"
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>
          <span className="font-nyt-franklin text-[9px] text-[#727272] text-right mt-1 select-none">
            Miguel Román, Joshua Stevens/NASA&apos;s Goddard Space Flight Center
          </span>
        </div>
      </div>

      {/* Horizontal Divider between Lead and 3x3 Grid */}
      <div className="w-full border-t border-[#e2e2e2] my-5" />

      {/* ============================================================ */}
      {/* 3x3 ARTICLE GRID (Rows 1, 2, 3 across 3 equal columns)        */}
      {/* ============================================================ */}
      <div className="w-full flex flex-col">
        {/* ------------------------------------------------------------ */}
        {/* ROW 1: Articles with Thumbnails                              */}
        {/* ------------------------------------------------------------ */}
        <div className="grid grid-cols-3 divide-x divide-[#e2e2e2] pb-4">
          {/* Col 1: Manchester City */}
          <article className="pr-5 flex items-start justify-between group cursor-pointer">
            <div className="flex-1 min-w-0 pr-3">
              <span className="font-nyt-franklin font-bold text-[10px] tracking-wider text-[#c00000] uppercase mb-0.5 block">
                LIVE
              </span>
              <Link href={getArticleHref("Manchester City Leads Ipswich as Liverpool Trails Brentford")}>
                <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Manchester City Leads Ipswich as Liverpool Trails Brentford
                </h4>
              </Link>
              <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                FROM THE ATHLETIC
              </span>
            </div>
            <Link
              href={getArticleHref("Manchester City Leads Ipswich as Liverpool Trails Brentford")}
              className="w-[70px] h-[70px] shrink-0 overflow-hidden bg-neutral-100 rounded-[1px] block group-hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/mancity_ipswich_crop.jpg"
                alt="Manchester City vs Ipswich football match"
                className="w-full h-full object-cover"
              />
            </Link>
          </article>

          {/* Col 2: Yemen Conflict */}
          <article className="px-5 flex items-start justify-between group cursor-pointer">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("Yemen Fighting Rages as Civilian Toll From Houthi-Saudi Conflict Worsens")}>
                <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Yemen Fighting Rages as Civilian Toll From Houthi-Saudi Conflict Worsens
                </h4>
              </Link>
              <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                3 MIN READ
              </span>
            </div>
            <Link
              href={getArticleHref("Yemen Fighting Rages as Civilian Toll From Houthi-Saudi Conflict Worsens")}
              className="w-[70px] h-[70px] shrink-0 overflow-hidden bg-neutral-100 rounded-[1px] block group-hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/yemen_conflict.jpg"
                alt="Motorcycles in Yemen street"
                className="w-full h-full object-cover"
              />
            </Link>
          </article>

          {/* Col 3: Oregon School */}
          <article className="pl-5 flex items-start justify-between group cursor-pointer">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("How a Teacher and a Dad Stopped the Slaughter at an Oregon School")}>
                <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  How a Teacher and a Dad Stopped the Slaughter at an Oregon School
                </h4>
              </Link>
              <div className="flex items-center gap-1 mt-1.5 text-[#727272]">
                <svg className="w-3.5 h-3.5 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">
                  97
                </span>
              </div>
            </div>
            <Link
              href={getArticleHref("How a Teacher and a Dad Stopped the Slaughter at an Oregon School")}
              className="w-[70px] h-[70px] shrink-0 overflow-hidden bg-neutral-100 rounded-[1px] block group-hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/oregon_memorial.jpg"
                alt="Oregon memorial cross with flowers"
                className="w-full h-full object-cover"
              />
            </Link>
          </article>
        </div>

        {/* Divider between Row 1 and Row 2 */}
        <div className="w-full border-t border-[#e2e2e2] my-4" />

        {/* ------------------------------------------------------------ */}
        {/* ROW 2: Text-Only Articles                                    */}
        {/* ------------------------------------------------------------ */}
        <div className="grid grid-cols-3 divide-x divide-[#e2e2e2] pb-4">
          {/* Col 1: Covid Reporter */}
          <article className="pr-5 group cursor-pointer">
            <Link href={getArticleHref("A Reporter Who Saw Covid Coming Has Died")}>
              <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                A Reporter Who Saw Covid Coming Has Died
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
              4 MIN READ
            </span>
          </article>

          {/* Col 2: Shipwreck */}
          <article className="px-5 group cursor-pointer">
            <Link href={getArticleHref("The World’s Oldest Shipwreck? Maybe, but ‘We’re All Excited by Maybe.’")}>
              <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                The World’s Oldest Shipwreck? Maybe, but ‘We’re All Excited by Maybe.’
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
              5 MIN READ
            </span>
          </article>

          {/* Col 3: Israeli Settlers */}
          <article className="pl-5 group cursor-pointer">
            <Link href={getArticleHref("Israeli Settlers Attack Palestinians and Washington Post Journalist in West Bank")}>
              <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Israeli Settlers Attack Palestinians and Washington Post Journalist in West Bank
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
              4 MIN READ
            </span>
          </article>
        </div>

        {/* Divider between Row 2 and Row 3 */}
        <div className="w-full border-t border-[#e2e2e2] my-4" />

        {/* ------------------------------------------------------------ */}
        {/* ROW 3: Text-Only Articles                                    */}
        {/* ------------------------------------------------------------ */}
        <div className="grid grid-cols-3 divide-x divide-[#e2e2e2]">
          {/* Col 1: M.I.T. Scientist */}
          <article className="pr-5 group cursor-pointer">
            <Link href={getArticleHref("M.I.T. Scientist Wins $6 Million in Sexual Harassment Defamation Suit")}>
              <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                M.I.T. Scientist Wins $6 Million in Sexual Harassment Defamation Suit
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
              3 MIN READ
            </span>
          </article>

          {/* Col 2: Ilhan Omar's Sister */}
          <article className="px-5 group cursor-pointer">
            <Link href={getArticleHref("Ilhan Omar’s Sister’s Phone Was Seized Before Search of Lawmaker’s Home")}>
              <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Ilhan Omar’s Sister’s Phone Was Seized Before Search of Lawmaker’s Home
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
              4 MIN READ
            </span>
          </article>

          {/* Col 3: US Budget Deficit */}
          <article className="pl-5 group cursor-pointer">
            <Link href={getArticleHref("U.S. Budget Deficit Nears $2 Trillion, a Reality Check for Trump’s Cost Cutting")}>
              <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                U.S. Budget Deficit Nears $2 Trillion, a Reality Check for Trump’s Cost Cutting
              </h4>
            </Link>
            <div className="flex items-center gap-1 mt-1.5 text-[#727272]">
              <svg className="w-3.5 h-3.5 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">
                560
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

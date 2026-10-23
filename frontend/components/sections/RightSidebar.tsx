"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

/**
 * RightSidebar Component
 * Exact replica of the New York Times Frontpage Right Sidebar:
 * - Section 1 (Image 1): Sotheby's Rare Science Books Feature ("For a Mere $2 Million...")
 * - Section 2 (Image 2): Prefab Housing & Anger Check 2-Card Module with Carousel Controls
 * - Section 3 (Images 3 & 4): Opinion Section:
 *   - Maureen Dowd with author thumbnail
 *   - STICKY PART (Starts at Vladyslav Holovin down to bottom of 2x2 grid, sticky until Section 9 bottom edge):
 *     - Vladyslav Holovin & Anna Ivanenko with Ukrainian pen/activism illustration
 *     - Nicholas Kristof with author thumbnail
 *     - Jessica Grose with passport documents photo
 *     - 2x2 Opinion Grid (Jamelle Bouie, The Editorial Board, The Opinions, Emily Bazelon)
 */
export default function RightSidebar() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. SOTHEBY'S RARE BOOKS (Image 1)                            */}
      {/* ============================================================ */}
      <article className="group cursor-pointer flex flex-col">
        <Link href={getArticleHref("For a Mere $2 Million, You Could Own 3 Books That Unlocked the Universe")} className="w-full block">
          <div className="w-full relative aspect-[16/10.5] overflow-hidden bg-neutral-100 rounded-[1px]">
            <img
              src="/images/sense_sensibility.jpg"
              alt="Rare astronomy and science books at Sotheby's auction"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </Link>
        <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1.5 select-none block">
          Andres Kudacki for The New York Times
        </span>

        <Link href={getArticleHref("For a Mere $2 Million, You Could Own 3 Books That Unlocked the Universe")} className="mt-2.5 block">
          <h3 className="font-nyt-serif font-bold text-[22px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
            For a Mere $2 Million, You Could Own 3 Books That Unlocked the Universe
          </h3>
        </Link>
        <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-2 font-normal">
          At Sotheby’s, a feast of rare science books includes volumes from Copernicus, Galileo and Newton that revolutionized human understanding of the cosmos.
        </p>
        <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-2 block">
          5 MIN READ
        </span>
      </article>

      {/* Horizontal Divider with snug spacing below 5 MIN READ */}
      <div className="w-full border-t border-[#e2e2e2] mt-2.5 mb-5" />

      {/* ============================================================ */}
      {/* 2. PREFAB & ANGER MANAGEMENT 2-CARD MODULE (Image 2)          */}
      {/* ============================================================ */}
      <div className="w-full flex flex-col mb-6">
        <div className="grid grid-cols-2 divide-x divide-[#e2e2e2] gap-0">
          {/* Card 1: Prefab Housing */}
          <article className="pr-3.5 group cursor-pointer flex flex-col">
            <Link href={getArticleHref("I’m Looking to Downsize. Is Prefab Housing the Way to Go?")} className="w-full block">
              <div className="w-full aspect-square overflow-hidden bg-neutral-100 rounded-[1px] mb-2">
                <img
                  src="/images/thumb_own_a_home.jpg"
                  alt="Modern prefabricated housing architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <Link href={getArticleHref("I’m Looking to Downsize. Is Prefab Housing the Way to Go?")}>
              <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                I’m Looking to Downsize. Is Prefab Housing the Way to Go?
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-2 block">
              2 MIN READ
            </span>
          </article>

          {/* Card 2: Anger in Check */}
          <article className="pl-3.5 group cursor-pointer flex flex-col">
            <Link href={getArticleHref("3 Tools to Help Keep Your Anger in Check")} className="w-full block">
              <div className="w-full aspect-square overflow-hidden bg-neutral-100 rounded-[1px] mb-2">
                <img
                  src="/images/macbeth_theater.jpg"
                  alt="Dramatic emotional and psychological feature"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <Link href={getArticleHref("3 Tools to Help Keep Your Anger in Check")}>
              <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                3 Tools to Help Keep Your Anger in Check
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-2 block">
              3 MIN READ
            </span>
          </article>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex justify-end gap-2 mt-3 select-none">
          <button
            type="button"
            aria-label="Previous items"
            className="w-6 h-6 rounded-full border border-[#d4d4d4] flex items-center justify-center text-[#a3a3a3] hover:border-[#737373] hover:text-[#121212] transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next items"
            className="w-6 h-6 rounded-full border border-[#121212] flex items-center justify-center text-[#121212] hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. OPINION HEADER + MAUREEN DOWD                             */}
      {/* ============================================================ */}
      <div className="w-full pt-4 mb-4">
        {/* Identical Double Black Divider - both borders exact same thickness */}
        <div className="w-full border-t border-b border-[#121212] h-[4px] mb-3" aria-hidden="true" />
        <h3 className="font-nyt-franklin font-bold text-[14px] text-[#121212] mb-3 select-none">
          Opinion
        </h3>

        {/* Item 1: Maureen Dowd */}
        <article className="group cursor-pointer">
          <span className="font-nyt-franklin text-[10px] font-bold tracking-wider text-[#727272] uppercase mb-0.5 block">
            MAUREEN DOWD
          </span>
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("Trump’s Bubble Is About to Burst")}>
                <h4 className="font-nyt-serif font-bold text-[16.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Trump’s Bubble Is About to Burst
                </h4>
              </Link>
              <div className="flex items-center gap-1 mt-1 text-[#727272]">
                <svg className="w-3.5 h-3.5 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">
                  921
                </span>
              </div>
            </div>
            <div className="w-11 h-11 shrink-0 rounded-full overflow-hidden bg-neutral-100">
              <img
                src="/images/shelly_portrait.jpg"
                alt="Maureen Dowd"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </article>
      </div>

      {/* Divider above Sticky Part */}
      <div className="w-full border-t border-[#e2e2e2] my-4" />

      {/* ============================================================ */}
      {/* STICKY PART: Vladyslav Holovin down to 2x2 grid               */}
      {/* Direct child of the 6000px+ right sidebar column             */}
      {/* Sticky when scrolling until Section 9 bottom edge (clears taller sticky category navbar) */}
      {/* ============================================================ */}
      <div className="sticky top-[58px] z-20 bg-white pb-6">
        {/* Item 2: Vladyslav Holovin & Anna Ivanenko (Pen Illustration)  */}
        <article className="group cursor-pointer mb-4">
          <span className="font-nyt-franklin text-[10px] font-bold tracking-wider text-[#727272] uppercase mb-0.5 block">
            VLADYSLAV HOLOVIN AND ANNA IVANENKO
          </span>
          <Link href={getArticleHref("Why I Canceled Russian Culture for Myself")}>
            <h4 className="font-nyt-serif font-bold text-[18px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors mb-2.5">
              Why I Canceled Russian Culture for Myself
            </h4>
          </Link>
          <Link href={getArticleHref("Why I Canceled Russian Culture for Myself")} className="block">
            <div className="w-full aspect-[16/9.5] overflow-hidden bg-neutral-100 rounded-[1px]">
              <img
                src="/images/peltier_protest.jpg"
                alt="Cultural advocacy and resistance feature"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </Link>
        </article>

        {/* Divider */}
        <div className="w-full border-t border-[#e2e2e2] my-4" />

        {/* Item 3: Nicholas Kristof */}
        <article className="group cursor-pointer mb-4">
          <span className="font-nyt-franklin text-[10px] font-bold tracking-wider text-[#727272] uppercase mb-0.5 block">
            NICHOLAS KRISTOF
          </span>
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("A Great Moral Blind Spot of Our Age")}>
                <h4 className="font-nyt-serif font-bold text-[16.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  A Great Moral Blind Spot of Our Age
                </h4>
              </Link>
              <div className="flex items-center gap-1 mt-1 text-[#727272]">
                <svg className="w-3.5 h-3.5 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">
                  259
                </span>
              </div>
            </div>
            <div className="w-11 h-11 shrink-0 rounded-full overflow-hidden bg-neutral-100">
              <img
                src="/images/nfl_receiver_enigma.jpg"
                alt="Nicholas Kristof"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </article>

        {/* Divider */}
        <div className="w-full border-t border-[#e2e2e2] my-4" />

        {/* Item 4: Jessica Grose (Passports / Grandparents)             */}
        <article className="group cursor-pointer mb-4">
          <span className="font-nyt-franklin text-[10px] font-bold tracking-wider text-[#727272] uppercase mb-0.5 block">
            JESSICA GROSE
          </span>
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("Why My Grandparents Still Loved the Country That Rejected Them")}>
                <h4 className="font-nyt-serif font-bold text-[16.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Why My Grandparents Still Loved the Country That Rejected Them
                </h4>
              </Link>
              <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                7 MIN READ
              </span>
            </div>
            <div className="w-[85px] h-[75px] shrink-0 overflow-hidden bg-neutral-100 rounded-[1px]">
              <img
                src="/images/thumb_scandal_1971.jpg"
                alt="Historical archival documents"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </article>

        {/* Divider */}
        <div className="w-full border-t border-[#e2e2e2] my-4" />

        {/* ------------------------------------------------------------ */}
        {/* 2x2 OPINION GRID (Jamelle Bouie, Editorial Board, etc.)       */}
        {/* Perfectly aligned horizontal lines on the exact same grid row */}
        {/* Space on both sides so horizontal lines do not touch vertical line */}
        {/* ------------------------------------------------------------ */}
        <div className="grid grid-cols-[1fr_1px_1fr] items-stretch gap-0">
          {/* Row 1, Col 1: Jamelle Bouie */}
          <article className="col-start-1 row-start-1 pr-3.5 pb-2.5 flex flex-col justify-between group cursor-pointer">
            <div>
              <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#727272] uppercase mb-0.5 block">
                JAMELLE BOUIE
              </span>
              <Link href={getArticleHref("Elon Musk Is Beyond the Pale")}>
                <h5 className="font-nyt-serif font-bold text-[14px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Elon Musk Is Beyond the Pale
                </h5>
              </Link>
            </div>
            <span className="font-nyt-franklin text-[9px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
              5 MIN READ
            </span>
          </article>

          {/* Middle Vertical Divider Line - spans all 3 rows */}
          <div className="col-start-2 row-start-1 row-span-3 w-[1px] bg-[#e2e2e2] self-stretch my-0.5" />

          {/* Row 1, Col 3: The Editorial Board */}
          <article className="col-start-3 row-start-1 pl-3.5 pb-2.5 flex flex-col justify-between group cursor-pointer">
            <div>
              <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#727272] uppercase mb-0.5 block">
                THE EDITORIAL BOARD
              </span>
              <Link href={getArticleHref("How to End Gerrymandering")}>
                <h5 className="font-nyt-serif font-bold text-[14px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  How to End Gerrymandering
                </h5>
              </Link>
            </div>
            <div className="flex items-center gap-1 mt-1.5 text-[#727272]">
              <svg className="w-3 h-3 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-nyt-franklin text-[10px] font-medium leading-none">
                368
              </span>
            </div>
          </article>

          {/* Row 2, Col 1: Horizontal Divider under Jamelle Bouie (stops 14px before vertical line) */}
          <div className="col-start-1 row-start-2 pr-3.5 py-2 flex items-center">
            <div className="w-full border-b border-[#e2e2e2]" />
          </div>

          {/* Row 2, Col 3: Horizontal Divider under The Editorial Board (starts 14px after vertical line) */}
          <div className="col-start-3 row-start-2 pl-3.5 py-2 flex items-center">
            <div className="w-full border-b border-[#e2e2e2]" />
          </div>

          {/* Row 3, Col 1: The Opinions */}
          <article className="col-start-1 row-start-3 pr-3.5 pt-1.5 flex flex-col justify-between group cursor-pointer">
            <div>
              <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#727272] uppercase mb-0.5 block">
                THE OPINIONS
              </span>
              <Link href={getArticleHref("The Cringiest and Craftiest Midterm Ads")}>
                <h5 className="font-nyt-serif font-bold text-[14px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  The Cringiest and Craftiest Midterm Ads
                </h5>
              </Link>
            </div>
          </article>

          {/* Row 3, Col 3: Emily Bazelon */}
          <article className="col-start-3 row-start-3 pl-3.5 pt-1.5 flex flex-col justify-between group cursor-pointer">
            <div>
              <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#727272] uppercase mb-0.5 block">
                EMILY BAZELON
              </span>
              <Link href={getArticleHref("This Is One of the Saddest Facts About the Cornell Rape Case")}>
                <h5 className="font-nyt-serif font-bold text-[14px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  This Is One of the Saddest Facts About the Cornell Rape Case
                </h5>
              </Link>
            </div>
            <div className="flex items-center gap-1 mt-1 text-[#727272]">
              <svg className="w-3 h-3 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-nyt-franklin text-[10px] font-medium leading-none">
                215
              </span>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

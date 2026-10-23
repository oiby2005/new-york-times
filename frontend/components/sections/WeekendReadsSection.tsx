"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

/**
 * WeekendReadsSection Component
 * Comprehensive Weekend Reads mega-section combining all 4 images uploaded by the user:
 * 1. Hero: U2 Band Feature ("50 Years In, What’s the Point of U2?")
 * 2. Cereal Feature ("Cereal Is in a Crunch. Can a Health Pitch Save It?")
 * 3. What to Watch and Read (2x2 Article Grid)
 * 4. In Case You Missed It (3-Card Feature Carousel)
 * 5. What to Cook This Weekend (Recipe Cards)
 * 6. News Quizzes (3-Column Quiz Grid)
 *
 * Positioned immediately after Section 6 (WhatToWatchSection) with equal 20px top border spacing.
 */
export default function WeekendReadsSection() {
  return (
    <section className="w-full pt-5 pb-10">
      {/* ============================================================ */}
      {/* 1. TOP BORDER & HEADER                                        */}
      {/* ============================================================ */}
      <div className="w-full border-t border-[#121212] mb-5" />

      <h2 className="font-nyt-franklin font-bold text-[14px] text-[#121212] mb-3 select-none">
        Weekend Reads
      </h2>

      {/* ============================================================ */}
      {/* HERO: U2 50 YEARS IN BANNER                                  */}
      {/* ============================================================ */}
      <article className="group cursor-pointer w-full flex flex-col mb-7">
        <Link href={getArticleHref("50 Years In, What’s the Point of U2?")} className="w-full block">
          <div className="w-full relative aspect-[16/9.5] overflow-hidden bg-black rounded-[1px] shadow-sm">
            <img
              src="/images/weekend_u2_hero.jpg"
              alt="Bono and The Edge of U2 standing back to back"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
            />
            {/* Center Bottom Headline Overlay */}
            <div className="absolute inset-x-0 bottom-0 pb-6 pt-16 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center text-center px-4">
              <span className="font-nyt-franklin font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-1 drop-shadow-sm">
                THE INTERVIEW
              </span>
              <h3 className="font-nyt-serif font-bold text-[28px] md:text-[32px] text-white leading-[1.1] drop-shadow-md max-w-2xl">
                50 Years In, What’s the Point of U2?
              </h3>
            </div>
          </div>
        </Link>
        <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1.5 italic select-none">
          Philip Montgomery for The New York Times
        </span>
      </article>

      {/* Ash divider between Philip Montgomery credit in Weekend Reads Hero and cereal crunch story */}
      <div className="w-full border-t border-[#e2e2e2] my-6" />

      {/* ============================================================ */}
      {/* 2. CEREAL STORY (Left Column ~36%, Right Photo ~64%)         */}
      {/* ============================================================ */}
      <div className="flex flex-row items-start gap-6 w-full mb-7">
        {/* Left Column */}
        <div className="w-[36%] shrink-0 flex flex-col">
          <article className="group cursor-pointer">
            <Link href={getArticleHref("Cereal Is in a Crunch. Can a Health Pitch Save It?")}>
              <h3 className="font-nyt-serif font-bold text-[22px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Cereal Is in a Crunch. Can a Health Pitch Save It?
              </h3>
            </Link>
            <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-2 font-normal">
              As more Americans turn away from the snap, crackle and sugar, the industry is trying to capitalize on the obsession with wellness.
            </p>
            {/* Comment count */}
            <div className="flex items-center gap-1.5 mt-2.5 text-[#727272]">
              <svg className="w-3.5 h-3.5 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-nyt-franklin text-[11px] font-medium leading-none">
                275
              </span>
            </div>
          </article>
        </div>

        {/* Right Photo Column */}
        <div className="flex-1 min-w-0 flex flex-col">
          <Link
            href={getArticleHref("Cereal Is in a Crunch. Can a Health Pitch Save It?")}
            className="w-full block group"
          >
            <div className="w-full relative aspect-[16/10.5] overflow-hidden bg-neutral-100">
              <img
                src="/images/cereal_crunch_bowl.jpg"
                alt="Bowl of shredded wheat cereal with spoon"
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>
          <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1 italic select-none">
            Shawn Michael Jones for The New York Times
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. WHAT TO WATCH AND READ (2x2 GRID)                         */}
      {/* ============================================================ */}
      <div className="w-full border-t border-[#121212] pt-5 pb-7 mb-2">
        <h3 className="font-nyt-franklin font-bold text-[14px] text-[#121212] mb-4 select-none">
          What to Watch and Read
        </h3>

        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6 items-start">
            {/* Item 1 */}
            <article className="flex items-start justify-between pr-4 border-r border-[#e2e2e2] group cursor-pointer">
              <div className="flex-1 min-w-0 pr-3">
                <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#121212] uppercase mb-0.5 block">
                  MOVIE REVIEW
                </span>
                <Link href={getArticleHref("‘Sense and Sensibility’: Can’t Buy Me Love")}>
                  <h4 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                    ‘Sense and Sensibility’: Can’t Buy Me Love
                  </h4>
                </Link>
                <div className="flex items-center gap-1.5 mt-2 text-[#727272]">
                  <svg className="w-3.5 h-3.5 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">133</span>
                </div>
              </div>
              <Link
                href={getArticleHref("‘Sense and Sensibility’: Can’t Buy Me Love")}
                className="w-[80px] h-[80px] shrink-0 overflow-hidden bg-neutral-100 block group-hover:opacity-90 transition-opacity"
              >
                <img
                  src="/images/sense_sensibility.jpg"
                  alt="Sense and Sensibility still"
                  className="w-full h-full object-cover"
                />
              </Link>
            </article>

            {/* Item 2 */}
            <article className="flex items-start justify-between group cursor-pointer">
              <div className="flex-1 min-w-0 pr-3">
                <Link href={getArticleHref("‘Macbeth’ and More Theater to Stream in October")}>
                  <h4 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                    ‘Macbeth’ and More Theater to Stream in October
                  </h4>
                </Link>
                <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2 block">
                  4 MIN READ
                </span>
              </div>
              <Link
                href={getArticleHref("‘Macbeth’ and More Theater to Stream in October")}
                className="w-[80px] h-[80px] shrink-0 overflow-hidden bg-neutral-100 block group-hover:opacity-90 transition-opacity"
              >
                <img
                  src="/images/macbeth_theater.jpg"
                  alt="Macbeth theater stage"
                  className="w-full h-full object-cover"
                />
              </Link>
            </article>
          </div>

          {/* Sub-divider between Row 1 and Row 2 */}
          <div className="w-full border-t border-[#e2e2e2]" />

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-6 items-start">
            {/* Item 3 */}
            <article className="flex items-start justify-between pr-4 border-r border-[#e2e2e2] group cursor-pointer">
              <div className="flex-1 min-w-0 pr-3">
                <Link href={getArticleHref("5 International Movies to Watch")}>
                  <h4 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                    5 International Movies to Watch
                  </h4>
                </Link>
                <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2 block">
                  5 MIN READ
                </span>
              </div>
              <Link
                href={getArticleHref("5 International Movies to Watch")}
                className="w-[80px] h-[80px] shrink-0 overflow-hidden bg-neutral-100 block group-hover:opacity-90 transition-opacity"
              >
                <img
                  src="/images/international_movies.jpg"
                  alt="International movie still"
                  className="w-full h-full object-cover"
                />
              </Link>
            </article>

            {/* Item 4 */}
            <article className="flex items-start justify-between group cursor-pointer">
              <div className="flex-1 min-w-0 pr-3">
                <Link href={getArticleHref("Documentary on Leonard Peltier Uses A.I. to Mixed Effect")}>
                  <h4 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                    Documentary on Leonard Peltier Uses A.I. to Mixed Effect
                  </h4>
                </Link>
                <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2 block">
                  2 MIN READ
                </span>
              </div>
              <Link
                href={getArticleHref("Documentary on Leonard Peltier Uses A.I. to Mixed Effect")}
                className="w-[80px] h-[80px] shrink-0 overflow-hidden bg-neutral-100 block group-hover:opacity-90 transition-opacity"
              >
                <img
                  src="/images/peltier_protest.jpg"
                  alt="Leonard Peltier protest rally"
                  className="w-full h-full object-cover"
                />
              </Link>
            </article>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. IN CASE YOU MISSED IT (3 CARDS + CAROUSEL ARROW)           */}
      {/* ============================================================ */}
      <div className="w-full border-t border-[#121212] pt-5 pb-7 mb-2 relative">
        <h3 className="font-nyt-franklin font-bold text-[14px] text-[#121212] mb-4 select-none">
          In Case You Missed It
        </h3>

        {/* 3-Card Row */}
        <div className="grid grid-cols-3 gap-5 relative">
          {/* Card 1 */}
          <article className="group cursor-pointer flex flex-col">
            <Link
              href={getArticleHref("He Was a Star N.F.L. Receiver. Now He’s the League’s Biggest Enigma.")}
              className="w-full aspect-square overflow-hidden bg-neutral-100 mb-2.5 block"
            >
              <img
                src="/images/nfl_receiver_enigma.jpg"
                alt="NFL receiver portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <Link href={getArticleHref("He Was a Star N.F.L. Receiver. Now He’s the League’s Biggest Enigma.")}>
              <h4 className="font-nyt-serif font-bold text-[15.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                He Was a Star N.F.L. Receiver. Now He’s the League’s Biggest Enigma.
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[10px] font-bold tracking-wider text-[#727272] uppercase mt-1.5 block">
              FROM THE ATHLETIC
            </span>
          </article>

          {/* Card 2 */}
          <article className="group cursor-pointer flex flex-col">
            <Link
              href={getArticleHref("One Grieving Mother, Two Mariners Tickets and a Season of New Friends")}
              className="w-full aspect-square overflow-hidden bg-neutral-100 mb-2.5 block"
            >
              <img
                src="/images/mariners_mother.jpg"
                alt="Older woman Mariners fan in stadium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#121212] uppercase mb-0.5 block">
              THE GREAT READ
            </span>
            <Link href={getArticleHref("One Grieving Mother, Two Mariners Tickets and a Season of New Friends")}>
              <h4 className="font-nyt-serif font-bold text-[15.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                One Grieving Mother, Two Mariners Tickets and a Season of New Friends
              </h4>
            </Link>
            <div className="flex items-center gap-1.5 mt-1.5 text-[#727272]">
              <svg className="w-3.5 h-3.5 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">192</span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="group cursor-pointer flex flex-col">
            <Link
              href={getArticleHref("Coming Out at 50 Can Be Hard. Shelly Found a Coach.")}
              className="w-full aspect-square overflow-hidden bg-neutral-100 mb-2.5 block"
            >
              <img
                src="/images/shelly_portrait.jpg"
                alt="Portrait of woman Shelly with glasses"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#121212] uppercase mb-0.5 block">
              THE GREAT READ
            </span>
            <Link href={getArticleHref("Coming Out at 50 Can Be Hard. Shelly Found a Coach.")}>
              <h4 className="font-nyt-serif font-bold text-[15.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Coming Out at 50 Can Be Hard. Shelly Found a Coach.
              </h4>
            </Link>
            <div className="flex items-center gap-1.5 mt-1.5 text-[#727272]">
              <svg className="w-3.5 h-3.5 text-[#727272]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">259</span>
            </div>
          </article>

          {/* Carousel Right Arrow Button */}
          <button
            type="button"
            aria-label="Next stories"
            className="absolute -right-3 top-1/3 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#cccccc] shadow-md flex items-center justify-center text-[#121212] hover:bg-neutral-50 transition-colors z-10 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. WHAT TO COOK THIS WEEKEND                                 */}
      {/* ============================================================ */}
      <div className="w-full border-t border-[#121212] pt-5 pb-7 mb-2 relative">
        <h3 className="font-nyt-franklin font-bold text-[14px] text-[#121212] mb-4 select-none">
          What to Cook This Weekend
        </h3>

        <div className="grid grid-cols-2 relative">
          {/* Recipe 1 */}
          <article className="flex items-start gap-3.5 group cursor-pointer pr-6 border-r border-[#e2e2e2]">
            <Link
              href={getArticleHref("Cottage Cheese Meatballs")}
              className="w-[85px] h-[85px] shrink-0 overflow-hidden bg-neutral-100 rounded-[1px] block"
            >
              <img
                src="/images/cottage_meatballs.jpg"
                alt="Cottage Cheese Meatballs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="flex-1 min-w-0">
              <Link href={getArticleHref("Cottage Cheese Meatballs")}>
                <h4 className="font-nyt-serif font-bold text-[15px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Cottage Cheese Meatballs
                </h4>
              </Link>
              <span className="font-nyt-franklin text-[11px] text-[#727272] uppercase mt-1 block">
                30 MIN
              </span>
            </div>
          </article>

          {/* Recipe 2 */}
          <article className="flex items-start gap-3.5 group cursor-pointer pl-6">
            <Link
              href={getArticleHref("Apple Amaro Spritz")}
              className="w-[85px] h-[85px] shrink-0 overflow-hidden bg-neutral-100 rounded-[1px] block"
            >
              <img
                src="/images/apple_amaro_spritz.jpg"
                alt="Apple Amaro Spritz"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="flex-1 min-w-0">
              <Link href={getArticleHref("Apple Amaro Spritz")}>
                <h4 className="font-nyt-serif font-bold text-[15px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Apple Amaro Spritz
                </h4>
              </Link>
              <span className="font-nyt-franklin text-[11px] text-[#727272] uppercase mt-1 block">
                1 HR
              </span>
            </div>
          </article>

          {/* Carousel Right Arrow Button */}
          <button
            type="button"
            aria-label="Next recipes"
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#cccccc] shadow-md flex items-center justify-center text-[#121212] hover:bg-neutral-50 transition-colors z-10 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6. NEWS QUIZZES (3 COLUMNS WITH VERTICAL DIVIDERS)           */}
      {/* ============================================================ */}
      <div className="w-full border-t border-[#e2e2e2] pt-5">
        <div className="grid grid-cols-3 gap-0">
          {/* Quiz 1 */}
          <article className="pr-5 border-r border-[#e2e2e2] group cursor-pointer">
            <Link href={getArticleHref("Did You Follow the News This Week? Take Our Quiz.")}>
              <h4 className="font-nyt-serif font-bold text-[16px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Did You Follow the News This Week? Take Our Quiz.
              </h4>
            </Link>
          </article>

          {/* Quiz 2 */}
          <article className="px-5 border-r border-[#e2e2e2] group cursor-pointer">
            <Link href={getArticleHref("Play Flashback, Your Weekly History Quiz")}>
              <h4 className="font-nyt-serif font-bold text-[16px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Play Flashback, Your Weekly History Quiz
              </h4>
            </Link>
          </article>

          {/* Quiz 3 */}
          <article className="pl-5 group cursor-pointer">
            <Link href={getArticleHref("Listen to This Week’s Headlines News Quiz")}>
              <h4 className="font-nyt-serif font-bold text-[16px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Listen to This Week’s Headlines News Quiz
              </h4>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

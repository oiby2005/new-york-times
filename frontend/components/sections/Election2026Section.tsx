"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

/**
 * Election2026Section Component
 * Pixel-perfect replica of The New York Times Midterms 2026 Coverage module.
 * Located immediately below Section 1 inside the Main Content column.
 */
export default function Election2026Section() {
  const [isMuted, setIsMuted] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="w-full pt-[36px] pb-8">
      {/* Top Divider across the Main Content column */}
      <div className="w-full border-t border-[#121212] mb-5" />

      {/* Sub-Navbar: [2][0][2][6] + Topic Navigation Links */}
      <div className="w-full flex items-center justify-between pb-3.5 mb-2">
        <div className="flex items-center gap-1.5 shrink-0 select-none">
          {/* 2026 Year Badge: Red (#f4564a), Cyan/Blue (#2b8ad8), Red (#f4564a), Blue (#2b8ad8) */}
          <div className="flex items-center gap-[1.5px] font-sans font-bold text-[11px] text-white tracking-tight leading-none">
            <span className="w-[17px] h-[17px] bg-[#f4564a] rounded-[2px] flex items-center justify-center shadow-xs">
              2
            </span>
            <span className="w-[17px] h-[17px] bg-[#2b8ad8] rounded-[2px] flex items-center justify-center shadow-xs">
              0
            </span>
            <span className="w-[17px] h-[17px] bg-[#f4564a] rounded-[2px] flex items-center justify-center shadow-xs">
              2
            </span>
            <span className="w-[17px] h-[17px] bg-[#2b8ad8] rounded-[2px] flex items-center justify-center shadow-xs">
              6
            </span>
          </div>
        </div>

        {/* Election Topics Navigation Links */}
        <nav
          aria-label="Midterms Navigation"
          className="flex-1 flex items-center justify-start gap-4 sm:gap-6 ml-4 overflow-x-auto no-scrollbar"
        >
          <Link
            href="#"
            className="font-nyt-franklin text-[12px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            Tracking the Early Vote
          </Link>
          <Link
            href="#"
            className="font-nyt-franklin text-[12px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            The Race for Congress
          </Link>
          <Link
            href="#"
            className="font-nyt-franklin text-[12px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            When to Vote in Your State
          </Link>
          <Link
            href="#"
            className="font-nyt-franklin text-[12px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            Latest Polls
          </Link>
          <Link
            href="#"
            className="font-nyt-franklin text-[12px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            Competitive Races
          </Link>
        </nav>
      </div>

      {/* 3-Column Midterms Grid */}
      <div className="flex flex-row items-start gap-6 w-full">
        {/* ============================================================ */}
        {/* COLUMN 1 (Left Stories: ~28%)                                */}
        {/* ============================================================ */}
        <div className="w-[28%] shrink-0 flex flex-col">
          {/* Story 1 */}
          <article className="group cursor-pointer">
            <Link href={getArticleHref("Pennsylvania Explains the Forces Shaping the Midterms")}>
              <h3 className="font-nyt-serif font-bold text-[21px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Pennsylvania Explains the Forces Shaping the Midterms
              </h3>
            </Link>
            <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-2 font-normal">
              Four battleground congressional districts in the state reveal fault lines that are echoing nationwide.
            </p>
            {/* Comment count */}
            <div className="flex items-center gap-1.5 mt-2.5 text-[#727272]">
              <svg
                className="w-3.5 h-3.5 text-[#727272]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="font-nyt-franklin text-[11px] font-medium leading-none">
                145
              </span>
            </div>
          </article>

          {/* Divider */}
          <div className="w-full border-t border-[#e2e2e2] my-4" />

          {/* Story 2 */}
          <article className="group cursor-pointer">
            <Link href={getArticleHref("Trump Revives 2020 Election Conspiracy Theories as Midterms Loom")}>
              <h4 className="font-nyt-serif font-bold text-[18px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Trump Revives 2020 Election Conspiracy Theories as Midterms Loom
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              7 MIN READ
            </span>
          </article>
        </div>

        {/* ============================================================ */}
        {/* COLUMN 2 (Center Interactive Video Card: ~43%)               */}
        {/* ============================================================ */}
        <div className="w-[43%] shrink-0 flex flex-col">
          {/* Dark Video / Interactive Card */}
          <div className="w-full bg-[#1a1a1a] rounded-[2px] overflow-hidden relative shadow-sm flex flex-col justify-between pt-3.5 pb-0 text-white min-h-[460px]">
            {/* Top Header: Title & NYT Gothic 'T' Logo */}
            <div className="relative w-full px-4 text-center">
              {/* NYT Gothic 'T' Logo in top-right */}
              <div className="absolute top-0.5 right-3.5 w-6 h-7 flex items-center justify-center opacity-90 select-none">
                <img
                  src="/images/nyt_video_t_logo.png"
                  alt="The New York Times"
                  className="w-full h-full object-contain filter invert contrast-200"
                />
              </div>

              <h4 className="font-sans font-bold text-[16px] leading-[1.2] text-white tracking-tight">
                Pennsylvania<br />congressional districts
              </h4>
              <p className="font-sans text-[11.5px] text-neutral-300 mt-1 font-normal">
                2024 U.S. House election results
              </p>
            </div>

            {/* Center Map Graphic */}
            <div className="w-full flex-1 flex items-center justify-center my-3 px-3 relative overflow-hidden">
              <img
                src="/images/pa_election_map.png"
                alt="Pennsylvania congressional districts map"
                className="w-full max-h-[250px] object-contain block drop-shadow-md"
              />
            </div>

            {/* Bottom Section: Controls on Right, Subtitle in Center, Progress Bar */}
            <div className="w-full relative flex flex-col gap-2 pt-1">
              {/* Right-aligned Vertical Action Buttons */}
              <div className="absolute right-3.5 bottom-6 flex flex-col items-center gap-3.5 text-white/85">
                {/* Fullscreen Icon */}
                <button
                  type="button"
                  aria-label="Fullscreen"
                  className="hover:text-white transition-colors cursor-pointer p-0.5"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0-4h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </button>

                {/* Mute / Unmute Toggle */}
                <button
                  type="button"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors cursor-pointer p-0.5"
                >
                  {isMuted ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                    </svg>
                  )}
                </button>

                {/* Share / Link Icon */}
                <button
                  type="button"
                  aria-label="Copy link"
                  onClick={handleCopyLink}
                  className="hover:text-white transition-colors cursor-pointer p-0.5"
                >
                  {copied ? (
                    <span className="text-[10px] text-emerald-400 font-bold">✓</span>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Subtitle / Closed Caption (Centered) */}
              <p className="text-center font-sans text-[12px] text-white font-medium tracking-tight mb-2">
                all across the rest of the country.
              </p>

              {/* Progress Bar (At the bottom of the card) */}
              <div className="w-full h-1 bg-[#333333] overflow-hidden">
                <div className="w-[12%] h-full bg-[#888888]" />
              </div>
            </div>
          </div>

          {/* Video Credit Line (Outside below card) */}
          <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1.5 leading-tight block">
            Shane Goldmacher, Alexandra Ostasiewicz, Joy Sung, Nour Idriss, June Kim and Edward Vega
          </span>
        </div>

        {/* ============================================================ */}
        {/* COLUMN 3 (Right Stories: ~29% with left vertical divider)    */}
        {/* ============================================================ */}
        <div className="flex-1 min-w-0 pl-4 border-l border-[#e2e2e2] flex flex-col">
          {/* Story 1 */}
          <article className="group cursor-pointer">
            <Link href={getArticleHref("Hegseth Is Singled Out in Democrats’ Campaign Attacks for War and High Prices")}>
              <h3 className="font-nyt-serif font-bold text-[20px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Hegseth Is Singled Out in Democrats’ Campaign Attacks for War and High Prices
              </h3>
            </Link>
            <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#5a5a5a] mt-2 font-normal">
              Cabinet members are seldom major figures in campaigns, but Defense Secretary Pete Hegseth has become a target.
            </p>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              6 MIN READ
            </span>
          </article>

          {/* Divider */}
          <div className="w-full border-t border-[#e2e2e2] my-4" />

          {/* Story 2 */}
          <article className="group cursor-pointer">
            <Link href={getArticleHref("‘No Kings’ Events This Weekend to Focus on Voter Turnout, Organizers Say")}>
              <h4 className="font-nyt-serif font-bold text-[18px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                ‘No Kings’ Events This Weekend to Focus on Voter Turnout, Organizers Say
              </h4>
            </Link>
            <span className="font-nyt-franklin text-[10px] font-medium tracking-wider text-[#727272] uppercase mt-2.5 block">
              3 MIN READ
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}

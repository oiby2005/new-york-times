"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

/**
 * WhatToWatchSection Component (Image 4 from previous prompt)
 * Placed immediately after fifth section (GotATipSection).
 * Refined so that the last article's message icon aligns with the bottom edge of the image.
 */
export default function WhatToWatchSection() {
  return (
    <section className="w-full pt-4 pb-8">
      {/* Sub-Navbar: What to Watch + Links */}
      <div className="w-full flex items-center justify-start gap-4 pb-3.5 mb-2 overflow-x-auto no-scrollbar">
        <span className="font-nyt-franklin font-bold text-[13px] text-[#121212] whitespace-nowrap">
          What to Watch
        </span>
        <nav aria-label="What to Watch Navigation" className="flex items-center gap-4">
          <Link
            href={getArticleHref("‘La Bola Negra’")}
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            ‘La Bola Negra’
          </Link>
          <Link
            href={getArticleHref("‘Once Upon a Time in Harlem’")}
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            ‘Once Upon a Time in Harlem’
          </Link>
          <Link
            href={getArticleHref("‘Street Fighter’")}
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            ‘Street Fighter’
          </Link>
          <Link
            href={getArticleHref("‘Sense and Sensibility’")}
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            ‘Sense and Sensibility’
          </Link>
          <Link
            href={getArticleHref("‘Whalefall’")}
            className="font-nyt-franklin text-[12.5px] font-medium text-[#121212] hover:underline whitespace-nowrap transition-colors"
          >
            ‘Whalefall’
          </Link>
        </nav>
      </div>

      {/* 2-Column Content: Left Stories (~36%) + Right Photo (~64%) */}
      <div className="flex flex-row items-stretch gap-6 w-full">
        {/* Left Column (flex justify-between aligns first story at top and 💬 944 at bottom of image) */}
        <div className="w-[36%] shrink-0 flex flex-col justify-between">
          {/* Story 1 */}
          <article className="group cursor-pointer">
            <Link href={getArticleHref("The Elizabeth Holmes Documentary, Through the Eyes of the Reporter Who Exposed Her")}>
              <h3 className="font-nyt-serif font-bold text-[17.5px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                The Elizabeth Holmes Documentary, Through the Eyes of the Reporter Who Exposed Her
              </h3>
            </Link>
            <p className="font-nyt-serif text-[12.5px] leading-[1.35] text-[#5a5a5a] mt-1.5 font-normal">
              Ms. Holmes handed the makers of “You Can See Everything” — and the rest of the world — a microscope with which to observe and dissect her lies.
            </p>
            {/* Comment count */}
            <div className="flex items-center gap-1.5 mt-2 text-[#727272]">
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
              <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">
                96
              </span>
            </div>
          </article>

          {/* Hairline Divider */}
          <div className="w-full border-t border-[#e2e2e2] my-2" />

          {/* Story 2 */}
          <article className="group cursor-pointer">
            <Link href={getArticleHref("Have You Seen the Movie? Let’s Talk.")}>
              <h4 className="font-nyt-serif font-bold text-[16px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                Have You Seen the Movie? Let’s Talk.
              </h4>
            </Link>
            {/* Comment count */}
            <div className="flex items-center gap-1.5 mt-2 text-[#727272]">
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
              <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">
                146
              </span>
            </div>
          </article>

          {/* Hairline Divider */}
          <div className="w-full border-t border-[#e2e2e2] my-2" />

          {/* Story 3 */}
          <article className="group cursor-pointer">
            <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#121212] uppercase mb-0.5 block">
              MOVIE REVIEW
            </span>
            <Link href={getArticleHref("The Slippery Mind of Elizabeth Holmes")}>
              <h4 className="font-nyt-serif font-bold text-[16px] leading-[1.18] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                The Slippery Mind of Elizabeth Holmes
              </h4>
            </Link>
            {/* Comment count - bottom edge aligns with bottom edge of right photo */}
            <div className="flex items-center gap-1.5 mt-2 text-[#727272]">
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
              <span className="font-nyt-franklin text-[10.5px] font-medium leading-none">
                944
              </span>
            </div>
          </article>
        </div>

        {/* Right Photo Column */}
        <div className="flex-1 min-w-0 flex flex-col">
          <Link
            href={getArticleHref("The Elizabeth Holmes Documentary, Through the Eyes of the Reporter Who Exposed Her")}
            className="w-full block group"
          >
            <div className="w-full relative aspect-[16/10.5] overflow-hidden bg-neutral-100">
              <img
                src="/images/elizabeth_holmes_doc.jpg"
                alt="Elizabeth Holmes in documentary scene"
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>
          <span className="font-nyt-franklin text-[9.5px] text-[#727272] text-right mt-1 italic select-none">
            A24
          </span>
        </div>
      </div>
    </section>
  );
}

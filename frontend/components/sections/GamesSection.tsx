"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

export default function GamesSection() {
  return (
    <section className="w-full bg-white text-[#121212] pt-4 pb-12">
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* Top Header & Divider Line */}
        <div className="w-full border-t border-[#121212] pt-2 mb-4 flex items-baseline">
          <h2 className="font-nyt-serif font-black text-[18px] text-[#121212] tracking-tight">
            Games
          </h2>
          <span className="font-nyt-serif italic text-neutral-500 text-[14px] ml-2 font-normal">
            Daily puzzles
          </span>
        </div>

        {/* ============================================================ */}
        {/* ROW 1: Wordle, Connections, Spelling Bee                     */}
        {/* ============================================================ */}
        <div className="grid grid-cols-3 divide-x divide-[#e2e2e2] pb-4">
          {/* Game 1: Wordle */}
          <article className="group cursor-pointer pr-6 flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("Wordle: Today’s Word and Hints")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-tight text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Wordle
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5">
                Guess the 5-letter word with 6 chances.
              </p>
            </div>
            {/* Wordle Icon */}
            <div className="w-10 h-10 shrink-0 border-2 border-[#121212] rounded-[4px] p-[2px] bg-white">
              <div className="grid grid-cols-3 grid-rows-3 gap-[2px] h-full">
                <div className="bg-white" />
                <div className="bg-white" />
                <div className="bg-white" />

                <div className="bg-white" />
                <div className="bg-[#c9b458] rounded-[1px]" />
                <div className="bg-[#6aaa64] rounded-[1px]" />

                <div className="bg-[#6aaa64] rounded-[1px]" />
                <div className="bg-[#6aaa64] rounded-[1px]" />
                <div className="bg-[#6aaa64] rounded-[1px]" />
              </div>
            </div>
          </article>

          {/* Game 2: Connections */}
          <article className="group cursor-pointer px-6 flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("Connections: Today’s Groupings and Hints")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-tight text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Connections
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5">
                Group words that share a common thread.
              </p>
            </div>
            {/* Connections Purple Bricks Icon */}
            <div className="w-10 h-10 shrink-0 border-2 border-[#121212] rounded-[4px] p-[2px] bg-white flex flex-col justify-between">
              <div className="grid grid-cols-4 gap-[2px] h-[6px]">
                <div className="bg-[#b588c8] col-span-3 rounded-[1px]" />
                <div className="bg-[#e9d9ee] col-span-1 rounded-[1px]" />
              </div>
              <div className="grid grid-cols-4 gap-[2px] h-[6px]">
                <div className="bg-[#a05eb5] col-span-4 rounded-[1px]" />
              </div>
              <div className="grid grid-cols-4 gap-[2px] h-[6px]">
                <div className="bg-[#8a42a0] col-span-1 rounded-[1px]" />
                <div className="bg-[#ba81c5] col-span-3 rounded-[1px]" />
              </div>
              <div className="grid grid-cols-4 gap-[2px] h-[6px]">
                <div className="bg-[#7b3293] col-span-4 rounded-[1px]" />
              </div>
            </div>
          </article>

          {/* Game 3: Spelling Bee */}
          <article className="group cursor-pointer pl-6 flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("Spelling Bee: Today’s Forum and Hints")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-tight text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Spelling Bee
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5">
                How many words can you make with 7 letters?
              </p>
            </div>
            {/* Spelling Bee Icon */}
            <div className="w-10 h-10 shrink-0 flex items-center justify-center select-none">
              <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
                {/* Wings */}
                <ellipse cx="20" cy="11" rx="4" ry="7" fill="none" stroke="#121212" strokeWidth="1.8" />
                <ellipse cx="27" cy="11" rx="4" ry="7" fill="none" stroke="#121212" strokeWidth="1.8" />
                {/* Bee body */}
                <circle cx="24" cy="24" r="9" fill="#facc15" stroke="#121212" strokeWidth="2" />
                {/* Stripes */}
                <path d="M19 16.5v15" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
                <path d="M23 15v18" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
                {/* Face dot */}
                <circle cx="28.5" cy="22" r="1.2" fill="#121212" />
                {/* Smile */}
                <path d="M27 25a2 2 0 003 0" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
                {/* Stinger */}
                <polygon points="15,24 12,23 12,25" fill="#121212" />
              </svg>
            </div>
          </article>
        </div>

        {/* Horizontal Divider between rows */}
        <div className="w-full border-t border-[#e2e2e2] my-4" />

        {/* ============================================================ */}
        {/* ROW 2: The Mini Crossword, The Midi Crossword, The Crossword */}
        {/* ============================================================ */}
        <div className="grid grid-cols-3 divide-x divide-[#e2e2e2] pt-1">
          {/* Game 4: The Mini Crossword */}
          <article className="group cursor-pointer pr-6 flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("The Mini Crossword: Daily Clues and Solution")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-tight text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  The Mini Crossword
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5">
                Solve this bite-sized puzzle in just a few minutes.
              </p>
            </div>
            {/* The Mini Crossword Icon */}
            <div className="w-10 h-10 shrink-0 border-2 border-[#121212] rounded-[4px] p-[2px] bg-white">
              <div className="grid grid-cols-2 grid-rows-2 gap-[2px] h-full">
                <div className="bg-white" />
                <div className="bg-white" />
                <div className="bg-[#121212] rounded-[1px]" />
                <div className="bg-white" />
              </div>
            </div>
          </article>

          {/* Game 5: The Midi Crossword */}
          <article className="group cursor-pointer px-6 flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("The Midi Crossword: Daily Clues and Solution")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-tight text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  The Midi Crossword
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5">
                Can you solve this perfect-size puzzle?
              </p>
            </div>
            {/* The Midi Crossword Icon */}
            <div className="w-10 h-10 shrink-0 border-2 border-[#121212] rounded-[4px] p-[2px] bg-white">
              <div className="grid grid-cols-3 grid-rows-3 gap-[2px] h-full">
                <div className="bg-white" />
                <div className="bg-white" />
                <div className="bg-[#121212] rounded-[1px]" />

                <div className="bg-white" />
                <div className="bg-[#121212] rounded-[1px]" />
                <div className="bg-white" />

                <div className="bg-[#121212] rounded-[1px]" />
                <div className="bg-white" />
                <div className="bg-white" />
              </div>
            </div>
          </article>

          {/* Game 6: The Crossword */}
          <article className="group cursor-pointer pl-6 flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3">
              <Link href={getArticleHref("The Crossword: Daily Puzzle")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-tight text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  The Crossword
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5">
                Get clued in with wordplay, every day.
              </p>
            </div>
            {/* The Crossword Icon */}
            <div className="w-10 h-10 shrink-0 border-2 border-[#121212] rounded-[4px] p-[2px] bg-white">
              <div className="grid grid-cols-4 grid-rows-4 gap-[1.5px] h-full">
                <div className="bg-white" />
                <div className="bg-white" />
                <div className="bg-[#121212] rounded-[1px]" />
                <div className="bg-white" />

                <div className="bg-white" />
                <div className="bg-[#121212] rounded-[1px]" />
                <div className="bg-white" />
                <div className="bg-white" />

                <div className="bg-[#121212] rounded-[1px]" />
                <div className="bg-white" />
                <div className="bg-[#121212] rounded-[1px]" />
                <div className="bg-white" />

                <div className="bg-white" />
                <div className="bg-[#121212] rounded-[1px]" />
                <div className="bg-white" />
                <div className="bg-[#121212] rounded-[1px]" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

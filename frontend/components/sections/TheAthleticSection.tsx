"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

export default function TheAthleticSection() {
  return (
    <section className="w-full bg-white text-[#121212] pt-4 pb-10">
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* Top Header & Divider Line */}
        <div className="w-full border-t border-[#121212] pt-2 mb-3.5 flex items-baseline">
          <h2 className="font-nyt-serif font-black text-[18px] text-[#121212] tracking-tight">
            The Athletic
          </h2>
          <span className="font-nyt-serif italic text-neutral-500 text-[14px] ml-2 font-normal">
            Sports coverage
          </span>
        </div>

        {/* 3-Column Layout */}
        <div className="flex flex-row items-stretch gap-6">
          {/* ------------------------------------------------------------ */}
          {/* COLUMN 1: Lead Stories (~30% width)                          */}
          {/* ------------------------------------------------------------ */}
          <div className="w-[30%] shrink-0 flex flex-col justify-between">
            {/* Story 1: Erling Haaland */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("Erling Haaland Helped Manchester City Defeat Ipswich. But Does He Need a Rest?")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Erling Haaland Helped Manchester City Defeat Ipswich. But Does He Need a Rest?
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5 font-normal">
                The Norwegian has scored in each of City’s eight games this season, although he limped off after Saturday’s win.
              </p>
            </article>

            <div className="w-full border-b border-[#e2e2e2] my-3.5" />

            {/* Story 2: Garrett Wilson / NFL Star */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("She Lost a Friend and Struggled to Get Out of Bed. Then She Met an N.F.L. Star.")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  She Lost a Friend and Struggled to Get Out of Bed. Then She Met an N.F.L. Star.
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5 font-normal">
                Garrett Wilson has always aimed to be a “great man.” Earlier in October, the five minutes he spent with a fan changed her life.
              </p>
            </article>

            <div className="w-full border-b border-[#e2e2e2] my-3.5" />

            {/* Story 3: MLB Rain */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("M.L.B. Saw the Rain Coming and Gave Fans an Unnecessary Night of Nonsense Anyway")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  M.L.B. Saw the Rain Coming and Gave Fans an Unnecessary Night of Nonsense Anyway
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5 font-normal">
                Baseball has now changed the competitive conditions of the A.L.C.S. because it refuses to be flexible, a columnist for The Athletic writes.
              </p>
            </article>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 2: Large Center Photo (~42% width)                    */}
          {/* ------------------------------------------------------------ */}
          <div className="flex-1 min-w-0 flex flex-col">
            <Link href={getArticleHref("Erling Haaland Helped Manchester City Defeat Ipswich. But Does He Need a Rest?")} className="w-full block group">
              <div className="w-full relative aspect-[16/11.5] overflow-hidden bg-neutral-100 rounded-[1px]">
                <img
                  src="/images/mancity_ipswich.jpg"
                  alt="Erling Haaland celebrating goal with Manchester City fans holding inflatable bananas"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </Link>
            <span className="font-nyt-franklin text-[9px] text-[#727272] text-right mt-1 select-none block">
              OLI SCARFF/Getty Images
            </span>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] bg-[#e2e2e2] shrink-0 self-stretch" />

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 3: Headlines & Games Promo (~28% width)               */}
          {/* ------------------------------------------------------------ */}
          <div className="w-[28%] shrink-0 flex flex-col justify-between">
            {/* Quick Story 1 */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("What We’re Hearing About Jalen Hurts’ Health, and More Week 6 N.F.L. Intel")}>
                <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  What We’re Hearing About Jalen Hurts’ Health, and More Week 6 N.F.L. Intel
                </h4>
              </Link>
            </article>

            <div className="w-full border-b border-[#e2e2e2] my-3" />

            {/* Quick Story 2 */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("He Spent 19 M.L.B. Seasons Without Becoming a Star. Then He Made History.")}>
                <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  He Spent 19 M.L.B. Seasons Without Becoming a Star. Then He Made History.
                </h4>
              </Link>
            </article>

            <div className="w-full border-b border-[#e2e2e2] my-3" />

            {/* Quick Story 3 */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("The SEC Could’ve Stopped a 24-Team College Football Playoff. It Caved Instead.")}>
                <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  The SEC Could’ve Stopped a 24-Team College Football Playoff. It Caved Instead.
                </h4>
              </Link>
            </article>

            <div className="w-full border-b border-[#e2e2e2] my-3" />

            {/* Promo: Play Connections: Sports Edition */}
            <article className="group cursor-pointer flex items-center justify-between pt-1">
              <Link href={getArticleHref("Play Connections: Sports Edition")} className="flex-1 pr-3">
                <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Play Connections: Sports Edition
                </h4>
              </Link>

              {/* Connections Sports Edition Green Grid Icon */}
              <div className="w-10 h-10 shrink-0 border-2 border-[#121212] rounded-[4px] p-[2px] bg-white flex flex-col justify-between">
                <div className="grid grid-cols-4 gap-[2px] h-full">
                  <div className="bg-[#a7d676] rounded-[1px]" />
                  <div className="bg-[#a7d676] rounded-[1px]" />
                  <div className="bg-[#a7d676] rounded-[1px]" />
                  <div className="bg-[#a7d676] rounded-[1px]" />

                  <div className="bg-[#8ec354] rounded-[1px]" />
                  <div className="bg-[#8ec354] rounded-[1px]" />
                  <div className="bg-[#8ec354] rounded-[1px]" />
                  <div className="bg-[#8ec354] rounded-[1px]" />

                  <div className="bg-[#5c9e31] rounded-[1px]" />
                  <div className="bg-[#5c9e31] rounded-[1px]" />
                  <div className="bg-[#5c9e31] rounded-[1px]" />
                  <div className="bg-[#5c9e31] rounded-[1px]" />

                  <div className="bg-[#3c7820] rounded-[1px]" />
                  <div className="bg-[#3c7820] rounded-[1px]" />
                  <div className="bg-[#3c7820] rounded-[1px]" />
                  <div className="bg-[#3c7820] rounded-[1px]" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

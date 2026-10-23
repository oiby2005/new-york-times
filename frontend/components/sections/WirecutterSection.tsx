"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

export default function WirecutterSection() {
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
        <div className="w-full border-t border-[#121212] pt-2 mb-4 flex items-baseline">
          <h2 className="font-nyt-serif font-black text-[18px] text-[#121212] tracking-tight">
            Wirecutter
          </h2>
          <span className="font-nyt-serif italic text-neutral-500 text-[14px] ml-2 font-normal">
            Product advice
          </span>
        </div>

        {/* 3-Column Layout */}
        <div className="flex flex-row items-stretch gap-6">
          {/* ------------------------------------------------------------ */}
          {/* COLUMN 1: Left Stories (~28% width)                          */}
          {/* ------------------------------------------------------------ */}
          <div className="w-[28%] shrink-0 flex flex-col justify-start">
            {/* Story 1 */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("5 Tips to Master a New Language")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  5 Tips to Master a New Language
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5 font-normal">
                Language-learning apps can get you started. But these other methods can help nudge you towards fluency.
              </p>
            </article>

            <div className="w-full border-b border-[#e2e2e2] my-4" />

            {/* Story 2 */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("Change Your Toilet Seat, Change Your Life")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Change Your Toilet Seat, Change Your Life
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5 font-normal">
                No, seriously.
              </p>
            </article>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 2: Large Center Photo with Wirecutter Graphic (~44%)  */}
          {/* ------------------------------------------------------------ */}
          <div className="flex-1 min-w-0 flex flex-col">
            <Link href={getArticleHref("Change Your Toilet Seat, Change Your Life")} className="w-full block group">
              <div className="w-full relative aspect-[16/11] overflow-hidden bg-neutral-100 rounded-[1px]">
                <img
                  src="/images/sense_sensibility.jpg"
                  alt="Wirecutter product advice and upgrades"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </Link>
            <span className="font-nyt-franklin text-[9px] text-[#727272] text-right mt-1 select-none block">
              NYT Wirecutter
            </span>
          </div>

          {/* Vertical Divider Line */}
          <div className="w-[1px] bg-[#e2e2e2] shrink-0 self-stretch" />

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 3: Right Stories (~28% width)                         */}
          {/* ------------------------------------------------------------ */}
          <div className="w-[28%] shrink-0 flex flex-col justify-start">
            {/* Story 1 */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("This Is Why You Sleep Better at Hotels")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  This Is Why You Sleep Better at Hotels
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5 font-normal">
                And how to recreate that experience at home.
              </p>
            </article>

            <div className="w-full border-b border-[#e2e2e2] my-4" />

            {/* Story 2 */}
            <article className="group cursor-pointer">
              <Link href={getArticleHref("How to Deal With Sleep Incompatibility")}>
                <h3 className="font-nyt-serif font-bold text-[15.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  How to Deal With Sleep Incompatibility
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-1.5 font-normal">
                If you and your partner have different sleep schedules and styles, our advice can help you both get a good night of rest.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

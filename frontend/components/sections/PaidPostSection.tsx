"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

export default function PaidPostSection() {
  return (
    <section className="w-full bg-white text-[#121212] pt-4 pb-10">
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* Sponsor Banner Card with increased size containing Paid Post and double divider inside */}
        <div className="w-full bg-[#f7f7f7] p-7 md:p-11 flex flex-col rounded-[1px] group cursor-pointer border border-[#ebebeb] shadow-xs">
          {/* Identical Double Black Divider inside the box */}
          <div className="w-full border-t border-b border-[#121212] h-[4px] mb-4" aria-hidden="true" />

          {/* Paid Post Label inside the box */}
          <div className="w-full flex items-center justify-start mb-4">
            <span className="font-nyt-franklin font-bold text-[12.5px] text-[#121212]">
              Paid Post
            </span>
          </div>

          {/* Sponsor Content Row */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Left Text Column */}
            <div className="w-full md:w-[28%] shrink-0 flex flex-col justify-center">
              <span className="font-nyt-franklin font-bold text-[10.5px] tracking-wider text-[#121212] uppercase mb-2 block">
                AMER SPORTS
              </span>
              <Link href={getArticleHref("Beyond the Court: The New Era of Sports")}>
                <h3 className="font-nyt-franklin font-bold text-[22px] md:text-[25px] leading-[1.14] text-[#121212] group-hover:text-[#5a5a5a] transition-colors mb-2.5">
                  Beyond the Court: The New Era of Sports
                </h3>
              </Link>
              <p className="font-nyt-serif text-[13.5px] leading-[1.38] text-[#505050] font-normal">
                How iconic equipment brands are reshaping athletic culture.
              </p>
            </div>

            {/* Center Image */}
            <div className="w-full md:w-[48%] flex-1 overflow-hidden rounded-[1px] shadow-sm">
              <Link href={getArticleHref("Beyond the Court: The New Era of Sports")} className="w-full block">
                <div className="w-full relative aspect-[16/8.8] overflow-hidden bg-neutral-200">
                  <img
                    src="/images/weekend_u2_hero.jpg"
                    alt="Amer Sports lifestyle - athletes in court apparel with lush outdoor greenery"
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              </Link>
            </div>

            {/* Right Brand Logo */}
            <div className="w-full md:w-[20%] shrink-0 flex items-center justify-end md:justify-center">
              <div className="flex items-center gap-2 select-none">
                {/* Amer Sports Geometric Logo Mark */}
                <svg
                  className="w-7 h-7 text-[#121212]"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                >
                  <polygon points="4,28 16,10 24,10 12,28" />
                  <polygon points="16,28 28,10 36,10 24,28" />
                </svg>
                <span className="font-nyt-franklin font-black tracking-tight text-[16px] text-[#121212]">
                  AMER SPORTS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

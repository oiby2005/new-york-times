"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

export default function CultureAndLifestyleSection() {
  return (
    <section className="w-full bg-white text-[#121212] pt-8 pb-10">
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* Top Header & Divider Line */}
        <div className="w-full border-t border-[#121212] pt-2 mb-4">
          <h2 className="font-nyt-franklin font-bold text-[16px] text-[#121212] tracking-tight">
            Culture and Lifestyle
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="flex flex-row items-stretch gap-6">
          {/* ------------------------------------------------------------ */}
          {/* COLUMN 1: Lead Headline & Summary (~28% width)               */}
          {/* ------------------------------------------------------------ */}
          <div className="w-[28%] shrink-0 flex flex-col justify-start">
            <article className="group cursor-pointer">
              <Link href={getArticleHref("Watch These Ballet Dancers Crack Open a Celestial Realm")}>
                <h3 className="font-nyt-serif font-normal text-[26px] md:text-[28px] leading-[1.12] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  Watch These Ballet Dancers Crack Open a Celestial Realm
                </h3>
              </Link>
              <p className="font-nyt-serif text-[12.5px] leading-[1.38] text-[#5a5a5a] mt-2.5 font-normal">
                In “Pithoprakta,” a rarely seen work by George Balanchine, Suzanne Farrell brings a tense and eerie dance back to life at New York City Ballet.
              </p>
              <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-3 block">
                3 MIN READ
              </span>
            </article>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 2: Large Center Stage Photo (~44% width)              */}
          {/* ------------------------------------------------------------ */}
          <div className="flex-1 min-w-0 flex flex-col">
            <Link href={getArticleHref("Watch These Ballet Dancers Crack Open a Celestial Realm")} className="w-full block group">
              <div className="w-full relative aspect-[16/10.5] overflow-hidden bg-neutral-900 rounded-[1px]">
                <img
                  src="/images/macbeth_theater.jpg"
                  alt="Ballet dancers performing on stage against celestial score backdrop"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </Link>
            <span className="font-nyt-franklin text-[9px] text-[#727272] text-right mt-1 select-none block">
              New York City Ballet
            </span>
          </div>

          {/* Vertical Divider Line */}
          <div className="w-[1px] bg-[#e2e2e2] shrink-0 self-stretch" />

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 3: Right Stories with Thumbnails (~28% width)         */}
          {/* ------------------------------------------------------------ */}
          <div className="w-[28%] shrink-0 flex flex-col justify-between">
            {/* Story 1: 5 International Movies */}
            <article className="group cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0 pr-3">
                  <Link href={getArticleHref("5 International Movies to Watch")}>
                    <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                      5 International Movies to Watch
                    </h4>
                  </Link>
                  <p className="font-nyt-serif text-[12px] leading-[1.35] text-[#5a5a5a] mt-1 line-clamp-2">
                    The picks include a French seaside comedy, a Mexican true-crime docudrama and more.
                  </p>
                  <span className="font-nyt-franklin text-[9px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                    5 MIN READ
                  </span>
                </div>
                <div className="w-16 h-16 shrink-0 rounded-[1px] overflow-hidden bg-neutral-100">
                  <Link href={getArticleHref("5 International Movies to Watch")}>
                    <img
                      src="/images/international_movies.jpg"
                      alt="International movie still"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
            </article>

            <div className="w-full border-b border-[#e2e2e2] my-3.5" />

            {/* Story 2: Art Review - Blurring the Line */}
            <article className="group cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0 pr-3">
                  <span className="font-nyt-franklin font-bold text-[9px] tracking-wider text-[#727272] uppercase mb-1 block">
                    ART REVIEW
                  </span>
                  <Link href={getArticleHref("Blurring the Line Between 3 Dimensions and 2")}>
                    <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                      Blurring the Line Between 3 Dimensions and 2
                    </h4>
                  </Link>
                  <p className="font-nyt-serif text-[12px] leading-[1.35] text-[#5a5a5a] mt-1 line-clamp-2">
                    Torkwase Dyson’s latest paintings have a depth that’s often reserved for sculpture.
                  </p>
                  <span className="font-nyt-franklin text-[9px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                    3 MIN READ
                  </span>
                </div>
                <div className="w-16 h-16 shrink-0 rounded-[1px] overflow-hidden bg-neutral-900">
                  <Link href={getArticleHref("Blurring the Line Between 3 Dimensions and 2")}>
                    <img
                      src="/images/earth_space_night.jpg"
                      alt="Abstract dimensional painting"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
            </article>

            <div className="w-full border-b border-[#e2e2e2] my-3.5" />

            {/* Story 3: Movie Review - California Schemin */}
            <article className="group cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0 pr-3">
                  <span className="font-nyt-franklin font-bold text-[9px] tracking-wider text-[#727272] uppercase mb-1 block">
                    MOVIE REVIEW
                  </span>
                  <Link href={getArticleHref("‘California Schemin’’: The Low Road to Fame")}>
                    <h4 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                      ‘California Schemin’’: The Low Road to Fame
                    </h4>
                  </Link>
                  <p className="font-nyt-serif text-[12px] leading-[1.35] text-[#5a5a5a] mt-1 line-clamp-2">
                    A Scottish hip-hop duo tries to convince U.K. record executives that they’re Angelenos.
                  </p>
                  <span className="font-nyt-franklin text-[9px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                    2 MIN READ
                  </span>
                </div>
                <div className="w-16 h-16 shrink-0 rounded-[1px] overflow-hidden bg-neutral-900">
                  <Link href={getArticleHref("‘California Schemin’’: The Low Road to Fame")}>
                    <img
                      src="/images/weekend_u2_hero.jpg"
                      alt="California Schemin performers"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

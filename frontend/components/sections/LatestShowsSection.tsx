"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

interface ShowCard {
  id: string;
  badge: string;
  badgeType: "audio" | "host" | "popcast" | "wirecutter";
  title: string;
  leftBg: string;
  imageRight: string;
  actionIcon: "mute" | "play";
  isGraphic?: boolean;
  alt: string;
}

const SHOWS: ShowCard[] = [
  {
    id: "pablo-torre",
    badge: "PABLO TORRE FINDS OUT",
    badgeType: "audio",
    title: "The Kelly Clarkson Tapes, Revealed",
    leftBg: "bg-[#385438]",
    imageRight: "/images/peltier_protest.jpg",
    actionIcon: "mute",
    alt: "Pablo Torre show security feed investigation",
  },
  {
    id: "ezra-klein",
    badge: "THE EZRA KLEIN SHOW",
    badgeType: "host",
    title: "Is It a Relationship if No One’s on the Other Side?",
    leftBg: "bg-[#384850]",
    imageRight: "/images/shelly_portrait.jpg",
    actionIcon: "play",
    alt: "The Ezra Klein Show interview",
  },
  {
    id: "popcast",
    badge: "POPCAST",
    badgeType: "popcast",
    title: "The Year Zara Larsson Unlocked Pop Superstardom",
    leftBg: "bg-[#2c4060]",
    imageRight: "/images/sense_sensibility.jpg",
    actionIcon: "play",
    alt: "Popcast featuring pop singer",
  },
  {
    id: "wirecutter-show",
    badge: "THE WIRECUTTER SHOW",
    badgeType: "wirecutter",
    title: "The Best Soundbars",
    leftBg: "bg-[#546e7a]",
    imageRight: "/images/earth_space_night.jpg",
    actionIcon: "play",
    isGraphic: true,
    alt: "Wirecutter Soundbars comparison guide",
  },
];

export default function LatestShowsSection() {
  const [activePage, setActivePage] = useState(0);

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
        <div className="w-full border-t border-[#121212] pt-2 mb-3.5">
          <h2 className="font-nyt-franklin font-bold text-[16px] text-[#121212] tracking-tight">
            Latest Shows
          </h2>
        </div>

        {/* 4 Shows Cards Grid */}
        <div className="grid grid-cols-4 gap-3.5">
          {SHOWS.map((show) => (
            <article
              key={show.id}
              className="group cursor-pointer rounded-[2px] overflow-hidden flex relative aspect-[16/10] shadow-sm"
            >
              <Link href={getArticleHref(show.title)} className="w-full h-full flex">
                {/* Left Colored Information Column (~56%) */}
                <div
                  className={`${show.leftBg} p-3.5 flex flex-col justify-between text-white flex-1 min-w-0`}
                >
                  {/* Show Badge */}
                  <div className="flex items-center gap-1.5">
                    {/* Badge Icon */}
                    <div className="w-4 h-4 rounded-[1px] bg-white/20 flex items-center justify-center shrink-0">
                      <span className="text-[9px] font-bold">♪</span>
                    </div>
                    <span className="font-nyt-franklin font-bold text-[9px] uppercase tracking-wider text-white/90 truncate">
                      {show.badge}
                    </span>
                  </div>

                  {/* Show Title */}
                  <h3 className="font-nyt-serif font-bold text-[14.5px] leading-[1.18] text-white my-auto pr-1 group-hover:text-white/80 transition-colors">
                    {show.title}
                  </h3>

                  {/* Action Icon at bottom left */}
                  <div className="w-5 h-5 rounded-full bg-black/50 flex items-center justify-center text-white text-[10px] mt-1">
                    {show.actionIcon === "mute" ? (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                      </svg>
                    ) : (
                      <span className="text-[9px] ml-0.5">▶</span>
                    )}
                  </div>
                </div>

                {/* Right Image/Visual Column (~44%) */}
                <div className="w-[44%] shrink-0 h-full relative overflow-hidden bg-neutral-800">
                  {show.isGraphic ? (
                    <div className="w-full h-full bg-[#81d4fa] flex flex-col items-center justify-center p-2">
                      <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-inner">
                        <div className="w-9 h-6 bg-[#263238] rounded-[2px] flex items-center justify-center shadow-md">
                          <div className="w-7 h-1 bg-[#455a64] rounded-full" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={show.imageRight}
                      alt={show.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Carousel Pagination Arrows Bottom-Right */}
        <div className="w-full flex justify-end items-center gap-1.5 mt-3 select-none">
          <button
            type="button"
            aria-label="Previous shows"
            onClick={() => setActivePage((p) => Math.max(0, p - 1))}
            className="w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next shows"
            onClick={() => setActivePage((p) => p + 1)}
            className="w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

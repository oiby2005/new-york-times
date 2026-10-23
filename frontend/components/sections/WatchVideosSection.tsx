"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

interface VideoCard {
  id: string;
  image: string;
  kicker?: string;
  headline: string;
  location?: string;
  date?: string;
  captionOverlay?: string;
  alt: string;
}

const VIDEOS: VideoCard[] = [
  {
    id: "trump-press",
    image: "/images/hero_putin_trump.jpg",
    headline: "Katie Zacharia Is Fired After 5 Days as White House Press Secretary",
    location: "Washington",
    date: "Oct. 16",
    captionOverlay:
      'President Trump said on Friday that he had encouraged Zacharia to "reconsider" the job.',
    alt: "White House press briefing and South Lawn",
  },
  {
    id: "opinion-ballot",
    image: "/images/shelly_portrait.jpg",
    kicker: "OPINION",
    headline: "‘Our Very Existence Is on the Ballot’",
    alt: "Guest opinion commentary video",
  },
  {
    id: "athletic-nba",
    image: "/images/nfl_receiver_enigma.jpg",
    kicker: "THE ATHLETIC",
    headline: "This Player Could Shake Up the N.B.A. Eastern Conference",
    alt: "Celtics basketball player cheering on court",
  },
  {
    id: "wirecutter-trader-joes",
    image: "/images/sense_sensibility.jpg",
    kicker: "WIRECUTTER",
    headline: "A Look at Trader Joe’s Skincare Products",
    alt: "Skincare product review demonstration",
  },
  {
    id: "cooking-mac-cheese",
    image: "/images/cottage_meatballs.jpg",
    kicker: "COOKING",
    headline: "How to Make the Creamiest Mac and Cheese",
    alt: "Golden baked mac and cheese recipe",
  },
];

export default function WatchVideosSection() {
  return (
    <section className="w-full bg-white text-[#121212] pt-8 pb-10">
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* Top Divider Line */}
        <div className="w-full border-t border-[#121212] pt-2 mb-3.5">
          <h2 className="font-nyt-franklin font-bold text-[16px] text-[#121212] tracking-tight">
            Watch Today’s Videos
          </h2>
        </div>

        {/* 5-Column Grid - All cards and images identical size */}
        <div className="grid grid-cols-5 gap-4">
          {VIDEOS.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer flex flex-col w-full"
            >
              {/* Vertical Video Thumbnail */}
              <Link href={getArticleHref(item.headline)} className="w-full block">
                <div className="w-full relative aspect-[9/13.5] overflow-hidden rounded-[2px] bg-neutral-900 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />

                  {/* Top Overlay for Card 1 */}
                  {item.location && (
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between z-10">
                      <div className="flex flex-col text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        <span className="font-nyt-franklin font-semibold text-[11px] leading-tight">
                          {item.location}
                        </span>
                        <span className="font-nyt-franklin text-[9.5px] text-white/90 leading-tight">
                          {item.date}
                        </span>
                      </div>
                      {/* Gothic NYT 'T' Logo */}
                      <span className="font-serif font-black text-white text-[17px] leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        𝔗
                      </span>
                    </div>
                  )}

                  {/* Bottom Caption Overlay Card for Card 1 */}
                  {item.captionOverlay && (
                    <div className="absolute bottom-2 left-2 right-2 z-10 bg-white/95 backdrop-blur-[1px] p-2 rounded-[2px] shadow-sm">
                      <p className="font-nyt-serif text-[10.5px] leading-[1.3] text-[#121212]">
                        {item.captionOverlay}
                      </p>
                    </div>
                  )}
                </div>
              </Link>

              {/* Text Info Below Video */}
              <div className="mt-2.5">
                {item.kicker && (
                  <span className="font-nyt-franklin text-[9.5px] font-bold tracking-wider text-[#727272] uppercase mb-1 block">
                    {item.kicker}
                  </span>
                )}
                <Link href={getArticleHref(item.headline)}>
                  <h3 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                    {item.headline}
                  </h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

interface WellArticle {
  id: string;
  image: string;
  credit: string;
  headline: string;
  comments?: number;
  readTime?: string;
  alt: string;
}

const WELL_ARTICLES: WellArticle[] = [
  {
    id: "biological-age",
    image: "/images/thumb_grocery_prices.jpg",
    credit: "Eiko Ojala",
    headline: "What a Biological Age Test Can Actually Tell You",
    comments: 79,
    alt: "Biological age conceptual art",
  },
  {
    id: "purpose-anxiety",
    image: "/images/thumb_mathematician.jpg",
    credit: "Vanessa Saba",
    headline: "Do You Have ‘Purpose Anxiety’?",
    comments: 229,
    alt: "Purpose anxiety surreal hand illustration",
  },
  {
    id: "finding-joy",
    image: "/images/thumb_own_a_home.jpg",
    credit: "Ben Denzer",
    headline: "Simple Ways to Find More Joy When You’re Feeling Hopeless",
    readTime: "4 MIN READ",
    alt: "Smiley flag waving on minimal background",
  },
  {
    id: "kier-gaines",
    image: "/images/mariners_mother.jpg",
    credit: "Caroline Gutman for The New York Times",
    headline: "Kier Gaines Isn’t Your Textbook Therapist. He Likes It That Way.",
    comments: 56,
    alt: "Kier Gaines seated on leather couch",
  },
  {
    id: "cancer-women",
    image: "/images/thumb_5_movies.jpg",
    credit: "Eiko Ojala",
    headline: "It’s the Most Common Cancer in Women. How Much Do You Know About It?",
    alt: "Silhouette profiles of women conceptual art",
  },
];

export default function WellSection() {
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
        <div className="w-full border-t border-[#121212] pt-2 mb-3.5">
          <h2 className="font-nyt-franklin font-bold text-[16px] text-[#121212] tracking-tight">
            Well
          </h2>
        </div>

        {/* 5-Column Grid with Vertical Dividers - all cards and images identical size */}
        <div className="grid grid-cols-5 divide-x divide-[#e2e2e2] -mx-3.5">
          {WELL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer flex flex-col px-3.5"
            >
              {/* Square Image Container */}
              <Link href={getArticleHref(article.headline)} className="w-full block">
                <div className="w-full relative aspect-square overflow-hidden bg-neutral-100 rounded-[1px]">
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Photo Credit */}
              <span className="font-nyt-franklin text-[9px] text-[#727272] text-right mt-1 select-none block">
                {article.credit}
              </span>

              {/* Headline */}
              <Link href={getArticleHref(article.headline)} className="mt-1.5 block">
                <h3 className="font-nyt-serif font-bold text-[14.5px] leading-[1.2] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  {article.headline}
                </h3>
              </Link>

              {/* Comment Count or Read Time */}
              {article.comments !== undefined && (
                <div className="flex items-center gap-1 mt-1.5 text-[#727272]">
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
                    {article.comments}
                  </span>
                </div>
              )}

              {article.readTime && (
                <span className="font-nyt-franklin text-[9.5px] font-medium tracking-wider text-[#727272] uppercase mt-1.5 block">
                  {article.readTime}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

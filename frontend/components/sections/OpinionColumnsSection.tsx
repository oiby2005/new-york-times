"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

interface OpinionColumn {
  category: string;
  image: string;
  leadHeadline: string;
  story2: string;
  story3: string;
  alt: string;
}

const OPINION_COLUMNS: OpinionColumn[] = [
  {
    category: "Opinion",
    image: "/images/earth_space_night.jpg",
    leadHeadline: "Defending the Right to Choose Death",
    story2: "This Is the Good Scenario?",
    story3: "Even a Blue Wave Can’t Stop Trump",
    alt: "Figure walking into a glowing doorway illustration",
  },
  {
    category: "Opinion Columnists",
    image: "/images/sense_sensibility.jpg",
    leadHeadline: "This Is the Good Scenario?",
    story2: "Elon Musk Is Beyond the Pale",
    story3: "A Great Moral Blind Spot of Our Age",
    alt: "Hand grasping illuminated orb conceptual artwork",
  },
  {
    category: "Editorials",
    image: "/images/pa_election_map.png",
    leadHeadline: "How to End Gerrymandering",
    story2: "These Six Black Lawmakers Have a Warning",
    story3: "Driver, Chatbot, Talking Bear: How Should We Interact With A.I.?",
    alt: "Torn I Voted sticker with red line",
  },
  {
    category: "Guest Essays",
    image: "/images/weekend_u2_hero.jpg",
    leadHeadline: "Even a Blue Wave Can’t Stop Trump",
    story2: "‘I Shall Be Very Surprised if There Isn’t a Next Chapter’: A Q&A With Sarah Coakley",
    story3: "I Teach at a Business School. It’s Time to Shut Them Down.",
    alt: "Figure holding miniature Capitol building in hand",
  },
  {
    category: "Sunday Opinion",
    image: "/images/cereal_crunch.jpg",
    leadHeadline: "I Teach at a Business School. It’s Time to Shut Them Down.",
    story2: "A Great Moral Blind Spot of Our Age",
    story3: "This Is One of the Saddest Facts About the Cornell Rape Case",
    alt: "Illustration of students and building steps",
  },
];

export default function OpinionColumnsSection() {
  return (
    <section className="w-full bg-white text-[#121212] pt-8 pb-10">
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* Identical Double Black Divider - both borders exact same thickness */}
        <div className="w-full border-t border-b border-[#121212] h-[4px] mb-3.5" aria-hidden="true" />

        {/* Section Heading */}
        <h2 className="font-nyt-franklin font-bold text-[13px] tracking-wider text-[#121212] uppercase mb-4">
          OPINION
        </h2>

        {/* 5-Column Opinion Grid */}
        <div className="grid grid-cols-5 gap-6">
          {OPINION_COLUMNS.map((col) => (
            <div key={col.category} className="flex flex-col group">
              {/* Category Heading */}
              <Link href="/category/opinion">
                <h4 className="font-nyt-franklin font-bold text-[13px] text-[#121212] mb-2.5 block hover:underline">
                  {col.category}
                </h4>
              </Link>

              {/* Image */}
              <Link href={getArticleHref(col.leadHeadline)} className="w-full block">
                <div className="w-full relative aspect-[16/10.5] overflow-hidden bg-neutral-100 rounded-[1px] mb-2.5">
                  <img
                    src={col.image}
                    alt={col.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Story 1 (Lead Headline) */}
              <Link href={getArticleHref(col.leadHeadline)} className="mb-2 block">
                <h5 className="font-nyt-serif font-bold text-[14.5px] leading-[1.22] text-[#121212] group-hover:text-[#5a5a5a] transition-colors">
                  {col.leadHeadline}
                </h5>
              </Link>

              {/* Story 2 */}
              <Link href={getArticleHref(col.story2)} className="mb-2 block">
                <p className="font-nyt-serif font-normal text-[13px] leading-[1.28] text-[#121212] hover:text-[#5a5a5a] transition-colors">
                  {col.story2}
                </p>
              </Link>

              {/* Story 3 */}
              <Link href={getArticleHref(col.story3)} className="block">
                <p className="font-nyt-serif font-normal text-[13px] leading-[1.28] text-[#121212] hover:text-[#5a5a5a] transition-colors">
                  {col.story3}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

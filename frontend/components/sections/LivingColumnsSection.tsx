"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

interface LivingColumn {
  category: string;
  image: string;
  leadHeadline: string;
  story2: string;
  story3: string;
  alt: string;
}

const LIVING_ROW_1: LivingColumn[] = [
  {
    category: "Style",
    image: "/images/yemen_conflict.jpg",
    leadHeadline: "Conor Kennedy and Giulia Be Celebrate Marriage in Rio Amid Political Uncertainty",
    story2: "Keeping the Cookout Going",
    story3: "She’ll Make You Rethink How to Wear a Shirt",
    alt: "Guests celebrating outdoors at festive venue",
  },
  {
    category: "Food",
    image: "/images/cereal_crunch_bowl.jpg",
    leadHeadline: "So Fox Tells a Modern Story of Southern Farm-to-Table Cooking",
    story2: "The Next ‘It’ Apple Might Be 300 Years Old",
    story3: "How Climate Change Is Causing ‘the Gentrification of Seafood’",
    alt: "Bright sunlit modern farm-to-table dining room",
  },
  {
    category: "Well",
    image: "/images/thumb_grocery_prices.jpg",
    leadHeadline: "The Difficulty of Diagnosing Anorexia in the GLP-1 Era",
    story2: "Coming Out at 50 Can Be Hard. Shelly Found a Coach.",
    story3: "Is Retirement Unhealthy? It Depends.",
    alt: "Illustrated figure standing at bathroom mirror",
  },
  {
    category: "The New York Times Magazine",
    image: "/images/thumb_mathematician.jpg",
    leadHeadline: "The Man Who Taught Us How to Pay Attention",
    story2: "What Do I Owe a Friend Whose Mental Illness Pulls Me Into Imagined Emergencies?",
    story3: "Is Anyone Actually in Charge of the Democratic Party? And Does It Matter?",
    alt: "Artistic collage portrait with red vein graphic line",
  },
  {
    category: "T Magazine",
    image: "/images/sense_sensibility.jpg",
    leadHeadline: "A Lakeside Italian Villa Restored to Its Original Splendor",
    story2: "How to Build a Skin Care Routine for Mature Skin",
    story3: "The Thrillingly Intricate Art of Cut Paper",
    alt: "Italian villa living room with fireplace and armchairs",
  },
];

const LIVING_ROW_2: LivingColumn[] = [
  {
    category: "Travel",
    image: "/images/earth_space_night.jpg",
    leadHeadline: "The Last Flight of the A346: An Aviation Love Story",
    story2: "Feel Like You’re Overpaying for Hotels? Blame Expedia, a New Lawsuit Says.",
    story3: "Hiking the Mountain Where the Cold War Began to Thaw",
    alt: "Large passenger airliner banking against cloud sky",
  },
  {
    category: "Love",
    image: "/images/weekend_u2_hero.jpg",
    leadHeadline: "Conor Kennedy and Giulia Be Share Their Love Story and Wedding",
    story2: "Something Old? How About Something Newly Thrifted?",
    story3: "Conor Kennedy and Giulia Be Celebrate Marriage in Rio Amid Political Uncertainty",
    alt: "Wedding couple smiling outdoors in celebration",
  },
  {
    category: "Real Estate",
    image: "/images/thumb_own_a_home.jpg",
    leadHeadline: "A House David Bowie Couldn’t Wait to Leave Is Becoming a Museum",
    story2: "Living Near the Hollywood Bowl: Free Concerts and Pancake Breakfasts",
    story3: "I’m Looking to Downsize. Is Prefab Housing the Way to Go?",
    alt: "Vintage photograph of child and dog by cottage window",
  },
];

export default function LivingColumnsSection() {
  const renderColumn = (col: LivingColumn) => (
    <div key={col.category} className="flex flex-col group">
      {/* Category Heading */}
      <Link href={`/category/${col.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
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
  );

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
          LIVING
        </h2>

        {/* Row 1: Style, Food, Well, NYT Magazine, T Magazine */}
        <div className="grid grid-cols-5 gap-6">
          {LIVING_ROW_1.map(renderColumn)}
        </div>

        {/* Row 2: Travel, Love, Real Estate (First 3 columns of 5 - divider removed) */}
        <div className="grid grid-cols-5 gap-6 mt-8">
          {LIVING_ROW_2.map(renderColumn)}
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

interface ArtsColumn {
  category: string;
  image: string;
  leadHeadline: string;
  story2: string;
  story3: string;
  alt: string;
}

const ARTS_ROW_1: ArtsColumn[] = [
  {
    category: "Arts",
    image: "/images/sense_sensibility.jpg",
    leadHeadline: "In ‘East of Eden,’ the Root of Evil Is All Too Familiar",
    story2: "The Metal Mecca of Brooklyn Returns",
    story3: "Watch These Ballet Dancers Crack Open a Celestial Realm",
    alt: "East of Eden dramatic scene still",
  },
  {
    category: "Art and Design",
    image: "/images/shelly_portrait.jpg",
    leadHeadline: "She Signed Her Painting in 1548. Nearly 500 Years Later, It Finally Goes on Show.",
    story2: "Blurring the Line Between 3 Dimensions and 2",
    story3: "A New Perspective on Dying Again and Again",
    alt: "Renaissance historical portrait painting",
  },
  {
    category: "Movies",
    image: "/images/elizabeth_holmes_doc.jpg",
    leadHeadline: "‘You Can See Everything’ Review: The Slippery Mind of Elizabeth Holmes",
    story2: "‘Once Upon a Time in Harlem’ Review: A Renaissance of Their Own",
    story3: "Have You Seen the Nathan Fielder-Elizabeth Holmes Movie? Let’s Talk.",
    alt: "Elizabeth Holmes documentary interview scene",
  },
  {
    category: "Television",
    image: "/images/macbeth_theater.jpg",
    leadHeadline: "‘Saturday Night Live U.K.’ Lays Into Shane Gillis",
    story2: "7 Takeaways From the King of Sitcoms’ New Memoir",
    story3: "576 Pages? $36? For ‘Nothing’? Larry David Would Understand.",
    alt: "Host speaking on television studio stage",
  },
  {
    category: "Music",
    image: "/images/weekend_u2_hero.jpg",
    leadHeadline: "The Metal Mecca of Brooklyn Returns",
    story2: "The Year Zara Larsson Unlocked Pop Superstardom",
    story3: "Lana Del Rey’s Country Duet and 9 More Songs We’re Talking About",
    alt: "Musicians performing in concert lighting",
  },
];

const ARTS_ROW_2: ArtsColumn[] = [
  {
    category: "Theater",
    image: "/images/macbeth_theater.jpg",
    leadHeadline: "Whispering Phantoms and Shadowy Scares in Two Inventive Plays",
    story2: "‘Memoirs of Amorous Gentlemen’ Review: Duncan Sheik’s Tale of Eros",
    story3: "Tackling Beauty Standards, With Zingers and Pageant Gowns",
    alt: "Stage actor lit with neon purple lighting in theater production",
  },
  {
    category: "Dance",
    image: "/images/peltier_protest.jpg",
    leadHeadline: "Watch These Ballet Dancers Crack Open a Celestial Realm",
    story2: "A Dancer Made a Promise to the Universe: ‘I Will Wrap It Up in a Year’",
    story3: "At the Met Opera, Gravity-Defying Feats From an Unlikely Source",
    alt: "Dancers on dark stage beneath projected architectural curves",
  },
  {
    category: "Book Review",
    image: "/images/sense_sensibility.jpg",
    leadHeadline: "America’s Answer to John le Carré",
    story2: "576 Pages? $36? For ‘Nothing’? Larry David Would Understand.",
    story3: "‘Neither Alive Nor Dead’: The Staggering Complexity of Bogs",
    alt: "Author standing in home library with books",
  },
];

export default function ArtsColumnsSection() {
  const renderColumn = (col: ArtsColumn) => (
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
          ARTS
        </h2>

        {/* Row 1: Arts, Art and Design, Movies, Television, Music */}
        <div className="grid grid-cols-5 gap-6">
          {ARTS_ROW_1.map(renderColumn)}
        </div>

        {/* Row 2: Theater, Dance, Book Review (First 3 columns of 5 - divider removed) */}
        <div className="grid grid-cols-5 gap-6 mt-8">
          {ARTS_ROW_2.map(renderColumn)}
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

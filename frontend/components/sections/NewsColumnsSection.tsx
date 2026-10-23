"use client";

import React from "react";
import Link from "next/link";
import { getArticleHref } from "@/components/article/articleData";

interface NewsColumn {
  category: string;
  image: string;
  leadHeadline: string;
  story2: string;
  story3: string;
  alt: string;
}

const NEWS_ROW_1: NewsColumn[] = [
  {
    category: "World News",
    image: "/images/oregon_memorial.jpg",
    leadHeadline: "Fire at Canadian Army Base Killed 4 and Injured 39, Officials Say",
    story2: "This French City Was Rarely Linked With Unrest. Then Arsonists Attacked.",
    story3: "Why the Future of the Amazon Could Depend on Brazil’s Election",
    alt: "Canadian army base gate and security checkpoint",
  },
  {
    category: "U.S. News",
    image: "/images/shelly_portrait.jpg",
    leadHeadline: "Larry David Mocks the D.S.A. Some Are Not Amused.",
    story2: "Talarico Kicks Off Campaign Tour of Texas as Senate Election Looms",
    story3: "Trump Defends Plans to Ease Russia Sanctions and Hints at a Hostage Deal",
    alt: "Larry David onstage speaking",
  },
  {
    category: "U.S. Politics",
    image: "/images/hero_putin_trump.jpg",
    leadHeadline: "Trump Defends Plans to Ease Russia Sanctions and Hints at a Hostage Deal",
    story2: "Larry David Mocks the D.S.A. Some Are Not Amused.",
    story3: "The 2028 Presidential ‘Shadow Primary’ Descends on the Midterms",
    alt: "Trump on tarmac with military personnel",
  },
  {
    category: "New York",
    image: "/images/yemen_conflict.jpg",
    leadHeadline: "At Cornell, a Subdued Scene on First Weekend of Fraternity Party Ban",
    story2: "How a Dominican Migrant in New York Became an ICE Target",
    story3: "‘My Friend Pulled Out His Phone to Get a Picture.’",
    alt: "Night street scene outside venue in New York",
  },
  {
    category: "Business",
    image: "/images/thumb_grocery_prices.jpg",
    leadHeadline: "China’s Export Boom Fuels Growth Despite Slump at Home",
    story2: "Elizabeth Holmes Film Opens to Over 2,000 Sold-Out Shows",
    story3: "3 Charts That Explain the Economy as Voters Head to the Polls",
    alt: "Shoppers walking through modern retail mall",
  },
];

const NEWS_ROW_2: NewsColumn[] = [
  {
    category: "Technology",
    image: "/images/weekend_u2_hero.jpg",
    leadHeadline: "Meta Withdraws $25 Million From Its Midterms Push",
    story2: "What Are Data Centers Doing? A Mind-Boggling Amount of Math.",
    story3: "OpenAI Engineer Who Is Charged With Planting Bug Advised Saudis",
    alt: "Audience seated at tech developer conference",
  },
  {
    category: "Science",
    image: "/images/sense_sensibility.jpg",
    leadHeadline: "For a Mere $2 Million, You Could Own Three Books That Unlocked the Universe",
    story2: "The Leap Second Has Been Canceled",
    story3: "Why One of the World’s Greatest Mathematicians Is on a ‘War Footing’",
    alt: "Rare science manuscripts display at auction house",
  },
  {
    category: "Obituaries",
    image: "/images/thumb_scandal_1971.jpg",
    leadHeadline: "Wilfredo Gomez, Knockout King at 122 Pounds, Dies at 69",
    story2: "Alan Mandell, Star of ‘Godot’ and Other Beckett Plays, Dies at 98",
    story3: "Cliff Hagan, Master of the Hook Shot, Dies at 94",
    alt: "Wilfredo Gomez inside boxing ring in action",
  },
  {
    category: "The Upshot",
    image: "/images/thumb_mathematician.jpg",
    leadHeadline: "Flashback: Your Weekly History Quiz, Oct. 17, 2026",
    story2: "What Are Data Centers Doing? A Mind-Boggling Amount of Math.",
    story3: "Quiz: Can You Name These 16 Figures From History?",
    alt: "Historical figures grid collage",
  },
  {
    category: "Climate and Environment",
    image: "/images/earth_space_night.jpg",
    leadHeadline: "Trump Rule Lets Alaska Hunters Lure Bears With Bacon-Greased Doughnuts",
    story2: "Nations Meet in Armenia as Goal to Protect Nature Remains Out of Reach",
    story3: "A Global Sugar Crisis, Made and Felt in India",
    alt: "Black bear wading across mountain river",
  },
];

const NEWS_ROW_3: NewsColumn[] = [
  {
    category: "Education",
    image: "/images/mariners_mother.jpg",
    leadHeadline: "For Texas Schoolchildren, Minor Misbehavior Can Mean Criminal Charges",
    story2: "Cornell’s Powerful Board Meets as It Fights to Protect Its Reputation",
    story3: "Harvard Endowment Soars to $68 Billion Even as Federal Cuts Force Layoffs",
    alt: "Student on school playground swing",
  },
  {
    category: "Health",
    image: "/images/thumb_5_movies.jpg",
    leadHeadline: "The New Science of Stuttering",
    story2: "Kenya Confirms Four New Ebola Cases",
    story3: "N.I.H. Hospital Board Rebukes Kennedy Over New Vaccine Injury Clinic",
    alt: "Abstract medical illustration of speech patterns",
  },
  {
    category: "Times Insider",
    image: "/images/thumb_own_a_home.jpg",
    leadHeadline: "How We Reported on the Cornell Case",
    story2: "Papal Premonitions and a Pontiff’s Two Paths",
    story3: "What Media Witnesses Saw and Heard at Christa Pike’s Botched Execution",
    alt: "Historic Tudor fraternity residence",
  },
];

export default function NewsColumnsSection() {
  const renderColumn = (col: NewsColumn) => (
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
          NEWS
        </h2>

        {/* Row 1: World News, U.S. News, U.S. Politics, New York, Business */}
        <div className="grid grid-cols-5 gap-6">
          {NEWS_ROW_1.map(renderColumn)}
        </div>

        {/* Row 2: Technology, Science, Obituaries, The Upshot, Climate and Environment (divider removed) */}
        <div className="grid grid-cols-5 gap-6 mt-8">
          {NEWS_ROW_2.map(renderColumn)}
        </div>

        {/* Row 3: Education, Health, Times Insider (First 3 columns of 5 - divider removed) */}
        <div className="grid grid-cols-5 gap-6 mt-8">
          {NEWS_ROW_3.map(renderColumn)}
          {/* Empty columns 4 & 5 to maintain 5-col alignment */}
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

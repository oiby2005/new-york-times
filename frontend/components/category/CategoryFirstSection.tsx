import React from "react";
import Image from "next/image";
import Link from "next/link";
import { slugifyTitle } from "../article/articleData";

export interface FirstSectionArticle {
  title: string;
  summary: string;
  byline: string;
  time: string;
  image: string;
  isUnderlined?: boolean;
}

interface CategoryFirstSectionProps {
  categoryTitle?: string;
  trackerItems?: string[];
  leadStory?: {
    tag?: string;
    title: string;
    summary: string;
    byline: string;
    time: string;
    image: string;
    imageCredit?: string;
  };
  sideArticles?: FirstSectionArticle[];
}

const DEFAULT_TRACKER_ITEMS = [
  "WILDFIRE AND AIR QUALITY TRACKER",
  "CALIFORNIA",
  "RACE/RELATED",
];

const DEFAULT_LEAD = {
  title: "Four Takeaways From the Debate for Wisconsin Governor",
  summary:
    "The Democrat, David Crowley, and the Republican, Tom Tiffany, sparred over taxes, abortion, data centers and legalizing marijuana in their only debate before the election.",
  byline: "By JULIE BOSMAN",
  time: "6h ago",
  image: "/images/wisconsin_governor_debate.jpg",
  imageCredit: "Jamie Kelley Davis for The New York Times",
};

const DEFAULT_SIDE_ARTICLES: FirstSectionArticle[] = [
  {
    title: "Why a Pillar of Christian Journalism is in Turmoil",
    summary:
      "Former employees of Christianity Today say new leadership has been pushing back on independent journalism. About half of its staff members have left or been laid off over 14 months.",
    byline: "By RUTH GRAHAM",
    time: "10h ago",
    image: "/images/christian_journalism_woman.jpg",
    isUnderlined: false,
  },
  {
    title: "Oregon Teacher Credited With Protecting Child Disputes Her Own Heroism",
    summary:
      "Becky Drury, who was said to have shielded a student during a deadly shooting in Bend, refuted the account. “The truth is I was shot before I had any chance to act.”",
    byline: "By ANNA GRIFFIN",
    time: "12h ago",
    image: "/images/oregon_teacher_shooting.jpg",
    isUnderlined: false,
  },
  {
    title: "Toledo Chemical Leak That Forced Residents to Evacuate Is Slowing",
    summary:
      "Nearly 1,000 people in the Ohio city were told to leave the area and thousands more were urged to stay inside. The mayor said the spill did not present a long-term threat.",
    byline: "By MADISON MALONE KIRCHER and PATRICK COOLEY",
    time: "11h ago",
    image: "/images/toledo_chemical_plant.jpg",
    isUnderlined: false,
  },
];

export default function CategoryFirstSection({
  categoryTitle = "U.S. News",
  trackerItems = DEFAULT_TRACKER_ITEMS,
  leadStory = DEFAULT_LEAD,
  sideArticles = DEFAULT_SIDE_ARTICLES,
}: CategoryFirstSectionProps) {
  return (
    <section aria-label={`${categoryTitle} Featured Stories`} className="w-full">
      {/* ================= Header: Category Title + Tracker Bar ================= */}
      {/* Requirement 02: Line below Wildfire and air quality tracker panel made black */}
      <div className="w-full border-b border-black pb-1.5 mb-6">
        <h1
          style={{
            fontFamily: "nyt-serif, georgia, serif",
            fontWeight: 700,
            color: "#121212",
          }}
          className="text-[38px] md:text-[44px] leading-tight tracking-tight mb-2 select-none"
        >
          {categoryTitle}
        </h1>

        {/* Sub-topic Tracker Bar */}
        {trackerItems && trackerItems.length > 0 && (
          <div className="w-full border-t border-[#e2e2e2] pt-1.5 pb-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {trackerItems.map((item, idx) => (
              <React.Fragment key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    letterSpacing: "0.6px",
                  }}
                  className="text-[#555555] hover:text-[#121212] uppercase whitespace-nowrap transition-colors"
                >
                  {item}
                </Link>
                {idx < trackerItems.length - 1 && (
                  <span className="text-neutral-400 text-[10px] select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* ================= 2-Column Package: Lead Hero (Left) & 3 Articles (Right) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0">
        {/* Left Column: Lead Hero (Expanded Main Content, pr-7, border-r) */}
        <article className="lg:pr-7 lg:border-r lg:border-[#e2e2e2] flex flex-col pb-6 lg:pb-0">
          {/* Hero Image */}
          <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
            <Image
              src={leadStory.image}
              alt={leadStory.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover"
            />
          </div>

          {/* Photo Credit below image on the right */}
          {leadStory.imageCredit && (
            <p
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                fontSize: "10px",
                color: "#727272",
              }}
              className="text-right mt-1"
            >
              {leadStory.imageCredit}
            </p>
          )}

          {/* Headline and Lead Body (Centered, as shown in Image 1) */}
          <div className="flex flex-col items-center text-center px-2 mt-2">
            {leadStory.tag && (
              <span
                style={{
                  fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                  fontSize: "10.5px",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  color: "#121212",
                }}
                className="uppercase tracking-widest mb-1.5"
              >
                {leadStory.tag}
              </span>
            )}

            <h2
              style={{
                fontFamily: "nyt-serif, georgia, serif",
                fontWeight: 700,
                color: "#121212",
              }}
              className="text-[23px] md:text-[26px] leading-[1.2] hover:text-[#555] transition-colors cursor-pointer max-w-[580px]"
            >
              <Link href={`/article/${slugifyTitle(leadStory.title)}`}>
                {leadStory.title}
              </Link>
            </h2>

            <p
              id="main-editorial-description"
              style={{
                fontFamily: "nyt-serif, georgia, serif",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#333333",
              }}
              className="mt-2.5 max-w-[560px] text-center"
            >
              {leadStory.summary}
            </p>

            <p
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                fontSize: "10.5px",
                color: "#727272",
                letterSpacing: "0.4px",
              }}
              className="uppercase mt-2.5"
            >
              {leadStory.time} · {leadStory.byline}
            </p>
          </div>
        </article>

        {/* Right Column: 3 Stacked Articles (Reduced Right Sidebar, pl-6) */}
        <div className="lg:pl-6 flex flex-col justify-start">
          {sideArticles.map((article, idx) => {
            const isLast = idx === sideArticles.length - 1;
            return (
              <article
                key={article.title}
                id={isLast ? "sidebar-last-article" : undefined}
                className={`flex flex-col ${
                  !isLast ? "border-b border-[#e2e2e2] pb-5 mb-5" : ""
                }`}
              >
                {/* Headline + Thumbnail Row */}
                <div className="flex items-start justify-between gap-3">
                  <h3
                    style={{
                      fontFamily: "nyt-serif, georgia, serif",
                      fontWeight: 700,
                      color: "#121212",
                    }}
                    className={`text-[17px] md:text-[18px] leading-[1.22] flex-1 hover:text-[#555] transition-colors cursor-pointer ${
                      article.isUnderlined
                        ? "underline decoration-1 underline-offset-3"
                        : ""
                    }`}
                  >
                    <Link href={`/article/${slugifyTitle(article.title)}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Thumbnail Image */}
                  <div className="relative w-[78px] h-[58px] bg-neutral-100 shrink-0 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="78px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Summary */}
                <p
                  style={{
                    fontFamily: "nyt-serif, georgia, serif",
                    fontSize: "12.5px",
                    lineHeight: "17.5px",
                    color: "#444444",
                  }}
                  className="mt-1.5"
                >
                  {article.summary}
                </p>

                {/* Byline / Time */}
                <p
                  id={isLast ? "sidebar-last-article-edge" : undefined}
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "10px",
                    color: "#727272",
                    letterSpacing: "0.3px",
                  }}
                  className="uppercase mt-1.5"
                >
                  {article.time} · {article.byline}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

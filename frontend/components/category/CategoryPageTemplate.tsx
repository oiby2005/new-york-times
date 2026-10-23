"use client";

import React from "react";
import CategoryStickyNavbar from "./CategoryStickyNavbar";
import CategoryPageAd1 from "./CategoryPageAd1";
import CategoryPageAd2 from "./CategoryPageAd2";
import CategoryFirstSection, { FirstSectionArticle } from "./CategoryFirstSection";
import CategoryMainFeed, { FeedArticleItem } from "./CategoryMainFeed";
import CategoryFloatingBanner from "./CategoryFloatingBanner";
import MainFooter from "../sections/MainFooter";
import { getCategoryInfo } from "./categoryData";

interface CategoryPageTemplateProps {
  categorySlug?: string;
  categoryTitle?: string;
  stickyTitle?: string;
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
  feedArticles?: FeedArticleItem[];
}

export default function CategoryPageTemplate({
  categorySlug = "us",
  categoryTitle,
  stickyTitle,
  trackerItems,
  leadStory,
  sideArticles,
  feedArticles,
}: CategoryPageTemplateProps) {
  const info = getCategoryInfo(categorySlug);

  const displayTitle = categoryTitle || info.title;
  const displayStickyTitle = stickyTitle || info.stickyTitle;
  const displayTrackerItems = trackerItems || info.trackerItems;

  return (
    <div className="min-h-screen bg-white text-[#121212] flex flex-col relative selection:bg-neutral-200">
      {/* 1. Category Page Sticky Navbar (top of Category page ad 1) */}
      <CategoryStickyNavbar categoryTitle={displayStickyTitle} />

      {/* Category Page Ad 1 (extends 100%, directly below navbar) */}
      <CategoryPageAd1 />

      {/* 2. First Section Container (Standard 3.5cm Margins) */}
      <section
        className="w-full mx-auto flex flex-col pt-2"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* 1st Section: Category Title + Tracker Bar (with black line) + Lead Hero & 3 Side Articles */}
        <CategoryFirstSection
          categoryTitle={displayTitle}
          trackerItems={displayTrackerItems}
          leadStory={leadStory || info.leadStory}
          sideArticles={sideArticles || info.sideArticles}
        />

        {/* Category Page Ad 2 */}
        <CategoryPageAd2 />
      </section>

      {/* Requirement 04: Ash divider which extends for 100% */}
      <div className="w-full border-t border-[#e2e2e2]" />

      {/* 3. Main Content Feed Container (Standard 3.5cm Margins) */}
      <section
        className="w-full mx-auto flex-1 flex flex-col pt-3 pb-3"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* Main Content Feed: Tabs + Search + 10 Articles (red dates) + Sticky Ad 3 + Pagination */}
        <CategoryMainFeed articles={feedArticles || info.feedArticles} />
      </section>

      {/* 4. Floating Black Subscribe Banner - Dismissible & Category Pages Only */}
      <CategoryFloatingBanner />

      {/* 5. Full Footer */}
      <MainFooter />
    </div>
  );
}

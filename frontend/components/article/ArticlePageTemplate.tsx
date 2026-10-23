"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArticleNavbar from "./ArticleNavbar";
import ArticlePageAd1 from "./ArticlePageAd1";
import ArticlePageAd2 from "./ArticlePageAd2";
import ArticlePageAd3 from "./ArticlePageAd3";
import ArticlePageAd4 from "./ArticlePageAd4";
import ArticlePageAd5 from "./ArticlePageAd5";
import ArticlePageAd6 from "./ArticlePageAd6";
import MainFooter from "../sections/MainFooter";
import {
  ArticleData,
  MAIN_ARTICLE,
  EDITORS_PICKS_SIDEBAR,
  AROUND_THE_WORLD_ITEMS,
  MORE_IN_WORLD_ITEMS,
  TRENDING_STORIES,
  HORIZONTAL_EDITORS_PICKS,
} from "./articleData";

interface ArticlePageTemplateProps {
  article?: ArticleData;
}

export default function ArticlePageTemplate({
  article = MAIN_ARTICLE,
}: ArticlePageTemplateProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#121212] flex flex-col selection:bg-neutral-200">
      {/* ========================================================================= */}
      {/* SECTION 1: ARTICLE NAVBAR                                                 */}
      {/* ========================================================================= */}
      <section id="section-article-navbar" data-section="Article Top Navbar">
        <ArticleNavbar
          category={article.category || "WORLD"}
          articleTitle={article.title}
          commentsCount={article.commentsCount || 38}
        />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: ARTICLE PAGE AD 1                                              */}
      {/* ========================================================================= */}
      <section id="section-article-ad-1" data-section="Article Page Ad 1">
        <ArticlePageAd1 />
      </section>

      <main className="w-full flex flex-col items-center">
        {/* ======================================================================= */}
        {/* SECTION 3: ARTICLE HEADER & HERO                                        */}
        {/* Headline, Deck, Audio & Pill Actions (Image 1 - no bottom divider),     */}
        {/* Hero Photo, Byline, & Paragraphs 1-5                                    */}
        {/* ======================================================================= */}
        <section
          id="section-article-header-hero"
          data-section="Article Header & Hero"
          className="w-full max-w-[580px] px-4 sm:px-0 flex flex-col mx-auto"
        >
          {/* Free to read notice */}
          <div className="text-center py-1 text-[12.5px] font-nyt-franklin text-[#444444]">
            This story is <span className="font-bold text-[#121212]">free to read.</span>
          </div>

          {/* Headline (Enlarged authentic NYT serif) */}
          <h1
            style={{
              fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
              lineHeight: 1.15,
            }}
            className="text-[34px] sm:text-[40px] md:text-[42px] font-bold italic text-[#121212] mt-3 mb-3 tracking-tight text-left"
          >
            {article.title}
          </h1>

          {/* Subtitle / Deck (Enlarged) */}
          <p
            style={{
              fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
              lineHeight: 1.4,
            }}
            className="text-[18.5px] sm:text-[20px] text-[#363636] font-normal mb-4 text-left"
          >
            {article.subtitle}
          </p>

          {/* Utility / Audio & Social Actions Bar (Exact match to Image 1: NO divider after this) */}
          <div className="w-full border-t border-[#e2e2e2] py-2.5 my-2 flex items-center justify-between text-neutral-800 text-[13px] font-nyt-franklin">
            {/* Audio Listen Button: Circular play button with thin border + text */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                aria-label={isPlayingAudio ? "Pause audio" : "Listen to audio"}
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:bg-neutral-50 shadow-xs cursor-pointer text-black shrink-0 transition-colors"
              >
                {isPlayingAudio ? (
                  <span className="text-xs font-bold leading-none">❚❚</span>
                ) : (
                  <svg
                    className="w-3.5 h-3.5 ml-0.5 fill-black text-black"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                )}
              </button>
              <span className="font-normal text-[#121212] text-[13.5px]">
                Listen · {article.audioDuration || "5:59 min"}
              </span>
            </div>

            {/* Right Action Icons: Pill Share, Circle Arrow, Circle Bookmark, Pill Comments */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* 1. Share full article pill */}
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 text-[#121212] cursor-pointer text-[12.5px] font-normal transition-colors"
              >
                <svg
                  className="w-4 h-4 text-neutral-800 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
                <span className="hidden sm:inline">Share full article</span>
              </button>

              {/* 2. Curved arrow share circle */}
              <button
                type="button"
                aria-label="Share"
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-400 text-[#121212] cursor-pointer shrink-0 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 17v-1.5a5 5 0 0 1 5-5h7" />
                  <polyline points="12 6 17 10.5 12 15" />
                </svg>
              </button>

              {/* 3. Bookmark circle */}
              <button
                type="button"
                aria-label="Bookmark"
                onClick={() => setIsSaved(!isSaved)}
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-400 text-[#121212] cursor-pointer shrink-0 transition-colors"
              >
                <svg
                  className={`w-4 h-4 ${isSaved ? "fill-black text-black" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </button>

              {/* 4. Comments pill */}
              <button
                type="button"
                aria-label="Comments"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 text-[#121212] cursor-pointer text-[13px] font-bold transition-colors"
              >
                <svg
                  className="w-4 h-4 text-neutral-800 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>{article.commentsCount || 38}</span>
              </button>
            </div>
          </div>
          {/* Note: NO divider after this row! It sits directly above the hero photo */}

          {/* Hero Image (fitted inside 580px column, never full-bleed) */}
          <div className="w-full mt-2 mb-2">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
              <Image
                src={article.image || "/images/rob_jetten_press.jpg"}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 600px) 100vw, 580px"
              />
            </div>
            {/* Caption & Credit */}
            <div className="mt-2 text-[11.5px] text-[#555555] font-nyt-franklin leading-snug">
              <span>{article.imageCaption} </span>
              <span className="text-[#888888]">{article.imageCredit}</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* BYLINE, AUTHOR AVATARS, DATE & GOOGLE COVERAGE CALLOUT (Image 1)          */}
          {/* Replaces Image 2 part with Image 1:                                       */}
          {/* 3 circular author headshots + Linked author names + Dates + Google card   */}
          {/* ========================================================================= */}
          <div className="mt-4 mb-6 font-nyt-franklin">
            {/* Top row: circular avatars on the left, Byline on the right */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 mb-2.5">
              {/* Author Avatars matching specific writer(s) */}
              <div className="flex items-center gap-2 shrink-0">
                {(article.authors && article.authors.length > 0
                  ? article.authors
                  : [
                      {
                        name: "Michael Crowley",
                        slug: "michael-crowley",
                        avatar: "/images/gen_crowley_portrait.jpg",
                      },
                    ]
                ).map((auth) => (
                  <Link
                    key={auth.slug}
                    href={`/by/${auth.slug}`}
                    className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full overflow-hidden block border border-neutral-200 hover:opacity-85 transition-opacity shrink-0 shadow-2xs"
                    title={auth.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={auth.avatar}
                      alt={auth.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </Link>
                ))}
              </div>

              {/* Byline with Underlined Author Links */}
              <div className="text-[14px] sm:text-[15.5px] text-[#121212] leading-tight">
                <span className="font-bold">By </span>
                {(article.authors && article.authors.length > 0
                  ? article.authors
                  : [{ name: "Michael Crowley", slug: "michael-crowley" }]
                ).map((auth, idx, arr) => (
                  <React.Fragment key={auth.slug}>
                    <Link
                      href={`/by/${auth.slug}`}
                      className="font-bold text-[#121212] underline hover:text-[#555] transition-colors"
                    >
                      {auth.name}
                    </Link>
                    {idx < arr.length - 2 && <span className="font-bold">, </span>}
                    {idx === arr.length - 2 && <span className="font-bold"> and </span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Published & Updated Dates */}
            <div className="text-[12.5px] sm:text-[13px] text-[#555555] font-nyt-franklin flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
              <span>{article.date || `Published ${article.publishedDate || "Oct. 22, 2026"}`}</span>
              {article.updatedDate && (
                <span>Updated {article.updatedDate}</span>
              )}
            </div>

            {/* Google Search Results Coverage Card (Image 1 Bottom) */}
            <div className="w-full bg-[#f8f8f8] border border-[#f0f0f0] rounded-sm py-5 px-6 text-center my-3 flex flex-col items-center justify-center">
              <p
                style={{
                  fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                }}
                className="text-[13.5px] sm:text-[14.5px] text-[#121212] mb-3 select-none"
              >
                See more of our coverage in your search results.
              </p>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 text-[#121212] font-bold text-[12.5px] sm:text-[13px] font-nyt-franklin shadow-2xs transition-colors cursor-pointer"
              >
                <span>Add The New York Times on Google</span>
                <span className="text-[13px] leading-none">↗</span>
              </a>
            </div>
          </div>

          {/* First Group of Paragraphs (Part 1 - Increased font size) */}
          <div
            style={{
              fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
            }}
            className="text-[18px] sm:text-[19px] leading-[1.72] text-[#222222] space-y-4.5 text-left"
          >
            {article.paragraphsPart1.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 4: ARTICLE PAGE AD 2                                            */}
        {/* ======================================================================= */}
        <section id="section-article-ad-2" data-section="Article Page Ad 2" className="w-full">
          <ArticlePageAd2 />
        </section>

        {/* ======================================================================= */}
        {/* SECTION 5: ARTICLE BODY WITH SIDEBAR (Image 2)                           */}
        {/* Centered paragraphs with middle-aligned Editors' Picks on right         */}
        {/* Enlarged Editors' Picks sidebar matching user request                    */}
        {/* ======================================================================= */}
        <section
          id="section-article-body-sidebar"
          data-section="Article Body With Sidebar"
          className="relative w-full max-w-[580px] px-4 sm:px-0 mx-auto"
        >
          {/* Centered reading column (identical width and centering to other sections) */}
          <div
            style={{
              fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
            }}
            className="text-[18px] sm:text-[19px] leading-[1.72] text-[#222222] space-y-4.5 text-left"
          >
            {article.paragraphsPart2.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Editors' Picks Sidebar (Enlarged: 245px width, 64px image, 13.5px font) */}
          <aside
            aria-label="Editors' Picks Sidebar"
            className="mt-8 lg:mt-0 lg:absolute lg:left-[calc(100%+32px)] xl:left-[calc(100%+44px)] lg:top-[28%] lg:w-[245px] xl:w-[260px] font-nyt-franklin text-left"
          >
            {/* No line over Editors' Picks; thin ash line directly under title */}
            <h3 className="text-[13px] font-bold text-[#121212] border-b border-[#e2e2e2] pb-1.5 mb-3.5 font-nyt-franklin uppercase tracking-wider">
              Editors’ Picks
            </h3>
            {/* Clean list with space-y-4, NO dividers between articles */}
            <div className="flex flex-col space-y-4">
              {EDITORS_PICKS_SIDEBAR.map((item) => (
                <Link
                  key={item.id}
                  href={`/article/${item.id}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="relative w-[64px] h-[64px] min-w-[64px] min-h-[64px] shrink-0 overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:opacity-90 transition-opacity"
                      sizes="64px"
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "nyt-serif, georgia, serif",
                      lineHeight: 1.25,
                    }}
                    className="text-[13.5px] sm:text-[14px] font-bold text-[#121212] group-hover:text-neutral-600 transition-colors flex-1"
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 6: ARTICLE PAGE AD 3                                            */}
        {/* ======================================================================= */}
        <section id="section-article-ad-3" data-section="Article Page Ad 3" className="w-full">
          <ArticlePageAd3 />
        </section>

        {/* ======================================================================= */}
        {/* SECTION 7: ARTICLE BODY QUOTES                                          */}
        {/* Paragraphs 12-16 (Cloudflare quote, OpenAI finding, PHP patch)          */}
        {/* ======================================================================= */}
        <section
          id="section-article-body-quotes"
          data-section="Article Body Quotes"
          className="w-full max-w-[580px] px-4 sm:px-0 mx-auto"
        >
          <div
            style={{
              fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
            }}
            className="text-[18px] sm:text-[19px] leading-[1.72] text-[#222222] space-y-4.5 text-left"
          >
            {article.paragraphsPart3.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 8: ARTICLE PAGE AD 4                                            */}
        {/* ======================================================================= */}
        <section id="section-article-ad-4" data-section="Article Page Ad 4" className="w-full">
          <ArticlePageAd4 />
        </section>

        {/* ======================================================================= */}
        {/* SECTION 9: ARTICLE BODY CONTINUATION (Replaced with Image 3)            */}
        {/* 6 paragraphs from Image 3                                              */}
        {/* ======================================================================= */}
        <section
          id="section-article-section-9"
          data-section="Article Body Continuation (Section 9 - Image 3)"
          className="w-full max-w-[580px] px-4 sm:px-0 mx-auto"
        >
          <div
            style={{
              fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
            }}
            className="text-[18px] sm:text-[19px] leading-[1.72] text-[#222222] space-y-4.5 text-left"
          >
            {(article.paragraphsSection9 || MAIN_ARTICLE.paragraphsSection9 || []).map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 10: ARTICLE PAGE AD 5                                           */}
        {/* ======================================================================= */}
        <section id="section-article-ad-5" data-section="Article Page Ad 5" className="w-full">
          <ArticlePageAd5 />
        </section>

        {/* ======================================================================= */}
        {/* SECTION 11: CONCLUSION & AROUND THE WORLD                               */}
        {/* Bios without top divider & enlarged font, reporter names underlined,    */}
        {/* Image 4 Action Buttons & Line, Enlarged Around the World heading,       */}
        {/* and Ash divider under subhead                                           */}
        {/* ======================================================================= */}
        <section
          id="section-article-conclusion-atw"
          data-section="Conclusion & Around The World"
          className="w-full max-w-[580px] px-4 sm:px-0 mx-auto flex flex-col text-left"
        >
          {/* Paragraphs Part 4 */}
          <div
            style={{
              fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
            }}
            className="text-[18px] sm:text-[19px] leading-[1.72] text-[#222222] space-y-4.5"
          >
            {article.paragraphsPart4.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Reporter Bios - NO divider above, increased font, reporter names underlined */}
          <div className="mt-6 font-nyt-franklin text-[14px] sm:text-[14.5px] text-[#333333] space-y-2 leading-relaxed">
            {article.reporterBios?.map((bio, idx) => {
              const matchedAuthor = article.authors?.find(
                (a) => a.name.toLowerCase() === bio.name.toLowerCase()
              );
              return (
                <p key={idx}>
                  {matchedAuthor ? (
                    <Link
                      href={`/by/${matchedAuthor.slug}`}
                      className="font-bold text-[#121212] underline decoration-1 underline-offset-2 hover:text-[#326891] transition-colors"
                    >
                      {bio.name}
                    </Link>
                  ) : (
                    <span className="font-bold text-[#121212] underline decoration-1 underline-offset-2">
                      {bio.name}
                    </span>
                  )}{" "}
                  {bio.text}
                </p>
              );
            })}
          </div>

          {/* See more on: OpenAI */}
          <div className="mt-4 pt-2 border-t border-[#e2e2e2] font-nyt-franklin text-[13px] text-[#555555]">
            <span>See more on: </span>
            <span className="underline text-[#326891] cursor-pointer hover:text-black">OpenAI</span>
          </div>

          {/* READ 38 COMMENTS Button */}
          <div className="mt-5 w-full">
            <button
              type="button"
              className="w-full bg-[#567B95] hover:bg-[#46667d] text-white font-nyt-franklin font-bold text-[13px] tracking-wider py-2.5 rounded-[3px] uppercase transition-colors cursor-pointer"
            >
              READ {article.commentsCount || 38} COMMENTS
            </button>
          </div>

          {/* Below 38 Comments Box: Exact match to Image 4 */}
          <div className="mt-4 flex items-center gap-2.5 sm:gap-3">
            {/* 1. Share full article pill */}
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 text-[#121212] cursor-pointer text-[12.5px] font-nyt-franklin transition-colors"
            >
              <svg
                className="w-4 h-4 text-neutral-800 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              <span>Share full article</span>
            </button>

            {/* 2. Curved arrow share circle */}
            <button
              type="button"
              aria-label="Share"
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-400 text-[#121212] cursor-pointer shrink-0 transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 17v-1.5a5 5 0 0 1 5-5h7" />
                <polyline points="12 6 17 10.5 12 15" />
              </svg>
            </button>

            {/* 3. Bookmark circle */}
            <button
              type="button"
              aria-label="Bookmark"
              onClick={() => setIsSaved(!isSaved)}
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-400 text-[#121212] cursor-pointer shrink-0 transition-colors"
            >
              <svg
                className={`w-4 h-4 ${isSaved ? "fill-black text-black" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>

            {/* 4. Comments pill */}
            <button
              type="button"
              aria-label="Comments"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 text-[#121212] cursor-pointer text-[13px] font-bold font-nyt-franklin transition-colors"
            >
              <svg
                className="w-4 h-4 text-neutral-800 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>{article.commentsCount || 38}</span>
            </button>
          </div>

          {/* Solid Black Horizontal Divider immediately below action buttons (Image 4) */}
          <div className="w-full border-t-2 border-black mt-4 mb-6" />

          {/* Around the World With The Times (Enlarged font + Ash divider under subhead) */}
          <div className="w-full mb-6">
            <h2
              style={{
                fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
              }}
              className="text-[27px] sm:text-[29px] font-bold text-[#121212] tracking-tight"
            >
              Around the World With The Times
            </h2>
            {/* Ash divider below subhead */}
            <p className="text-[13.5px] text-[#555555] font-nyt-franklin mt-1 pb-3 mb-4 border-b border-[#e2e2e2]">
              Our reporters across the globe take you into the field.
            </p>

            <ul className="space-y-4 font-nyt-franklin text-[13.5px] leading-[1.5] text-[#222222]">
              {AROUND_THE_WORLD_ITEMS.map((item) => (
                <li key={item.id} className="flex items-start gap-2">
                  <span className="text-[#121212] text-sm select-none">•</span>
                  <div>
                    <span className="font-bold text-[#121212]">{item.headline}: </span>
                    <span>{item.text} </span>
                    <span className="underline text-[#326891] cursor-pointer hover:text-black">
                      {item.linkText}
                    </span>
                    <span>{item.trailingText}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* POST-SECTION 12 & SECTION 13: MORE IN WORLD, TRENDING & EDITORS' PICKS  */}
        {/* Exact same homepage spacing (padding: 3.5cm) and column measurements:  */}
        {/* Main Content (~70.5%) and Right Sidebar (flex-1).                      */}
        {/* No vertical line between columns.                                      */}
        {/* Separated horizontal black rules matching Image 1.                     */}
        {/* Section 13 sits in MAIN CONTENT ONLY below More in World.              */}
        {/* Right sidebar below Trending in The Times remains empty.                */}
        {/* ======================================================================= */}
        <section
          id="section-article-post-12-container"
          data-section="More in World, Trending & Section 13 (Homepage Measurements)"
          className="w-full bg-white text-[#121212] pt-6 pb-10"
        >
          {/* Outer container with exact homepage 3.5cm left/right padding */}
          <div
            className="w-full mx-auto"
            style={{
              paddingLeft: "3.5cm",
              paddingRight: "3.5cm",
            }}
          >
            {/* Top row: More in World (70.5%) + Trending in The Times (flex-1) */}
            <div className="flex flex-col lg:flex-row items-start gap-6">
              {/* ----------------------------------------------------------------- */}
              {/* MAIN CONTENT COLUMN (~70.5% width, matching homepage)             */}
              {/* Contains: More in World (6 cards) + Section 13 Editors' Picks     */}
              {/* ----------------------------------------------------------------- */}
              <div className="w-full lg:w-[70.5%] shrink-0 flex flex-col">
                {/* Horizontal line matching Image 1: crisp black border-t */}
                <div className="w-full border-t border-black pt-2 mb-3.5">
                  <h3 className="font-nyt-franklin text-[13px] font-bold uppercase tracking-wider text-[#121212]">
                    More in World
                  </h3>
                </div>

                {/* 6 Cards in 3 cols x 2 rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {MORE_IN_WORLD_ITEMS.map((item) => (
                    <article key={item.id} className="flex flex-col group cursor-pointer">
                      <div className="relative w-full aspect-square overflow-hidden bg-neutral-100 mb-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:opacity-90 transition-opacity"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                      {item.isPaidPost && (
                        <span className="font-nyt-franklin text-[9.5px] font-extrabold uppercase tracking-wider text-[#555555] mb-0.5">
                          PAID POST: {item.sponsor}
                        </span>
                      )}
                      <h4
                        style={{
                          fontFamily: "nyt-serif, georgia, serif",
                          lineHeight: 1.25,
                        }}
                        className="text-[14.5px] sm:text-[15px] font-bold text-[#121212] group-hover:text-neutral-600 transition-colors"
                      >
                        {item.title}
                      </h4>
                    </article>
                  ))}
                </div>

                {/* =============================================================== */}
                {/* SECTION 13: EDITORS' PICKS (In Main Content ONLY below it)      */}
                {/* Upper line above Editor's Pick is dark black                    */}
                {/* =============================================================== */}
                <div className="w-full border-t-2 border-black pt-4 mt-10">
                  <h3 className="font-nyt-franklin text-[13px] font-bold uppercase tracking-wider text-[#121212] mb-4">
                    Editors’ Picks
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {HORIZONTAL_EDITORS_PICKS.map((item) => (
                      <article key={item.id} className="flex flex-col group cursor-pointer">
                        <div className="relative w-full aspect-square overflow-hidden bg-neutral-100 mb-2.5">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:opacity-90 transition-opacity"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <h4
                          style={{
                            fontFamily: "nyt-serif, georgia, serif",
                            lineHeight: 1.25,
                          }}
                          className="text-[14.5px] sm:text-[15.5px] font-bold text-[#121212] group-hover:text-neutral-600 transition-colors"
                        >
                          {item.title}
                        </h4>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              {/* ----------------------------------------------------------------- */}
              {/* RIGHT SIDEBAR COLUMN (flex-1, matching homepage)                  */}
              {/* Trending in The Times with INCREASED font size                    */}
              {/* NO vertical line between them!                                    */}
              {/* Below Trending is kept empty!                                     */}
              {/* ----------------------------------------------------------------- */}
              <aside
                aria-label="Trending in The Times"
                className="w-full lg:flex-1 min-w-0 flex flex-col"
              >
                {/* Horizontal line matching Image 1: crisp black border-t */}
                <div className="w-full border-t border-black pt-2 mb-3.5">
                  <h3 className="font-nyt-franklin text-[13px] font-bold uppercase tracking-wider text-[#121212]">
                    Trending in The Times
                  </h3>
                </div>

                <ol className="divide-y divide-[#e2e2e2]">
                  {TRENDING_STORIES.map((headline, idx) => (
                    <li key={idx} className="py-3">
                      <Link
                        href="#"
                        style={{
                          fontFamily: "nyt-serif, georgia, serif",
                          lineHeight: 1.35,
                        }}
                        className="text-[15px] sm:text-[16px] font-normal text-[#121212] hover:text-neutral-600 transition-colors block"
                      >
                        {headline}
                      </Link>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 14: ARTICLE PAGE AD 6                                           */}
        {/* ======================================================================= */}
        <section id="section-article-ad-6" data-section="Article Page Ad 6" className="w-full">
          <ArticlePageAd6 />
        </section>
      </main>

      {/* ========================================================================= */}
      {/* SECTION 15: USUAL MAIN FOOTER                                             */}
      {/* ========================================================================= */}
      <footer id="section-article-footer" data-section="Main Footer">
        <MainFooter />
      </footer>
    </div>
  );
}

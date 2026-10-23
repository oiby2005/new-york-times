"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WriterNavbar from "./WriterNavbar";
import MainFooter from "../sections/MainFooter";
import { WriterData } from "./writerData";

interface WriterPageTemplateProps {
  writer: WriterData;
}

export default function WriterPageTemplate({ writer }: WriterPageTemplateProps) {
  const [activeTab, setActiveTab] = useState<"about" | "contact" | "featured" | "latest">("about");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  // Pagination dynamic 3 numbers (matches category page exactly)
  const getVisiblePages = () => {
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage >= totalPages) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Smooth scroll back to Latest section header
      const latestEl = document.getElementById("section-latest");
      if (latestEl) {
        latestEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToSection = (id: string, tab: "about" | "contact" | "featured" | "latest") => {
    setActiveTab(tab);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#121212] flex flex-col selection:bg-neutral-200">
      {/* 1. Header Navbar */}
      <WriterNavbar />

      <main className="w-full flex-1 flex flex-col items-center">
        {/* Main Column (matches Image 3 & 4 width: ~660px) */}
        <div className="w-full max-w-[660px] px-4 sm:px-6 py-8 flex flex-col">
          {/* ========================================================================= */}
          {/* TOP PROFILE HEADER (Image 3)                                              */}
          {/* Circular avatar on left, Name & Tagline on right                          */}
          {/* ========================================================================= */}
          <div className="flex items-center gap-5 sm:gap-7 mb-7">
            <div className="relative w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] rounded-full overflow-hidden shrink-0 border border-neutral-200 shadow-2xs">
              <Image
                src={writer.avatar}
                alt={writer.name}
                fill
                priority
                className="object-cover"
                sizes="88px"
              />
            </div>

            <div className="flex flex-col">
              <h1
                style={{
                  fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
                  lineHeight: 1.15,
                }}
                className="text-[34px] sm:text-[40px] md:text-[44px] font-bold text-[#121212] tracking-tight"
              >
                {writer.name}
              </h1>
              <p
                style={{
                  fontFamily: "nyt-serif, georgia, serif",
                  lineHeight: 1.4,
                }}
                className="text-[16px] sm:text-[18px] text-[#333333] mt-1.5"
              >
                {writer.tagline}
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* TABS: About · Contact · Featured · Latest (Image 3)                       */}
          {/* ========================================================================= */}
          <div className="w-full border-b border-[#e2e2e2] mb-7 flex items-center gap-7 select-none">
            <button
              type="button"
              onClick={() => scrollToSection("section-about", "about")}
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
              }}
              className={`pb-2.5 text-[14px] sm:text-[15px] font-medium transition-colors cursor-pointer ${
                activeTab === "about"
                  ? "border-b-2 border-[#121212] text-[#121212] font-bold -mb-[1px]"
                  : "text-[#666666] hover:text-[#121212]"
              }`}
            >
              About
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("section-contact", "contact")}
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
              }}
              className={`pb-2.5 text-[14px] sm:text-[15px] font-medium transition-colors cursor-pointer ${
                activeTab === "contact"
                  ? "border-b-2 border-[#121212] text-[#121212] font-bold -mb-[1px]"
                  : "text-[#666666] hover:text-[#121212]"
              }`}
            >
              Contact
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("section-featured", "featured")}
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
              }}
              className={`pb-2.5 text-[14px] sm:text-[15px] font-medium transition-colors cursor-pointer ${
                activeTab === "featured"
                  ? "border-b-2 border-[#121212] text-[#121212] font-bold -mb-[1px]"
                  : "text-[#666666] hover:text-[#121212]"
              }`}
            >
              Featured
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("section-latest", "latest")}
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
              }}
              className={`pb-2.5 text-[14px] sm:text-[15px] font-medium transition-colors cursor-pointer ${
                activeTab === "latest"
                  ? "border-b-2 border-[#121212] text-[#121212] font-bold -mb-[1px]"
                  : "text-[#666666] hover:text-[#121212]"
              }`}
            >
              Latest
            </button>
          </div>

          {/* ========================================================================= */}
          {/* SECTION: ABOUT (What I Cover, My Background, Journalistic Ethics)         */}
          {/* ========================================================================= */}
          <div id="section-about" className="flex flex-col space-y-7">
            {/* What I Cover */}
            <div>
              <h2 className="font-nyt-franklin font-bold text-[18px] sm:text-[20px] text-[#121212] mb-2.5 tracking-tight">
                What I Cover
              </h2>
              <p
                style={{
                  fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
                  lineHeight: 1.65,
                }}
                className="text-[16px] sm:text-[17.5px] text-[#222222]"
              >
                {writer.whatICover}
              </p>
            </div>

            {/* My Background */}
            <div>
              <h2 className="font-nyt-franklin font-bold text-[18px] sm:text-[20px] text-[#121212] mb-2.5 tracking-tight">
                My Background
              </h2>
              <div
                style={{
                  fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
                  lineHeight: 1.65,
                }}
                className="text-[16px] sm:text-[17.5px] text-[#222222] space-y-3.5"
              >
                {writer.myBackground.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Journalistic Ethics */}
            <div>
              <h2 className="font-nyt-franklin font-bold text-[18px] sm:text-[20px] text-[#121212] mb-2.5 tracking-tight">
                Journalistic Ethics
              </h2>
              <p
                style={{
                  fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
                  lineHeight: 1.65,
                }}
                className="text-[16px] sm:text-[17.5px] text-[#222222]"
              >
                {writer.journalisticEthics}
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION: CONTACT ME (With upper line & each row separated with ash divider)*/}
          {/* ========================================================================= */}
          <div id="section-contact" className="mt-9 pt-7 border-t border-[#e2e2e2]">
            <h2 className="font-nyt-franklin font-bold text-[18px] sm:text-[20px] text-[#121212] mb-3.5 tracking-tight">
              Contact Me
            </h2>

            {/* Each row separated with ash divider (single divider between Contact Me and Featured) */}
            <ul className="divide-y divide-[#e2e2e2] font-nyt-franklin text-[15px] sm:text-[16px] text-[#333333]">
              <li className="py-3 flex flex-wrap items-center gap-1.5">
                <span className="font-bold text-[#121212]">Email: </span>
                <a
                  href={`mailto:${writer.contact.email}`}
                  className="text-[#326891] underline hover:text-[#121212] transition-colors"
                >
                  {writer.contact.email}
                </a>
              </li>

              <li className="py-3 flex flex-wrap items-center gap-1.5">
                <span className="font-bold text-[#121212]">X: </span>
                <a
                  href={`https://x.com/${writer.contact.x.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#326891] underline hover:text-[#121212] transition-colors"
                >
                  {writer.contact.x}
                </a>
              </li>

              <li className="py-3 flex flex-wrap items-center gap-1.5">
                <span className="font-bold text-[#121212]">Signal: </span>
                <span>{writer.contact.signal}</span>
              </li>

              <li className="py-3 flex flex-wrap items-center gap-1.5">
                <span className="font-bold text-[#121212]">LinkedIn: </span>
                <a
                  href="#"
                  className="text-[#326891] underline hover:text-[#121212] transition-colors"
                >
                  {writer.contact.linkedIn}
                </a>
              </li>

              <li className="py-3 flex flex-wrap items-center gap-1.5">
                <span className="font-bold text-[#121212]">Anonymous tips: </span>
                <a
                  href="#"
                  className="text-[#326891] underline hover:text-[#121212] transition-colors"
                >
                  {writer.contact.tips}
                </a>
              </li>
            </ul>
          </div>

          {/* ========================================================================= */}
          {/* SECTION: FEATURED (With upper line & larger typography)                    */}
          {/* Two cards side-by-side with slider arrow buttons                         */}
          {/* ========================================================================= */}
          <div id="section-featured" className="w-full mt-9 pt-7 border-t border-[#e2e2e2] mb-10">
            <div className="flex items-center justify-between mb-4.5">
              <h2 className="font-nyt-franklin font-bold text-[18px] sm:text-[20px] text-[#121212]">
                Featured
              </h2>

              {/* Slider Arrows < > */}
              <div className="flex items-center gap-1.5 select-none">
                <button
                  type="button"
                  aria-label="Previous Featured"
                  className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black cursor-pointer transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next Featured"
                  className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black cursor-pointer transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 2 Featured Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {writer.featured.map((card) => {
                const articleHref = `/article/${card.slug || "trump-asked-musk-to-reverse-limits-on-ukraines-military-internet-use"}`;
                return (
                  <article key={card.id} className="flex flex-col group cursor-pointer">
                    <Link href={articleHref} className="block group/card">
                      <div className="relative w-full aspect-[4/3] bg-neutral-100 overflow-hidden mb-3">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover group-hover/card:opacity-90 transition-opacity"
                          sizes="(max-width: 640px) 100vw, 320px"
                        />
                      </div>

                      <h3
                        style={{
                          fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
                          lineHeight: 1.3,
                        }}
                        className="text-[17px] sm:text-[18.5px] font-bold text-[#121212] group-hover/card:text-neutral-600 transition-colors"
                      >
                        {card.title}
                      </h3>
                    </Link>

                    <span className="font-nyt-franklin text-[12.5px] sm:text-[13px] text-[#727272] mt-2">
                      {card.date}
                    </span>
                  </article>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION: LATEST (With upper line & larger typography)                      */}
          {/* Articles list: Date on left, Headline & Text in center, Thumb on right    */}
          {/* ========================================================================= */}
          <div id="section-latest" className="w-full mt-4 pt-7 border-t border-[#e2e2e2]">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#e2e2e2]">
              <h2 className="font-nyt-franklin font-bold text-[18px] sm:text-[20px] text-[#121212]">
                Latest
              </h2>

              {/* Slider Arrows < > */}
              <div className="flex items-center gap-1.5 select-none">
                <button
                  type="button"
                  aria-label="Previous Latest Page"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${
                    currentPage === 1
                      ? "border-neutral-200 text-neutral-300 cursor-not-allowed"
                      : "border-neutral-300 text-neutral-600 hover:text-black hover:border-black cursor-pointer"
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next Latest Page"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${
                    currentPage === totalPages
                      ? "border-neutral-200 text-neutral-300 cursor-not-allowed"
                      : "border-neutral-300 text-neutral-600 hover:text-black hover:border-black cursor-pointer"
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* List of 10 Articles with increased typography */}
            <div className="flex flex-col divide-y divide-[#efefef]">
              {writer.latest.map((art) => {
                const articleHref = `/article/${art.slug || "trump-asked-musk-to-reverse-limits-on-ukraines-military-internet-use"}`;
                return (
                  <article
                    key={art.id}
                    className="py-5 sm:py-6 flex items-start justify-between gap-4 sm:gap-6 group"
                  >
                    {/* Left: Date */}
                    <div className="w-[78px] sm:w-[92px] shrink-0 pt-0.5">
                      <span className="font-nyt-franklin text-[12.5px] sm:text-[13px] text-[#727272] block">
                        {art.date}
                      </span>
                    </div>

                    {/* Center: Title + Summary + Byline */}
                    <div className="flex-1 min-w-0 pr-1">
                      <Link href={articleHref} className="group/link block">
                        <h3
                          style={{
                            fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
                            lineHeight: 1.25,
                          }}
                          className="text-[19px] sm:text-[21px] font-bold text-[#121212] group-hover/link:text-neutral-600 transition-colors mb-2"
                        >
                          {art.title}
                        </h3>
                      </Link>

                      <p
                        style={{
                          fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
                          lineHeight: 1.55,
                        }}
                        className="text-[15px] sm:text-[16px] text-[#444444] mb-2.5 line-clamp-3 sm:line-clamp-none"
                      >
                        {art.summary}
                      </p>

                      <div className="font-nyt-franklin text-[11.5px] sm:text-[12px] uppercase tracking-wider text-[#727272] font-semibold">
                        {art.byline}
                      </div>

                      {art.extraLink && (
                        <div className="mt-2">
                          <span className="font-nyt-franklin text-[13px] text-[#326891] underline cursor-pointer hover:text-black">
                            {art.extraLink}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Right: Square Thumbnail (Clickable to article page) */}
                    <Link
                      href={articleHref}
                      className="relative w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] shrink-0 bg-neutral-100 overflow-hidden block group-hover:opacity-90 transition-opacity"
                    >
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover"
                        sizes="88px"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PAGINATION BUTTON (Exact match to Category page / Image 5)                */}
          {/* "after the image put a pagination button as in category page ."           */}
          {/* ========================================================================= */}
          <div className="pt-8 pb-4 w-full flex flex-col items-center justify-center border-t border-[#e2e2e2] mt-6">
            {/* Page X of 10 text */}
            <p
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                fontSize: "12.5px",
                color: "#444444",
              }}
              className="text-center mb-3 select-none"
            >
              Page <span className="font-bold text-[#121212]">{currentPage}</span> of{" "}
              <span className="font-bold text-[#121212]">{totalPages}</span>
            </p>

            {/* Pagination Controls: Shifting 3 numbers only, with < and > */}
            <div className="flex items-center gap-5 select-none">
              {/* Previous Shift Arrow */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className={`p-1.5 text-sm transition-colors cursor-pointer ${
                  currentPage === 1
                    ? "text-neutral-300 cursor-not-allowed"
                    : "text-[#121212] hover:text-neutral-600"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Exactly 3 Numbers Shown (Shifts dynamically) */}
              <div className="flex items-center gap-4">
                {getVisiblePages().map((pageNum) => {
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      style={{
                        fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                        fontSize: "13.5px",
                        fontWeight: isActive ? 800 : 500,
                        color: isActive ? "#121212" : "#666666",
                      }}
                      className={`min-w-[24px] h-[24px] flex items-center justify-center transition-all cursor-pointer ${
                        isActive
                          ? "border-b-2 border-[#121212] -mb-[2px]"
                          : "hover:text-[#121212]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Shift Arrow */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className={`p-1.5 text-sm transition-colors cursor-pointer ${
                  currentPage === totalPages
                    ? "text-neutral-300 cursor-not-allowed"
                    : "text-[#121212] hover:text-neutral-600"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Main NYT Footer with ash line before it */}
      <div className="w-full border-t border-[#e2e2e2]" />
      <MainFooter />
    </div>
  );
}

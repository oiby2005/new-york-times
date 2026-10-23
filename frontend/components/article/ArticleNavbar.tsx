"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CategoryDrawer from "../category/CategoryDrawer";

interface ArticleNavbarProps {
  category?: string;
  articleTitle?: string;
  commentsCount?: number;
}

export default function ArticleNavbar({
  category = "WORLD",
  articleTitle = "From Kenya to Japan, Rush to Fix Security Flaw Takes Sites Briefly Offline",
  commentsCount = 38,
}: ArticleNavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition from Image 1 to Image 2 (sticky bar) when scrolled past 150px
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Iconic NYT Blackletter Logo SVG
  const NytLogo = ({ className = "h-[24px] md:h-[26px] w-auto text-black" }: { className?: string }) => (
    <Link
      href="/"
      aria-label="The New York Times Home"
      className="inline-flex items-center hover:opacity-90 transition-opacity shrink-0"
    >
      <svg viewBox="0 0 185 25" fill="currentColor" className={className}>
        <path d="M13.8 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8C6.2 1.4 5 1 4 1 2 1 .6 2.5.6 4.2c0 1.5 1.1 2 1.5 2.2l.1-.2c-.2-.2-.5-.4-.5-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1L9 10.2v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2C3.6 6.9 4.7 6 5.8 5.4l-.1-.3c-3 .8-5.7 3.6-5.7 7 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1l-1.6-1.3V5.8c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7 0-1.5.2-2.1l2.1-.9v6.2zm10.6 2.3l-1.3 1 .2.2.6-.5 2.2 2 3-2-.1-.2-.8.5-1-1V9.4l.8-.6 1.7 1.4v6.1c0 3.8-.8 4.4-2.5 5v.3c2.8.1 5.4-.8 5.4-5.7V9.3l.9-.7-.2-.2-.8.6-2.5-2.1L18.5 9V.8h-.2l-3.5 2.4v.2c.4.2 1 .4 1 1.5l-.1 11.3zM34 15.1L31.5 17 29 15v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM53.1 2c0-.3-.1-.6-.2-.9h-.2c-.3.8-.7 1.2-1.7 1.2-.9 0-1.5-.5-1.9-.9l-2.9 3.3.2.2 1-.9c.6.5 1.1.9 2.5 1v8.3L44 3.2c-.5-.8-1.2-1.9-2.6-1.9-1.6 0-3 1.4-2.8 3.6h.3c.1-.6.4-1.3 1.1-1.3.5 0 1 .5 1.3 1v3.3c-1.8 0-3 .8-3 2.3 0 .8.4 2 1.6 2.3v-.2c-.2-.2-.3-.4-.3-.7 0-.5.4-.9 1.1-.9h.5v4.2c-2.1 0-3.8 1.2-3.8 3.2 0 1.9 1.6 2.8 3.4 2.7v-.2c-1.1-.1-1.6-.6-1.6-1.3 0-.9.6-1.3 1.4-1.3.8 0 1.5.5 2 1.1l2.9-3.2-.2-.2-.7.8c-1.1-1-1.7-1.3-3-1.5V5l8 14h.6V5c1.5-.1 2.9-1.3 2.9-3zm7.3 13.1L57.9 17l-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM76.7 8l-.7.5-1.9-1.6-2.2 2 .9.9v7.5l-2.4-1.5V9.6l.8-.5-2.3-2.2-2.2 2 .9.9V17l-.3.2-2.1-1.5v-6c0-1.4-.7-1.8-1.5-2.3-.7-.5-1.1-.8-1.1-1.5 0-.6.6-.9.9-1.1v-.2c-.8 0-2.9.8-2.9 2.7 0 1 .5 1.4 1 1.9s1 .9 1 1.8v5.8l-1.1.8.2.2 1-.8 2.3 2 2.5-1.7 2.8 1.7 5.3-3.1V9.2l1.3-1-.2-.2zm18.6-5.5l-1 .9-2.2-2-3.3 2.4V1.6h-.3l.1 16.2c-.3 0-1.2-.2-1.9-.4l-.2-13.5c0-1-.7-2.4-2.5-2.4s-3 1.4-3 2.8h.3c.1-.6.4-1.1 1-1.1s1.1.4 1.1 1.7v3.9c-1.8.1-2.9 1.1-2.9 2.4 0 .8.4 2 1.6 2V13c-.4-.2-.5-.5-.5-.7 0-.6.5-.8 1.3-.8h.4v6.2c-1.5.5-2.1 1.6-2.1 2.8 0 1.7 1.3 2.9 3.3 2.9 1.4 0 2.6-.2 3.8-.5 1-.2 2.3-.5 2.9-.5.8 0 1.1.4 1.1.9 0 .7-.3 1-.7 1.1v.2c1.6-.3 2.6-1.3 2.6-2.8 0-1.5-1.5-2.4-3.1-2.4-.8 0-2.5.3-3.7.5-1.4.3-2.8.5-3.2.5-.7 0-1.5-.3-1.5-1.3 0-.8.7-1.5 2.4-1.5.9 0 2 .1 3.1.4 1.2.3 2.3.6 3.3.6 1.5 0 2.8-.5 2.8-2.6V3.7l1.2-1-.2-.2zm-4.1 6.1c-.3.3-.7.6-1.2.6s-1-.3-1.2-.6V4.2l1-.7 1.4 1.3v3.8zm0 3c-.2-.2-.7-.5-1.2-.5s-1 .3-1.2.5V9c.2.2.7.5 1.2.5s1-.3 1.2-.5v2.6zm0 4.7c0 .8-.5 1.6-1.6 1.6h-.8V12c.2-.2.7-.5 1.2-.5s.9.3 1.2.5v4.3zm13.7-7.1l-3.2-2.3-4.9 2.8v6.5l-1 .8.1.2.8-.6 3.2 2.4 5-3V9.2zm-5.4 6.3V8.3l2.5 1.8v7.1l-2.5-1.7zm14.9-8.4h-.2c-.3.2-.6.4-.9.4-.4 0-.9-.2-1.1-.5h-.2l-1.7 1.9-1.7-1.9-3 2 .1.2.8-.5 1 1.1v6.3l-1.3 1 .2.2.6-.5 2.4 2 3.1-2.1-.1-.2-.9.5-1.2-1V9c.5.5 1.1 1 1.8 1 1.4.1 2.2-1.3 2.3-2.9zm12 9.6L123 19l-4.6-7 3.3-5.1h.2c.4.4 1 .8 1.7.8s1.2-.4 1.5-.8h.2c-.1 2-1.5 3.2-2.5 3.2s-1.5-.5-2.1-.8l-.3.5 5 7.4 1-.6v.1zm-11-.5l-1.3 1 .2.2.6-.5 2.2 2 3-2-.2-.2-.8.5-1-1V.8h-.1l-3.6 2.4v.2c.4.2 1 .3 1 1.5v11.3zM143 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8-1.3-.4-2.5-.8-3.5-.8-2 0-3.4 1.5-3.4 3.2 0 1.5 1.1 2 1.5 2.2l.1-.2c-.3-.2-.6-.4-.6-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8V9l-1.5 1.3v.1l1.5 1.3V16c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2c.5-1.3 1.6-2.2 2.6-2.9l-.1-.2c-3 .8-5.7 3.5-5.7 6.9 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1L140 8.8v-3c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7.1-1.5.3-2.1l2.1-.9-.1 6.2zm12.2-12h-.1l-2 1.7v.1l1.7 1.9h.2l2-1.7v-.1l-1.8-1.9zm3 14.8l-.8.5-1-1V9.3l1-.7-.2-.2-.7.6-1.8-2.1-2.9 2 .2.3.7-.5.9 1.1v6.5l-1.3 1 .1.2.7-.5 2.2 2 3-2-.1-.3zm16.7-.1l-.7.5-1.1-1V9.3l1-.8-.2-.2-.8.7-2.3-2.1-3 2.1-2.3-2.1L154 9l-1.8-2.1-2.9 2 .1.3.7-.5 1 1.1v6.5l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.9-.6 1.5 1.4v6l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.8-.5 1.6 1.4v6l-.7.7 2.3 2.1 3.1-2.1v-.3zm8.7-1.5l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.8l3.5 2.5 4.5-3.6-.1-.3zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zm14.1-.9l-1.9-1.5c1.3-1.1 1.8-2.6 1.8-3.6v-.6h-.2c-.2.5-.6 1-1.4 1-.8 0-1.3-.4-1.8-1L176 9.3v3.6l1.7 1.3c-1.7 1.5-2 2.5-2 3.3 0 1 .5 1.7 1.3 2l.1-.2c-.2-.2-.4-.3-.4-.8 0-.3.4-.8 1.2-.8 1 0 1.6.7 1.9 1l4.3-2.6v-3.6h-.1zm-1.1-3c-.7 1.2-2.2 2.4-3.1 3l-1.1-.9V8.1c.4 1 1.5 1.8 2.6 1.8.7 0 1.1-.1 1.6-.4zm-1.7 8c-.5-1.1-1.7-1.9-2.9-1.9-.3 0-1.1 0-1.9.5.5-.8 1.8-2.2 3.5-3.2l1.2 1 .1 3.6z" />
      </svg>
    </Link>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-[#e2e2e2] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        {/* 100% full width layout with side padding */}
        <div className="w-full h-[48px] px-4 sm:px-8 flex items-center justify-between relative transition-all duration-200">
          {!isScrolled ? (
            /* ========================================================================= */
            /* IMAGE 1: MAIN ARTICLE NAVBAR (Default at Top)                             */
            /* Left: Hamburger + Search + WORLD (Category)                               */
            /* Center: Centralized The New York Times Logo                               */
            /* Right: SUBSCRIBE button + LOG IN button                                   */
            /* ========================================================================= */
            <>
              {/* Left: Hamburger, Search, Category */}
              <div className="flex items-center gap-3.5 shrink-0 z-10">
                <button
                  type="button"
                  aria-label="Open Section Navigation"
                  onClick={() => setDrawerOpen(true)}
                  className="p-1 hover:opacity-70 transition-opacity cursor-pointer text-[#121212]"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="2" y1="4" x2="14" y2="4" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                    <line x1="2" y1="12" x2="14" y2="12" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Search"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-1 hover:opacity-70 transition-opacity cursor-pointer text-[#121212]"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>

                {searchOpen && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    className="flex items-center animate-in fade-in duration-150"
                  >
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="font-nyt-franklin text-[12px] text-[#121212] placeholder-[#727272] bg-white border border-[#999999] rounded-l-[2px] px-2.5 h-[28px] outline-none focus:border-black w-28 sm:w-44"
                    />
                    <button
                      type="submit"
                      className="bg-[#859cae] hover:bg-[#728b9d] text-white font-nyt-franklin font-bold text-[11px] tracking-wider uppercase px-2.5 h-[28px] rounded-r-[2px] transition-colors cursor-pointer shrink-0"
                    >
                      GO
                    </button>
                  </form>
                )}

                <Link
                  href={`/section/${category.toLowerCase()}`}
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "13px",
                    fontWeight: 800,
                    letterSpacing: "0.4px",
                    color: "#121212",
                  }}
                  className="uppercase tracking-wider select-none hover:opacity-80 transition-opacity"
                >
                  {category}
                </Link>
              </div>

              {/* Center: Centralized The New York Times Logo */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto z-10">
                <NytLogo className="h-[25px] sm:h-[28px] w-auto text-black" />
              </div>

              {/* Right: SUBSCRIBE button + LOG IN button to the right side */}
              <div className="flex items-center gap-3 shrink-0 z-10">
                {/* Subscribe button */}
                <Link
                  href="/subscription"
                  className="bg-[#567B95] hover:bg-[#46667d] text-white font-nyt-franklin font-bold text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-[3px] transition-colors whitespace-nowrap shadow-xs cursor-pointer inline-block"
                >
                  SUBSCRIBE FOR $0.25/WEEK
                </Link>

                {/* Log in blue button linking to /login */}
                <Link
                  href="/login"
                  className="bg-[#567B95] hover:bg-[#46667d] text-white font-nyt-franklin font-bold text-[11px] tracking-wider uppercase px-3.5 py-1.5 rounded-[3px] transition-colors whitespace-nowrap shadow-xs cursor-pointer inline-block"
                >
                  LOG IN
                </Link>
              </div>
            </>
          ) : (
            /* ========================================================================= */
            /* IMAGE 2: STICKY ARTICLE NAVBAR (When Scrolling)                           */
            /* Left: The New York Times Logo                                             */
            /* Center: Category (WORLD) | Article Title                                  */
            /* Right: Action Buttons (Share, Share Arrow, Bookmark, Comments)            */
            /* ========================================================================= */
            <>
              {/* Left: The New York Times Logo */}
              <div className="shrink-0 flex items-center">
                <NytLogo className="h-[22px] sm:h-[25px] w-auto text-black" />
              </div>

              {/* Center: Category (WORLD) | Article Title */}
              <div className="flex items-center mx-4 min-w-0 max-w-[50%] md:max-w-[60%] lg:max-w-[65%]">
                <Link
                  href={`/section/${category.toLowerCase()}`}
                  className="font-nyt-franklin text-[12.5px] font-extrabold uppercase tracking-wider text-[#121212] hover:underline shrink-0"
                >
                  {category}
                </Link>
                <span className="text-neutral-400 mx-2 font-light select-none shrink-0">|</span>
                <span
                  style={{
                    fontFamily: "nyt-serif, georgia, 'Times New Roman', serif",
                  }}
                  className="text-[13px] sm:text-[14px] text-[#121212] font-normal truncate select-none"
                  title={articleTitle}
                >
                  {articleTitle}
                </span>
              </div>

              {/* Right: Action Buttons matching Image 2 */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                {/* Share full article pill */}
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 text-[#121212] cursor-pointer text-[12px] font-nyt-franklin transition-colors"
                >
                  <svg
                    className="w-3.5 h-3.5 text-neutral-800 shrink-0"
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

                {/* Curved arrow circle */}
                <button
                  type="button"
                  aria-label="Share"
                  className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-400 text-[#121212] cursor-pointer shrink-0 transition-colors"
                >
                  <svg
                    className="w-3.5 h-3.5"
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

                {/* Bookmark circle */}
                <button
                  type="button"
                  aria-label="Bookmark"
                  onClick={() => setIsSaved(!isSaved)}
                  className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-400 text-[#121212] cursor-pointer shrink-0 transition-colors"
                >
                  <svg
                    className={`w-3.5 h-3.5 ${isSaved ? "fill-black text-black" : ""}`}
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

                {/* Comments pill */}
                <button
                  type="button"
                  aria-label="Comments"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 text-[#121212] cursor-pointer text-[12px] font-bold font-nyt-franklin transition-colors"
                >
                  <svg
                    className="w-3.5 h-3.5 text-neutral-800 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>{commentsCount}</span>
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Spacer so the page content starts below the fixed navbar */}
      <div className="h-[48px] w-full shrink-0" />

      {/* Slide-out Category Navigation Drawer */}
      <CategoryDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

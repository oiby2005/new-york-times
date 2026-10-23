"use client";

import React from "react";
import Link from "next/link";
import { MEGAMENU_DATA } from "./megamenuData";

interface NavbarMegamenuProps {
  category: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

/**
 * Typography Constants specified by the user:
 * Column Headers (Section text, Top Stories text, Newsletter text, Podcast text):
 *   font-family: nyt-franklin, helvetica, arial, sans-serif;
 *   font-size: 11px;
 *   font-weight: 500;
 *   line-height: 20px;
 *   letter-spacing: 0.44px;
 *   color: #5a5a5a;
 *
 * List Items (list in sections, top stories list):
 *   font-family: nyt-franklin, helvetica, arial, sans-serif;
 *   font-size: 13px;
 *   font-weight: 500;
 *   line-height: 18px;
 *   color: #5a5a5a;
 */
const COLUMN_HEADER_STYLE: React.CSSProperties = {
  fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
  fontSize: "11px",
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: "0.44px",
  color: "#222222",
  textTransform: "uppercase",
};

const LIST_ITEM_STYLE: React.CSSProperties = {
  fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
  fontSize: "13px",
  fontWeight: 500,
  lineHeight: "18px",
  color: "#5a5a5a",
};

/**
 * Authentic NYT Podcast & Newsletter Cover Art Badges
 * All badges have strict overflow-hidden and scaled text to ensure letters NEVER exceed the image boundary.
 */
export function MegamenuBadge({ title }: { title: string }) {
  switch (title) {
    case "The Morning":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-gradient-to-b from-[#fcd34d] to-[#f59e0b] flex flex-col items-center justify-center text-neutral-900 shrink-0 shadow-xs border border-amber-400/50 leading-tight select-none overflow-hidden p-0.5">
          <span className="font-serif italic text-[6.5px] leading-none">The</span>
          <span className="font-sans font-bold text-[6.5px] tracking-tight leading-none">Morning</span>
        </div>
      );

    case "The Evening":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-gradient-to-br from-[#ea580c] via-[#be123c] to-[#4c0519] flex flex-col items-center justify-center text-white shrink-0 shadow-xs leading-tight select-none overflow-hidden p-0.5">
          <span className="font-serif italic text-[6.5px] leading-none opacity-90">The</span>
          <span className="font-sans font-bold text-[6.5px] tracking-tight leading-none">Evening</span>
        </div>
      );

    case "The Daily":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-gradient-to-b from-[#06b6d4] to-[#1e3a8a] flex flex-col items-center justify-center text-white shrink-0 shadow-xs leading-tight select-none overflow-hidden p-0.5">
          <span className="font-serif italic text-[6.5px] leading-none opacity-90">The</span>
          <span className="font-sans font-bold text-[6.5px] tracking-tight leading-none">Daily</span>
        </div>
      );

    case "The World":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-gradient-to-br from-[#10b981] to-[#0d9488] flex items-center justify-center text-white shrink-0 shadow-xs p-1 select-none overflow-hidden">
          <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M3.6 9h16.8M3.6 15h16.8" />
            <path d="M12 3a14 14 0 0 0-4 9 14 14 0 0 0 4 9 14 14 0 0 0 4-9 14 14 0 0 0-4-9z" />
          </svg>
        </div>
      );

    case "Your Places: Global Update":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#ecfdf5] border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs select-none overflow-hidden">
          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9z" />
            <path d="M3 12h18" />
          </svg>
        </div>
      );

    case "Canada Letter":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#1e40af] flex flex-col items-center justify-center text-white shrink-0 shadow-xs select-none overflow-hidden relative p-0.5">
          <div className="absolute top-0.5 right-0.5 bg-red-600 text-white text-[4.5px] font-bold px-0.5 rounded-[1px] leading-none">CAN</div>
          <svg className="w-4 h-4 text-white/90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>
      );

    case "DealBook":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-black flex flex-col items-center justify-center text-white shrink-0 shadow-xs leading-tight select-none overflow-hidden p-0.5">
          <span className="font-serif font-bold text-[6.5px] tracking-tight leading-none">Deal</span>
          <span className="font-serif font-bold text-[6.5px] tracking-tight leading-none">Book</span>
        </div>
      );

    case "On Tech":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#171717] flex items-center justify-center shrink-0 shadow-xs p-1 select-none overflow-hidden">
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <circle cx="5" cy="6" r="2.5" fill="#06b6d4" />
            <circle cx="15" cy="6" r="2.5" fill="#f97316" />
            <circle cx="10" cy="14" r="2.5" fill="#a855f7" />
            <line x1="5" y1="6" x2="10" y2="14" stroke="#525252" strokeWidth="1.2" />
            <line x1="15" y1="6" x2="10" y2="14" stroke="#525252" strokeWidth="1.2" />
          </svg>
        </div>
      );

    case "Hard Fork":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#c7f265] border border-lime-400 flex flex-col items-center justify-center text-neutral-950 shrink-0 shadow-xs leading-none select-none font-sans overflow-hidden p-0.5">
          <span className="text-[6px] font-black tracking-tighter leading-tight">HARD</span>
          <span className="text-[6px] font-black tracking-tighter leading-tight">FORK</span>
        </div>
      );

    case "Books":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-neutral-100 border border-neutral-300 flex items-center justify-center gap-0.5 shrink-0 shadow-xs p-1 select-none overflow-hidden">
          <div className="w-1.5 h-5 bg-emerald-600 rounded-[1px]" />
          <div className="w-1.5 h-6 bg-amber-500 rounded-[1px]" />
          <div className="w-1.5 h-4.5 bg-blue-600 rounded-[1px]" />
        </div>
      );

    case "Watching":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#1e1b4b] grid grid-cols-2 gap-0.5 p-1 shrink-0 shadow-xs select-none overflow-hidden">
          <div className="bg-purple-500 rounded-[1px]" />
          <div className="bg-pink-500 rounded-[1px]" />
          <div className="bg-amber-400 rounded-[1px]" />
          <div className="bg-cyan-400 rounded-[1px]" />
        </div>
      );

    case "Book Review":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-gradient-to-br from-[#c2410c] to-[#78350f] flex flex-col items-center justify-center text-white shrink-0 shadow-xs leading-tight select-none overflow-hidden p-0.5">
          <span className="font-serif text-[6px] font-bold leading-none">Book</span>
          <span className="font-serif text-[5.5px] opacity-90 leading-none">Review</span>
        </div>
      );

    case "Popcast":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-black flex items-center justify-center shrink-0 shadow-xs p-1 select-none overflow-hidden">
          <div className="w-5 h-5 rounded-full border border-rose-500 flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full border border-amber-400 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
          </div>
        </div>
      );

    case "The Weekender":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-gradient-to-br from-[#1e40af] to-[#047857] flex items-center justify-center text-white shrink-0 shadow-xs select-none overflow-hidden">
          <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
            <div className="bg-white/80 rounded-[1px]" />
            <div className="bg-emerald-300 rounded-[1px]" />
            <div className="bg-sky-300 rounded-[1px]" />
            <div className="bg-white/40 rounded-[1px]" />
          </div>
        </div>
      );

    case "Well":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#15803d] flex items-center justify-center text-white shrink-0 shadow-xs select-none overflow-hidden">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-12 5" />
          </svg>
        </div>
      );

    case "Modern Love":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#ffe4e6] border border-rose-200 flex flex-col items-center justify-center text-rose-900 shrink-0 shadow-xs leading-tight select-none font-serif overflow-hidden p-0.5">
          <span className="text-[6px] italic font-semibold leading-none">Modern</span>
          <span className="text-[6px] italic font-semibold leading-none">Love</span>
        </div>
      );

    case "Interesting Times":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#1e1b4b] flex flex-col items-center justify-center text-orange-400 shrink-0 shadow-xs select-none p-0.5 border border-indigo-900 overflow-hidden leading-tight">
          <span className="text-[5px] font-bold text-center leading-[6px] tracking-tighter">INTERESTING<br/>TIMES</span>
        </div>
      );

    case "The Opinions":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-white border border-neutral-300 flex flex-col items-center justify-center shrink-0 shadow-xs select-none p-0.5 overflow-hidden">
          <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 mb-0.5">
            <div className="bg-amber-400 rounded-[0.5px]" />
            <div className="bg-teal-500 rounded-[0.5px]" />
            <div className="bg-rose-500 rounded-[0.5px]" />
            <div className="bg-blue-600 rounded-[0.5px]" />
          </div>
          <span className="text-[5px] font-extrabold text-neutral-900 tracking-tighter leading-none">OPINIONS</span>
        </div>
      );

    case "The Ezra Klein Show":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#334155] flex flex-col items-center justify-center text-white shrink-0 shadow-xs leading-none select-none p-0.5 overflow-hidden">
          <span className="font-serif text-[5.5px] text-slate-300">The</span>
          <span className="text-[5px] font-extrabold uppercase tracking-tighter leading-tight text-center">Ezra Klein</span>
          <span className="text-[5px] font-medium text-slate-300">Show</span>
        </div>
      );

    case "The Recommendation":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#2563eb] flex items-center justify-center text-white shrink-0 shadow-xs select-none overflow-hidden p-0.5">
          <span className="font-sans font-bold text-[6.5px] tracking-tighter">Wirecutter</span>
        </div>
      );

    case "Clean Everything":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#3b82f6] flex items-center justify-center text-white shrink-0 shadow-xs select-none overflow-hidden p-1">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      );

    case "The Pulse":
      return (
        <div className="w-8 h-8 rounded-full bg-[#881337] border border-[#9f1239] flex items-center justify-center text-white shrink-0 shadow-xs select-none p-1 overflow-hidden">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    case "Shows":
      return (
        <div className="w-8 h-8 rounded-[3px] bg-[#09090b] flex items-center justify-center text-white shrink-0 shadow-xs select-none overflow-hidden">
          <div className="w-5 h-5 rounded-full border-2 border-emerald-400 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[3.5px] border-t-transparent border-l-[6px] border-l-white border-b-[3.5px] border-b-transparent ml-0.5" />
          </div>
        </div>
      );

    default:
      return (
        <div className="w-8 h-8 rounded-[3px] bg-neutral-800 text-white flex items-center justify-center text-[7px] font-bold uppercase shrink-0 shadow-xs select-none overflow-hidden p-0.5">
          <span className="truncate max-w-full text-center">{title.slice(0, 3)}</span>
        </div>
      );
  }
}

export default function NavbarMegamenu({
  category,
  onMouseEnter,
  onMouseLeave,
}: NavbarMegamenuProps) {
  const data = MEGAMENU_DATA[category];
  if (!data) return null;

  // Split subcategories: use balanced sectionsCol1/sectionsCol2 from data, or slice(0, 8)
  const col1 = data.sectionsCol1 && data.sectionsCol1.length > 0 ? data.sectionsCol1 : data.subcategories.slice(0, 8);
  const col2 = data.sectionsCol2 !== undefined ? data.sectionsCol2 : data.subcategories.slice(8);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 w-full bg-white border-b border-[#d8d8d8] shadow-[0_12px_24px_rgba(0,0,0,0.18)] z-50 font-nyt-sans animate-in fade-in duration-100"
    >
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* Divider between navbar categories and megamenu: bounded by 3.5cm margins (not 100% extend) */}
        <div className="w-full border-t border-[#e2e2e2]" />

        <div className="w-full py-6 pb-7">
          <div className="w-full min-h-[305px] text-left">
          {/* ============================================================ */}
          {/* UNIFORM NYT MEGAMENU ARCHITECTURE                            */}
          {/* Col 1 & 2: SECTIONS (Max 8 in Col 1, rest in Col 2)          */}
          {/* Col 3: TOP STORIES                                           */}
          {/* Col 4: NEWSLETTERS                                           */}
          {/* Col 5: PODCASTS                                              */}
          {/* ============================================================ */}
          <div className="flex flex-row items-start gap-10 lg:gap-14">
            {/* ======================================================== */}
            {/* COLUMN 1 & 2: SECTIONS (1 col of 8, next col for rest)   */}
            {/* ======================================================== */}
            <div className="shrink-0 flex flex-col">
              <h3 style={COLUMN_HEADER_STYLE} className="mb-3.5">
                SECTIONS
              </h3>
              <div className="flex flex-row items-start gap-8 lg:gap-10">
                {/* Column 1: first 8 items */}
                <div className="w-[140px] shrink-0 flex flex-col gap-2.5">
                  {col1.map((item) => {
                    const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
                    return (
                      <Link
                        key={item}
                        href={`/section/${slug}`}
                        style={LIST_ITEM_STYLE}
                        className="hover:underline hover:text-[#121212] whitespace-nowrap leading-[18px] py-0.5 block"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>

                {/* Column 2: remaining items (if > 8) */}
                {col2.length > 0 && (
                  <div className="w-[140px] shrink-0 flex flex-col gap-2.5">
                    {col2.map((item) => {
                      const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
                      return (
                        <Link
                          key={item}
                          href={`/section/${slug}`}
                          style={LIST_ITEM_STYLE}
                          className="hover:underline hover:text-[#121212] whitespace-nowrap leading-[18px] py-0.5 block"
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLUMN 3: TOP STORIES                                    */}
            {/* ======================================================== */}
            <div className="w-[190px] shrink-0">
              <h3 style={COLUMN_HEADER_STYLE} className="mb-3.5">
                TOP STORIES
              </h3>
              <div className="flex flex-col gap-2.5">
                {data.topStories.map((item) => {
                  const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
                  return (
                    <Link
                      key={item}
                      href={`/section/${slug}`}
                      style={LIST_ITEM_STYLE}
                      className="hover:underline hover:text-[#121212] whitespace-nowrap leading-[18px] py-0.5 block"
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLUMN 4: NEWSLETTERS                                    */}
            {/* ======================================================== */}
            <div className="w-[240px] shrink-0">
              <h3 style={COLUMN_HEADER_STYLE} className="mb-3.5">
                NEWSLETTERS
              </h3>
              <div className="flex flex-col gap-3.5">
                {data.newsletters.items.map((nl) => (
                  <div key={nl.title} className="flex items-start gap-2.5 group cursor-pointer">
                    <MegamenuBadge title={nl.title} />
                    <div className="flex flex-col min-w-0">
                      <span
                        style={{
                          fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                          fontSize: "13px",
                          fontWeight: 700,
                          lineHeight: "16px",
                          color: "#121212",
                        }}
                        className="group-hover:underline"
                      >
                        {nl.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                          fontSize: "11px",
                          fontWeight: 400,
                          lineHeight: "14px",
                          color: "#5a5a5a",
                        }}
                        className="mt-0.5"
                      >
                        {nl.desc}
                      </span>
                    </div>
                  </div>
                ))}
                <Link
                  href="#"
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    lineHeight: "14px",
                    color: "#5a5a5a",
                  }}
                  className="hover:underline block mt-0.5"
                >
                  {data.newsletters.seeAllText}
                </Link>
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLUMN 5: PODCASTS                                       */}
            {/* ======================================================== */}
            <div className="w-[230px] shrink-0">
              <h3 style={COLUMN_HEADER_STYLE} className="mb-3.5">
                PODCASTS
              </h3>
              <div className="flex flex-col gap-3.5">
                {data.podcasts.items.map((pod) => (
                  <div key={pod.title} className="flex items-start gap-2.5 group cursor-pointer">
                    <MegamenuBadge title={pod.title} />
                    <div className="flex flex-col min-w-0">
                      <span
                        style={{
                          fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                          fontSize: "13px",
                          fontWeight: 700,
                          lineHeight: "16px",
                          color: "#121212",
                        }}
                        className="group-hover:underline"
                      >
                        {pod.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                          fontSize: "11px",
                          fontWeight: 400,
                          lineHeight: "14px",
                          color: "#5a5a5a",
                        }}
                        className="mt-0.5"
                      >
                        {pod.desc}
                      </span>
                    </div>
                  </div>
                ))}
                <Link
                  href="#"
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    lineHeight: "14px",
                    color: "#5a5a5a",
                  }}
                  className="hover:underline block mt-0.5"
                >
                  {data.podcasts.seeAllText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

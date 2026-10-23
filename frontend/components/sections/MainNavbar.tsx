"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarMegamenu from "./NavbarMegamenu";
import { MEGAMENU_DATA } from "./megamenuData";

type LanguageKey = "en" | "es" | "zh";

interface Edition {
  id: string;
  label: string;
  lang: LanguageKey;
}

const EDITIONS: Edition[] = [
  { id: "us", label: "U.S.", lang: "en" },
  { id: "intl", label: "INTERNATIONAL", lang: "en" },
  { id: "ca", label: "CANADA", lang: "en" },
  { id: "es", label: "ESPAÑOL", lang: "es" },
  { id: "zh", label: "中文", lang: "zh" },
];

const ENGLISH_CATEGORIES: string[] = [
  "U.S.",
  "World",
  "Business",
  "Technology",
  "Science",
  "Sports",
  "Arts & Culture",
  "Lifestyle",
  "Opinion",
  "Video",
  "More",
];

const CATEGORY_SLUGS: Record<string, string> = {
  "U.S.": "/section/us",
  "World": "/section/world",
  "Business": "/section/business",
  "Technology": "/section/technology",
  "Science": "/section/science",
  "Sports": "/section/sports",
  "Arts & Culture": "/section/arts",
  "Lifestyle": "/section/lifestyle",
  "Opinion": "/section/opinion",
  "Video": "/video",
  "More": "/section/more",
};

const TRANSLATIONS: Record<
  LanguageKey,
  {
    subscribe: string;
    login: string;
    todaysPaper: string;
    categories: string[];
  }
> = {
  en: {
    subscribe: "SUBSCRIBE FOR $0.25/WEEK",
    login: "LOG IN",
    todaysPaper: "Today’s Paper",
    categories: [
      "U.S.",
      "World",
      "Business",
      "Technology",
      "Science",
      "Sports",
      "Arts & Culture",
      "Lifestyle",
      "Opinion",
      "Video",
      "More",
    ],
  },
  es: {
    subscribe: "SUSCRÍBETE POR $0,25/SEM",
    login: "INICIAR SESIÓN",
    todaysPaper: "El Periódico de Hoy",
    categories: [
      "EE.UU.",
      "Mundo",
      "Negocios",
      "Tecnología",
      "Ciencia",
      "Deportes",
      "Arte y Cultura",
      "Estilo de vida",
      "Opinión",
      "Video",
      "Más",
    ],
  },
  zh: {
    subscribe: "每周仅需 $0.25 订阅",
    login: "登录",
    todaysPaper: "今日报纸",
    categories: [
      "美国",
      "国际",
      "商业",
      "科技",
      "科学",
      "体育",
      "艺术与文化",
      "生活",
      "观点",
      "视频",
      "更多",
    ],
  },
};

// Live Financial Markets
const MARKET_ITEMS = [
  { symbol: "Nasdaq", change: -2.14 },
  { symbol: "Dow", change: -0.34 },
  { symbol: "S&P 500", change: -1.38 },
];

function applyTranslateCookie(targetLangCode: string) {
  if (typeof document !== "undefined") {
    document.cookie = `googtrans=/en/${targetLangCode}; path=/;`;
    if (typeof window !== "undefined" && window.location.hostname) {
      document.cookie = `googtrans=/en/${targetLangCode}; path=/; domain=.${window.location.hostname};`;
    }
  }
}

export default function MainNavbar() {
  const pathname = usePathname();
  const [activeEdition, setActiveEdition] = useState<string>("us");
  const [currentLang, setCurrentLang] = useState<LanguageKey>("en");

  // Dynamic live everyday date derived cleanly for SSR & client hydration
  const [currentDate, setCurrentDate] = useState("Thursday, October 22, 2026");

  useEffect(() => {
    setCurrentDate(
      new Intl.DateTimeFormat(
        currentLang === "es" ? "es-ES" : currentLang === "zh" ? "zh-CN" : "en-US",
        {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }
      ).format(new Date())
    );
  }, [currentLang]);

  // Rotating Live Financial Market Ticker state
  const [currentMarketIndex, setCurrentMarketIndex] = useState(0);
  const [marketList, setMarketList] = useState(MARKET_ITEMS);
  const [fadeAnim, setFadeAnim] = useState(true);

  // Megamenu dropdown hover & click states
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isPinned, setIsPinned] = useState<boolean>(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  // Sticky category navbar on scroll
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (!sentinelRef.current) return;
      const rect = sentinelRef.current.getBoundingClientRect();
      setIsSticky(rect.top <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleCategoryMouseEnter = (category: string) => {
    clearCloseTimer();
    if (!isPinned) {
      setActiveCategory(category);
    }
  };

  const handleCategoryMouseLeave = () => {
    if (!isPinned) {
      closeTimerRef.current = setTimeout(() => {
        setActiveCategory(null);
      }, 200);
    }
  };

  const handleCategoryClick = (category: string, e: React.MouseEvent) => {
    e.preventDefault();
    clearCloseTimer();
    if (activeCategory === category && isPinned) {
      setIsPinned(false);
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
      setIsPinned(true);
    }
  };

  const handleMegamenuMouseEnter = () => {
    clearCloseTimer();
  };

  const handleMegamenuMouseLeave = () => {
    if (!isPinned) {
      closeTimerRef.current = setTimeout(() => {
        setActiveCategory(null);
      }, 200);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveCategory(null);
        setIsPinned(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Live Financial Market Ticker interval (rotates between Nasdaq, Dow, S&P 500 with micro fluctuations)
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setCurrentMarketIndex((prev) => (prev + 1) % marketList.length);
        setMarketList((prevList) =>
          prevList.map((item, i) => {
            if (i === (currentMarketIndex + 1) % prevList.length) {
              const delta = (Math.random() - 0.5) * 0.02;
              return {
                ...item,
                change: Number((item.change + delta).toFixed(2)),
              };
            }
            return item;
          })
        );
        setFadeAnim(true);
      }, 250);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentMarketIndex, marketList.length]);

  // Handle language edition selection + Google Translate invocation
  const handleEditionChange = (edition: Edition) => {
    setActiveEdition(edition.id);
    setCurrentLang(edition.lang);

    const targetLangCode = edition.lang === "es" ? "es" : edition.lang === "zh" ? "zh-CN" : "en";

    // Set cookie for Google Translate via helper function
    applyTranslateCookie(targetLangCode);

    // Trigger Google Translate dropdown if active
    if (typeof document !== "undefined") {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = targetLangCode;
        select.dispatchEvent(new Event("change"));
      }
    }
  };

  const t = TRANSLATIONS[currentLang];
  const activeMarket = marketList[currentMarketIndex];
  const isNegative = activeMarket.change < 0;

  return (
    <header ref={headerRef} className="w-full bg-white text-[#121212]">
      {/* Container with exact 3.5cm left and right padding */}
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* ============================================================ */}
        {/* ROW 1: TOP UTILITY BAR                                       */}
        {/* ============================================================ */}
        <div className="flex items-center justify-between pt-2.5 pb-2">
          {/* Left: Search Icon Button & Image 1 Search Bar */}
          <div className="flex-1 flex justify-start items-center">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 -ml-1 text-black hover:text-neutral-600 transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                viewBox="0 0 24 24"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <line x1="15.5" y1="15.5" x2="20.5" y2="20.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Image 1 search bar: [ Search ] [ GO ] */}
            {searchOpen && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex items-center ml-2 animate-in fade-in duration-150"
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
          </div>

          {/* Center: Language / Edition Selectors */}
          <nav
            aria-label="Edition Selector"
            className="hidden sm:flex items-center gap-3.5 md:gap-4 shrink-0 px-2"
          >
            {EDITIONS.map((ed) => {
              const isActive = activeEdition === ed.id;
              return (
                <button
                  key={ed.id}
                  type="button"
                  onClick={() => handleEditionChange(ed)}
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "11px",
                    fontWeight: isActive ? 700 : 500,
                    lineHeight: "11px",
                    letterSpacing: "1.4px",
                    color: isActive ? "#121212" : "#5a5a5a",
                    borderBottom: "none",
                    paddingBottom: "0px",
                  }}
                  className="transition-colors cursor-pointer uppercase whitespace-nowrap hover:text-black"
                >
                  {ed.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Subscribe & Log In Buttons */}
          <div className="flex-1 flex justify-end items-center gap-2">
            <Link
              href="/subscription"
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                lineHeight: "11px",
                letterSpacing: "0.55px",
                color: "#fff",
                backgroundColor: "#567B95",
              }}
              className="hover:bg-[#46667d] uppercase px-3 py-1.5 rounded-[3px] transition-colors whitespace-nowrap shadow-xs cursor-pointer inline-block"
            >
              {t.subscribe}
            </Link>
            <Link
              href="/login"
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                lineHeight: "11px",
                letterSpacing: "0.55px",
                color: "#fff",
                backgroundColor: "#567B95",
              }}
              className="hover:bg-[#46667d] uppercase px-3 py-1.5 rounded-[3px] transition-colors whitespace-nowrap shadow-xs cursor-pointer inline-block"
            >
              {t.login}
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ROW 2: MASTHEAD (Date / Exact Size Logo / Live Market Ticker) */}
        {/* ============================================================ */}
        <div className="flex items-center justify-between py-1 my-0.5">
          {/* Left Column: Live Everyday Date & Today's Paper (Increased Font) */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <span
              suppressHydrationWarning
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "16px",
                letterSpacing: "0.1px",
                color: "#363636",
              }}
              className="capitalize whitespace-nowrap"
            >
              {currentDate}
            </span>
            <Link
              href="#"
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "15px",
                letterSpacing: "0.1px",
                color: "#363636",
              }}
              className="hover:underline transition-all mt-1 whitespace-nowrap"
            >
              {t.todaysPaper}
            </Link>
          </div>

          {/* Center Column: Iconic Logo matching exact guidelines (Lifestyle to Games alignment) */}
          <div className="shrink-0 flex justify-center items-center px-2">
            <Link href="/" aria-label="The New York Times" className="inline-block">
              <svg
                viewBox="0 0 185 25"
                fill="currentColor"
                className="h-[54px] sm:h-[60px] md:h-[66px] lg:h-[72px] w-auto max-w-[400px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[560px] text-black hover:opacity-95 transition-opacity"
              >
                <path d="M13.8 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8C6.2 1.4 5 1 4 1 2 1 .6 2.5.6 4.2c0 1.5 1.1 2 1.5 2.2l.1-.2c-.2-.2-.5-.4-.5-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1L9 10.2v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2C3.6 6.9 4.7 6 5.8 5.4l-.1-.3c-3 .8-5.7 3.6-5.7 7 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1l-1.6-1.3V5.8c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7 0-1.5.2-2.1l2.1-.9v6.2zm10.6 2.3l-1.3 1 .2.2.6-.5 2.2 2 3-2-.1-.2-.8.5-1-1V9.4l.8-.6 1.7 1.4v6.1c0 3.8-.8 4.4-2.5 5v.3c2.8.1 5.4-.8 5.4-5.7V9.3l.9-.7-.2-.2-.8.6-2.5-2.1L18.5 9V.8h-.2l-3.5 2.4v.2c.4.2 1 .4 1 1.5l-.1 11.3zM34 15.1L31.5 17 29 15v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM53.1 2c0-.3-.1-.6-.2-.9h-.2c-.3.8-.7 1.2-1.7 1.2-.9 0-1.5-.5-1.9-.9l-2.9 3.3.2.2 1-.9c.6.5 1.1.9 2.5 1v8.3L44 3.2c-.5-.8-1.2-1.9-2.6-1.9-1.6 0-3 1.4-2.8 3.6h.3c.1-.6.4-1.3 1.1-1.3.5 0 1 .5 1.3 1v3.3c-1.8 0-3 .8-3 2.3 0 .8.4 2 1.6 2.3v-.2c-.2-.2-.3-.4-.3-.7 0-.5.4-.9 1.1-.9h.5v4.2c-2.1 0-3.8 1.2-3.8 3.2 0 1.9 1.6 2.8 3.4 2.7v-.2c-1.1-.1-1.6-.6-1.6-1.3 0-.9.6-1.3 1.4-1.3.8 0 1.5.5 2 1.1l2.9-3.2-.2-.2-.7.8c-1.1-1-1.7-1.3-3-1.5V5l8 14h.6V5c1.5-.1 2.9-1.3 2.9-3zm7.3 13.1L57.9 17l-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM76.7 8l-.7.5-1.9-1.6-2.2 2 .9.9v7.5l-2.4-1.5V9.6l.8-.5-2.3-2.2-2.2 2 .9.9V17l-.3.2-2.1-1.5v-6c0-1.4-.7-1.8-1.5-2.3-.7-.5-1.1-.8-1.1-1.5 0-.6.6-.9.9-1.1v-.2c-.8 0-2.9.8-2.9 2.7 0 1 .5 1.4 1 1.9s1 .9 1 1.8v5.8l-1.1.8.2.2 1-.8 2.3 2 2.5-1.7 2.8 1.7 5.3-3.1V9.2l1.3-1-.2-.2zm18.6-5.5l-1 .9-2.2-2-3.3 2.4V1.6h-.3l.1 16.2c-.3 0-1.2-.2-1.9-.4l-.2-13.5c0-1-.7-2.4-2.5-2.4s-3 1.4-3 2.8h.3c.1-.6.4-1.1 1-1.1s1.1.4 1.1 1.7v3.9c-1.8.1-2.9 1.1-2.9 2.4 0 .8.4 2 1.6 2V13c-.4-.2-.5-.5-.5-.7 0-.6.5-.8 1.3-.8h.4v6.2c-1.5.5-2.1 1.6-2.1 2.8 0 1.7 1.3 2.9 3.3 2.9 1.4 0 2.6-.2 3.8-.5 1-.2 2.3-.5 2.9-.5.8 0 1.1.4 1.1.9 0 .7-.3 1-.7 1.1v.2c1.6-.3 2.6-1.3 2.6-2.8 0-1.5-1.5-2.4-3.1-2.4-.8 0-2.5.3-3.7.5-1.4.3-2.8.5-3.2.5-.7 0-1.5-.3-1.5-1.3 0-.8.7-1.5 2.4-1.5.9 0 2 .1 3.1.4 1.2.3 2.3.6 3.3.6 1.5 0 2.8-.5 2.8-2.6V3.7l1.2-1-.2-.2zm-4.1 6.1c-.3.3-.7.6-1.2.6s-1-.3-1.2-.6V4.2l1-.7 1.4 1.3v3.8zm0 3c-.2-.2-.7-.5-1.2-.5s-1 .3-1.2.5V9c.2.2.7.5 1.2.5s1-.3 1.2-.5v2.6zm0 4.7c0 .8-.5 1.6-1.6 1.6h-.8V12c.2-.2.7-.5 1.2-.5s.9.3 1.2.5v4.3zm13.7-7.1l-3.2-2.3-4.9 2.8v6.5l-1 .8.1.2.8-.6 3.2 2.4 5-3V9.2zm-5.4 6.3V8.3l2.5 1.8v7.1l-2.5-1.7zm14.9-8.4h-.2c-.3.2-.6.4-.9.4-.4 0-.9-.2-1.1-.5h-.2l-1.7 1.9-1.7-1.9-3 2 .1.2.8-.5 1 1.1v6.3l-1.3 1 .2.2.6-.5 2.4 2 3.1-2.1-.1-.2-.9.5-1.2-1V9c.5.5 1.1 1 1.8 1 1.4.1 2.2-1.3 2.3-2.9zm12 9.6L123 19l-4.6-7 3.3-5.1h.2c.4.4 1 .8 1.7.8s1.2-.4 1.5-.8h.2c-.1 2-1.5 3.2-2.5 3.2s-1.5-.5-2.1-.8l-.3.5 5 7.4 1-.6v.1zm-11-.5l-1.3 1 .2.2.6-.5 2.2 2 3-2-.2-.2-.8.5-1-1V.8h-.1l-3.6 2.4v.2c.4.2 1 .3 1 1.5v11.3zM143 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8-1.3-.4-2.5-.8-3.5-.8-2 0-3.4 1.5-3.4 3.2 0 1.5 1.1 2 1.5 2.2l.1-.2c-.3-.2-.6-.4-.6-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8V9l-1.5 1.3v.1l1.5 1.3V16c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2c.5-1.3 1.6-2.2 2.6-2.9l-.1-.2c-3 .8-5.7 3.5-5.7 6.9 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1L140 8.8v-3c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7.1-1.5.3-2.1l2.1-.9-.1 6.2zm12.2-12h-.1l-2 1.7v.1l1.7 1.9h.2l2-1.7v-.1l-1.8-1.9zm3 14.8l-.8.5-1-1V9.3l1-.7-.2-.2-.7.6-1.8-2.1-2.9 2 .2.3.7-.5.9 1.1v6.5l-1.3 1 .1.2.7-.5 2.2 2 3-2-.1-.3zm16.7-.1l-.7.5-1.1-1V9.3l1-.8-.2-.2-.8.7-2.3-2.1-3 2.1-2.3-2.1L154 9l-1.8-2.1-2.9 2 .1.3.7-.5 1 1.1v6.5l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.9-.6 1.5 1.4v6l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.8-.5 1.6 1.4v6l-.7.7 2.3 2.1 3.1-2.1v-.3zm8.7-1.5l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.8l3.5 2.5 4.5-3.6-.1-.3zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zm14.1-.9l-1.9-1.5c1.3-1.1 1.8-2.6 1.8-3.6v-.6h-.2c-.2.5-.6 1-1.4 1-.8 0-1.3-.4-1.8-1L176 9.3v3.6l1.7 1.3c-1.7 1.5-2 2.5-2 3.3 0 1 .5 1.7 1.3 2l.1-.2c-.2-.2-.4-.3-.4-.8 0-.3.4-.8 1.2-.8 1 0 1.6.7 1.9 1l4.3-2.6v-3.6h-.1zm-1.1-3c-.7 1.2-2.2 2.4-3.1 3l-1.1-.9V8.1c.4 1 1.5 1.8 2.6 1.8.7 0 1.1-.1 1.6-.4zm-1.7 8c-.5-1.1-1.7-1.9-2.9-1.9-.3 0-1.1 0-1.9.5.5-.8 1.8-2.2 3.5-3.2l1.2 1 .1 3.6z" />
              </svg>
            </Link>
          </div>

          {/* Right Column: Live Rotating Financial Market Ticker */}
          <div className="flex-1 flex justify-end items-center">
            <div
              className={`flex items-center transition-opacity duration-300 ${
                fadeAnim ? "opacity-100" : "opacity-0"
              }`}
            >
              <span
                style={{
                  fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "14px",
                  letterSpacing: "0.1px",
                  color: "#121212",
                }}
                className="mr-2"
              >
                {activeMarket.symbol}
              </span>
              <span
                style={{
                  fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "14px",
                  letterSpacing: "0.1px",
                  color: isNegative ? "#C02424" : "#0E7D38",
                }}
                className="inline-flex items-center gap-0.5 whitespace-nowrap"
              >
                {activeMarket.change > 0
                  ? `+${activeMarket.change}`
                  : activeMarket.change}
                %
                <span className="text-[13px] leading-none ml-0.5">
                  {isNegative ? "↓" : "↑"}
                </span>
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Sentinel element to detect when category navbar reaches top */}
      <div ref={sentinelRef} className="w-full h-[1px] -mt-[1px]" aria-hidden="true" />

      {/* In-flow spacer when category navbar is fixed so page content does not jump */}
      {isSticky && <div className="w-full h-[50px]" aria-hidden="true" />}

      {/* ============================================================ */}
      {/* ROW 3: CATEGORY NAVIGATION (Sticky when scrolled past)       */}
      {/* ============================================================ */}
      <div
        className={`w-full bg-white transition-shadow duration-150 ${
          isSticky
            ? "fixed top-0 left-0 z-40 border-b border-[#e2e2e2] shadow-[0_1px_4px_rgba(0,0,0,0.06)] py-1.5"
            : "relative py-1"
        }`}
      >
        <div
          className="w-full mx-auto"
          style={{
            paddingLeft: "3.5cm",
            paddingRight: "3.5cm",
          }}
        >
          <nav
            aria-label="Category Navigation"
            className="w-full overflow-x-auto no-scrollbar scrollbar-none py-1"
          >
            <ul className="flex items-center justify-between min-w-max md:min-w-0 w-full">
              {t.categories.map((category, idx) => {
                const englishCategory = ENGLISH_CATEGORIES[idx] || category;
                const categorySlug = CATEGORY_SLUGS[englishCategory] || `/section/${englishCategory.toLowerCase()}`;
                const isCurrentPage = pathname === categorySlug || (pathname === "/us" && englishCategory === "U.S.");
                const isCurrentActive = activeCategory === englishCategory || isCurrentPage;

                return (
                  <li
                    key={category}
                    className="shrink-0"
                    onMouseEnter={() => handleCategoryMouseEnter(englishCategory)}
                    onMouseLeave={handleCategoryMouseLeave}
                  >
                    <div className="flex items-center group py-1.5 whitespace-nowrap">
                      <Link
                        href={categorySlug}
                        onClick={() => {
                          setActiveCategory(null);
                          setIsPinned(false);
                        }}
                        className="flex items-center hover:text-neutral-500 transition-colors"
                      >
                        <span
                          style={{
                            fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                            fontSize: "14px",
                            fontWeight: isCurrentPage ? 700 : 500,
                            lineHeight: "14px",
                            letterSpacing: "0.1px",
                            color: "#121212",
                            textDecoration: "none",
                            borderBottom: isCurrentPage
                              ? "2px solid #121212"
                              : isCurrentActive
                              ? "2px solid #121212"
                              : "2px solid transparent",
                            paddingBottom: "2px",
                          }}
                          className="no-underline"
                        >
                          {category}
                        </span>
                      </Link>

                      {/* Dropdown Chevron Toggle Button */}
                      <button
                        type="button"
                        onClick={(e) => handleCategoryClick(englishCategory, e)}
                        aria-label={`Toggle ${category} menu`}
                        className="p-1 hover:text-neutral-900 transition-transform ml-0.5 shrink-0 cursor-pointer bg-transparent border-0"
                      >
                        <svg
                          className={`w-2.5 h-2.5 text-neutral-600 transition-transform ${
                            activeCategory === englishCategory ? "rotate-180 text-neutral-900" : ""
                          }`}
                          viewBox="0 0 10 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* MEGAMENU DROPDOWN */}
        {activeCategory && MEGAMENU_DATA[activeCategory] && (
          <NavbarMegamenu
            category={activeCategory}
            onMouseEnter={handleMegamenuMouseEnter}
            onMouseLeave={handleMegamenuMouseLeave}
          />
        )}
      </div>

      {/* ============================================================ */}
      {/* ROW 4: ICONIC NYT DOUBLE RULE DIVIDER                        */}
      {/* Both lines rendered identically with crisp pixel perfection   */}
      {/* ============================================================ */}
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        <div className="w-full pt-1 pb-3" aria-hidden="true">
          <svg
            className="w-full block"
            style={{ height: "4px" }}
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            shapeRendering="crispEdges"
          >
            {/* Top identical 1px black rule */}
            <line
              x1="0"
              y1="0.5"
              x2="1000"
              y2="0.5"
              stroke="#000000"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            {/* Bottom identical 1px black rule */}
            <line
              x1="0"
              y1="3.5"
              x2="1000"
              y2="3.5"
              stroke="#000000"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

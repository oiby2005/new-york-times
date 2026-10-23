"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MEGAMENU_DATA } from "../sections/megamenuData";
import { MegamenuBadge } from "../sections/NavbarMegamenu";

interface CategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DrawerCategoryItem {
  name: string;
  slug: string;
  hasSubmenu: boolean;
  isHome?: boolean;
}

const DRAWER_CATEGORIES: DrawerCategoryItem[] = [
  { name: "Home", slug: "/", hasSubmenu: false, isHome: true },
  { name: "U.S.", slug: "/section/us", hasSubmenu: true },
  { name: "World", slug: "/section/world", hasSubmenu: true },
  { name: "Business", slug: "/section/business", hasSubmenu: true },
  { name: "Technology", slug: "/section/technology", hasSubmenu: true },
  { name: "Science", slug: "/section/science", hasSubmenu: true },
  { name: "Sports", slug: "/section/sports", hasSubmenu: true },
  { name: "Arts & Culture", slug: "/section/arts", hasSubmenu: true },
  { name: "Lifestyle", slug: "/section/lifestyle", hasSubmenu: true },
  { name: "Opinion", slug: "/section/opinion", hasSubmenu: true },
  { name: "Video", slug: "/video", hasSubmenu: true },
  { name: "More", slug: "/section/more", hasSubmenu: true },
];

export default function CategoryDrawer({ isOpen, onClose }: CategoryDrawerProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset hovered category when closed
  useEffect(() => {
    if (!isOpen) {
      setHoveredCategory(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentMegamenu = hoveredCategory ? MEGAMENU_DATA[hoveredCategory] : null;
  const isExpanded = !!currentMegamenu;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Category Navigation Drawer"
      className="fixed inset-0 z-[100] flex animate-in fade-in duration-150"
    >
      {/* Dark semi-transparent backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Drawer Container: Expands from narrow (Image 1) to wide (Image 2) on hover */}
      <div
        className={`relative z-10 bg-white h-full shadow-2xl flex transition-all duration-200 ease-out select-none ${
          isExpanded
            ? "w-full max-w-[1260px] overflow-hidden"
            : "w-[240px] sm:w-[260px] overflow-y-auto"
        }`}
      >
        {/* ========================================================= */}
        {/* LEFT COLUMN: Categories Navigation List (Image 1)         */}
        {/* ========================================================= */}
        <div
          className={`w-[240px] sm:w-[260px] shrink-0 h-full flex flex-col pt-4 pb-8 px-5 bg-white overflow-y-auto ${
            isExpanded ? "border-r border-[#e2e2e2]" : ""
          }`}
        >
          {/* Close button X */}
          <div className="flex items-center justify-start mb-4">
            <button
              type="button"
              aria-label="Close navigation"
              onClick={onClose}
              className="p-1 -ml-1 text-[#121212] hover:opacity-60 transition-opacity cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* List of categories */}
          <nav aria-label="Main Website Categories" className="flex flex-col gap-1">
            {DRAWER_CATEGORIES.map((cat) => {
              const isHovered = hoveredCategory === cat.name;

              if (cat.isHome) {
                return (
                  <div
                    key={cat.name}
                    onMouseEnter={() => setHoveredCategory(null)}
                    className="flex items-center justify-between py-2 group cursor-pointer"
                  >
                    <Link
                      href="/"
                      onClick={onClose}
                      style={{
                        fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                      }}
                      className="text-[15px] font-bold text-[#121212] group-hover:underline"
                    >
                      {cat.name}
                    </Link>
                    {/* Iconic Gothic 'T' Masthead Symbol */}
                    <Link href="/" onClick={onClose} className="p-0.5" aria-label="NYT Logo">
                      <svg
                        viewBox="0 0 16 16"
                        className="w-4 h-4 text-[#121212]"
                        fill="currentColor"
                      >
                        <path d="M13.8 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8C6.2 1.4 5 1 4 1 2 1 .6 2.5.6 4.2c0 1.5 1.1 2 1.5 2.2l.1-.2c-.2-.2-.5-.4-.5-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1L9 10.2v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2C3.6 6.9 4.7 6 5.8 5.4l-.1-.3c-3 .8-5.7 3.6-5.7 7 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1l-1.6-1.3V5.8c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7 0-1.5.2-2.1l2.1-.9v6.2z" />
                      </svg>
                    </Link>
                  </div>
                );
              }

              return (
                <div
                  key={cat.name}
                  onMouseEnter={() => setHoveredCategory(cat.name)}
                  className="flex items-center justify-between py-2 group cursor-pointer"
                >
                  <Link
                    href={cat.slug}
                    onClick={onClose}
                    style={{
                      fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    }}
                    className={`text-[15px] transition-all select-none ${
                      isHovered
                        ? "font-bold text-[#121212] underline decoration-2 underline-offset-4"
                        : "font-semibold text-[#121212] group-hover:text-neutral-600"
                    }`}
                  >
                    {cat.name}
                  </Link>

                  {/* Right Chevron > */}
                  <svg
                    className={`w-3.5 h-3.5 transition-colors ${
                      isHovered ? "text-[#121212]" : "text-neutral-400 group-hover:text-neutral-700"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              );
            })}
          </nav>
        </div>

        {/* ========================================================= */}
        {/* RIGHT PANE: Megamenu Content when Hovered (Image 2)       */}
        {/* ========================================================= */}
        {isExpanded && currentMegamenu && (
          <div
            className="flex-1 h-full overflow-y-auto pt-7 pb-12 px-8 lg:px-12 bg-white flex flex-col animate-in fade-in duration-150"
            onMouseEnter={() => {
              /* Keep open while hovering content */
            }}
          >
            {/* Category Title Heading */}
            <h2
              style={{
                fontFamily: "nyt-cheltenham, georgia, 'times new roman', serif",
              }}
              className="text-[34px] font-bold text-[#121212] tracking-tight mb-7"
            >
              {hoveredCategory}
            </h2>

            {/* 4 Multi-column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
              {/* Column 1: SECTIONS (Subcategories Col 1 & 2) */}
              <div>
                <h3
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                  className="text-[#666666] uppercase mb-4"
                >
                  SECTIONS
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <div className="flex flex-col space-y-2">
                    {currentMegamenu.sectionsCol1.map((item) => (
                      <Link
                        key={item}
                        href={`${DRAWER_CATEGORIES.find((c) => c.name === hoveredCategory)?.slug || ""}`}
                        onClick={onClose}
                        style={{
                          fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                          fontSize: "13px",
                        }}
                        className="text-[#121212] hover:underline"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2">
                    {currentMegamenu.sectionsCol2.map((item) => (
                      <Link
                        key={item}
                        href={`${DRAWER_CATEGORIES.find((c) => c.name === hoveredCategory)?.slug || ""}`}
                        onClick={onClose}
                        style={{
                          fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                          fontSize: "13px",
                        }}
                        className="text-[#121212] hover:underline"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: TOP STORIES */}
              <div>
                <h3
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                  className="text-[#666666] uppercase mb-4"
                >
                  TOP STORIES
                </h3>
                <div className="flex flex-col space-y-2">
                  {currentMegamenu.topStories.map((story) => (
                    <Link
                      key={story}
                      href={`${DRAWER_CATEGORIES.find((c) => c.name === hoveredCategory)?.slug || ""}`}
                      onClick={onClose}
                      style={{
                        fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                        fontSize: "13px",
                      }}
                      className="text-[#121212] hover:underline"
                    >
                      {story}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 3: NEWSLETTERS */}
              <div>
                <h3
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                  className="text-[#666666] uppercase mb-4"
                >
                  NEWSLETTERS
                </h3>
                <div className="flex flex-col gap-3.5">
                  {currentMegamenu.newsletters.items.map((nl) => (
                    <div key={nl.title} className="flex items-start gap-2.5 group cursor-pointer">
                      <MegamenuBadge title={nl.title} />
                      <div className="flex flex-col min-w-0">
                        <span
                          style={{
                            fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                            fontSize: "13px",
                            fontWeight: 700,
                          }}
                          className="text-[#121212] group-hover:underline"
                        >
                          {nl.title}
                        </span>
                        <span
                          style={{
                            fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                            fontSize: "11.5px",
                          }}
                          className="text-[#666666] mt-0.5 leading-snug"
                        >
                          {nl.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                  <Link
                    href="#"
                    onClick={onClose}
                    style={{
                      fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                    className="text-[#666666] hover:underline mt-1 block"
                  >
                    {currentMegamenu.newsletters.seeAllText}
                  </Link>
                </div>
              </div>

              {/* Column 4: PODCASTS */}
              <div>
                <h3
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                  className="text-[#666666] uppercase mb-4"
                >
                  PODCASTS
                </h3>
                <div className="flex flex-col gap-3.5">
                  {currentMegamenu.podcasts.items.map((pod) => (
                    <div key={pod.title} className="flex items-start gap-2.5 group cursor-pointer">
                      <MegamenuBadge title={pod.title} />
                      <div className="flex flex-col min-w-0">
                        <span
                          style={{
                            fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                            fontSize: "13px",
                            fontWeight: 700,
                          }}
                          className="text-[#121212] group-hover:underline"
                        >
                          {pod.title}
                        </span>
                        <span
                          style={{
                            fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                            fontSize: "11.5px",
                          }}
                          className="text-[#666666] mt-0.5 leading-snug"
                        >
                          {pod.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                  <Link
                    href="#"
                    onClick={onClose}
                    style={{
                      fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                    className="text-[#666666] hover:underline mt-1 block"
                  >
                    {currentMegamenu.podcasts.seeAllText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

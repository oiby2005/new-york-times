"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CategoryPageAd3 from "./CategoryPageAd3";
import { slugifyTitle } from "../article/articleData";

export interface FeedArticleItem {
  id: string;
  date: string;
  tag?: string;
  title: string;
  summary: string;
  byline: string;
  image: string;
  isVideo?: boolean;
}

const DEFAULT_FEED_ARTICLES: FeedArticleItem[] = [
  {
    id: "1",
    date: "Oct. 19, 2026",
    tag: "TIMES | VIDEO",
    title: "Trump Campaigns for Republicans as Turmoil Mounts in Washington",
    summary:
      "Our White House correspondent Tyler Pager traveled with President Trump as he campaigned across the country ahead of the midterms. As the president touted his record, political drama mounted in Washington.",
    byline: "By TYLER PAGER, NOUR IDRISS and PIERRE KATTAR",
    image: "/images/tyler_pager_trump.jpg",
    isVideo: true,
  },
  {
    id: "2",
    date: "Oct. 18, 2026",
    title: "Larry David Mocks the D.S.A. Some Are Not Amused.",
    summary:
      "The comedian satirized the Democratic Socialists of America, its platform and its opposition to Israel in an essay that some did not LOL at.",
    byline: "By LISA LERER and EVAN GORELICK",
    image: "/images/larry_david_dsa.jpg",
    isVideo: false,
  },
  {
    id: "3",
    date: "Oct. 18, 2026",
    title: "Talarico Kicks Off Campaign Tour of Texas as Senate Election Looms",
    summary:
      "The Democratic candidate invoked a rallying cry from the TV show “Friday Night Lights” as he began his final campaign push before the Nov. 3 election.",
    byline: "By JESUS JIMÉNEZ",
    image: "/images/talarico_texas_campaign.jpg",
    isVideo: false,
  },
  {
    id: "4",
    date: "Oct. 18, 2026",
    tag: "POLITICS",
    title: "Federal Appeals Court Reinstates Key Provisions of Arizona Voting Measure",
    summary:
      "The ruling clears the way for state election officials to enforce new documentary proof of citizenship rules ahead of the upcoming election.",
    byline: "By ADAM LIPTAK and CHARLIE SAVAGE",
    image: "/images/pa_election_map.png",
    isVideo: false,
  },
  {
    id: "5",
    date: "Oct. 17, 2026",
    tag: "ENVIRONMENT",
    title: "Western States Reach Tentative Accord on Colorado River Water Reductions",
    summary:
      "After months of contentious negotiations, seven states agreed to a framework to safeguard Lake Mead and Lake Powell from dropping to dead pool levels.",
    byline: "By SOMINI SENGUPTA and RAYMOND ZHONG",
    image: "/images/amazon_rainforest_brazil.jpg",
    isVideo: false,
  },
  {
    id: "6",
    date: "Oct. 17, 2026",
    tag: "NATIONAL",
    title: "Pentagon Orders Review of Drone Defenses After Close Calls Near Border Facilities",
    summary:
      "Defense officials noted an uptick in unauthorized unmanned aircraft systems operating in protected military air corridors along the southern perimeter.",
    byline: "By ERIC SCHMITT and HELENE COOPER",
    image: "/images/peltier_protest.jpg",
    isVideo: false,
  },
  {
    id: "7",
    date: "Oct. 17, 2026",
    tag: "TECHNOLOGY",
    title: "Inside the Scramble to Build Next-Generation AI Supercomputing Clusters in Rural America",
    summary:
      "Utility providers and hyperscalers are racing to construct massive multi-gigawatt substations in agricultural heartlands to power predictive models.",
    byline: "By KADE METZ and KAREN WEISE",
    image: "/images/earth_space_night.jpg",
    isVideo: false,
  },
  {
    id: "8",
    date: "Oct. 16, 2026",
    tag: "HOUSING & ECONOMY",
    title: "New York City Unveils Ambitious Plan to Convert Commercial Towers into Affordable Housing",
    summary:
      "The initiative aims to streamline zoning regulations for midtown office buildings that have remained largely vacant since the shift to remote work.",
    byline: "By MIHIR ZAVERI and STEFANOS CHEN",
    image: "/images/cottage_meatballs.jpg",
    isVideo: false,
  },
  {
    id: "9",
    date: "Oct. 16, 2026",
    tag: "ENERGY",
    title: "Clean Energy Transition Confronts Grid Bottlenecks Across the Sunbelt",
    summary:
      "Hundreds of solar and battery storage projects remain trapped in interconnection queues, slowing the planned retirement of aging fossil fuel plants.",
    byline: "By CORAL DAVENPORT and BRAD PLUMER",
    image: "/images/france_protests.jpg",
    isVideo: false,
  },
  {
    id: "10",
    date: "Oct. 16, 2026",
    tag: "REGULATION",
    title: "Department of Justice Widens Investigation Into Tech Monopolies and Cloud Pricing",
    summary:
      "Antitrust investigators are examining whether software licensing structures unfairly lock enterprise clients into proprietary infrastructure.",
    byline: "By DAVID McCABE and CECILIA KANG",
    image: "/images/cereal_crunch.jpg",
    isVideo: false,
  },
];

interface CategoryMainFeedProps {
  articles?: FeedArticleItem[];
}

export default function CategoryMainFeed({
  articles = DEFAULT_FEED_ARTICLES,
}: CategoryMainFeedProps) {
  const [activeTab, setActiveTab] = useState<"Latest" | "Search">("Latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [sortBy, setSortBy] = useState<"relevance" | "newest">("relevance");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortOpen(false);
      }
    }
    if (isSortOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortOpen]);

  // Filter articles if search query exists
  const filteredArticles = articles.filter((art) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      art.title.toLowerCase().includes(query) ||
      art.summary.toLowerCase().includes(query) ||
      art.byline.toLowerCase().includes(query) ||
      (art.tag && art.tag.toLowerCase().includes(query))
    );
  });

  const parseArticleDate = (dateStr: string): number => {
    const cleaned = dateStr.replace(/\./g, "");
    const parsed = Date.parse(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  };

  const displayedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === "newest") {
      const timeA = parseArticleDate(a.date);
      const timeB = parseArticleDate(b.date);
      if (timeA !== timeB) return timeB - timeA;
      return Number(b.id) - Number(a.id);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const scoreA =
        (a.title.toLowerCase().includes(q) ? 10 : 0) +
        (a.summary.toLowerCase().includes(q) ? 5 : 0) +
        (a.byline.toLowerCase().includes(q) ? 2 : 0);
      const scoreB =
        (b.title.toLowerCase().includes(q) ? 10 : 0) +
        (b.summary.toLowerCase().includes(q) ? 5 : 0) +
        (b.byline.toLowerCase().includes(q) ? 2 : 0);
      if (scoreA !== scoreB) return scoreB - scoreA;
    }
    return 0;
  });

  // Calculate sliding 3-number window for pagination
  const getVisiblePages = (current: number, total: number) => {
    if (total <= 3) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= 2) {
      return [1, 2, 3];
    }
    if (current >= total - 1) {
      return [total - 2, total - 1, total];
    }
    return [current - 1, current, current + 1];
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Smooth scroll back to feed top
      const feedElement = document.getElementById("category-feed-top");
      if (feedElement) {
        feedElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="category-feed-top" aria-label="Latest Articles Feed" className="w-full">
      {/* ================= Tabs & Search Bar (Image 2) ================= */}
      <div className="w-full relative mb-4">
        {/* Ash line across content width attached to the latest box */}
        <div className="w-full border-t border-[#e2e2e2] absolute bottom-0 left-0 z-0" />

        {/* Tab & Search controls */}
        <div className="flex items-end relative z-10 pl-8 sm:pl-12">
          {/* Latest tab (white background, ash border as it is, small space from left edge) */}
          <button
            type="button"
            onClick={() => setActiveTab("Latest")}
            style={{
              fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
            }}
            className={`px-5 py-1.5 font-bold text-[13px] border-t border-l border-r rounded-t-[3px] select-none cursor-pointer -mb-[1px] transition-colors ${
              activeTab === "Latest"
                ? "text-[#121212] bg-white border-[#d2d2d2] border-b-transparent z-10"
                : "text-neutral-500 bg-[#f9f9f9] border-[#e2e2e2] hover:text-black"
            }`}
          >
            Latest
          </button>

          {/* Search tab button / input */}
          <div
            onClick={() => {
              if (activeTab !== "Search") {
                setActiveTab("Search");
                setTimeout(() => searchInputRef.current?.focus(), 50);
              }
            }}
            style={{
              fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[13px] border-t border-l border-r rounded-t-[3px] -mb-[1px] cursor-pointer transition-colors ${
              activeTab === "Search"
                ? "text-[#121212] bg-white border-[#d2d2d2] border-b-transparent z-10 font-bold"
                : "text-neutral-500 bg-[#f9f9f9] border-[#e2e2e2] hover:text-black"
            }`}
          >
            <button
              type="button"
              aria-label="Search"
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab("Search");
                setTimeout(() => searchInputRef.current?.focus(), 50);
              }}
              className="p-0.5 text-neutral-600 hover:text-black cursor-pointer flex items-center justify-center focus:outline-none"
            >
              <svg
                className="w-3.5 h-3.5 text-[#666666]"
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
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onFocus={() => {
                if (activeTab !== "Search") setActiveTab("Search");
              }}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeTab !== "Search") setActiveTab("Search");
              }}
              className="px-1 py-0 border-b border-transparent focus:border-black text-[#121212] placeholder-[#666666] outline-none transition-all w-24 sm:w-36 bg-transparent text-[13px] font-normal"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchQuery("");
                  searchInputRef.current?.focus();
                }}
                className="text-neutral-400 hover:text-neutral-700 text-xs px-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ================= 2-Column Layout: Left Feed (Expanded) + Right Sidebar (Reduced) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0 relative items-stretch">
        {/* Left Column: 10 Articles Feed (Increased Main Content) */}
        <div className="lg:pr-8 flex flex-col">
          {/* ================= Search Results & Sort Dropdown ================= */}
          {activeTab === "Search" && (
            <div className="pt-1 pb-3 flex items-center justify-between">
              <div className="flex items-center text-[13px] sm:text-[14px] text-[#121212] font-nyt-franklin">
                <span>
                  {displayedArticles.length} result{displayedArticles.length === 1 ? "" : "s"} sorted by{" "}
                </span>
                <div className="relative inline-block ml-1" ref={sortDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsSortOpen((prev) => !prev)}
                    className="font-bold inline-flex items-center gap-1 hover:text-neutral-700 cursor-pointer focus:outline-none"
                    aria-expanded={isSortOpen}
                    aria-haspopup="listbox"
                  >
                    <span>{sortBy}</span>
                    <svg
                      className={`w-2.5 h-2.5 text-[#121212] transition-transform duration-150 ${
                        isSortOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Dropdown Small Card (Relevance and Newest) */}
                  {isSortOpen && (
                    <div
                      role="listbox"
                      className="absolute left-0 top-full mt-1.5 w-36 bg-white border border-[#d2d2d2] rounded-[3px] shadow-[0_3px_12px_rgba(0,0,0,0.12)] z-30 py-1 text-[13px] font-nyt-franklin"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSortBy("relevance");
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#f2f2f2] cursor-pointer transition-colors ${
                          sortBy === "relevance" ? "font-bold text-[#121212]" : "font-normal text-[#333]"
                        }`}
                      >
                        <span>Relevance</span>
                        {sortBy === "relevance" && (
                          <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                          </svg>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSortBy("newest");
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#f2f2f2] cursor-pointer transition-colors ${
                          sortBy === "newest" ? "font-bold text-[#121212]" : "font-normal text-[#333]"
                        }`}
                      >
                        <span>Newest</span>
                        {sortBy === "newest" && (
                          <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col divide-y divide-[#e2e2e2]">
          {displayedArticles.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 font-nyt-sans text-sm">
              No articles match your search.
            </div>
          ) : (
            displayedArticles.map((article) => (
              <article
                key={article.id}
                className="py-5 flex items-start gap-4 sm:gap-6 group"
              >
                {/* Left Date (Requirement 06: Red colour) */}
                <div
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    fontSize: "11px",
                    color: "#cc0000",
                    fontWeight: 600,
                  }}
                  className="w-[85px] sm:w-[95px] shrink-0 pt-0.5 whitespace-nowrap text-[#cc0000]"
                >
                  {article.date}
                </div>

                {/* Middle Content: Tag, Headline, Summary, Byline */}
                <div className="flex-1 flex flex-col min-w-0 pr-2">
                  {article.tag && (
                    <span
                      style={{
                        fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.6px",
                        color: "#121212",
                      }}
                      className="uppercase tracking-widest mb-1"
                    >
                      {article.tag}
                    </span>
                  )}

                  <h3
                    style={{
                      fontFamily: "nyt-serif, georgia, serif",
                      fontWeight: 700,
                      color: "#121212",
                    }}
                    className="text-[18.5px] sm:text-[20px] leading-[1.25] group-hover:text-[#555] transition-colors cursor-pointer"
                  >
                    <Link
                      href={`/article/${slugifyTitle(article.title)}`}
                      className="hover:text-neutral-600 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p
                    style={{
                      fontFamily: "nyt-serif, georgia, serif",
                      fontSize: "13.5px",
                      lineHeight: "19px",
                      color: "#444444",
                    }}
                    className="mt-1.5"
                  >
                    {article.summary}
                  </p>

                  <p
                    style={{
                      fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                      fontSize: "10.5px",
                      color: "#727272",
                      letterSpacing: "0.3px",
                    }}
                    className="uppercase mt-2"
                  >
                    {article.byline}
                  </p>
                </div>

                {/* Right Thumbnail Image */}
                <div className="relative w-[130px] sm:w-[165px] aspect-[16/10] bg-neutral-100 shrink-0 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 130px, 165px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />

                  {/* Video Play Icon overlay if video story */}
                  {article.isVideo && (
                    <div
                      aria-label="Video Story"
                      className="absolute bottom-1.5 left-1.5 w-6 h-6 bg-black/85 border border-white/40 rounded-xs flex items-center justify-center text-white"
                    >
                      <svg
                        className="w-3 h-3 fill-white ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  )}
                </div>
              </article>
            ))
          )}
          </div>

          {/* ================= Pagination System (Image 5) ================= */}
          {/* Centered at end of 10th article - ash divider removed, space to bottom footer reduced */}
          <div className="pt-5 pb-1 w-full flex flex-col items-center justify-center">
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
                {visiblePages.map((pageNum) => {
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

        {/* Right Column: Category Page Ad 3 (Reduced Right Sidebar 300px) */}
        {/* Sticky until the last edge of pagination button in main content */}
        <div className="hidden lg:block w-[300px] shrink-0 lg:pl-6 relative">
          <div className="sticky top-[80px] w-full flex justify-center lg:justify-start">
            <CategoryPageAd3 />
          </div>
        </div>
      </div>
    </section>
  );
}

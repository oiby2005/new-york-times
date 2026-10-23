"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainFooter from "../../components/sections/MainFooter";

interface WebsiteCategoryFeature {
  id: string;
  name: string;
  description: string;
  headline: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  bgColor: string;
}

const WEBSITE_CATEGORIES: WebsiteCategoryFeature[] = [
  {
    id: "us",
    name: "U.S.",
    description:
      "Engage with expert reporting on national politics, policy debates, Supreme Court rulings, and breaking American news.",
    headline: "High Stakes in Washington as Key Policy Battles Unfold",
    badge: "U.S. NEWS",
    imageSrc: "/images/us_capitol_hill_lead.jpg",
    imageAlt: "U.S. Capitol in Washington D.C.",
    caption: "The U.S. Desk | In-depth reporting across all fifty states",
    bgColor: "#f8c924",
  },
  {
    id: "world",
    name: "World",
    description:
      "Follow comprehensive international coverage, global diplomacy, conflict updates, and cultural shifts from correspondents worldwide.",
    headline: "Global Perspectives: Behind the Alliances Shaping Modern Geopolitics",
    badge: "WORLD DISPATCH",
    imageSrc: "/images/international_movies.jpg",
    imageAlt: "International news report scene",
    caption: "The World Desk | Dispatches from more than 150 nations",
    bgColor: "#e8b923",
  },
  {
    id: "business",
    name: "Business",
    description:
      "Navigate financial markets, economic policy, corporate strategy, technological disruption, and personal finance.",
    headline: "Markets and Energy: Inside the Economic Forces Transforming Industry",
    badge: "FINANCE & MARKETS",
    imageSrc: "/images/gas_station_california.jpg",
    imageAlt: "Business and energy in America",
    caption: "The Business Section | Trusted insights on the global economy",
    bgColor: "#f3c11d",
  },
  {
    id: "technology",
    name: "Technology",
    description:
      "Explore cutting-edge advancements in artificial intelligence, Silicon Valley innovations, cybersecurity, and digital lifestyle.",
    headline: "The Next Frontier: How Generative Intelligence is Rewriting Computing",
    badge: "TECH & AI",
    imageSrc: "/images/earth_space_night.jpg",
    imageAlt: "Technology and global network",
    caption: "Tech Desk | Groundbreaking analysis of digital transformation",
    bgColor: "#f6c400",
  },
  {
    id: "science",
    name: "Science",
    description:
      "Discover space exploration milestones, environmental breakthroughs, climate reporting, and medical innovations from top researchers.",
    headline: "Pioneering Research: Climate Science and the New Astronomical Era",
    badge: "SCIENCE & CLIMATE",
    imageSrc: "/images/thumb_mathematician.jpg",
    imageAlt: "Scientific researcher analyzing equations",
    caption: "Science & Environment | Rigorous research decoded for readers",
    bgColor: "#eec020",
  },
  {
    id: "sports",
    name: "Sports",
    description:
      "Enjoy comprehensive athletic reporting, player profiles, game analysis, and coverage of major global leagues.",
    headline: "Championship Pursuit: Tactics and Tenacity on the World Stage",
    badge: "SPORTS DESK",
    imageSrc: "/images/mancity_ipswich.jpg",
    imageAlt: "Athletes competing in Premier League football",
    caption: "The Sports Desk | Fast-paced scores, stories, and player profiles",
    bgColor: "#f5c518",
  },
  {
    id: "arts",
    name: "Arts & Culture",
    description:
      "Delve into authoritative reviews of books, theater, cinema, fine art, architecture, and contemporary creative movements.",
    headline: "Curtain Call: Groundbreaking Productions Captivating Modern Stages",
    badge: "CRITIC'S PICK",
    imageSrc: "/images/macbeth_theater.jpg",
    imageAlt: "Dramatic theatrical stage production",
    caption: "Arts & Culture | Essential commentary on the creative world",
    bgColor: "#f8c924",
  },
  {
    id: "opinion",
    name: "Opinion",
    description:
      "Consider diverse viewpoints, award-winning columnists, and insightful guest essays addressing today's most vital issues.",
    headline: "Perspectives That Challenge and Clarify the Global Conversation",
    badge: "EDITORIAL ESSAY",
    imageSrc: "/images/shelly_portrait.jpg",
    imageAlt: "Opinion columnist portrait",
    caption: "The Opinion Desk | Columnists and guest voices on ideas that matter",
    bgColor: "#eab71b",
  },
];

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedTier, setSelectedTier] = useState<"individual" | "family">("individual");
  const [activeCategoryId, setActiveCategoryId] = useState<string>("us");

  const activeCategory =
    WEBSITE_CATEGORIES.find((cat) => cat.id === activeCategoryId) || WEBSITE_CATEGORIES[0];

  return (
    <div className="min-h-screen bg-white text-[#121212] flex flex-col selection:bg-neutral-200">
      {/* ================================================================ */}
      {/* SECTION 1: HERO OFFER SECTION AS IN IMAGE 1                     */}
      {/* Split layout: White left with plans | Dark right with phone app */}
      {/* ================================================================ */}
      <section className="w-full border-b border-[#e2e2e2]">
        <div className="flex flex-col lg:flex-row w-full min-h-[660px]">
          {/* ----------------- LEFT COLUMN (WHITE) ----------------- */}
          <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-10 lg:py-14">
            <div className="w-full max-w-[460px] mx-auto lg:mr-auto lg:ml-0 flex flex-col">
              {/* NYT Gothic Masthead Logo */}
              <div className="mb-6 sm:mb-8">
                <Link
                  href="/"
                  aria-label="The New York Times Home"
                  className="inline-block hover:opacity-85 transition-opacity"
                >
                  <svg
                    viewBox="0 0 185 25"
                    fill="currentColor"
                    className="h-[28px] sm:h-[32px] w-auto text-black"
                  >
                    <path d="M13.8 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8C6.2 1.4 5 1 4 1 2 1 .6 2.5.6 4.2c0 1.5 1.1 2 1.5 2.2l.1-.2c-.2-.2-.5-.4-.5-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1L9 10.2v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2C3.6 6.9 4.7 6 5.8 5.4l-.1-.3c-3 .8-5.7 3.6-5.7 7 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1l-1.6-1.3V5.8c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7 0-1.5.2-2.1l2.1-.9v6.2zm10.6 2.3l-1.3 1 .2.2.6-.5 2.2 2 3-2-.1-.2-.8.5-1-1V9.4l.8-.6 1.7 1.4v6.1c0 3.8-.8 4.4-2.5 5v.3c2.8.1 5.4-.8 5.4-5.7V9.3l.9-.7-.2-.2-.8.6-2.5-2.1L18.5 9V.8h-.2l-3.5 2.4v.2c.4.2 1 .4 1 1.5l-.1 11.3zM34 15.1L31.5 17 29 15v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM53.1 2c0-.3-.1-.6-.2-.9h-.2c-.3.8-.7 1.2-1.7 1.2-.9 0-1.5-.5-1.9-.9l-2.9 3.3.2.2 1-.9c.6.5 1.1.9 2.5 1v8.3L44 3.2c-.5-.8-1.2-1.9-2.6-1.9-1.6 0-3 1.4-2.8 3.6h.3c.1-.6.4-1.3 1.1-1.3.5 0 1 .5 1.3 1v3.3c-1.8 0-3 .8-3 2.3 0 .8.4 2 1.6 2.3v-.2c-.2-.2-.3-.4-.3-.7 0-.5.4-.9 1.1-.9h.5v4.2c-2.1 0-3.8 1.2-3.8 3.2 0 1.9 1.6 2.8 3.4 2.7v-.2c-1.1-.1-1.6-.6-1.6-1.3 0-.9.6-1.3 1.4-1.3.8 0 1.5.5 2 1.1l2.9-3.2-.2-.2-.7.8c-1.1-1-1.7-1.3-3-1.5V5l8 14h.6V5c1.5-.1 2.9-1.3 2.9-3zm7.3 13.1L57.9 17l-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM76.7 8l-.7.5-1.9-1.6-2.2 2 .9.9v7.5l-2.4-1.5V9.6l.8-.5-2.3-2.2-2.2 2 .9.9V17l-.3.2-2.1-1.5v-6c0-1.4-.7-1.8-1.5-2.3-.7-.5-1.1-.8-1.1-1.5 0-.6.6-.9.9-1.1v-.2c-.8 0-2.9.8-2.9 2.7 0 1 .5 1.4 1 1.9s1 .9 1 1.8v5.8l-1.1.8.2.2 1-.8 2.3 2 2.5-1.7 2.8 1.7 5.3-3.1V9.2l1.3-1-.2-.2zm18.6-5.5l-1 .9-2.2-2-3.3 2.4V1.6h-.3l.1 16.2c-.3 0-1.2-.2-1.9-.4l-.2-13.5c0-1-.7-2.4-2.5-2.4s-3 1.4-3 2.8h.3c.1-.6.4-1.1 1-1.1s1.1.4 1.1 1.7v3.9c-1.8.1-2.9 1.1-2.9 2.4 0 .8.4 2 1.6 2V13c-.4-.2-.5-.5-.5-.7 0-.6.5-.8 1.3-.8h.4v6.2c-1.5.5-2.1 1.6-2.1 2.8 0 1.7 1.3 2.9 3.3 2.9 1.4 0 2.6-.2 3.8-.5 1-.2 2.3-.5 2.9-.5.8 0 1.1.4 1.1.9 0 .7-.3 1-.7 1.1v.2c1.6-.3 2.6-1.3 2.6-2.8 0-1.5-1.5-2.4-3.1-2.4-.8 0-2.5.3-3.7.5-1.4.3-2.8.5-3.2.5-.7 0-1.5-.3-1.5-1.3 0-.8.7-1.5 2.4-1.5.9 0 2 .1 3.1.4 1.2.3 2.3.6 3.3.6 1.5 0 2.8-.5 2.8-2.6V3.7l1.2-1-.2-.2zm-4.1 6.1c-.3.3-.7.6-1.2.6s-1-.3-1.2-.6V4.2l1-.7 1.4 1.3v3.8zm0 3c-.2-.2-.7-.5-1.2-.5s-1 .3-1.2.5V9c.2.2.7.5 1.2.5s1-.3 1.2-.5v2.6zm0 4.7c0 .8-.5 1.6-1.6 1.6h-.8V12c.2-.2.7-.5 1.2-.5s.9.3 1.2.5v4.3zm13.7-7.1l-3.2-2.3-4.9 2.8v6.5l-1 .8.1.2.8-.6 3.2 2.4 5-3V9.2zm-5.4 6.3V8.3l2.5 1.8v7.1l-2.5-1.7zm14.9-8.4h-.2c-.3.2-.6.4-.9.4-.4 0-.9-.2-1.1-.5h-.2l-1.7 1.9-1.7-1.9-3 2 .1.2.8-.5 1 1.1v6.3l-1.3 1 .2.2.6-.5 2.4 2 3.1-2.1-.1-.2-.9.5-1.2-1V9c.5.5 1.1 1 1.8 1 1.4.1 2.2-1.3 2.3-2.9zm12 9.6L123 19l-4.6-7 3.3-5.1h.2c.4.4 1 .8 1.7.8s1.2-.4 1.5-.8h.2c-.1 2-1.5 3.2-2.5 3.2s-1.5-.5-2.1-.8l-.3.5 5 7.4 1-.6v.1zm-11-.5l-1.3 1 .2.2.6-.5 2.2 2 3-2-.2-.2-.8.5-1-1V.8h-.1l-3.6 2.4v.2c.4.2 1 .3 1 1.5v11.3zM143 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8-1.3-.4-2.5-.8-3.5-.8-2 0-3.4 1.5-3.4 3.2 0 1.5 1.1 2 1.5 2.2l.1-.2c-.3-.2-.6-.4-.6-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8V9l-1.5 1.3v.1l1.5 1.3V16c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2c.5-1.3 1.6-2.2 2.6-2.9l-.1-.2c-3 .8-5.7 3.5-5.7 6.9 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1L140 8.8v-3c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7.1-1.5.3-2.1l2.1-.9-.1 6.2zm12.2-12h-.1l-2 1.7v.1l1.7 1.9h.2l2-1.7v-.1l-1.8-1.9zm3 14.8l-.8.5-1-1V9.3l1-.7-.2-.2-.7.6-1.8-2.1-2.9 2 .2.3.7-.5.9 1.1v6.5l-1.3 1 .1.2.7-.5 2.2 2 3-2-.1-.3zm16.7-.1l-.7.5-1.1-1V9.3l1-.8-.2-.2-.8.7-2.3-2.1-3 2.1-2.3-2.1L154 9l-1.8-2.1-2.9 2 .1.3.7-.5 1 1.1v6.5l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.9-.6 1.5 1.4v6l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.8-.5 1.6 1.4v6l-.7.7 2.3 2.1 3.1-2.1v-.3zm8.7-1.5l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.8l3.5 2.5 4.5-3.6-.1-.3zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zm14.1-.9l-1.9-1.5c1.3-1.1 1.8-2.6 1.8-3.6v-.6h-.2c-.2.5-.6 1-1.4 1-.8 0-1.3-.4-1.8-1L176 9.3v3.6l1.7 1.3c-1.7 1.5-2 2.5-2 3.3 0 1 .5 1.7 1.3 2l.1-.2c-.2-.2-.4-.3-.4-.8 0-.3.4-.8 1.2-.8 1 0 1.6.7 1.9 1l4.3-2.6v-3.6h-.1zm-1.1-3c-.7 1.2-2.2 2.4-3.1 3l-1.1-.9V8.1c.4 1 1.5 1.8 2.6 1.8.7 0 1.1-.1 1.6-.4zm-1.7 8c-.5-1.1-1.7-1.9-2.9-1.9-.3 0-1.1 0-1.9.5.5-.8 1.8-2.2 3.5-3.2l1.2 1 .1 3.6z" />
                  </svg>
                </Link>
              </div>

              {/* Exact Image 1 Headline: 2-line Serif Heading */}
              <h1
                style={{
                  fontFamily: "nyt-cheltenham, 'Newsreader', Georgia, serif",
                }}
                className="text-[36px] sm:text-[44px] text-[#121212] leading-[1.08] tracking-tight mb-8"
              >
                Discover all that&apos;s new.
                <br />
                With all of The Times.
              </h1>

              {/* Monthly vs. Yearly Tabs */}
              <div className="flex border-b border-[#e2e2e2] w-full max-w-[420px] mb-7">
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                  }}
                  className={`w-1/2 py-2.5 text-[14px] font-bold text-center transition-all cursor-pointer ${
                    billingCycle === "monthly"
                      ? "border-b-[2.5px] border-black text-[#121212] -mb-[1px]"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("yearly")}
                  style={{
                    fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                  }}
                  className={`w-1/2 py-2.5 text-[14px] font-bold text-center transition-all cursor-pointer ${
                    billingCycle === "yearly"
                      ? "border-b-[2.5px] border-black text-[#121212] -mb-[1px]"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  Yearly
                </button>
              </div>

              {/* Plan Options */}
              <div className="w-full max-w-[420px] flex flex-col">
                {/* TIER 1: ALL ACCESS (Individual) */}
                <label
                  onClick={() => setSelectedTier("individual")}
                  className="flex items-start gap-3.5 cursor-pointer group pb-5 border-b border-[#ececec]"
                >
                  {/* Custom NYT Radio */}
                  <div className="pt-0.5">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        selectedTier === "individual"
                          ? "border-black"
                          : "border-neutral-400 group-hover:border-black"
                      }`}
                    >
                      {selectedTier === "individual" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-black" />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div
                      style={{
                        fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                      }}
                      className="text-[17px] sm:text-[18px] font-bold text-[#121212] leading-tight"
                    >
                      All Access:{" "}
                      <span className="font-normal text-neutral-400 line-through mr-1">
                        {billingCycle === "yearly" ? "$110" : "$4"}
                      </span>
                      <span className="font-bold text-[#121212]">
                        {billingCycle === "yearly" ? "$10/year" : "$0.25/week"}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                      }}
                      className="text-[13px] text-neutral-600 mt-1 leading-normal"
                    >
                      {billingCycle === "yearly"
                        ? "Billed once for your first year, then $110 thereafter."
                        : "Billed as $1 every four weeks for your first six months, then $16 thereafter."}
                    </p>
                  </div>
                </label>

                {/* TIER 2: ALL ACCESS FAMILY */}
                <div className="pt-4 pb-2">
                  {/* BEST VALUE pill badge */}
                  <div className="pl-8 mb-1.5">
                    <span
                      style={{
                        fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                      }}
                      className="inline-block border border-black rounded-full px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-black"
                    >
                      BEST VALUE
                    </span>
                  </div>

                  <label
                    onClick={() => setSelectedTier("family")}
                    className="flex items-start gap-3.5 cursor-pointer group"
                  >
                    {/* Custom NYT Radio */}
                    <div className="pt-0.5">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          selectedTier === "family"
                            ? "border-black"
                            : "border-neutral-400 group-hover:border-black"
                        }`}
                      >
                        {selectedTier === "family" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-black" />
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div
                        style={{
                          fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                        }}
                        className="text-[17px] sm:text-[18px] font-bold text-[#121212] leading-tight"
                      >
                        All Access Family:{" "}
                        <span className="font-normal text-neutral-400 line-through mr-1">
                          {billingCycle === "yearly" ? "$140" : "$5"}
                        </span>
                        <span className="font-bold text-[#121212]">
                          {billingCycle === "yearly" ? "$20/year" : "$0.50/week"}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                        }}
                        className="text-[13px] text-neutral-600 mt-1 leading-normal"
                      >
                        {billingCycle === "yearly"
                          ? "Billed once for your first year, then $140 thereafter."
                          : "Billed as $2 every four weeks for your first six months, then $20 thereafter."}
                      </p>

                      {/* Access for four + Learn more */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center gap-1.5 bg-[#f5f5f5] px-2.5 py-1 rounded-[3px]">
                          <svg
                            className="w-3.5 h-3.5 text-[#121212]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span
                            style={{
                              fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                            }}
                            className="text-[11.5px] font-bold text-[#121212]"
                          >
                            Access for four
                          </span>
                        </div>

                        <button
                          type="button"
                          style={{
                            fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                          }}
                          className="text-[12px] font-bold text-[#121212] underline underline-offset-2 hover:opacity-75 cursor-pointer flex items-center gap-0.5"
                        >
                          Learn more &gt;
                        </button>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Checkout CTA Buttons */}
                <div className="flex flex-col gap-3 mt-6">
                  <button
                    type="button"
                    style={{
                      fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                    }}
                    className="w-full bg-[#121212] text-white py-3.5 rounded-[4px] font-bold text-[14px] hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
                  >
                    Continue to checkout
                  </button>

                  {/* PayPal Button */}
                  <button
                    type="button"
                    className="w-full bg-white border border-[#d2d2d2] hover:bg-neutral-50 transition-colors py-2.5 rounded-[4px] flex items-center justify-center cursor-pointer shadow-2xs"
                  >
                    <span className="font-sans italic font-extrabold text-[18px] tracking-tight">
                      <span className="text-[#003087]">Pay</span>
                      <span className="text-[#0079C1]">Pal</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------- RIGHT COLUMN (DARK BACKGROUND) ----------------- */}
          <div className="w-full lg:w-1/2 bg-[#121212] flex items-center justify-center p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            {/* Ambient subtle backdrop radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/25 via-transparent to-transparent pointer-events-none" />

            {/* Smartphone Mockup matching Image 1 */}
            <div className="w-[310px] sm:w-[340px] bg-white rounded-[36px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] p-3 border-[6px] border-[#252525] relative flex flex-col">
              {/* Phone Speaker Notch */}
              <div className="w-16 h-3 bg-neutral-900 rounded-full mx-auto mb-2.5 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-800 mr-2" />
                <div className="w-7 h-1 bg-neutral-700 rounded-full" />
              </div>

              {/* Top Navigation Bar inside Phone */}
              <div className="flex items-center gap-2.5 px-1 py-1 border-b border-neutral-200 text-[10px] text-neutral-500 overflow-x-hidden select-none whitespace-nowrap justify-between">
                <span className="text-neutral-400">Cooking</span>
                <span className="text-neutral-400">The Athletic</span>
                <span className="font-bold text-black border-b-[2px] border-[#5a3a22] pb-0.5">
                  Today
                </span>
                <span className="text-neutral-400">Lifestyle</span>
                <span className="text-neutral-400">Great Reads</span>
                <span className="text-neutral-400">Opinion</span>
              </div>

              {/* Two Articles Side-by-Side matching Image 1 */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 pb-1">
                {/* Story 1: Who Don't Want Bees */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h2
                      style={{
                        fontFamily: "nyt-cheltenham, 'Newsreader', Georgia, serif",
                      }}
                      className="text-[13.5px] font-bold text-neutral-900 leading-tight"
                    >
                      Who Don&apos;t Want Bees
                    </h2>
                    <p className="text-[10px] text-neutral-500 line-clamp-2 mt-1 leading-tight">
                      world, conservationists try at the widespread belief r.
                    </p>
                  </div>
                  <div className="w-full h-[100px] rounded-[3px] overflow-hidden mt-2 bg-neutral-100 relative">
                    <img
                      src="/images/bees_conservation.jpg"
                      alt="Bees conservationist with hives and solar panels"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Story 2: Lake Como */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h2
                      style={{
                        fontFamily: "nyt-cheltenham, 'Newsreader', Georgia, serif",
                      }}
                      className="text-[13.5px] font-bold text-neutral-900 leading-tight"
                    >
                      Not Hollywood R... How to Enjoy Lake Cheap.
                    </h2>
                    <p className="text-[10px] text-neutral-500 line-clamp-2 mt-1 leading-tight">
                      Stars like George Clooney fr of northern Italy, but you mi affordable it can
                      be. Here&apos;s a
                    </p>
                  </div>
                  <div className="w-full h-[100px] rounded-[3px] overflow-hidden mt-2 bg-neutral-100 relative">
                    <img
                      src="/images/lake_como_travel.jpg"
                      alt="Lake Como scenic view with balustrade and lake"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Caption inside Phone */}
              <div className="text-[9px] text-neutral-400 pt-2 px-1 select-none truncate">
                on &amp; Johnson building in Ljubljana.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: WEBSITE MAIN CATEGORIES SHOWCASE (IMAGE 2)            */}
      {/* Replaces News, Games, Cooking with OUR WEBSITE MAIN CATEGORIES   */}
      {/* ================================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 border-b border-[#e2e2e2]">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Main Section Headline */}
          <h2
            style={{
              fontFamily: "nyt-cheltenham, 'Newsreader', Georgia, serif",
            }}
            className="text-[32px] sm:text-[40px] text-[#121212] text-center mb-14 tracking-tight font-normal"
          >
            Subscribers enjoy more with New York Times All Access.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Yellow background card with interactive Category phone mockup (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                style={{ backgroundColor: activeCategory.bgColor }}
                className="w-full max-w-[420px] rounded-[18px] p-6 sm:p-8 flex items-center justify-center relative shadow-sm transition-colors duration-300 min-h-[460px]"
              >
                {/* Smartphone Mockup matching Image 2 */}
                <div className="w-[260px] sm:w-[275px] bg-white rounded-[32px] shadow-2xl p-4 flex flex-col items-center border-[5px] border-neutral-100 relative">
                  {/* Speaker notch */}
                  <div className="w-16 h-1 bg-neutral-200 rounded-full mb-3" />

                  {/* Header in phone */}
                  <div
                    style={{
                      fontFamily: "nyt-cheltenham, 'Newsreader', Georgia, serif",
                    }}
                    className="text-[12px] font-bold text-black mb-2"
                  >
                    The New York Times
                  </div>

                  {/* Category Navigation Pills inside Phone */}
                  <div className="flex items-center gap-1.5 mb-3.5 overflow-x-hidden no-scrollbar w-full justify-center">
                    {WEBSITE_CATEGORIES.slice(0, 5).map((cat) => (
                      <span
                        key={cat.id}
                        className={`text-[9px] px-2 py-0.5 rounded-full transition-colors whitespace-nowrap ${
                          cat.id === activeCategory.id
                            ? "bg-black text-white font-bold"
                            : "text-neutral-500 font-medium"
                        }`}
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>

                  {/* Active Category Editorial Card Preview */}
                  <div className="w-full flex flex-col border border-neutral-200 rounded-[8px] overflow-hidden bg-neutral-50 shadow-2xs">
                    <div className="w-full h-[130px] bg-neutral-200 relative overflow-hidden">
                      <img
                        src={activeCategory.imageSrc}
                        alt={activeCategory.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-black/85 text-white text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-[2px]">
                        {activeCategory.badge}
                      </span>
                    </div>

                    <div className="p-3 bg-white">
                      <h3
                        style={{
                          fontFamily: "nyt-cheltenham, 'Newsreader', Georgia, serif",
                        }}
                        className="text-[12.5px] font-bold text-neutral-900 leading-snug line-clamp-2"
                      >
                        {activeCategory.headline}
                      </h3>
                      <p className="text-[10px] text-neutral-500 mt-1 line-clamp-2 leading-tight">
                        {activeCategory.description}
                      </p>
                    </div>
                  </div>

                  {/* Phone bottom share circle */}
                  <div className="w-full flex justify-between items-center pt-3 px-1">
                    <div className="text-[8.5px] font-bold text-neutral-400 uppercase tracking-wider">
                      Live Reporting
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#f97316] flex items-center justify-center text-white">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption below phone card */}
              <div
                style={{
                  fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                }}
                className="w-full max-w-[420px] text-left text-neutral-500 text-[11px] mt-2.5 pl-2 select-none"
              >
                <span className="font-bold text-[#121212] mr-1">{activeCategory.name}</span>
                {activeCategory.caption}
              </div>
            </div>

            {/* Right: Our Website Main Categories List (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4 lg:pl-6">
              {WEBSITE_CATEGORIES.map((category) => {
                const isActive = category.id === activeCategory.id;
                return (
                  <div
                    key={category.id}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`cursor-pointer transition-all duration-150 group rounded-r-[4px] py-1.5 ${
                      isActive
                        ? "border-l-[3.5px] border-black pl-4 bg-neutral-50/80"
                        : "pl-4 hover:border-l-[3.5px] hover:border-neutral-300"
                    }`}
                  >
                    <h3
                      style={{
                        fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                      }}
                      className={`text-[20px] font-bold mb-1 transition-colors ${
                        isActive
                          ? "text-[#121212]"
                          : "text-[#121212] group-hover:text-black"
                      }`}
                    >
                      {category.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
                      }}
                      className="text-[13.5px] text-neutral-600 leading-snug"
                    >
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 3: INTERESTED IN PRINT? SECTION                          */}
      {/* ================================================================ */}
      <section className="w-full bg-white border-t border-[#e2e2e2] pt-14 pb-18">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <span
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
              }}
              className="text-[11px] font-bold text-[#121212] uppercase tracking-[0.8px] mb-3 block"
            >
              INTERESTED IN PRINT?
            </span>

            <h2
              style={{
                fontFamily: "nyt-cheltenham, 'Newsreader', Georgia, serif",
              }}
              className="text-[28px] sm:text-[34px] font-normal text-[#121212] tracking-tight mb-3"
            >
              Get the New York Times International paper delivered, plus the full digital
              experience.
            </h2>

            <p
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
              }}
              className="text-[13.5px] text-neutral-600 mb-6"
            >
              Subscribers receive free All Access Digital with a Home Delivery subscription. You
              can cancel anytime.
            </p>

            <button
              type="button"
              style={{
                fontFamily: "nyt-franklin, helvetica, arial, sans-serif",
              }}
              className="bg-black text-white px-7 py-3 rounded-[3px] hover:bg-neutral-800 transition-colors uppercase font-bold text-[11px] tracking-[0.6px] cursor-pointer"
            >
              FIND OFFERS
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4: USUAL FOOTER BELOW                                    */}
      {/* ================================================================ */}
      <MainFooter />
    </div>
  );
}

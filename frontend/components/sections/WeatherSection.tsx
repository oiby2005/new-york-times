"use client";

import React from "react";
import Link from "next/link";

/**
 * WeatherSection Component (Section 8)
 * Replicates Image 1 from user prompt:
 * - Column 1: Current Weather in Kandy, Sri Lanka (23°, dual cloud icon, full forecast link, Tomorrow.io source)
 * - Column 2: 3-Day Forecast with rain/thunder icons and min/max temperatures
 * - Column 3: Heat Index with yellow badges ("Extreme caution") and US cities
 *
 * Includes top border divider with standard 20px padding (pt-5) and ash vertical dividers.
 */
export default function WeatherSection() {
  return (
    <section className="w-full pt-5 pb-6">
      {/* Top Divider */}
      <div className="w-full border-t border-[#121212] mb-5" />

      {/* 3 Columns Layout with Ash Vertical Dividers */}
      <div className="grid grid-cols-3 divide-x divide-[#e2e2e2] w-full">
        {/* ============================================================ */}
        {/* COLUMN 1: CURRENT WEATHER                                     */}
        {/* ============================================================ */}
        <div className="pr-5 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-nyt-franklin font-bold text-[14px] text-[#121212]">
                Weather
              </span>
              <Link
                href="#"
                className="font-nyt-franklin text-[13px] text-[#555555] hover:text-[#121212] flex items-center group transition-colors"
              >
                Kandy, Sri Lanka{" "}
                <span className="ml-1 text-[13px] text-[#727272] group-hover:text-[#121212]">
                  ›
                </span>
              </Link>
            </div>

            {/* Temperature & Overcast Cloud Icon */}
            <div className="flex items-center justify-between mt-1 mb-2">
              <span className="font-nyt-franklin font-bold text-[44px] leading-none text-[#121212] tracking-tight">
                23°
              </span>

              {/* Overcast Cloud SVG */}
              <div className="relative w-14 h-10 flex items-center justify-center">
                <svg className="w-12 h-9" viewBox="0 0 54 36" fill="none">
                  {/* Back cloud */}
                  <path
                    d="M38 11c0-4.4-3.6-8-8-8-3.4 0-6.3 2.1-7.4 5.2C21.8 7.1 20.9 7 20 7c-4.4 0-8 3.6-8 8 0 .4 0 .9.1 1.3C9.4 17.1 7 19.8 7 23c0 3.9 3.1 7 7 7h24c3.9 0 7-3.1 7-7 0-3.6-2.7-6.5-6.2-6.9.1-.7.2-1.4.2-2.1z"
                    fill="#b3aba0"
                  />
                  {/* Front cloud */}
                  <path
                    d="M33 16c0-3.9-3.1-7-7-7-2.8 0-5.2 1.6-6.3 4C18.9 13 17.9 13 17 13c-3.9 0-7 3.1-7 7 0 .4 0 .8.1 1.2C7.8 22 5.7 24.2 5.7 27c0 3.3 2.7 6 6 6h21.3c3.3 0 6-2.7 6-6 0-3.1-2.4-5.6-5.4-5.9.3-.7.4-1.4.4-2.1z"
                    fill="#9c9488"
                  />
                </svg>
              </div>
            </div>

            {/* Conditions text */}
            <p className="font-nyt-franklin text-[13px] leading-[1.3] text-[#121212] mt-2">
              Low clouds and light breeze.{" "}
              <Link href="#" className="font-bold hover:underline">
                Full forecast ›
              </Link>
            </p>
          </div>

          {/* Source Attribution */}
          <div className="mt-4 pt-1">
            <span className="font-nyt-franklin text-[10.5px] text-[#727272]">
              Source: Tomorrow.io
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* COLUMN 2: 3-DAY FORECAST                                     */}
        {/* ============================================================ */}
        <div className="px-5 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-nyt-franklin font-bold text-[14px] text-[#121212]">
                Forecast
              </span>
              <Link
                href="#"
                className="font-nyt-franklin text-[13px] text-[#555555] hover:text-[#121212] flex items-center group transition-colors"
              >
                Kandy, Sri Lanka{" "}
                <span className="ml-1 text-[13px] text-[#727272] group-hover:text-[#121212]">
                  ›
                </span>
              </Link>
            </div>

            {/* Forecast List */}
            <div className="flex flex-col mt-1">
              {/* Saturday */}
              <div className="flex items-center justify-between py-1.5 border-b border-[#e2e2e2]">
                <span className="font-nyt-franklin text-[13px] text-[#121212] w-20">
                  Saturday
                </span>
                <div className="flex items-center justify-center w-8">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 13h9a3 3 0 001.2-5.7A4.002 4.002 0 0010 6a4 4 0 00-3.8 2.8A3 3 0 007 13z"
                      fill="#64748b"
                    />
                    <path
                      d="M11 12l-1.5 3h2.5L10.5 18"
                      stroke="#eab308"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 15l-.8 2M14 15l-.8 2M16.5 15l-.8 2"
                      stroke="#38bdf8"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-nyt-franklin font-bold text-[13px] text-[#121212]">
                    29°
                  </span>
                  <span className="font-nyt-franklin text-[13px] text-[#555555]">
                    21°
                  </span>
                </div>
              </div>

              {/* Sunday */}
              <div className="flex items-center justify-between py-1.5 border-b border-[#e2e2e2]">
                <span className="font-nyt-franklin text-[13px] text-[#121212] w-20">
                  Sunday
                </span>
                <div className="flex items-center justify-center w-8">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 13h9a3 3 0 001.2-5.7A4.002 4.002 0 0010 6a4 4 0 00-3.8 2.8A3 3 0 007 13z"
                      fill="#64748b"
                    />
                    <path
                      d="M11 12l-1.5 3h2.5L10.5 18"
                      stroke="#eab308"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 15l-.8 2M14 15l-.8 2M16.5 15l-.8 2"
                      stroke="#38bdf8"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-nyt-franklin font-bold text-[13px] text-[#121212]">
                    28°
                  </span>
                  <span className="font-nyt-franklin text-[13px] text-[#555555]">
                    21°
                  </span>
                </div>
              </div>

              {/* Monday */}
              <div className="flex items-center justify-between py-1.5">
                <span className="font-nyt-franklin text-[13px] text-[#121212] w-20">
                  Monday
                </span>
                <div className="flex items-center justify-center w-8">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 13h9a3 3 0 001.2-5.7A4.002 4.002 0 0010 6a4 4 0 00-3.8 2.8A3 3 0 007 13z"
                      fill="#64748b"
                    />
                    <path
                      d="M11 12l-1.5 3h2.5L10.5 18"
                      stroke="#eab308"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 15l-.8 2M14 15l-.8 2M16.5 15l-.8 2"
                      stroke="#38bdf8"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-nyt-franklin font-bold text-[13px] text-[#121212]">
                    28°
                  </span>
                  <span className="font-nyt-franklin text-[13px] text-[#555555]">
                    21°
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Source Attribution */}
          <div className="mt-4 pt-1">
            <span className="font-nyt-franklin text-[10.5px] text-[#727272]">
              Source: Tomorrow.io
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* COLUMN 3: HEAT INDEX                                         */}
        {/* ============================================================ */}
        <div className="pl-5 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-baseline gap-1 mb-2">
              <Link
                href="#"
                className="font-nyt-franklin font-bold text-[14px] text-[#121212] hover:underline flex items-center group"
              >
                Heat Index{" "}
                <span className="ml-1 text-[13px] text-[#727272] group-hover:text-[#121212]">
                  ›
                </span>
              </Link>
            </div>

            {/* Heat Index Rows */}
            <div className="flex flex-col mt-1 space-y-1">
              {/* Miami */}
              <div className="flex items-center justify-between text-[13px] py-0.5">
                <span className="bg-[#fcedc2] text-[#8d5b12] text-[11px] font-medium px-2 py-0.5 whitespace-nowrap">
                  Extreme caution
                </span>
                <span className="font-nyt-franklin text-[#121212] ml-2 flex-1 truncate">
                  Miami
                </span>
                <span className="font-nyt-franklin text-[#121212] font-normal">
                  38°
                </span>
              </div>

              {/* Hialeah, Fla. */}
              <div className="flex items-center justify-between text-[13px] py-0.5">
                <span className="bg-[#fcedc2] text-[#8d5b12] text-[11px] font-medium px-2 py-0.5 whitespace-nowrap">
                  Extreme caution
                </span>
                <span className="font-nyt-franklin text-[#121212] ml-2 flex-1 truncate">
                  Hialeah, Fla.
                </span>
                <span className="font-nyt-franklin text-[#121212] font-normal">
                  37°
                </span>
              </div>

              {/* Long Beach, Ca... */}
              <div className="flex items-center justify-between text-[13px] py-0.5">
                <span className="bg-[#fcedc2] text-[#8d5b12] text-[11px] font-medium px-2 py-0.5 whitespace-nowrap">
                  Extreme caution
                </span>
                <span className="font-nyt-franklin text-[#121212] ml-2 flex-1 truncate">
                  Long Beach, Ca...
                </span>
                <span className="font-nyt-franklin text-[#121212] font-normal">
                  32°
                </span>
              </div>
            </div>
          </div>

          {/* Source Attribution */}
          <div className="mt-4 pt-1">
            <span className="font-nyt-franklin text-[10.5px] text-[#727272]">
              Source: NOAA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

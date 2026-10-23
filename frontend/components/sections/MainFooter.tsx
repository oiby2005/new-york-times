"use client";

import React from "react";
import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className="w-full bg-white text-[#121212] pt-8 pb-12 select-text">
      <div
        className="w-full mx-auto"
        style={{
          paddingLeft: "3.5cm",
          paddingRight: "3.5cm",
        }}
      >
        {/* Identical Double Black Divider - both borders exact same thickness, does not extend 100% */}
        <div className="w-full border-t border-b border-[#121212] h-[4px] mb-6" aria-hidden="true" />

        {/* NYT Gothic Logo */}
        <div className="w-full mb-6">
          <Link href="/" aria-label="The New York Times" className="inline-block">
            <svg
              viewBox="0 0 185 25"
              fill="currentColor"
              className="h-[28px] md:h-[32px] w-auto text-[#121212] hover:opacity-80 transition-opacity"
            >
              <path d="M13.8 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8C6.2 1.4 5 1 4 1 2 1 .6 2.5.6 4.2c0 1.5 1.1 2 1.5 2.2l.1-.2c-.2-.2-.5-.4-.5-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1L9 10.2v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2C3.6 6.9 4.7 6 5.8 5.4l-.1-.3c-3 .8-5.7 3.6-5.7 7 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1l-1.6-1.3V5.8c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7 0-1.5.2-2.1l2.1-.9v6.2zm10.6 2.3l-1.3 1 .2.2.6-.5 2.2 2 3-2-.1-.2-.8.5-1-1V9.4l.8-.6 1.7 1.4v6.1c0 3.8-.8 4.4-2.5 5v.3c2.8.1 5.4-.8 5.4-5.7V9.3l.9-.7-.2-.2-.8.6-2.5-2.1L18.5 9V.8h-.2l-3.5 2.4v.2c.4.2 1 .4 1 1.5l-.1 11.3zM34 15.1L31.5 17 29 15v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM53.1 2c0-.3-.1-.6-.2-.9h-.2c-.3.8-.7 1.2-1.7 1.2-.9 0-1.5-.5-1.9-.9l-2.9 3.3.2.2 1-.9c.6.5 1.1.9 2.5 1v8.3L44 3.2c-.5-.8-1.2-1.9-2.6-1.9-1.6 0-3 1.4-2.8 3.6h.3c.1-.6.4-1.3 1.1-1.3.5 0 1 .5 1.3 1v3.3c-1.8 0-3 .8-3 2.3 0 .8.4 2 1.6 2.3v-.2c-.2-.2-.3-.4-.3-.7 0-.5.4-.9 1.1-.9h.5v4.2c-2.1 0-3.8 1.2-3.8 3.2 0 1.9 1.6 2.8 3.4 2.7v-.2c-1.1-.1-1.6-.6-1.6-1.3 0-.9.6-1.3 1.4-1.3.8 0 1.5.5 2 1.1l2.9-3.2-.2-.2-.7.8c-1.1-1-1.7-1.3-3-1.5V5l8 14h.6V5c1.5-.1 2.9-1.3 2.9-3zm7.3 13.1L57.9 17l-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6-.1-.4zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zM76.7 8l-.7.5-1.9-1.6-2.2 2 .9.9v7.5l-2.4-1.5V9.6l.8-.5-2.3-2.2-2.2 2 .9.9V17l-.3.2-2.1-1.5v-6c0-1.4-.7-1.8-1.5-2.3-.7-.5-1.1-.8-1.1-1.5 0-.6.6-.9.9-1.1v-.2c-.8 0-2.9.8-2.9 2.7 0 1 .5 1.4 1 1.9s1 .9 1 1.8v5.8l-1.1.8.2.2 1-.8 2.3 2 2.5-1.7 2.8 1.7 5.3-3.1V9.2l1.3-1-.2-.2zm18.6-5.5l-1 .9-2.2-2-3.3 2.4V1.6h-.3l.1 16.2c-.3 0-1.2-.2-1.9-.4l-.2-13.5c0-1-.7-2.4-2.5-2.4s-3 1.4-3 2.8h.3c.1-.6.4-1.1 1-1.1s1.1.4 1.1 1.7v3.9c-1.8.1-2.9 1.1-2.9 2.4 0 .8.4 2 1.6 2V13c-.4-.2-.5-.5-.5-.7 0-.6.5-.8 1.3-.8h.4v6.2c-1.5.5-2.1 1.6-2.1 2.8 0 1.7 1.3 2.9 3.3 2.9 1.4 0 2.6-.2 3.8-.5 1-.2 2.3-.5 2.9-.5.8 0 1.1.4 1.1.9 0 .7-.3 1-.7 1.1v.2c1.6-.3 2.6-1.3 2.6-2.8 0-1.5-1.5-2.4-3.1-2.4-.8 0-2.5.3-3.7.5-1.4.3-2.8.5-3.2.5-.7 0-1.5-.3-1.5-1.3 0-.8.7-1.5 2.4-1.5.9 0 2 .1 3.1.4 1.2.3 2.3.6 3.3.6 1.5 0 2.8-.5 2.8-2.6V3.7l1.2-1-.2-.2zm-4.1 6.1c-.3.3-.7.6-1.2.6s-1-.3-1.2-.6V4.2l1-.7 1.4 1.3v3.8zm0 3c-.2-.2-.7-.5-1.2-.5s-1 .3-1.2.5V9c.2.2.7.5 1.2.5s1-.3 1.2-.5v2.6zm0 4.7c0 .8-.5 1.6-1.6 1.6h-.8V12c.2-.2.7-.5 1.2-.5s.9.3 1.2.5v4.3zm13.7-7.1l-3.2-2.3-4.9 2.8v6.5l-1 .8.1.2.8-.6 3.2 2.4 5-3V9.2zm-5.4 6.3V8.3l2.5 1.8v7.1l-2.5-1.7zm14.9-8.4h-.2c-.3.2-.6.4-.9.4-.4 0-.9-.2-1.1-.5h-.2l-1.7 1.9-1.7-1.9-3 2 .1.2.8-.5 1 1.1v6.3l-1.3 1 .2.2.6-.5 2.4 2 3.1-2.1-.1-.2-.9.5-1.2-1V9c.5.5 1.1 1 1.8 1 1.4.1 2.2-1.3 2.3-2.9zm12 9.6L123 19l-4.6-7 3.3-5.1h.2c.4.4 1 .8 1.7.8s1.2-.4 1.5-.8h.2c-.1 2-1.5 3.2-2.5 3.2s-1.5-.5-2.1-.8l-.3.5 5 7.4 1-.6v.1zm-11-.5l-1.3 1 .2.2.6-.5 2.2 2 3-2-.2-.2-.8.5-1-1V.8h-.1l-3.6 2.4v.2c.4.2 1 .3 1 1.5v11.3zM143 2.9c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8-1.3-.4-2.5-.8-3.5-.8-2 0-3.4 1.5-3.4 3.2 0 1.5 1.1 2 1.5 2.2l.1-.2c-.3-.2-.6-.4-.6-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8V9l-1.5 1.3v.1l1.5 1.3V16c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V6l-5 2.2c.5-1.3 1.6-2.2 2.6-2.9l-.1-.2c-3 .8-5.7 3.5-5.7 6.9 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1L140 8.8v-3c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7.1-1.5.3-2.1l2.1-.9-.1 6.2zm12.2-12h-.1l-2 1.7v.1l1.7 1.9h.2l2-1.7v-.1l-1.8-1.9zm3 14.8l-.8.5-1-1V9.3l1-.7-.2-.2-.7.6-1.8-2.1-2.9 2 .2.3.7-.5.9 1.1v6.5l-1.3 1 .1.2.7-.5 2.2 2 3-2-.1-.3zm16.7-.1l-.7.5-1.1-1V9.3l1-.8-.2-.2-.8.7-2.3-2.1-3 2.1-2.3-2.1L154 9l-1.8-2.1-2.9 2 .1.3.7-.5 1 1.1v6.5l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.9-.6 1.5 1.4v6l-.8.8 2.3 1.9 2.2-2-.9-.9V9.3l.8-.5 1.6 1.4v6l-.7.7 2.3 2.1 3.1-2.1v-.3zm8.7-1.5l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.8l3.5 2.5 4.5-3.6-.1-.3zm-5-1.7V8.5l.2-.1 2.2 3.5-2.4 1.5zm14.1-.9l-1.9-1.5c1.3-1.1 1.8-2.6 1.8-3.6v-.6h-.2c-.2.5-.6 1-1.4 1-.8 0-1.3-.4-1.8-1L176 9.3v3.6l1.7 1.3c-1.7 1.5-2 2.5-2 3.3 0 1 .5 1.7 1.3 2l.1-.2c-.2-.2-.4-.3-.4-.8 0-.3.4-.8 1.2-.8 1 0 1.6.7 1.9 1l4.3-2.6v-3.6h-.1zm-1.1-3c-.7 1.2-2.2 2.4-3.1 3l-1.1-.9V8.1c.4 1 1.5 1.8 2.6 1.8.7 0 1.1-.1 1.6-.4zm-1.7 8c-.5-1.1-1.7-1.9-2.9-1.9-.3 0-1.1 0-1.9.5.5-.8 1.8-2.2 3.5-3.2l1.2 1 .1 3.6z" />
            </svg>
          </Link>
        </div>

        {/* 6-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 pt-2 pb-8 border-b border-[#e2e2e2]">
          {/* Column 1: NEWS */}
          <div className="flex flex-col">
            <h3 className="font-nyt-franklin font-bold text-[11.5px] uppercase tracking-wider text-[#121212] mb-3">
              NEWS
            </h3>
            <ul className="space-y-2 text-[12.5px] font-nyt-franklin text-[#333333]">
              <li><Link href="/" className="hover:underline">Home Page</Link></li>
              <li><Link href="/section/us" className="hover:underline">U.S.</Link></li>
              <li><Link href="/section/world" className="hover:underline">World</Link></li>
              <li><Link href="/section/business" className="hover:underline">Business</Link></li>
              <li><Link href="/section/technology" className="hover:underline">Technology</Link></li>
              <li><Link href="/section/science" className="hover:underline">Science</Link></li>
              <li><Link href="/section/sports" className="hover:underline">Sports</Link></li>
              <li><Link href="/video" className="hover:underline">Video</Link></li>
              <li><Link href="/section/more" className="hover:underline">More</Link></li>
            </ul>
          </div>

          {/* Column 2: ARTS */}
          <div className="flex flex-col">
            <h3 className="font-nyt-franklin font-bold text-[11.5px] uppercase tracking-wider text-[#121212] mb-3">
              ARTS
            </h3>
            <ul className="space-y-2 text-[12.5px] font-nyt-franklin text-[#333333]">
              <li><Link href="/section/movies" className="hover:underline">Movies</Link></li>
              <li><Link href="/section/music" className="hover:underline">Music</Link></li>
              <li><Link href="/section/books" className="hover:underline">Books</Link></li>
              <li><Link href="/section/television" className="hover:underline">Television</Link></li>
              <li><Link href="/section/theater" className="hover:underline">Theater</Link></li>
              <li><Link href="/section/art" className="hover:underline">Art</Link></li>
              <li><Link href="/section/entertainment" className="hover:underline">Entertainment</Link></li>
              <li><Link href="/section/celebrities" className="hover:underline">Celebrities</Link></li>
              <li><Link href="/section/culture" className="hover:underline">Culture</Link></li>
            </ul>
          </div>

          {/* Column 3: LIFESTYLE */}
          <div className="flex flex-col">
            <h3 className="font-nyt-franklin font-bold text-[11.5px] uppercase tracking-wider text-[#121212] mb-3">
              LIFESTYLE
            </h3>
            <ul className="space-y-2 text-[12.5px] font-nyt-franklin text-[#333333]">
              <li><Link href="/section/health-wellness" className="hover:underline">Health & Wellness</Link></li>
              <li><Link href="/section/food" className="hover:underline">Food</Link></li>
              <li><Link href="/section/travel" className="hover:underline">Travel</Link></li>
              <li><Link href="/section/fashion" className="hover:underline">Fashion</Link></li>
              <li><Link href="/section/beauty" className="hover:underline">Beauty</Link></li>
              <li><Link href="/section/relationships" className="hover:underline">Relationships</Link></li>
              <li><Link href="/section/home" className="hover:underline">Home</Link></li>
              <li><Link href="/section/luxury" className="hover:underline">Luxury</Link></li>
            </ul>
          </div>

          {/* Column 4: OPINION */}
          <div className="flex flex-col">
            <h3 className="font-nyt-franklin font-bold text-[11.5px] uppercase tracking-wider text-[#121212] mb-3">
              OPINION
            </h3>
            <ul className="space-y-2 text-[12.5px] font-nyt-franklin text-[#333333]">
              <li><Link href="/section/editorials" className="hover:underline">Editorials</Link></li>
              <li><Link href="/section/opinions" className="hover:underline">Opinions</Link></li>
              <li><Link href="/section/columns" className="hover:underline">Columns</Link></li>
              <li><Link href="/section/guest-opinions" className="hover:underline">Guest Opinions</Link></li>
              <li><Link href="/section/interviews" className="hover:underline">Interviews</Link></li>
            </ul>
          </div>

          {/* Column 5: MORE */}
          <div className="flex flex-col">
            <h3 className="font-nyt-franklin font-bold text-[11.5px] uppercase tracking-wider text-[#121212] mb-3">
              MORE
            </h3>
            <ul className="space-y-2 text-[12.5px] font-nyt-franklin text-[#333333]">
              <li><Link href="#" className="hover:underline">Audio</Link></li>
              <li><Link href="#" className="hover:underline">Games</Link></li>
              <li><Link href="#" className="hover:underline">Cooking</Link></li>
              <li><Link href="#" className="hover:underline">Wirecutter</Link></li>
              <li><Link href="#" className="hover:underline">The Athletic</Link></li>
              <li><Link href="#" className="hover:underline">Jobs</Link></li>
              <li><Link href="#" className="hover:underline">Video</Link></li>
              <li><Link href="#" className="hover:underline">Graphics</Link></li>
              <li><Link href="#" className="hover:underline">Trending</Link></li>
              <li><Link href="#" className="hover:underline">Live Events</Link></li>
              <li><Link href="#" className="hover:underline">Corrections</Link></li>
              <li><Link href="#" className="hover:underline">Times Insider</Link></li>
              <li><Link href="#" className="hover:underline">TimesMachine</Link></li>
              <li><Link href="#" className="hover:underline">The Learning Network</Link></li>
              <li><Link href="#" className="hover:underline">School of The NYT</Link></li>
              <li><Link href="#" className="hover:underline">inEducation</Link></li>
            </ul>
          </div>

          {/* Column 6: ACCOUNT */}
          <div className="flex flex-col">
            <h3 className="font-nyt-franklin font-bold text-[11.5px] uppercase tracking-wider text-[#121212] mb-3">
              ACCOUNT
            </h3>
            {/* Primary Action Links */}
            <div className="space-y-2.5 text-[13px] font-nyt-franklin font-bold text-[#121212]">
              <Link href="#" className="flex items-center gap-2 hover:underline">
                <span className="font-serif font-black text-[14px]">𝔗</span>
                <span>Subscribe</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:underline">
                <svg className="w-3.5 h-3.5 text-[#121212]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Manage My Account</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:underline">
                <svg className="w-3.5 h-3.5 text-[#121212]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span>Home Delivery</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:underline">
                <span className="font-serif font-black text-[14px]">𝔗</span>
                <span>Gift Subscriptions</span>
              </Link>
            </div>

            {/* Secondary Sub-links */}
            <ul className="space-y-2 text-[11px] font-nyt-franklin text-[#555555] mt-4 pt-3 border-t border-[#e2e2e2]">
              <li><Link href="#" className="hover:underline">Group Subscriptions</Link></li>
              <li><Link href="#" className="hover:underline">Gift Articles</Link></li>
              <li><Link href="#" className="hover:underline">Email Newsletters</Link></li>
            </ul>

            <ul className="space-y-2 text-[11px] font-nyt-franklin text-[#555555] mt-3 pt-3 border-t border-[#e2e2e2]">
              <li><Link href="#" className="hover:underline">NYT Licensing</Link></li>
              <li><Link href="#" className="hover:underline">Replica Edition</Link></li>
              <li><Link href="#" className="hover:underline">Times Store</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="w-full pt-5 flex flex-wrap items-center justify-between text-[11px] font-nyt-franklin text-[#666666] gap-y-2">
          {/* Copyright */}
          <div>
            <span>© 2026 The New York Times Company</span>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="#" className="hover:underline">NYTCo</Link>
            <Link href="#" className="hover:underline">Contact Us</Link>
            <Link href="#" className="hover:underline">Accessibility</Link>
            <Link href="#" className="hover:underline">Work with us</Link>
            <Link href="#" className="hover:underline">Advertise</Link>
            <Link href="#" className="hover:underline">T Brand Studio</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Cookie Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Terms of Sale</Link>
            <Link href="#" className="hover:underline">Site Map</Link>
            <Link href="#" className="hover:underline">Help</Link>
            <Link href="#" className="hover:underline">Subscriptions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

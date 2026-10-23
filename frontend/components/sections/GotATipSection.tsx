"use client";

import React from "react";
import Link from "next/link";

/**
 * GotATipSection Component (Image 3)
 * Placed immediately after fourth section (FranceProtestsSection).
 */
export default function GotATipSection() {
  return (
    <section className="w-full pt-5">
      {/* Top Black Divider Line */}
      <div className="w-full border-t border-[#121212]" />

      {/* Centered Got a Tip banner - perfectly centralized between up and down black lines */}
      <div className="w-full flex items-center justify-center py-4">
        <Link
          href="#"
          className="group inline-flex items-center justify-center gap-1.5 text-center transition-opacity hover:opacity-80"
        >
          <span className="font-nyt-serif font-bold text-[14.5px] text-[#121212]">
            Got a Tip?
          </span>
          <span className="font-nyt-serif text-[14.5px] text-[#121212]">
            The Times offers several ways to send important information confidentially ›
          </span>
        </Link>
      </div>

      {/* Down Black Divider Line */}
      <div className="w-full border-b border-[#121212]" />
    </section>
  );
}

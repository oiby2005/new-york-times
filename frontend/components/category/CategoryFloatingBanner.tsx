"use client";

import React, { useState } from "react";

export default function CategoryFloatingBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Subscription Offer"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[680px] bg-[#333333] text-white rounded-lg shadow-2xl px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-neutral-700/60 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      {/* Left Text */}
      <div className="flex flex-col text-left">
        <p className="font-nyt-sans font-bold text-[13px] text-white leading-tight">
          Support independent journalism with a subscription.
        </p>
        <p className="font-nyt-sans text-[12px] text-neutral-300 mt-0.5 leading-snug">
          Enjoy unlimited access for{" "}
          <span className="line-through text-neutral-400">$4</span>{" "}
          <span className="text-white font-semibold">$0.25/week</span> for your first six months.
        </p>
      </div>

      {/* Right Buttons: Subscribe & Dismiss */}
      <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
        <button
          type="button"
          className="bg-white text-black font-nyt-sans font-bold text-[12.5px] px-4 py-1.5 rounded hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
        >
          Subscribe
        </button>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="bg-transparent hover:bg-neutral-700/70 text-neutral-300 hover:text-white font-nyt-sans font-medium text-[12.5px] px-3 py-1.5 rounded transition-colors cursor-pointer whitespace-nowrap"
        >
          Dismiss
        </button>
      </div>
    </aside>
  );
}

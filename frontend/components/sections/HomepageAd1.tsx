import React from "react";

export default function HomepageAd1() {
  return (
    <aside
      aria-label="Homepage Ad 1"
      className="w-full h-[210px] bg-[#ebebeb] flex flex-col items-center justify-center gap-1.5 text-center px-4 transition-all"
    >
      <h2 className="font-semibold text-neutral-800 text-sm md:text-base tracking-wide font-nyt-sans">
        Homepage Ad 1
      </h2>
      <p className="text-xs md:text-sm text-neutral-600 font-mono">
        1024 × 210
      </p>
    </aside>
  );
}

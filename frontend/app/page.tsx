import HomepageAd1 from "@/components/sections/HomepageAd1";
import MainNavbar from "@/components/sections/MainNavbar";
import MainEditorialHero from "@/components/sections/MainEditorialHero";
import HomepageAd2 from "@/components/sections/HomepageAd2";
import WatchVideosSection from "@/components/sections/WatchVideosSection";
import TheAthleticSection from "@/components/sections/TheAthleticSection";
import WellSection from "@/components/sections/WellSection";
import PaidPostSection from "@/components/sections/PaidPostSection";
import LatestShowsSection from "@/components/sections/LatestShowsSection";
import HomepageAd3 from "@/components/sections/HomepageAd3";
import CultureAndLifestyleSection from "@/components/sections/CultureAndLifestyleSection";
import WirecutterSection from "@/components/sections/WirecutterSection";
import GamesSection from "@/components/sections/GamesSection";
import HomepageAd4 from "@/components/sections/HomepageAd4";
import NewsColumnsSection from "@/components/sections/NewsColumnsSection";
import OpinionColumnsSection from "@/components/sections/OpinionColumnsSection";
import ArtsColumnsSection from "@/components/sections/ArtsColumnsSection";
import LivingColumnsSection from "@/components/sections/LivingColumnsSection";
import MainFooter from "@/components/sections/MainFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      {/* 1st Section: Top Banner Advertisement */}
      <HomepageAd1 />

      {/* 2nd Section: Main Navbar */}
      <MainNavbar />

      {/* 3rd Section: Main Editorial Hero Package (Sections 1-9 & Right Sidebar) */}
      <MainEditorialHero />

      {/* 4th Section: Homepage Ad 2 */}
      <HomepageAd2 />

      {/* 5th Section: Watch Today's Videos */}
      <WatchVideosSection />

      {/* 6th Section: The Athletic Sports Coverage */}
      <TheAthleticSection />

      {/* 7th Section: Well */}
      <WellSection />

      {/* 8th Section: Latest Shows */}
      <LatestShowsSection />

      {/* 9th Section: Paid Post (Amer Sports) */}
      <PaidPostSection />

      {/* 10th Section: Homepage Ad 3 */}
      <HomepageAd3 />

      {/* 11th Section: Culture and Lifestyle */}
      <CultureAndLifestyleSection />

      {/* 12th Section: Wirecutter */}
      <WirecutterSection />

      {/* 13th Section: Games */}
      <GamesSection />

      {/* 14th Section: Homepage Ad 4 */}
      <HomepageAd4 />

      {/* 15th Section: News Columns (World, US, Politics, NY, Business, Tech, Science, Obits, Upshot, Climate, Education, Health, Insider) */}
      <NewsColumnsSection />

      {/* 16th Section: Opinion Columns */}
      <OpinionColumnsSection />

      {/* 17th Section: Arts Columns */}
      <ArtsColumnsSection />

      {/* 18th Section: Living Columns */}
      <LivingColumnsSection />

      {/* 19th Section: Main Footer */}
      <MainFooter />
    </main>
  );
}

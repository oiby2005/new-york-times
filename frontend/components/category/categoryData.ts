import { MEGAMENU_DATA } from "../sections/megamenuData";
import { FirstSectionArticle } from "./CategoryFirstSection";
import { FeedArticleItem } from "./CategoryMainFeed";

export interface CategoryInfo {
  slug: string;
  categoryName: string;
  title: string;
  stickyTitle: string;
  trackerItems: string[];
  leadStory?: {
    tag?: string;
    title: string;
    summary: string;
    byline: string;
    time: string;
    image: string;
    imageCredit?: string;
  };
  sideArticles?: FirstSectionArticle[];
  feedArticles?: FeedArticleItem[];
}

export const CATEGORY_MAP: Record<string, CategoryInfo> = {
  us: {
    slug: "us",
    categoryName: "U.S.",
    title: "U.S. News",
    stickyTitle: "U.S. NEWS",
    trackerItems: [
      "WILDFIRE AND AIR QUALITY TRACKER",
      "CALIFORNIA",
      "RACE/RELATED",
    ],
    leadStory: {
      title: "Four Takeaways From the Debate for Wisconsin Governor",
      summary:
        "The Democrat, David Crowley, and the Republican, Tom Tiffany, sparred over taxes, abortion, data centers and legalizing marijuana in their only debate before the election.",
      byline: "By JULIE BOSMAN",
      time: "6h ago",
      image: "/images/wisconsin_governor_debate.jpg",
      imageCredit: "Jamie Kelley Davis for The New York Times",
    },
    sideArticles: [
      {
        title: "Why a Pillar of Christian Journalism is in Turmoil",
        summary:
          "Former employees of Christianity Today say new leadership has been pushing back on independent journalism. About half of its staff members have left or been laid off over 14 months.",
        byline: "By RUTH GRAHAM",
        time: "10h ago",
        image: "/images/christian_journalism_woman.jpg",
        isUnderlined: false,
      },
      {
        title: "Oregon Teacher Credited With Protecting Child Disputes Her Own Heroism",
        summary:
          "Becky Drury, who was said to have shielded a student during a deadly shooting in Bend, refuted the account. “The truth is I was shot before I had any chance to act.”",
        byline: "By ANNA GRIFFIN",
        time: "12h ago",
        image: "/images/oregon_teacher_shooting.jpg",
        isUnderlined: false,
      },
      {
        title: "Toledo Chemical Leak That Forced Residents to Evacuate Is Slowing",
        summary:
          "Nearly 1,000 people in the Ohio city were told to leave the area and thousands more were urged to stay inside. The mayor said the spill did not present a long-term threat.",
        byline: "By MADISON MALONE KIRCHER and PATRICK COOLEY",
        time: "11h ago",
        image: "/images/toledo_chemical_plant.jpg",
        isUnderlined: false,
      },
    ],
  },
  world: {
    slug: "world",
    categoryName: "World",
    title: "World News",
    stickyTitle: "WORLD NEWS",
    trackerItems: [
      "MIDDLE EAST CRISIS",
      "UKRAINE-RUSSIA WAR",
      "GLOBAL ECONOMY",
      "DIPLOMACY",
    ],
    leadStory: {
      tag: "INTERNATIONAL",
      title: "Diplomatic Talks Intensify as Regional Security Framework Faces Critical Test",
      summary:
        "Envoys convened in Geneva to forge consensus on border demilitarization and humanitarian access corridors as European capitals weigh coordinated sanctions.",
      byline: "By STEVEN ERLANGER and FARNAZ FASSIHI",
      time: "2h ago",
      image: "/images/hero_putin_trump.jpg",
      imageCredit: "Pool Photo via Reuters",
    },
    sideArticles: [
      {
        title: "European Capitals Accelerate Defense Integration Amid Strategic Uncertainty",
        summary:
          "Ministers announced joint procurement of air defense interceptors, signaling a permanent realignment in continental security doctrines.",
        byline: "By LARA JAKES",
        time: "4h ago",
        image: "/images/france_protests.jpg",
      },
      {
        title: "Severe Drought Threatens Hydropower Grids Across the Southern Amazon Basin",
        summary:
          "River gauges recorded historic low depths, curbing vessel navigation and stranding isolated river communities without electrical power.",
        byline: "By JACK NICAS",
        time: "7h ago",
        image: "/images/amazon_rainforest_brazil.jpg",
      },
      {
        title: "Vatican Diplomatic Envoy Navigates Fragile Mediation in Conflict Zone",
        summary:
          "Church negotiators held bilateral consultations aimed at securing the exchange of non-combatant detainees before winter storms begin.",
        byline: "By JASON HOROWITZ",
        time: "12h ago",
        image: "/images/pope_leo_car.jpg",
      },
    ],
  },
  business: {
    slug: "business",
    categoryName: "Business",
    title: "Business",
    stickyTitle: "BUSINESS",
    trackerItems: [
      "MARKETS",
      "ECONOMY",
      "TECH GIANTS",
      "ENERGY",
      "STARTUPS",
      "REAL ESTATE",
    ],
    leadStory: {
      tag: "ECONOMY",
      title: "Central Banks Signal Cautious Trajectory as Core Inflation Stabilizes",
      summary:
        "Policymakers held key lending rates unchanged while emphasizing that labor productivity and wage growth will guide interest decisions into next quarter.",
      byline: "By JEANNA SMIALEK and PATRICIA COHEN",
      time: "3h ago",
      image: "/images/shelly_portrait.jpg",
      imageCredit: "The New York Times",
    },
    sideArticles: [
      {
        title: "Commercial Real Estate Loan Delinquencies Plateau Across Major Metros",
        summary:
          "Refinancing extensions and mezzanine debt recapitalizations granted property developers breathing room amid high yields.",
        byline: "By PETER EAVIS",
        time: "5h ago",
        image: "/images/thumb_own_a_home.jpg",
      },
      {
        title: "Grocery Retailers Balance Margin Compression and Value Brand Competition",
        summary:
          "Consumer spending patterns reflect heightened cost sensitivity as households favor private-label staples over premium national goods.",
        byline: "By JULIE CRESWELL",
        time: "8h ago",
        image: "/images/thumb_grocery_prices.jpg",
      },
      {
        title: "Venture Capital Flows Pivot Toward Clean Industrial Infrastructure",
        summary:
          "Seed investments in silicon hardware and grid scale storage reached multi-year highs during the preceding quarter.",
        byline: "By ERIN GRIFFITH",
        time: "14h ago",
        image: "/images/earth_space_night.jpg",
      },
    ],
  },
  technology: {
    slug: "technology",
    categoryName: "Technology",
    title: "Technology",
    stickyTitle: "TECHNOLOGY",
    trackerItems: [
      "ARTIFICIAL INTELLIGENCE",
      "SEMICONDUCTORS",
      "CYBERSECURITY",
      "GADGETS",
      "SOCIAL MEDIA",
    ],
    leadStory: {
      tag: "TECH INVESTIGATION",
      title: "Tech Giants Accelerate Custom AI Silicon to Curb Soaring Compute Overhead",
      summary:
        "Cloud providers are fabricating proprietary neural processing chips to decrease reliance on third-party accelerators and improve thermodynamic efficiency.",
      byline: "By CADE METZ and KAREN WEISE",
      time: "1h ago",
      image: "/images/earth_space_night.jpg",
      imageCredit: "NASA / Goddard Space Flight Center",
    },
    sideArticles: [
      {
        title: "Open-Source Models Challenge Proprietary Benchmarks in Code Generation",
        summary:
          "Developer telemetry reveals independent reasoning architectures match top closed models while dramatically reducing hosting footprints.",
        byline: "By TRIP MICKLE",
        time: "4h ago",
        image: "/images/thumb_mathematician.jpg",
      },
      {
        title: "Quantum Computing Labs Achieve Breakthrough in Error Mitigation Codes",
        summary:
          "Researchers demonstrated logical qubit coherence sustained across several clock cycles, unlocking scalable simulation for materials science.",
        byline: "By KENNETH CHANG",
        time: "9h ago",
        image: "/images/cereal_crunch.jpg",
      },
      {
        title: "Critical Infrastructure Operators Deploy Automated Autonomous Defenses",
        summary:
          "Network administrators leverage machine learning intrusion detection to counteract state-sponsored penetration attempts in real time.",
        byline: "By NICOLE PERLROTH",
        time: "13h ago",
        image: "/images/tyler_pager_trump.jpg",
      },
    ],
  },
  sports: {
    slug: "sports",
    categoryName: "Sports",
    title: "Sports",
    stickyTitle: "SPORTS",
    trackerItems: [
      "FOOTBALL",
      "BASKETBALL",
      "BASEBALL",
      "SOCCER",
      "TENNIS",
      "FORMULA 1",
    ],
    leadStory: {
      tag: "PREMIER LEAGUE",
      title: "Manchester City Dismantles Opposition Defense in Command Display",
      summary:
        "Tactical discipline and midfield precision propelled the champions to a resounding triumph, solidifying their standing at the league pinnacle.",
      byline: "By RORY SMITH",
      time: "2h ago",
      image: "/images/mancity_ipswich_crop.jpg",
      imageCredit: "Action Images / Reuters",
    },
    sideArticles: [
      {
        title: "Inside the Strategic Metamorphosis of Modern NFL Offenses",
        summary:
          "Coordinators utilize motion concepts and play-action spacing to neutralize two-high safety defensive shells.",
        byline: "By KEN BELSON",
        time: "5h ago",
        image: "/images/nfl_receiver_enigma.jpg",
      },
      {
        title: "Mariners Bullpen Reliability Anchors Critical Late-Season Playoff Push",
        summary:
          "Relievers posted league-leading strikeout percentages over the home stand, shutting down division challengers in high leverage situations.",
        byline: "By TYLER KEPNER",
        time: "8h ago",
        image: "/images/mariners_mother.jpg",
      },
      {
        title: "Next-Gen Tennis Stars Challenge Baseline Hegemony at Paris Masters",
        summary:
          "Aggressive return positioning and net approaches revitalize dynamic tactical variety across the men's singles bracket.",
        byline: "By CHRISTOPHER CLAREY",
        time: "11h ago",
        image: "/images/icymi_nfl_enigma.jpg",
      },
    ],
  },
  arts: {
    slug: "arts",
    categoryName: "Arts & Culture",
    title: "Arts & Culture",
    stickyTitle: "ARTS & CULTURE",
    trackerItems: [
      "MOVIES",
      "TELEVISION",
      "BOOKS",
      "THEATER",
      "MUSIC",
      "VISUAL ARTS",
    ],
    leadStory: {
      tag: "THEATER REVIEW",
      title: "A Visceral, Spellbinding ‘Macbeth’ Stuns on Broadway",
      summary:
        "Brilliant staging, chilling performances, and razor-sharp direction transform Shakespeare's tragic descent into a masterwork of kinetic theater.",
      byline: "By JESSE GREEN",
      time: "3h ago",
      image: "/images/macbeth_theater.jpg",
      imageCredit: "Sara Krulwich / The New York Times",
    },
    sideArticles: [
      {
        title: "Five International Films That Daringly Redefine Cinematic Grammar",
        summary:
          "From contemplative rural dramas to searing psychological thrillers, these world cinema gems deserve your immediate attention.",
        byline: "By MANOHLA DARGIS",
        time: "6h ago",
        image: "/images/thumb_5_movies.jpg",
      },
      {
        title: "Sense and Sensibility: A Classic Romance Reimagined for the Stage",
        summary:
          "A witty, energetic production breathes joyful contemporary relevance into Jane Austen's timeless exploration of love and prudence.",
        byline: "By MAYA PHILLIPS",
        time: "9h ago",
        image: "/images/sense_sensibility.jpg",
      },
      {
        title: "Rediscovering the 1971 Scandal That Rocked the Modern Art World",
        summary:
          "Newly released museum correspondence illuminates the fierce battle between conceptual artists and corporate board trustees.",
        byline: "By JASON FARAGO",
        time: "14h ago",
        image: "/images/thumb_scandal_1971.jpg",
      },
    ],
  },
  science: {
    slug: "science",
    categoryName: "Science",
    title: "Science",
    stickyTitle: "SCIENCE",
    trackerItems: [
      "SPACE & ASTRONOMY",
      "CLIMATE DYNAMICS",
      "MEDICINE",
      "PALEONTOLOGY",
      "OCEANS",
    ],
    leadStory: {
      tag: "ASTRONOMY",
      title: "James Webb Telescope Discovers Ancient Galaxies Defying Cosmic Evolution Timelines",
      summary:
        "Deep sky observations reveal ultra-massive star clusters formed merely hundreds of millions of years following the Big Bang, challenging stellar models.",
      byline: "By DENNIS OVERBYE",
      time: "4h ago",
      image: "/images/earth_space_night.jpg",
      imageCredit: "NASA / ESA / CSA",
    },
    sideArticles: [
      {
        title: "Mathematical Proof Resolves Longstanding Mystery in Fluid Turbulence",
        summary:
          "Mathematicians celebrated a breakthrough clarifying energy dissipation equations within chaotic hydrodynamic vortexes.",
        byline: "By SIOBHAN ROBERTS",
        time: "7h ago",
        image: "/images/thumb_mathematician.jpg",
      },
      {
        title: "Deep Sea Biosphere Yields Potential Novel Antibiotic Compounds",
        summary:
          "Submersible probes operating near hydrothermal vents isolated microbial strains with potent antimicrobial resistance capabilities.",
        byline: "By CARL ZIMMER",
        time: "10h ago",
        image: "/images/amazon_rainforest_brazil.jpg",
      },
      {
        title: "Climate Dynamics Reveal Shifting Jet Stream Patterns in Northern Latitudes",
        summary:
          "Atmospheric scientists track persistent high-pressure blocks linked to extended drought and unseasonal precipitation cycles.",
        byline: "By RAYMOND ZHONG",
        time: "15h ago",
        image: "/images/france_protests.jpg",
      },
    ],
  },
  lifestyle: {
    slug: "lifestyle",
    categoryName: "Lifestyle",
    title: "Lifestyle",
    stickyTitle: "LIFESTYLE",
    trackerItems: [
      "WELLNESS",
      "FOOD & DINING",
      "TRAVEL",
      "FASHION",
      "HOME",
      "RELATIONSHIPS",
    ],
  },
  opinion: {
    slug: "opinion",
    categoryName: "Opinion",
    title: "Opinion",
    stickyTitle: "OPINION",
    trackerItems: [
      "EDITORIALS",
      "COLUMNS",
      "GUEST OPINIONS",
      "INTERVIEWS",
      "SUNDAY DIALOGUE",
    ],
  },
};

/**
 * Resolves title, stickyTitle, and trackerItems for any given slug or category name.
 */
export function getCategoryInfo(slugOrName: string): CategoryInfo {
  const normalized = slugOrName.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Direct match in CATEGORY_MAP
  if (CATEGORY_MAP[normalized]) {
    return CATEGORY_MAP[normalized];
  }

  // Check matching in MEGAMENU_DATA
  for (const [catName, data] of Object.entries(MEGAMENU_DATA)) {
    const catNorm = catName.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (catNorm === normalized) {
      return {
        slug: catNorm,
        categoryName: catName,
        title: catName.endsWith("News") ? catName : `${catName} News`,
        stickyTitle: catName.toUpperCase(),
        trackerItems: data.subcategories.slice(0, 5).map((s) => s.toUpperCase()),
      };
    }

    // Check if it's one of the subcategories
    const subMatch = data.subcategories.find(
      (sub) => sub.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized
    );
    if (subMatch) {
      return {
        slug: normalized,
        categoryName: subMatch,
        title: subMatch,
        stickyTitle: subMatch.toUpperCase(),
        trackerItems: data.subcategories
          .filter((s) => s !== subMatch)
          .slice(0, 4)
          .map((s) => s.toUpperCase()),
      };
    }
  }

  // Fallback: format human readable
  const words = slugOrName
    .replace(/[-_]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
  const formatted = words.join(" ") || "U.S. News";

  return {
    slug: normalized || "us",
    categoryName: formatted,
    title: formatted,
    stickyTitle: formatted.toUpperCase(),
    trackerItems: [
      "WILDFIRE AND AIR QUALITY TRACKER",
      "CALIFORNIA",
      "RACE/RELATED",
    ],
  };
}

export interface NewsletterCard {
  title: string;
  desc: string;
}

export interface PodcastCard {
  title: string;
  desc: string;
}

export interface CategoryMegamenuData {
  subcategories: string[];
  sectionsCol1: string[];
  sectionsCol2: string[];
  topStories: string[];
  newsletters: {
    items: NewsletterCard[];
    seeAllText: string;
  };
  podcasts: {
    items: PodcastCard[];
    seeAllText: string;
  };
}

/**
 * 11 Main Categories with 94 Subcategories (105 total categories/items)
 * Structured with SECTIONS, TOP STORIES, NEWSLETTERS, and PODCASTS
 */
export const MEGAMENU_DATA: Record<string, CategoryMegamenuData> = {
  // =========================================================================
  // 1. U.S. (7 subcategories)
  // =========================================================================
  "U.S.": {
    subcategories: [
      "National",
      "Politics",
      "Government",
      "States & Cities",
      "Crime & Justice",
      "Immigration",
      "Elections",
    ],
    sectionsCol1: ["National", "Politics", "Government", "States & Cities"],
    sectionsCol2: ["Crime & Justice", "Immigration", "Elections"],
    topStories: [
      "Donald Trump",
      "Supreme Court",
      "Congress",
      "Immigration Debate",
      "Latest Polls",
      "Abortion Rights",
    ],
    newsletters: {
      items: [
        {
          title: "The Morning",
          desc: "Make sense of the day's news and ideas.",
        },
        {
          title: "The Evening",
          desc: "Catch up on big news, and wind down to end your day.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Daily",
          desc: "The biggest stories of our time, in 20 minutes a day.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 2. World (10 subcategories)
  // =========================================================================
  "World": {
    subcategories: [
      "Asia",
      "Europe",
      "Middle East",
      "Africa",
      "North America",
      "Latin America",
      "International Politics",
      "Diplomacy",
      "Global Economy",
      "Conflicts & Wars",
    ],
    sectionsCol1: [
      "Asia",
      "Europe",
      "Middle East",
      "Africa",
      "North America",
    ],
    sectionsCol2: [
      "Latin America",
      "International Politics",
      "Diplomacy",
      "Global Economy",
      "Conflicts & Wars",
    ],
    topStories: [
      "Middle East Crisis",
      "Russia-Ukraine War",
      "China International Relations",
      "The Global Profile",
      "Diplomatic Summits",
      "Global Trade Agreements",
    ],
    newsletters: {
      items: [
        {
          title: "The World",
          desc: "A guide to understanding the news, made for readers around the globe.",
        },
        {
          title: "Your Places: Global Update",
          desc: "The latest news for any part of the world you select.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Daily",
          desc: "The biggest stories of our time, in 20 minutes a day.",
        },
        {
          title: "Interesting Times",
          desc: "Mapping the new world order through interviews and conversations.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 3. Business (8 subcategories)
  // =========================================================================
  "Business": {
    subcategories: [
      "Companies",
      "Markets",
      "Economy",
      "Finance",
      "Startups",
      "Entrepreneurship",
      "Real Estate",
      "Banking",
    ],
    sectionsCol1: ["Companies", "Markets", "Economy", "Finance"],
    sectionsCol2: ["Startups", "Entrepreneurship", "Real Estate", "Banking"],
    topStories: [
      "U.S. Economy",
      "Stock Market",
      "Federal Reserve Rates",
      "Commercial Real Estate",
      "Global Inflation",
      "Venture Capital Trends",
    ],
    newsletters: {
      items: [
        {
          title: "DealBook",
          desc: "The most crucial business and policy news you need to know.",
        },
        {
          title: "On Tech",
          desc: "Our best tech reporting from the week.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "Hard Fork",
          desc: "Our tech journalists help you make sense of the rapidly changing tech world.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 4. Technology (9 subcategories)
  // =========================================================================
  "Technology": {
    subcategories: [
      "Artificial Intelligence",
      "Gadgets",
      "Software",
      "Cybersecurity",
      "Startups",
      "Internet",
      "Social Media",
      "Robotics",
      "Space Technology",
    ],
    sectionsCol1: [
      "Artificial Intelligence",
      "Gadgets",
      "Software",
      "Cybersecurity",
      "Startups",
    ],
    sectionsCol2: [
      "Internet",
      "Social Media",
      "Robotics",
      "Space Technology",
    ],
    topStories: [
      "Generative AI Race",
      "Big Tech Antitrust",
      "Next-Gen Silicon & Chips",
      "Cyber Defense & Security",
      "Social Media Regulations",
      "Autonomous Robotics",
    ],
    newsletters: {
      items: [
        {
          title: "On Tech",
          desc: "Our best tech reporting from the week.",
        },
        {
          title: "DealBook",
          desc: "The most crucial business and policy news you need to know.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "Hard Fork",
          desc: "Our tech journalists help you make sense of the rapidly changing tech world.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 5. Science (8 subcategories)
  // =========================================================================
  "Science": {
    subcategories: [
      "Space",
      "Research",
      "Environment",
      "Climate",
      "Medicine",
      "Nature",
      "Energy",
      "Innovation",
    ],
    sectionsCol1: ["Space", "Research", "Environment", "Climate"],
    sectionsCol2: ["Medicine", "Nature", "Energy", "Innovation"],
    topStories: [
      "NASA Artemis Missions",
      "James Webb Space Discoveries",
      "Climate & Ocean Temperatures",
      "Gene Therapy Breakthroughs",
      "Clean Fusion Energy",
      "Biodiversity Conservation",
    ],
    newsletters: {
      items: [
        {
          title: "Well",
          desc: "Essential news and guidance to live your healthiest life.",
        },
        {
          title: "The Morning",
          desc: "Make sense of the day's news and ideas.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Daily",
          desc: "The biggest stories of our time, in 20 minutes a day.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 6. Sports (10 subcategories)
  // =========================================================================
  "Sports": {
    subcategories: [
      "Football",
      "Soccer",
      "Basketball",
      "Baseball",
      "Cricket",
      "Tennis",
      "Golf",
      "Formula 1",
      "Olympics",
      "Esports",
    ],
    sectionsCol1: [
      "Football",
      "Soccer",
      "Basketball",
      "Baseball",
      "Cricket",
    ],
    sectionsCol2: [
      "Tennis",
      "Golf",
      "Formula 1",
      "Olympics",
      "Esports",
    ],
    topStories: [
      "NFL Championship Contenders",
      "UEFA Champions League",
      "NBA MVP Race",
      "Formula 1 Grand Prix",
      "Grand Slam Tennis Highlights",
      "Global Cricket Tournaments",
    ],
    newsletters: {
      items: [
        {
          title: "The Pulse",
          desc: "Delivering the top stories in sports, Sunday to Friday.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Daily",
          desc: "The biggest stories of our time, in 20 minutes a day.",
        },
        {
          title: "Popcast",
          desc: "Pop music news, new songs and albums, and artists of note.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 7. Arts & Culture (9 subcategories)
  // =========================================================================
  "Arts & Culture": {
    subcategories: [
      "Movies",
      "Music",
      "Books",
      "Television",
      "Theater",
      "Art",
      "Entertainment",
      "Celebrities",
      "Culture",
    ],
    sectionsCol1: [
      "Movies",
      "Music",
      "Books",
      "Television",
      "Theater",
    ],
    sectionsCol2: [
      "Art",
      "Entertainment",
      "Celebrities",
      "Culture",
    ],
    topStories: [
      "100 Best Movies of the 21st Century",
      "Critic's Picks",
      "What to Read",
      "What to Watch",
      "Broadway Theater Reviews",
      "Contemporary Art Exhibitions",
    ],
    newsletters: {
      items: [
        {
          title: "Books",
          desc: "Reviews, news and features to help you find your next read.",
        },
        {
          title: "Watching",
          desc: "Streaming TV and movie recommendations.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "Book Review",
          desc: "The podcast that takes you inside the literary world.",
        },
        {
          title: "Popcast",
          desc: "Pop music news, new songs and albums, and artists of note.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 8. Lifestyle (8 subcategories)
  // =========================================================================
  "Lifestyle": {
    subcategories: [
      "Health & Wellness",
      "Food",
      "Travel",
      "Fashion",
      "Beauty",
      "Relationships",
      "Home",
      "Luxury",
    ],
    sectionsCol1: ["Health & Wellness", "Food", "Travel", "Fashion"],
    sectionsCol2: ["Beauty", "Relationships", "Home", "Luxury"],
    topStories: [
      "36 Hours in Global Destinations",
      "Essential Nutrition & Longevity",
      "Runway & Fashion Highlights",
      "Interior Design Innovations",
      "The Ethicist Advice",
      "Where to Eat Now",
    ],
    newsletters: {
      items: [
        {
          title: "The Weekender",
          desc: "Unwind with stories about culture and the way we live.",
        },
        {
          title: "Well",
          desc: "Essential news and guidance to live your healthiest life.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "Modern Love",
          desc: "The complicated love lives of real people.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 9. Opinion (5 subcategories)
  // =========================================================================
  "Opinion": {
    subcategories: [
      "Editorials",
      "Opinions",
      "Columns",
      "Guest Opinions",
      "Interviews",
    ],
    sectionsCol1: [
      "Editorials",
      "Opinions",
      "Columns",
      "Guest Opinions",
      "Interviews",
    ],
    sectionsCol2: [],
    topStories: [
      "Today's Editorial Board",
      "Guest Essays on World Events",
      "Letters from Readers",
      "Debates on Democracy",
      "Economic Columnists",
      "Global Perspectives",
    ],
    newsletters: {
      items: [
        {
          title: "Interesting Times",
          desc: "Mapping the new world order through interviews and conversations.",
        },
        {
          title: "The Opinions",
          desc: "You’ve heard the news, here’s what to make of it.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Ezra Klein Show",
          desc: "Discussions of ideas that matter, plus book recommendations.",
        },
        {
          title: "The Opinions",
          desc: "You’ve heard the news, here’s what to make of it.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 10. Video (16 subcategories: Today's Videos + 15 subcategories)
  // =========================================================================
  "Video": {
    subcategories: [
      "Today's Videos",
      "U.S.",
      "Politics",
      "Immigration",
      "Science",
      "Business",
      "Culture",
      "Wellness",
      "World",
      "Africa",
      "Americas",
      "Asia",
      "South Asia",
      "Donald Trump",
      "Middle East Crisis",
      "Russia-Ukraine Crisis",
    ],
    sectionsCol1: [
      "Today's Videos",
      "U.S.",
      "Politics",
      "Immigration",
      "Science",
      "Business",
      "Culture",
      "Wellness",
    ],
    sectionsCol2: [
      "World",
      "Africa",
      "Americas",
      "Asia",
      "South Asia",
      "Donald Trump",
      "Middle East Crisis",
      "Russia-Ukraine Crisis",
    ],
    topStories: [
      "Visual Investigations",
      "Times Documentaries",
      "Opinion Video Essays",
      "International Correspondents",
      "Behind the Headlines",
      "Science in Motion",
    ],
    newsletters: {
      items: [
        {
          title: "Watching",
          desc: "Streaming TV and movie recommendations.",
        },
        {
          title: "Shows",
          desc: "Your guide to the best New York Times shows this week.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Daily",
          desc: "The biggest stories of our time, in 20 minutes a day.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 11. More (4 subcategories)
  // =========================================================================
  "More": {
    subcategories: [
      "Education",
      "Health",
      "Climate & Environment",
      "Travel",
    ],
    sectionsCol1: [
      "Education",
      "Health",
      "Climate & Environment",
      "Travel",
    ],
    sectionsCol2: [],
    topStories: [
      "Global Higher Education Trends",
      "Advances in Public Health",
      "Climate Policy & Green Energy",
      "World Travel Destinations",
      "The Upshot Data & Analytics",
      "Times Insider Special Reports",
    ],
    newsletters: {
      items: [
        {
          title: "Well",
          desc: "Essential news and guidance to live your healthiest life.",
        },
        {
          title: "The Morning",
          desc: "Make sense of the day's news and ideas.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Daily",
          desc: "The biggest stories of our time, in 20 minutes a day.",
        },
        {
          title: "Modern Love",
          desc: "The complicated love lives of real people.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 12. Arts (alias to Arts & Culture)
  // =========================================================================
  "Arts": {
    subcategories: [
      "Books",
      "Best Sellers",
      "Dance",
      "Movies",
      "Music",
      "Television",
      "Theater",
      "Visual Arts",
    ],
    sectionsCol1: ["Books", "Best Sellers", "Dance", "Movies"],
    sectionsCol2: ["Music", "Television", "Theater", "Visual Arts"],
    topStories: [
      "100 Best Movies of the 21st Century",
      "Critic’s Picks",
      "What to Read This Week",
      "What to Watch on Streaming",
      "Broadway Theater Reviews",
      "Contemporary Art Exhibitions",
    ],
    newsletters: {
      items: [
        {
          title: "Books",
          desc: "Reviews, news and features to help you find your next read.",
        },
        {
          title: "Watching",
          desc: "Streaming TV and movie recommendations.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "Book Review",
          desc: "The podcast that takes you inside the literary world.",
        },
        {
          title: "Popcast",
          desc: "Pop music news, new songs and albums, and artists of note.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 13. Shows
  // =========================================================================
  "Shows": {
    subcategories: [
      "The Ezra Klein Show",
      "The Daily",
      "Hard Fork",
      "Popcast",
      "Modern Love",
      "Matter of Opinion",
      "The Run-Up",
    ],
    sectionsCol1: ["The Ezra Klein Show", "The Daily", "Hard Fork", "Popcast"],
    sectionsCol2: ["Modern Love", "Matter of Opinion", "The Run-Up"],
    topStories: [
      "The Kelly Clarkson Tapes, Revealed",
      "Is It a Relationship if No One’s on the Other Side?",
      "The Year Zara Larsson Unlocked Pop Superstardom",
      "Why Silicon Valley Is Bet on A.I. Infrastructure",
    ],
    newsletters: {
      items: [
        {
          title: "Watching",
          desc: "Streaming TV and movie recommendations.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Daily",
          desc: "The biggest stories of our time, in 20 minutes a day.",
        },
        {
          title: "The Ezra Klein Show",
          desc: "Intelligent conversations about politics, culture and ideas.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 14. Games
  // =========================================================================
  "Games": {
    subcategories: [
      "Wordle",
      "Connections",
      "Spelling Bee",
      "The Crossword",
      "The Mini Crossword",
      "Tiles",
      "Letter Boxed",
      "Sudoku",
      "Strands",
    ],
    sectionsCol1: ["Wordle", "Connections", "Spelling Bee", "The Crossword"],
    sectionsCol2: ["The Mini Crossword", "Tiles", "Letter Boxed", "Strands"],
    topStories: [
      "Play Today's Wordle",
      "Solve Today's Connections",
      "Spelling Bee Hints & Discussion",
      "The Mini Crossword Daily Challenge",
    ],
    newsletters: {
      items: [
        {
          title: "Gameplay",
          desc: "Daily puzzle tips, strategy and community updates.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Daily",
          desc: "The biggest stories of our time, in 20 minutes a day.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 15. Cooking
  // =========================================================================
  "Cooking": {
    subcategories: [
      "Recipes",
      "Weeknight Dinners",
      "Vegetarian",
      "Desserts & Baking",
      "Pastas",
      "Soups & Stews",
      "Cookbooks",
    ],
    sectionsCol1: ["Recipes", "Weeknight Dinners", "Vegetarian", "Desserts & Baking"],
    sectionsCol2: ["Pastas", "Soups & Stews", "Cookbooks"],
    topStories: [
      "The Only Lasagna Recipe You’ll Ever Need",
      "How to Make the Creamiest Mac and Cheese",
      "30-Minute Dinner Ideas for Busy Nights",
      "Our 50 Most Popular Fall Recipes",
    ],
    newsletters: {
      items: [
        {
          title: "What to Cook This Week",
          desc: "Five weeknight dinner ideas to inspire your cooking.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Daily",
          desc: "The biggest stories of our time, in 20 minutes a day.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 16. Wirecutter
  // =========================================================================
  "Wirecutter": {
    subcategories: [
      "Electronics",
      "Home & Garden",
      "Kitchen",
      "Appliances",
      "Health & Fitness",
      "Travel Gear",
      "Deals",
    ],
    sectionsCol1: ["Electronics", "Home & Garden", "Kitchen", "Appliances"],
    sectionsCol2: ["Health & Fitness", "Travel Gear", "Deals"],
    topStories: [
      "The Best Soundbars of 2026",
      "This Is Why You Sleep Better at Hotels",
      "Change Your Toilet Seat, Change Your Life",
      "The Best Mattresses for Every Sleep Style",
    ],
    newsletters: {
      items: [
        {
          title: "Wirecutter Weekly",
          desc: "Expert product reviews and buying guides.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Wirecutter Show",
          desc: "Real conversations about the things we buy and why.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },

  // =========================================================================
  // 17. The Athletic
  // =========================================================================
  "The Athletic": {
    subcategories: [
      "Premier League",
      "NFL",
      "NBA",
      "MLB",
      "College Football",
      "Champions League",
      "NHL",
      "F1 Motorsports",
    ],
    sectionsCol1: ["Premier League", "NFL", "NBA", "MLB"],
    sectionsCol2: ["College Football", "Champions League", "NHL", "F1 Motorsports"],
    topStories: [
      "Erling Haaland Manchester City Analysis",
      "NFL Week 6 Intel & Jalen Hurts Health",
      "NBA Eastern Conference Power Rankings",
      "The SEC College Football Playoff Decision",
    ],
    newsletters: {
      items: [
        {
          title: "The Pulse",
          desc: "The biggest sports stories delivered straight to your inbox.",
        },
      ],
      seeAllText: "See all newsletters",
    },
    podcasts: {
      items: [
        {
          title: "The Athletic FC",
          desc: "Inside analysis of the world’s biggest football clubs.",
        },
      ],
      seeAllText: "See all podcasts",
    },
  },
};

export const ALL_MEGAMENUS = MEGAMENU_DATA;


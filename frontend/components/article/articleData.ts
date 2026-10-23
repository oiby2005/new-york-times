export interface ArticleAuthor {
  name: string;
  slug: string;
  avatar: string;
}

export interface ArticleData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  imageCaption: string;
  imageCredit: string;
  byline: string;
  bylineDetails: string;
  date: string;
  authors?: ArticleAuthor[];
  publishedDate?: string;
  updatedDate?: string;
  audioDuration: string;
  commentsCount: number;
  freeToRead: boolean;
  paragraphsPart1: string[];
  paragraphsPart2: string[];
  paragraphsPart3: string[];
  paragraphsPart4: string[];
  paragraphsSection9?: string[];
  reporterBios: { name: string; text: string }[];
  printNotice: string;
}

export const MAIN_ARTICLE: ArticleData = {
  slug: "trump-signs-order-exempting-russia-from-sanctions-law",
  category: "WORLD",
  title: "Trump Signs Order Exempting Russia From Sanctions Law",
  subtitle:
    "The sanctions were part of a measure that was named after Senator Lindsey Graham, the South Carolina Republican who died in July.",
  image: "/images/hero_putin_trump.jpg",
  imageCaption:
    "President Trump and President Vladimir V. Putin of Russia in Helsinki. Mr. Trump signed an executive order exempting Russia from new congressional sanctions.",
  imageCredit: "Doug Mills/The New York Times",
  byline: "By Michael Crowley, Maggie Haberman and Siobhán O’Grady",
  bylineDetails:
    "Michael Crowley reported from Washington, Maggie Haberman from New York, and Siobhán O’Grady from Kyiv.",
  date: "Published Oct. 22, 2026 Updated Oct. 23, 2026, 3:52 a.m. ET",
  authors: [
    {
      name: "Michael Crowley",
      slug: "michael-crowley",
      avatar: "/images/gen_crowley_portrait.jpg",
    },
    {
      name: "Maggie Haberman",
      slug: "maggie-haberman",
      avatar: "/images/gen_haberman_portrait.jpg",
    },
    {
      name: "Siobhán O’Grady",
      slug: "siobhan-ogrady",
      avatar: "/images/gen_ogrady_portrait.jpg",
    },
  ],
  publishedDate: "Oct. 22, 2026",
  updatedDate: "Oct. 23, 2026, 3:52 a.m. ET",
  audioDuration: "5:59 min",
  commentsCount: 38,
  freeToRead: true,
  paragraphsPart1: [
    "WASHINGTON — President Trump signed an executive order on Wednesday exempting key Russian financial and energy entities from a sweeping sanctions package passed by Congress, drawing immediate backlash from both parties on Capitol Hill.",
    "The sanctions, enacted earlier this year as part of a measure named for the late Senator Lindsey Graham, had sought to penalize Russian state institutions and tighten economic pressure on Moscow following its ongoing war in Ukraine.",
    "The president defended the move during an afternoon press conference at the White House, insisting that greater diplomatic flexibility was necessary to achieve an end to the fighting.",
    "“We have to be able to talk, we have to be able to deal, and sanctions sometimes get in the way of peace,” Mr. Trump said. “Lindsey Graham was a great friend of mine, but this bill went too far in tying the president’s hands.”",
  ],
  paragraphsPart2: [
    "The move comes as European allies expressed alarm over shifting American policy ahead of the upcoming midterm elections.",
    "In Kyiv, Ukrainian officials expressed concern that the order would weaken international pressure on Moscow at a critical moment when frontline defenders face relentless air assaults.",
    "Capitol Hill leaders from both sides of the aisle pledged to review the executive order. Democratic leaders accused the administration of undermining American national security, while several senior Republicans expressed deep unease.",
  ],
  paragraphsPart3: [
    "“Congress spoke with a nearly unanimous voice when it passed the Graham Act,” said one senior Republican senator who requested anonymity to speak candidly about the White House. “This executive order directly contradicts the clear intent of the statute.”",
    "Legal scholars noted that the legislation included national security waiver provisions, but questioned whether the administration’s broad interpretation would survive expected legal challenges.",
    "Meanwhile, markets reacted swiftly, with European energy indices fluctuating as traders assessed the implications of potentially easing restrictions on Russian oil shipments.",
  ],
  paragraphsPart4: [
    "Diplomats in Brussels and Washington held emergency consultations throughout the afternoon to determine how European sanctions regimes might adapt if Washington diverges from the multilateral coalition that has held together since 2022.",
    "White House aides insisted that the administration remained committed to supporting Ukraine, while emphasizing that diplomatic channels with Moscow must remain open.",
    "“Our objective is an enduring peace,” a senior National Security Council official said. “That requires every diplomatic and economic lever to remain available for presidential negotiation.”",
  ],
  reporterBios: [
    {
      name: "Michael Crowley",
      text: "covers the State Department and U.S. foreign policy for The New York Times.",
    },
    {
      name: "Maggie Haberman",
      text: "is a senior political correspondent covering Donald Trump and national politics.",
    },
    {
      name: "Siobhán O’Grady",
      text: "is an international correspondent covering conflicts, humanitarian crises and foreign policy.",
    },
  ],
  paragraphsSection9: [
    "Key allies in NATO warned that any unilateral easing of sanctions could fracture coalition solidarity.",
    "Officials in London and Berlin said they had received no advance warning of the executive order, leading to hasty consultations among foreign ministries.",
    "A spokesman for the Ukrainian foreign ministry reiterated that sanctions remain an indispensable instrument of international law and accountability.",
  ],
  printNotice:
    "A version of this article appears in print on Oct. 23, 2026, Section A, Page 1 of the New York edition with the headline: Trump Eases Russia Sanctions Law, Stirs Outcry on Capitol Hill.",
};

// Sidebar Editors' Picks (Section 5 - matching Image 2)
export const EDITORS_PICKS_SIDEBAR = [
  {
    id: "1",
    title: "The Essential Clive Barker",
    image: "/images/clive_barker_author.jpg",
  },
  {
    id: "2",
    title: "Make This Restaurant’s Brilliant Broccoli Dish at Home",
    image: "/images/cottage_meatballs.jpg",
  },
  {
    id: "3",
    title: "Have You Seen the T-Shirt?",
    image: "/images/talarico_texas_campaign.jpg",
  },
];
export const EDITORS_PICKS = EDITORS_PICKS_SIDEBAR;

// Around The World With The Times (Section 11)
export const AROUND_THE_WORLD_ITEMS = [
  {
    id: "atw1",
    headline: "India’s Biggest Business Empire",
    text: "A boardroom fight, an attempted veto and government intervention",
    linkText: "have plunged the Tata Group",
    trailingText: ", one of India’s most revered institutions, into a fight over its future.",
  },
  {
    id: "atw2",
    headline: "Immigrant Flavors in South Africa",
    text: "A self-taught chef",
    linkText: "borrows ingredients and ideas from restaurants",
    trailingText: "run by immigrants in South Africa, hoping to help counter rising xenophobia.",
  },
  {
    id: "atw3",
    headline: "Japan’s ‘Dancing Salaryman’",
    text: "Toru Utsumi, 60, works as a management consultant, but on his days off, he has become a global internet star —",
    linkText: "despite some local disapproval",
    trailingText: ".",
  },
  {
    id: "atw4",
    headline: "London’s Oldest Restaurant",
    text: "A 228 year old London restaurant whose patrons have included Charles Dickens",
    linkText: "is now a property of the National Trust",
    trailingText: ", the British preservation charity.",
  },
  {
    id: "atw5",
    headline: "The President’s Dog Psychic",
    text: "Before he became Argentina’s president, Javier Milei hired Celia Melamed",
    linkText: "to read his dog’s mind",
    trailingText: ".",
  },
];

// More in World Section (Section 12) - 6 items (2 rows x 3 cols)
export const MORE_IN_WORLD_ITEMS = [
  {
    id: "miw1",
    title: "Space Debris Found Twice Within Days Amid ‘Growing Casualty Risk’",
    image: "/images/space_debris.jpg",
    isPaidPost: false,
  },
  {
    id: "miw2",
    title: "A Cancer Revolution",
    image: "/images/cancer_revolution_gen.jpg",
    isPaidPost: false,
  },
  {
    id: "miw3",
    title: "Beyond the Court: The New Era of Sports",
    image: "/images/beyond_court_gen.jpg",
    isPaidPost: true,
    sponsor: "AMER SPORTS",
  },
  {
    id: "miw4",
    title: "What Is PHP? Why Are Government and Business Websites Going Offline?",
    image: "/images/what_is_php_gen.jpg",
    isPaidPost: false,
  },
  {
    id: "miw5",
    title: "Above Iran’s Capital, a Trump Impersonator Dances in a Jail Cell",
    image: "/images/trump_jail_gen.jpg",
    isPaidPost: false,
  },
  {
    id: "miw6",
    title: "The Failures of Emmanuel Macron",
    image: "/images/macron_failures_gen.jpg",
    isPaidPost: false,
  },
];
export const RELATED_WORLD_STORIES = MORE_IN_WORLD_ITEMS;

// Trending in The Times (Section 12) - 10 stories
export const TRENDING_STORIES = [
  "Key Trump Health Adviser Resigns Ahead of Midterm Elections",
  "In San Francisco, a Family Earning $325,000 Qualifies for Government Aid",
  "Monet Painting Sells for $56 Million in France",
  "Under Siege, Ukraine Uses F-16s to Shoot Down Russia’s Jet-Powered Drones",
  "Late Night: Trump Can’t Stop Talking About Jon Husted’s Rear End",
  "Opinion: Trump Is Still Chasing His Yalta. Here’s What He Doesn’t Get.",
  "Where to Buy Candy in New York City",
  "Homes for Sale in Manhattan and Brooklyn",
  "Opinion: Billionaire Republicans Are Vastly Outspending Democrats. Guess Who’s Winning.",
  "Trump Ties Disaster Aid to Votes as Midterm Fight Heats Up",
];

// Horizontal Editors' Picks (Section 13) - 3 cards
export const HORIZONTAL_EDITORS_PICKS = [
  {
    id: "hep1",
    title: "Which $1 Million Home Would You Choose?",
    image: "/images/red_brick_mansion.jpg",
  },
  {
    id: "hep2",
    title: "Help! Why Won’t Travel Insurance Pay for My $17,500 Broken Leg?",
    image: "/images/broken_leg_insurance.jpg",
  },
  {
    id: "hep3",
    title: "She Found a Long-Lost $25,000 C.D. Here’s What Happened Next.",
    image: "/images/lost_cd_investment.jpg",
  },
];

import { WRITERS } from "../writer/writerData";

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/['’‘“”"«»]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function getArticleHref(title: string): string {
  return `/article/${slugifyTitle(title)}`;
}

export interface ArticleSnippet {
  title: string;
  subtitle?: string;
  image?: string;
  category?: string;
}

export const HOMEPAGE_ARTICLES: Record<string, ArticleSnippet> = {
  // Main Editorial Hero
  "trump-signs-order-exempting-russia-from-sanctions-law": {
    title: "Trump Signs Order Exempting Russia From Sanctions Law",
    subtitle:
      "The sanctions were part of a measure that was named after Senator Lindsey Graham, the South Carolina Republican who died in July.",
    image: "/images/hero_putin_trump.jpg",
    category: "WORLD",
  },
  "is-this-the-breaking-point-for-trump-and-zelensky": {
    title: "Is This the Breaking Point for Trump and Zelensky?",
    subtitle:
      "If the two presidents’ war of words continues, it could threaten the crucial operational help that Ukraine still gets from the United States.",
    image: "/images/hero_putin_trump.jpg",
    category: "ANALYSIS",
  },
  "a-scandal-in-1971-this-film-is-now-a-respected-period-piece": {
    title: "A Scandal in 1971, This Film Is Now a Respected Period Piece",
    subtitle: "Revisiting a cinema landmark that shocked audiences half a century ago and became a classic.",
    image: "/images/thumb_scandal_1971.jpg",
    category: "ARTS",
  },
  "how-old-will-i-be-before-i-own-a-home": {
    title: "How Old Will I Be Before I Own a Home?",
    subtitle: "Surging mortgage rates and tight inventory have pushed homeownership further out of reach for a generation.",
    image: "/images/thumb_own_a_home.jpg",
    category: "REAL ESTATE",
  },
  "they-voted-for-trump-how-are-they-feeling-about-high-grocery-prices": {
    title: "They Voted for Trump. How Are They Feeling About High Grocery Prices?",
    subtitle: "Voters across swing districts evaluate economic promises against everyday grocery bills.",
    image: "/images/thumb_grocery_prices.jpg",
    category: "U.S. NEWS",
  },
  "why-one-of-the-worlds-greatest-mathematicians-is-on-a-war-footing": {
    title: "Why One of the World’s Greatest Mathematicians Is on a ‘War Footing’",
    subtitle: "Inside the urgent race to prove unsolved conjectures before automated reasoning transforms modern mathematics.",
    image: "/images/thumb_mathematician.jpg",
    category: "SCIENCE",
  },

  // Election 2026 Section
  "pennsylvania-explains-the-forces-shaping-the-midterms": {
    title: "Pennsylvania Explains the Forces Shaping the Midterms",
    subtitle: "Four battleground congressional districts in the state reveal fault lines that are echoing nationwide.",
    image: "/images/pa_election_map.png",
    category: "MIDTERMS 2026",
  },
  "trump-revives-2020-election-conspiracy-theories-as-midterms-loom": {
    title: "Trump Revives 2020 Election Conspiracy Theories as Midterms Loom",
    subtitle: "Rally speeches across battleground states signal a familiar playbook ahead of November.",
    image: "/images/trump_campaign_plane.jpg",
    category: "POLITICS",
  },
  "hegseth-is-singled-out-in-democrats-campaign-attacks-for-war-and-high-prices": {
    title: "Hegseth Is Singled Out in Democrats’ Campaign Attacks for War and High Prices",
    subtitle: "Cabinet members are seldom major figures in campaigns, but Defense Secretary Pete Hegseth has become a target.",
    image: "/images/hero_putin_trump.jpg",
    category: "POLITICS",
  },
  "no-kings-events-this-weekend-to-focus-on-voter-turnout-organizers-say": {
    title: "‘No Kings’ Events This Weekend to Focus on Voter Turnout, Organizers Say",
    subtitle: "Grassroots coalitions mobilize voters across key urban corridors ahead of midterm deadlines.",
    image: "/images/oregon_memorial.jpg",
    category: "POLITICS",
  },

  // Brazil & Trump Campaign Trail Section
  "todays-news-planet-earth-and-brazils-election": {
    title: "Today’s News: Planet Earth and Brazil’s Election",
    subtitle: "The Amazon rainforest has been a crucial battleground in the country’s presidential runoff.",
    image: "/images/amazon_rainforest_brazil.jpg",
    category: "THE WORLD",
  },
  "on-the-campaign-trail-trump-tries-to-outrun-a-bad-week-in-washington": {
    title: "On the Campaign Trail, Trump Tries to Outrun a Bad Week in Washington",
    subtitle: "As President Trump held rallies around the U.S., his White House was consumed by dramas that reinforce how his presidency has become a drag on G.O.P. prospects.",
    image: "/images/trump_campaign_plane.jpg",
    category: "ANALYSIS",
  },
  "trump-outlines-rapid-plan-to-close-and-overhaul-public-dc-golf-course": {
    title: "Trump Outlines Rapid Plan to Close and Overhaul Public D.C. Golf Course",
    subtitle: "The administration moves to redevelop landmark federal parklands under executive control.",
    image: "/images/trump_campaign_plane.jpg",
    category: "WASHINGTON",
  },

  // Pope Leo Section
  "pope-leo-leaves-hospital-days-after-lung-surgery": {
    title: "Pope Leo Leaves Hospital, Days After Lung Surgery",
    subtitle: "Leo XIV had been treated for lung cancer at Gemelli Hospital in Rome.",
    image: "/images/pope_leo_car.jpg",
    category: "WORLD",
  },

  // France Protests Section
  "the-53-year-old-in-a-suit-whos-the-face-of-frances-youth-protests": {
    title: "The 53-Year-Old in a Suit Who’s the Face of France’s Youth Protests",
    subtitle: "Bally Bagayoko, the mayor of a working-class suburb near Paris, has been a regular presence at student demonstrations, prompting applause and condemnation.",
    image: "/images/france_protests.jpg",
    category: "WORLD",
  },
  "protests-spread-to-140-cities-in-france": {
    title: "Protests Spread to 140 Cities in France",
    subtitle: "Demonstrations swell across university campuses and provincial centers.",
    image: "/images/france_protests.jpg",
    category: "WORLD",
  },

  // What to Watch Section
  "the-elizabeth-holmes-documentary-through-the-eyes-of-the-reporter-who-exposed-her": {
    title: "The Elizabeth Holmes Documentary, Through the Eyes of the Reporter Who Exposed Her",
    subtitle: "Ms. Holmes handed the makers of “You Can See Everything” — and the rest of the world — a microscope with which to observe and dissect her lies.",
    image: "/images/elizabeth_holmes_doc.jpg",
    category: "CULTURE",
  },
  "have-you-seen-the-movie-lets-talk": {
    title: "Have You Seen the Movie? Let’s Talk.",
    subtitle: "Critics and audiences debate the revelations and dramatic recreations in the new release.",
    image: "/images/elizabeth_holmes_doc.jpg",
    category: "MOVIES",
  },
  "the-slippery-mind-of-elizabeth-holmes": {
    title: "The Slippery Mind of Elizabeth Holmes",
    subtitle: "A documentary unpacks the psychology and deceit that captivated Silicon Valley.",
    image: "/images/elizabeth_holmes_doc.jpg",
    category: "MOVIE REVIEW",
  },

  // Weekend Reads Section
  "50-years-in-whats-the-point-of-u2": {
    title: "50 Years In, What’s the Point of U2?",
    subtitle: "Bono and The Edge reflect on reinvention, stadium rock, and whether rock ’n’ roll still has something urgent to say.",
    image: "/images/weekend_u2_hero.jpg",
    category: "THE INTERVIEW",
  },
  "cereal-is-in-a-crunch-can-a-health-pitch-save-it": {
    title: "Cereal Is in a Crunch. Can a Health Pitch Save It?",
    subtitle: "As more Americans turn away from the snap, crackle and sugar, the industry is trying to capitalize on the obsession with wellness.",
    image: "/images/cereal_crunch_bowl.jpg",
    category: "BUSINESS",
  },
  "sense-and-sensibility-cant-buy-me-love": {
    title: "‘Sense and Sensibility’: Can’t Buy Me Love",
    subtitle: "A new adaptation explores the emotional and financial realities of the Dashwood sisters.",
    image: "/images/sense_sensibility.jpg",
    category: "MOVIE REVIEW",
  },
  "macbeth-and-more-theater-to-stream-in-october": {
    title: "‘Macbeth’ and More Theater to Stream in October",
    subtitle: "From Shakespearean tragedy to experimental staging, the best stage performances streaming this month.",
    image: "/images/macbeth_theater.jpg",
    category: "THEATER",
  },
  "5-international-movies-to-watch": {
    title: "5 International Movies to Watch",
    subtitle: "Striking cinema from France, South Korea, Brazil, Germany and Nigeria.",
    image: "/images/international_movies.jpg",
    category: "MOVIES",
  },
  "documentary-on-leonard-peltier-uses-ai-to-mixed-effect": {
    title: "Documentary on Leonard Peltier Uses A.I. to Mixed Effect",
    subtitle: "Filmmakers explore new digital archival techniques to tell the story of the indigenous activist.",
    image: "/images/peltier_protest.jpg",
    category: "FILM",
  },
  "he-was-a-star-nfl-receiver-now-hes-the-leagues-biggest-enigma": {
    title: "He Was a Star N.F.L. Receiver. Now He’s the League’s Biggest Enigma.",
    subtitle: "An examination of career highs, private battles and a sudden retreat from the spotlight.",
    image: "/images/nfl_receiver_enigma.jpg",
    category: "SPORTS",
  },
  "one-grieving-mother-two-mariners-tickets-and-a-season-of-new-friends": {
    title: "One Grieving Mother, Two Mariners Tickets and a Season of New Friends",
    subtitle: "Finding community and solace in section 124 at T-Mobile Park.",
    image: "/images/mariners_mother.jpg",
    category: "THE GREAT READ",
  },
  "coming-out-at-50-can-be-hard-shelly-found-a-coach": {
    title: "Coming Out at 50 Can Be Hard. Shelly Found a Coach.",
    subtitle: "Navigating identity, family expectations and midlife transformation with guided support.",
    image: "/images/shelly_portrait.jpg",
    category: "THE GREAT READ",
  },
  "cottage-cheese-meatballs": {
    title: "Cottage Cheese Meatballs",
    subtitle: "Tender, savory, high-protein meatballs baked in rich marinara sauce.",
    image: "/images/cottage_meatballs.jpg",
    category: "COOKING",
  },
  "apple-amaro-spritz": {
    title: "Apple Amaro Spritz",
    subtitle: "A crisp autumn cocktail blending bitter amaro, sparkling cider and prosecco.",
    image: "/images/apple_amaro_spritz.jpg",
    category: "COOKING",
  },

  // More News Section
  "the-leap-second-has-been-canceled": {
    title: "The Leap Second Has Been Canceled",
    subtitle: "Earth’s rotation subtly changes the length of the day. Now our clocks won’t change with it — at least not for a very long time.",
    image: "/images/earth_space_night.jpg",
    category: "SCIENCE",
  },
  "manchester-city-leads-ipswich-as-liverpool-trails-brentford": {
    title: "Manchester City Leads Ipswich as Liverpool Trails Brentford",
    subtitle: "Premier League action heats up as title contenders clash across England.",
    image: "/images/mancity_ipswich_crop.jpg",
    category: "SPORTS",
  },

  // Right Sidebar
  "for-a-mere-2-million-you-could-own-3-books-that-unlocked-the-universe": {
    title: "For a Mere $2 Million, You Could Own 3 Books That Unlocked the Universe",
    subtitle: "At Sotheby’s, a feast of rare science books includes volumes from Copernicus, Galileo and Newton that revolutionized human understanding of the cosmos.",
    image: "/images/sense_sensibility.jpg",
    category: "SCIENCE",
  },
  "im-looking-to-downsize-is-prefab-housing-the-way-to-go": {
    title: "I’m Looking to Downsize. Is Prefab Housing the Way to Go?",
    subtitle: "Architects and homeowners weigh cost, energy efficiency, and modern modular designs.",
    image: "/images/thumb_own_a_home.jpg",
    category: "REAL ESTATE",
  },
  "3-tools-to-help-keep-your-anger-in-check": {
    title: "3 Tools to Help Keep Your Anger in Check",
    subtitle: "Psychologists share practical cognitive strategies for diffusing frustration.",
    image: "/images/macbeth_theater.jpg",
    category: "WELL",
  },

  // The Athletic
  "erling-haaland-helped-manchester-city-defeat-ipswich-but-does-he-need-a-rest": {
    title: "Erling Haaland Helped Manchester City Defeat Ipswich. But Does He Need a Rest?",
    subtitle: "The Norwegian has scored in each of City’s eight games this season, although he limped off after Saturday’s win.",
    image: "/images/mancity_ipswich.jpg",
    category: "SPORTS",
  },
  "she-lost-a-friend-and-struggled-to-get-out-of-bed-then-she-met-an-nfl-star": {
    title: "She Lost a Friend and Struggled to Get Out of Bed. Then She Met an N.F.L. Star.",
    subtitle: "Garrett Wilson has always aimed to be a “great man.” Earlier in October, the five minutes he spent with a fan changed her life.",
    image: "/images/nfl_receiver_enigma.jpg",
    category: "SPORTS",
  },
  "mlb-saw-the-rain-coming-and-gave-fans-an-unnecessary-night-of-nonsense-anyway": {
    title: "M.L.B. Saw the Rain Coming and Gave Fans an Unnecessary Night of Nonsense Anyway",
    subtitle: "Baseball has now changed the competitive conditions of the A.L.C.S. because it refuses to be flexible, a columnist for The Athletic writes.",
    image: "/images/mariners_mother.jpg",
    category: "SPORTS",
  },

  // Well Section
  "what-a-biological-age-test-can-actually-tell-you": {
    title: "What a Biological Age Test Can Actually Tell You",
    subtitle: "Epigenetic clocks claim to measure cellular aging, but medical researchers advise caution.",
    image: "/images/thumb_grocery_prices.jpg",
    category: "WELL",
  },
  "do-you-have-purpose-anxiety": {
    title: "Do You Have ‘Purpose Anxiety’?",
    subtitle: "How the cultural obsession with finding a passion can lead to paralysis and stress.",
    image: "/images/thumb_mathematician.jpg",
    category: "WELL",
  },
  "simple-ways-to-find-more-joy-when-youre-feeling-hopeless": {
    title: "Simple Ways to Find More Joy When You’re Feeling Hopeless",
    subtitle: "Micro-habits and gratitude practices that build resilience during turbulent times.",
    image: "/images/thumb_own_a_home.jpg",
    category: "WELL",
  },
  "kier-gaines-isnt-your-textbook-therapist-he-likes-it-that-way": {
    title: "Kier Gaines Isn’t Your Textbook Therapist. He Likes It That Way.",
    subtitle: "The licensed professional counselor brings mental health wisdom to millions on social media.",
    image: "/images/mariners_mother.jpg",
    category: "WELL",
  },
  "its-the-most-common-cancer-in-women-how-much-do-you-know-about-it": {
    title: "It’s the Most Common Cancer in Women. How Much Do You Know About It?",
    subtitle: "New screening guidelines and early detection advancements for breast cancer.",
    image: "/images/thumb_5_movies.jpg",
    category: "WELL",
  },

  // Culture & Lifestyle
  "watch-these-ballet-dancers-crack-open-a-celestial-realm": {
    title: "Watch These Ballet Dancers Crack Open a Celestial Realm",
    subtitle: "In “Pithoprakta,” a rarely seen work by George Balanchine, Suzanne Farrell brings a tense and eerie dance back to life at New York City Ballet.",
    image: "/images/macbeth_theater.jpg",
    category: "DANCE",
  },

  // Wirecutter
  "5-tips-to-master-a-new-language": {
    title: "5 Tips to Master a New Language",
    subtitle: "Language-learning apps can get you started. But these other methods can help nudge you towards fluency.",
    image: "/images/sense_sensibility.jpg",
    category: "WIRECUTTER",
  },
  "change-your-toilet-seat-change-your-life": {
    title: "Change Your Toilet Seat, Change Your Life",
    subtitle: "No, seriously. The best bidet and soft-close seats tested and reviewed.",
    image: "/images/thumb_own_a_home.jpg",
    category: "WIRECUTTER",
  },

  // Watch Today's Videos
  "katie-zacharia-is-fired-after-5-days-as-white-house-press-secretary": {
    title: "Katie Zacharia Is Fired After 5 Days as White House Press Secretary",
    subtitle: "President Trump said on Friday that he had encouraged Zacharia to reconsider the job.",
    image: "/images/hero_putin_trump.jpg",
    category: "POLITICS",
  },
  "our-very-existence-is-on-the-ballot": {
    title: "‘Our Very Existence Is on the Ballot’",
    subtitle: "Voters and community advocates share perspectives on civil rights in the midterms.",
    image: "/images/shelly_portrait.jpg",
    category: "OPINION",
  },

  // Paid Post
  "beyond-the-court-the-new-era-of-sports": {
    title: "Beyond the Court: The New Era of Sports",
    subtitle: "How iconic equipment brands are reshaping athletic culture.",
    image: "/images/weekend_u2_hero.jpg",
    category: "PAID POST",
  },
};

export function getArticleBySlug(slug?: string): ArticleData {
  if (!slug || slug === MAIN_ARTICLE.slug) return MAIN_ARTICLE;

  // 1. Search in WRITERS (Featured & Latest articles)
  let foundArticle: {
    id: string;
    title: string;
    date: string;
    image: string;
    slug?: string;
    summary?: string;
    byline?: string;
    extraLink?: string;
  } | null = null;
  let foundWriterKey: string | null = null;

  for (const [key, writer] of Object.entries(WRITERS)) {
    const feat = writer.featured.find((a) => a.slug === slug);
    if (feat) {
      foundArticle = feat;
      foundWriterKey = key;
      break;
    }
    const lat = writer.latest.find((a) => a.slug === slug);
    if (lat) {
      foundArticle = lat;
      foundWriterKey = key;
      break;
    }
  }

  if (foundArticle) {
    const rawByline =
      foundArticle.byline || `By ${WRITERS[foundWriterKey!].name.toUpperCase()}`;
    const upperByline = rawByline.toUpperCase();
    const authors: ArticleAuthor[] = [];

    if (
      upperByline.includes("CROWLEY") ||
      (foundWriterKey === "michael-crowley" && !foundArticle.byline)
    ) {
      authors.push({
        name: "Michael Crowley",
        slug: "michael-crowley",
        avatar: "/images/gen_crowley_portrait.jpg",
      });
    }
    if (
      upperByline.includes("HABERMAN") ||
      (foundWriterKey === "maggie-haberman" && !foundArticle.byline)
    ) {
      authors.push({
        name: "Maggie Haberman",
        slug: "maggie-haberman",
        avatar: "/images/gen_haberman_portrait.jpg",
      });
    }
    if (
      upperByline.includes("O'GRADY") ||
      upperByline.includes("O’GRADY") ||
      (foundWriterKey === "siobhan-ogrady" && !foundArticle.byline)
    ) {
      authors.push({
        name: "Siobhán O’Grady",
        slug: "siobhan-ogrady",
        avatar: "/images/gen_ogrady_portrait.jpg",
      });
    }

    if (authors.length === 0 && foundWriterKey && WRITERS[foundWriterKey]) {
      authors.push({
        name: WRITERS[foundWriterKey].name,
        slug: WRITERS[foundWriterKey].slug,
        avatar: WRITERS[foundWriterKey].avatar,
      });
    }

    const reporterBios = authors.map((auth) => ({
      name: auth.name,
      text:
        auth.slug === "michael-crowley"
          ? "covers the State Department and U.S. foreign policy for The New York Times."
          : auth.slug === "maggie-haberman"
          ? "is a senior political correspondent covering Donald Trump and national politics."
          : "is an international correspondent covering conflicts, humanitarian crises and foreign policy.",
    }));

    const bylineDetails =
      authors
        .map((a) =>
          a.slug === "michael-crowley"
            ? "Michael Crowley reported from Washington"
            : a.slug === "maggie-haberman"
            ? "Maggie Haberman from New York"
            : "Siobhán O’Grady from Kyiv"
        )
        .join(", ") + ".";

    return {
      ...MAIN_ARTICLE,
      slug,
      title: foundArticle.title,
      subtitle:
        foundArticle.summary ||
        `In-depth reporting and continuous global analysis on ${foundArticle.title}.`,
      image: foundArticle.image || MAIN_ARTICLE.image,
      imageCaption: foundArticle.title,
      date: `Published ${foundArticle.date || "Oct. 22, 2026"}`,
      publishedDate: foundArticle.date || "Oct. 22, 2026",
      updatedDate: "Updated recently",
      byline: rawByline,
      bylineDetails,
      authors,
      reporterBios: reporterBios.length > 0 ? reporterBios : MAIN_ARTICLE.reporterBios,
    };
  }

  // 2. Search in HOMEPAGE_ARTICLES
  const hp = HOMEPAGE_ARTICLES[slug];
  if (hp) {
    return {
      ...MAIN_ARTICLE,
      slug,
      category: hp.category || MAIN_ARTICLE.category,
      title: hp.title,
      subtitle:
        hp.subtitle ||
        `In-depth reporting and continuous global analysis on ${hp.title}.`,
      image: hp.image || MAIN_ARTICLE.image,
      imageCaption: hp.title,
    };
  }

  // 3. Fallback for custom or unknown slug: format clean title
  const cleanTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    ...MAIN_ARTICLE,
    slug,
    category: "WORLD",
    title: cleanTitle,
    subtitle: `In-depth reporting and continuous global analysis on ${cleanTitle}.`,
  };
}

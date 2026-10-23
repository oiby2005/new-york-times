export interface WriterFeaturedArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  slug?: string;
}

export interface WriterLatestArticle {
  id: string;
  date: string;
  title: string;
  summary: string;
  byline: string;
  image: string;
  extraLink?: string;
  slug?: string;
}

export interface WriterData {
  slug: string;
  name: string;
  tagline: string;
  avatar: string;
  whatICover: string;
  myBackground: string[];
  journalisticEthics: string;
  contact: {
    email: string;
    x: string;
    signal: string;
    linkedIn: string;
    tips: string;
  };
  featured: WriterFeaturedArticle[];
  latest: WriterLatestArticle[];
}

export const WRITERS: Record<string, WriterData> = {
  "michael-crowley": {
    slug: "michael-crowley",
    name: "Michael Crowley",
    tagline:
      "I am a reporter covering the State Department and U.S. foreign policy for The New York Times.",
    avatar: "/images/gen_crowley_portrait.jpg",
    whatICover:
      "I write about the State Department, diplomacy, and the making of American foreign policy, and I often travel abroad with the secretary of state. Some of the topics I have covered in depth include U.S.-Russia relations and the war in Ukraine, efforts to contain Iran’s nuclear program and American efforts to defend democracy against authoritarianism. I am fascinated by the hard choices required by foreign policy as America balances its values with its interests.",
    myBackground: [
      "Over my career I have covered local, state, national and international news at news organizations including The Boston Globe, The New Republic, Time and Politico. Before focusing almost exclusively on global issues, I wrote extensively about politics, Congress and presidential campaigns — experience that helps inform my understanding of how foreign policy is shaped.",
      "I joined The Times in 2019 as a Trump White House reporter focusing on national security and have been on the diplomatic beat since January 2021. I have reported from more than 40 countries and counting. I am a native of New Haven, Conn., where I attended Yale University.",
    ],
    journalisticEthics:
      "I believe strongly in the standards of integrity to which all Times journalists are committed and which are outlined in our Ethical Journalism Handbook. Foreign policy can involve fiercely competing visions, sometimes with life-and-death stakes. I strive to approach my stories in a fair-minded and nonideological way that informs and interests readers. The Times pays for my trips on the secretary of state’s official plane and I do not accept gifts or trips from foreign governments to avoid even the appearance of influence over my coverage.",
    contact: {
      email: "michael.crowley@nytimes.com",
      x: "@michaelcrowley",
      signal: "email, NYT tips, or DM to get my number",
      linkedIn: "Michael Crowley",
      tips: "nytimes.com/tips",
    },
    featured: [
      {
        id: "feat-1",
        title: "Russia’s Embassy in Washington Becomes a Different Kind of Battle Zone",
        date: "July 3, 2023",
        image: "/images/gen_feat_embassy.jpg",
        slug: "russias-embassy-in-washington-becomes-a-different-kind-of-battle-zone",
      },
      {
        id: "feat-2",
        title: "For Ukraine, Many Antiwar Activists in the U.S. Make an Exception",
        date: "August 14, 2023",
        image: "/images/gen_feat_antiwar.jpg",
        slug: "for-ukraine-many-antiwar-activists-in-the-us-make-an-exception",
      },
    ],
    latest: [
      {
        id: "lat-1",
        date: "Oct. 22, 2026",
        title: "Trump Asked Musk to Reverse Limits on Ukraine’s Military Internet Use",
        summary:
          "The call from the president about the Starshield network came after officials in Ukraine reported that they found new limits on the use of military drones in their war against Russia.",
        byline: "By MICHAEL CROWLEY, MAGGIE HABERMAN and SIOBHÁN O’GRADY",
        image: "/images/gen_thumb_drone.jpg",
        slug: "trump-asked-musk-to-reverse-limits-on-ukraines-military-internet-use",
      },
      {
        id: "lat-2",
        date: "Oct. 20, 2026",
        title: "Taunting Trump Over Gas Prices, Iran Braces for Aftermath of U.S. Vote",
        summary:
          "The midterm elections appear to be a factor for both sides in the war as President Trump weighs his next steps.",
        byline: "By MICHAEL CROWLEY",
        image: "/images/gen_thumb_gaspump.jpg",
        slug: "taunting-trump-over-gas-prices-iran-braces-for-aftermath-of-us-vote",
      },
      {
        id: "lat-3",
        date: "Oct. 14, 2026",
        title: "U.S. Is Sending Hundreds of Troops to Latin America",
        summary:
          "The Pentagon is expanding its fight against drug traffickers, even as the plans recall a long and bloody history of U.S. intervention in the region.",
        byline: "By ERIC SCHMITT, GREG JAFFE and ANNIE CORREAL",
        extraLink: "Leer en español",
        image: "/images/gen_thumb_troops.jpg",
        slug: "us-is-sending-hundreds-of-troops-to-latin-america",
      },
      {
        id: "lat-4",
        date: "Oct. 6, 2026",
        title: "In Iceland, Rubio Dodges a Diplomatic Flap Over a Trump Map",
        summary:
          "President Trump had posted a map on his Truth Social account in September depicting Iceland as part of U.S. territory.",
        byline: "By MICHAEL CROWLEY",
        image: "/images/gen_thumb_iceland.jpg",
        slug: "in-iceland-rubio-dodges-a-diplomatic-flap-over-a-trump-map",
      },
      {
        id: "lat-5",
        date: "Sept. 29, 2026",
        title: "A Very American Makeover for the State Department’s ‘Hall of Flags’",
        summary:
          "The flags of dozens of countries had hung above the State Department’s main atrium. A red, white and blue change has sparked a debate.",
        byline: "By MICHAEL CROWLEY",
        image: "/images/gen_thumb_flags.jpg",
        slug: "a-very-american-makeover-for-the-state-departments-hall-of-flags",
      },
      {
        id: "lat-6",
        date: "Sept. 25, 2026",
        title: "China’s Xi Snubs a Troubled U.N. for Trump, Overshadowing Its Big Week",
        summary:
          "The U.S.-China summit offered a sharp contrast with the action at the faltering United Nations in a gridlocked New York.",
        byline: "By MICHAEL CROWLEY",
        extraLink: "阅读简体中文版 · 閱讀繁體中文版",
        image: "/images/gen_thumb_limo.jpg",
        slug: "chinas-xi-snubs-a-troubled-un-for-trump-overshadowing-its-big-week",
      },
      {
        id: "lat-7",
        date: "Sept. 23, 2026",
        title: "Trump Aides Seek to Jump-Start Diplomacy With Iran as Crisis Widens",
        summary:
          "Secretary of State Marco Rubio said that U.S. negotiators had restarted conversations about Iran’s nuclear program, but that there were no breakthroughs.",
        byline: "By EDWARD WONG",
        image: "/images/us_capitol_hill_lead.jpg",
        slug: "trump-aides-seek-to-jump-start-diplomacy-with-iran-as-crisis-widens",
      },
      {
        id: "lat-8",
        date: "Sept. 23, 2026",
        title: "Trump Invites Putin to Attend Group of 20 Summit in Miami",
        summary:
          "Many leaders are unlikely to welcome the Russian leader’s presence at the event because of his country’s war against Ukraine.",
        byline: "By EDWARD WONG and MICHAEL CROWLEY",
        image: "/images/hero_putin_trump.jpg",
        slug: "trump-invites-putin-to-attend-group-of-20-summit-in-miami",
      },
      {
        id: "lat-9",
        date: "Sept. 22, 2026",
        title: "At U.N., Trump Says He Will Strike a Deal With Iran or ‘Annihilate’ It",
        summary:
          "President Trump’s statement to the U.N. General Assembly that he could “drive them into hell with no chance of survival” was a jarring departure in a forum devoted to world peace.",
        byline: "By FARNAZ FASSIHI, JOLAN KAYNO YOUNGS, DAVID E. SANGER and MICHAEL LEVENSON",
        image: "/images/earth_space_night.jpg",
        slug: "at-un-trump-says-he-will-strike-a-deal-with-iran-or-annihilate-it",
      },
      {
        id: "lat-10",
        date: "Sept. 21, 2026",
        title: "Washington Memo: Behind the Scenes of High-Stakes Diplomacy",
        summary:
          "Diplomats and envoys grapple with shifting alliances as the administration navigates multiple international negotiations.",
        byline: "By MICHAEL CROWLEY",
        image: "/images/gen_thumb_drone.jpg",
        slug: "from-kenya-to-japan-rush-to-fix-security-flaw-takes-sites-briefly-offline",
      },
    ],
  },

  "maggie-haberman": {
    slug: "maggie-haberman",
    name: "Maggie Haberman",
    tagline:
      "I am a senior political correspondent covering Donald Trump and American politics for The New York Times.",
    avatar: "/images/gen_haberman_portrait.jpg",
    whatICover:
      "I write about Donald J. Trump, the Republican Party, and national politics. I have reported on presidential campaigns, congressional investigations, the inner workings of the White House, and the intersection of politics, law, and business.",
    myBackground: [
      "I joined The New York Times in 2015 after previously reporting for Politico, the New York Post and the New York Daily News. In 2018, I was part of a team that won a Pulitzer Prize for national reporting on Donald Trump's advisers and contacts with Russia.",
      "I am the author of the best-selling book 'Confidence Man: The Making of Donald Trump and the Breaking of America.' I grew up in New York City and graduated from Sarah Lawrence College.",
    ],
    journalisticEthics:
      "I adhere strictly to The New York Times’s standards of journalistic independence, fact-checking, and ethical guidelines. Reporting on high-stakes political figures requires diligence, impartiality, and rigorous verification of sources to deliver fair and accurate reporting to our readers.",
    contact: {
      email: "maggie.haberman@nytimes.com",
      x: "@maggienyt",
      signal: "available for verified sources",
      linkedIn: "Maggie Haberman",
      tips: "nytimes.com/tips",
    },
    featured: [
      {
        id: "feat-m1",
        title: "How Donald Trump Built His 2026 Campaign Machinery",
        date: "Sept. 15, 2026",
        image: "/images/hero_putin_trump.jpg",
        slug: "how-donald-trump-built-his-2026-campaign-machinery",
      },
      {
        id: "feat-m2",
        title: "Behind Closed Doors: Trump’s Strategy for the Midterms",
        date: "August 28, 2026",
        image: "/images/gen_feat_embassy.jpg",
        slug: "behind-closed-doors-trumps-strategy-for-the-midterms",
      },
    ],
    latest: [
      {
        id: "lat-m1",
        date: "Oct. 22, 2026",
        title: "Trump Asked Musk to Reverse Limits on Ukraine’s Military Internet Use",
        summary:
          "The call from the president about the Starshield network came after officials in Ukraine reported that they found new limits on the use of military drones in their war against Russia.",
        byline: "By MICHAEL CROWLEY, MAGGIE HABERMAN and SIOBHÁN O’GRADY",
        image: "/images/gen_thumb_drone.jpg",
        slug: "trump-asked-musk-to-reverse-limits-on-ukraines-military-internet-use",
      },
      {
        id: "lat-m2",
        date: "Oct. 19, 2026",
        title: "Trump Campaigns for Republicans as Turmoil Mounts in Washington",
        summary:
          "Our White House correspondent traveled with President Trump as he campaigned across the country ahead of the midterms. As the president touted his record, political drama mounted in Washington.",
        byline: "By MAGGIE HABERMAN and TYLER PAGER",
        image: "/images/hero_putin_trump.jpg",
        slug: "trump-campaigns-for-republicans-as-turmoil-mounts-in-washington",
      },
      {
        id: "lat-m3",
        date: "Oct. 18, 2026",
        title: "Federal Appeals Court Reinstates Key Provisions of Arizona Voting Measure",
        summary:
          "The ruling clears the way for state election officials to enforce new documentary proof of citizenship rules ahead of the upcoming election.",
        byline: "By MAGGIE HABERMAN and ADAM LIPTAK",
        image: "/images/pa_election_map.jpg",
        slug: "federal-appeals-court-reinstates-key-provisions-of-arizona-voting-measure",
      },
      {
        id: "lat-m4",
        date: "Oct. 12, 2026",
        title: "Inside the Closed-Door Meetings of Trump’s Defense Transition Team",
        summary:
          "Advisers clash over top Cabinet appointments and foreign policy directives ahead of November.",
        byline: "By MAGGIE HABERMAN",
        image: "/images/us_capitol_hill_lead.jpg",
        slug: "inside-the-closed-door-meetings-of-trumps-defense-transition-team",
      },
      {
        id: "lat-m5",
        date: "Oct. 6, 2026",
        title: "In Iceland, Rubio Dodges a Diplomatic Flap Over a Trump Map",
        summary:
          "President Trump had posted a map on his Truth Social account in September depicting Iceland as part of U.S. territory.",
        byline: "By MICHAEL CROWLEY and MAGGIE HABERMAN",
        image: "/images/gen_thumb_iceland.jpg",
        slug: "in-iceland-rubio-dodges-a-diplomatic-flap-over-a-trump-map",
      },
      {
        id: "lat-m6",
        date: "Sept. 29, 2026",
        title: "Key Trump Health Adviser Resigns Ahead of Midterm Elections",
        summary:
          "The departure comes amid growing friction over federal healthcare priorities and executive orders.",
        byline: "By MAGGIE HABERMAN",
        image: "/images/peltier_protest.jpg",
        slug: "key-trump-health-adviser-resigns-ahead-of-midterm-elections",
      },
      {
        id: "lat-m7",
        date: "Sept. 25, 2026",
        title: "China’s Xi Snubs a Troubled U.N. for Trump, Overshadowing Its Big Week",
        summary:
          "The U.S.-China summit offered a sharp contrast with the action at the faltering United Nations in a gridlocked New York.",
        byline: "By MICHAEL CROWLEY and MAGGIE HABERMAN",
        image: "/images/gen_thumb_limo.jpg",
        slug: "chinas-xi-snubs-a-troubled-un-for-trump-overshadowing-its-big-week",
      },
      {
        id: "lat-m8",
        date: "Sept. 23, 2026",
        title: "Trump Invites Putin to Attend Group of 20 Summit in Miami",
        summary:
          "Many leaders are unlikely to welcome the Russian leader’s presence at the event because of his country’s war against Ukraine.",
        byline: "By EDWARD WONG, MICHAEL CROWLEY and MAGGIE HABERMAN",
        image: "/images/hero_putin_trump.jpg",
        slug: "trump-invites-putin-to-attend-group-of-20-summit-in-miami",
      },
      {
        id: "lat-m9",
        date: "Sept. 20, 2026",
        title: "Fund-Raising Surge Reshapes GOP Battleground Priorities",
        summary:
          "Super PACs pour millions into Senate races across Pennsylvania, Arizona and Wisconsin.",
        byline: "By MAGGIE HABERMAN",
        image: "/images/wisconsin_governor_debate.jpg",
        slug: "fund-raising-surge-reshapes-gop-battleground-priorities",
      },
      {
        id: "lat-m10",
        date: "Sept. 14, 2026",
        title: "The Battle for the Rust Belt: Inside the Trump Strategy Session",
        summary:
          "Senior advisers analyze voting demographics and shift media spend into key Midwestern markets.",
        byline: "By MAGGIE HABERMAN",
        image: "/images/toledo_chemical_plant.jpg",
        slug: "the-battle-for-the-rust-belt-inside-the-trump-strategy-session",
      },
    ],
  },

  "siobhan-ogrady": {
    slug: "siobhan-ogrady",
    name: "Siobhán O’Grady",
    tagline:
      "I am an international correspondent covering conflicts, humanitarian crises and foreign policy for The New York Times.",
    avatar: "/images/gen_ogrady_portrait.jpg",
    whatICover:
      "I report on armed conflict, international humanitarian crises, civilian resistance, and frontline warfare. My reporting focuses on the ground realities of the war in Ukraine, Middle Eastern geopolitical volatility, human displacement, and diplomatic negotiations.",
    myBackground: [
      "Before joining The New York Times, I was a foreign correspondent for The Washington Post and a staff writer at Foreign Policy magazine. I have reported from more than 25 countries across Europe, Africa, and the Middle East, covering frontline trenches in eastern Ukraine, the fall of Kabul, and refugee flows across the Mediterranean.",
      "I graduated from Georgetown University’s Walsh School of Foreign Service.",
    ],
    journalisticEthics:
      "I believe strongly in the standards of integrity to which all Times journalists are committed and which are outlined in our Ethical Journalism Handbook. Frontline reporting demands deep respect for truth, meticulous verification of accounts, and safeguarding the dignity and security of vulnerable civilians.",
    contact: {
      email: "siobhan.ogrady@nytimes.com",
      x: "@siobhan_ogrady",
      signal: "contact for secure number",
      linkedIn: "Siobhán O'Grady",
      tips: "nytimes.com/tips",
    },
    featured: [
      {
        id: "feat-s1",
        title: "Russia’s Embassy in Washington Becomes a Different Kind of Battle Zone",
        date: "July 3, 2023",
        image: "/images/gen_feat_embassy.jpg",
        slug: "russias-embassy-in-washington-becomes-a-different-kind-of-battle-zone",
      },
      {
        id: "feat-s2",
        title: "For Ukraine, Many Antiwar Activists in the U.S. Make an Exception",
        date: "August 14, 2023",
        image: "/images/gen_feat_antiwar.jpg",
        slug: "for-ukraine-many-antiwar-activists-in-the-us-make-an-exception",
      },
    ],
    latest: [
      {
        id: "lat-s1",
        date: "Oct. 22, 2026",
        title: "Trump Asked Musk to Reverse Limits on Ukraine’s Military Internet Use",
        summary:
          "The call from the president about the Starshield network came after officials in Ukraine reported that they found new limits on the use of military drones in their war against Russia.",
        byline: "By MICHAEL CROWLEY, MAGGIE HABERMAN and SIOBHÁN O’GRADY",
        image: "/images/gen_thumb_drone.jpg",
        slug: "trump-asked-musk-to-reverse-limits-on-ukraines-military-internet-use",
      },
      {
        id: "lat-s2",
        date: "Oct. 18, 2026",
        title: "Under Siege, Ukraine Uses F-16s to Shoot Down Russia’s Jet-Powered Drones",
        summary:
          "Frontline defenders scramble to intercept high-speed unmanned aircraft threatening electrical grids in central Ukraine.",
        byline: "By SIOBHÁN O’GRADY",
        image: "/images/space_debris.jpg",
        slug: "under-siege-ukraine-uses-f-16s-to-shoot-down-russias-jet-powered-drones",
      },
      {
        id: "lat-s3",
        date: "Oct. 14, 2026",
        title: "U.S. Is Sending Hundreds of Troops to Latin America",
        summary:
          "The Pentagon is expanding its fight against drug traffickers, even as the plans recall a long and bloody history of U.S. intervention in the region.",
        byline: "By SIOBHÁN O’GRADY and ERIC SCHMITT",
        extraLink: "Leer en español",
        image: "/images/gen_thumb_troops.jpg",
        slug: "us-is-sending-hundreds-of-troops-to-latin-america",
      },
      {
        id: "lat-s4",
        date: "Oct. 8, 2026",
        title: "Civilians in Eastern Ukraine Brace for Winter Power Shortages",
        summary:
          "Across frontline villages, families stock firewood and rebuild damaged generators as cold weather approaches.",
        byline: "By SIOBHÁN O’GRADY",
        image: "/images/earth_space_night.jpg",
        slug: "civilians-in-eastern-ukraine-brace-for-winter-power-shortages",
      },
      {
        id: "lat-s5",
        date: "Oct. 2, 2026",
        title: "Displacement and Hope: Syrian Refugees Build Communities in Europe",
        summary:
          "A decade after fleeing war, families find footing in new homelands while maintaining ties to their heritage.",
        byline: "By SIOBHÁN O’GRADY",
        image: "/images/gen_thumb_gaspump.jpg",
        slug: "displacement-and-hope-syrian-refugees-build-communities-in-europe",
      },
      {
        id: "lat-s6",
        date: "Sept. 26, 2026",
        title: "Humanitarian Relief Stalls at Border Crossings Amid Bureaucracy",
        summary:
          "Aid workers describe grueling delays delivering medical supplies and infant nourishment to conflict zones.",
        byline: "By SIOBHÁN O’GRADY",
        image: "/images/gen_thumb_troops.jpg",
        slug: "humanitarian-relief-stalls-at-border-crossings-amid-bureaucracy",
      },
      {
        id: "lat-s7",
        date: "Sept. 22, 2026",
        title: "At U.N., Trump Says He Will Strike a Deal With Iran or ‘Annihilate’ It",
        summary:
          "President Trump’s statement to the U.N. General Assembly that he could “drive them into hell with no chance of survival” was a jarring departure in a forum devoted to world peace.",
        byline: "By SIOBHÁN O’GRADY, FARNAZ FASSIHI and DAVID E. SANGER",
        image: "/images/gen_thumb_flags.jpg",
        slug: "at-un-trump-says-he-will-strike-a-deal-with-iran-or-annihilate-it",
      },
      {
        id: "lat-s8",
        date: "Sept. 18, 2026",
        title: "How Frontline Medics Are Revolutionizing Battlefield Trauma Care",
        summary:
          "Advanced portable medical equipment and rapid drone delivery of blood plasma are saving lives under fire.",
        byline: "By SIOBHÁN O’GRADY",
        image: "/images/cancer_revolution_gen.jpg",
        slug: "how-frontline-medics-are-revolutionizing-battlefield-trauma-care",
      },
      {
        id: "lat-s9",
        date: "Sept. 11, 2026",
        title: "In the Shadow of War, Ukrainian Cultural Heritage Faces Peril",
        summary:
          "Museum curators and volunteers work around the clock to pack and shield historical artifacts from artillery.",
        byline: "By SIOBHÁN O’GRADY",
        image: "/images/lake_como_travel.jpg",
        slug: "in-the-shadow-of-war-ukrainian-cultural-heritage-faces-peril",
      },
      {
        id: "lat-s10",
        date: "Sept. 5, 2026",
        title: "Frontline Diary: 48 Hours in the Trenches of Donetsk",
        summary:
          "A firsthand dispatch detailing the harrowing cadence of artillery barrages and soldier resilience.",
        byline: "By SIOBHÁN O’GRADY",
        image: "/images/gen_thumb_drone.jpg",
        slug: "from-kenya-to-japan-rush-to-fix-security-flaw-takes-sites-briefly-offline",
      },
    ],
  },
};

export function getWriterBySlug(slug: string): WriterData {
  const normalized = slug
    .toLowerCase()
    .replace(/^by-/, "")
    .replace(/cowwry/g, "crowley")
    .replace(/cowry/g, "crowley");

  if (normalized.includes("crowley") || normalized.includes("michael")) {
    return WRITERS["michael-crowley"];
  }
  if (normalized.includes("haberman") || normalized.includes("maggie")) {
    return WRITERS["maggie-haberman"];
  }
  if (normalized.includes("ogrady") || normalized.includes("siobhan")) {
    return WRITERS["siobhan-ogrady"];
  }

  return WRITERS[normalized] || WRITERS["michael-crowley"];
}

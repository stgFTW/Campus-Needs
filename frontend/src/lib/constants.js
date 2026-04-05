export const MARKETPLACE_URL = "https://www.trickly.io/market/CampusNeeds";

export const CONTACT_EMAIL = "hello@campusneeds.me";
export const LISTINGS_EMAIL = "listings@campusneeds.me";

export const CATEGORIES = [
  {
    id: "home-and-living",
    name: "Home and Living",
    icon: "Home",
    description:
      "Secondhand furniture, lamps, mini fridges, and apartment essentials. Perfect for move-in and move-out.",
    live: true,
  },
  {
    id: "study-and-class-essentials",
    name: "Study and Class Essentials",
    icon: "BookOpen",
    description:
      "Graphing calculators, HDMI adapters, USB drives, lab supplies, and gear your professors actually require.",
    live: true,
  },
  {
    id: "campus-errands",
    name: "Campus Errands",
    icon: "ShoppingBag",
    description:
      "Need a grocery run or pharmacy pickup? A fellow student has you covered.",
    live: false,
  },
  {
    id: "short-term-borrowing",
    name: "Short Term Borrowing",
    icon: "RefreshCw",
    description:
      "Borrow luggage, tools, or a steamer for a week. No need to buy what you only need once.",
    live: false,
  },
];

export const LIVE_CATEGORIES = CATEGORIES.filter((c) => c.live);
export const COMING_SOON_CATEGORIES = CATEGORIES.filter((c) => !c.live);

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Browse",
    description:
      "Explore listings from verified USF students across our live categories.",
    detail:
      "Browse through Home and Living essentials, Study and Class gear, and more as we expand. Every listing is posted by a verified USF student, so you know exactly who you're dealing with.",
  },
  {
    step: 2,
    title: "Connect",
    description:
      "Click a listing and get connected with the student seller or provider.",
    detail:
      "Once you find what you need, click the listing to connect directly with the student behind it. No middlemen, no bots — just a real conversation between peers on the same campus.",
  },
  {
    step: 3,
    title: "Exchange",
    description: "Meet on campus and complete the transaction safely.",
    detail:
      "Arrange a meet-up at a convenient campus location — the library, the student center, or your dorm lobby. Complete the exchange face-to-face with someone who walks the same halls as you.",
  },
];

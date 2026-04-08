export const MARKETPLACE_URL = "https://www.trickly.io/market/CampusNeeds";

export const CONTACT_EMAIL = "hello@campusneeds.me";
export const LISTINGS_EMAIL = "listings@campusneeds.me";
export const SUPPORT_EMAIL = "support@campusneeds.me";

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

export const LISTINGS = [
  {
    id: "h1",
    title: "Mini Fridge - Perfect for Dorms",
    price: 45,
    condition: "Good",
    category: "home-and-living",
    image: "https://images.trickly.io/df4b7ef5-9cc8-47f6-b60b-5dcee6bb8d04.webp",
    description: "Compact mini fridge perfect for dorm rooms. Keeps drinks cold and snacks fresh. Moving out so need it gone. Pickup near USF.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "h2",
    title: "Desk Chair - Ergonomic",
    price: 35,
    condition: "Good",
    category: "home-and-living",
    image: "https://images.trickly.io/2b5c8f9e-4a1d-4c3b-b8e9-7d6f5a4c2b1a.webp",
    description: "Ergonomic desk chair with adjustable height. Great for long study sessions. Comfortable and supportive. Pickup near USF campus.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "h3",
    title: "Shelving Unit - 5 Tier",
    price: 40,
    condition: "Good",
    category: "home-and-living",
    image: "https://images.trickly.io/c5d7e9f1-2a3b-4c5d-6e7f-8a9b1c2d3e4f.webp",
    description: "5 tier shelving unit. Perfect for books, plants, or storage. Sturdy and in good condition. Pickup near USF campus.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "h4",
    title: "Mini Fridge, 1.7 Cu Ft, Black",
    price: 65,
    condition: "Good",
    category: "home-and-living",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=300&fit=crop",
    description: "Compact black mini fridge. Keeps things cold, runs quietly. Perfect for dorm rooms. Moving out so need it gone. Pickup near USF.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "h5",
    title: "Bookshelf, 5 Tier, Brown Wood",
    price: 45,
    condition: "Fair",
    category: "home-and-living",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=300&fit=crop",
    description: "5 tier wooden bookshelf in brown. A few minor scuffs but fully sturdy. Great for books, plants, or storage. Pickup near USF.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "h6",
    title: "Desk Chair, Padded, Adjustable, Black",
    price: 55,
    condition: "Good",
    category: "home-and-living",
    image: "https://images.unsplash.com/photo-1505843490701-a343de2c6ebb?w=400&h=300&fit=crop",
    description: "Padded black desk chair with adjustable height. Comfortable for long study sessions. No tears or damage. Pickup near USF.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "s1",
    title: "Desk Lamp - Adjustable LED",
    price: 15,
    condition: "Good",
    category: "study-and-class-essentials",
    image: "https://images.trickly.io/f08e0a6d-d88c-4c95-aa87-cb7fe4f5c1c1.webp",
    description: "Adjustable LED desk lamp. Perfect for late night study sessions. Bright and energy efficient. Pickup near USF campus.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "s2",
    title: "TI-84 Plus Calculator",
    price: 80,
    condition: "Like New",
    category: "study-and-class-essentials",
    image: "https://images.trickly.io/45b2c1d7-8fa9-4e6c-b5a3-9e7d8c3f1a2b.webp",
    description: "TI-84 Plus graphing calculator. Works perfectly, barely used. Essential for math classes at USF. Pickup near campus.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "s3",
    title: "Laptop Stand - Aluminum",
    price: 20,
    condition: "Like New",
    category: "study-and-class-essentials",
    image: "https://images.trickly.io/8d3c5b7e-9f2a-4d1c-a5b6-3e9f7c8d4a1b.webp",
    description: "Aluminum laptop stand. Adjustable height, improves posture during long study sessions. Pickup near USF campus.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "s4",
    title: "Wireless Mouse, Compact, Silver",
    price: 9,
    condition: "Good",
    category: "study-and-class-essentials",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
    description: "Compact wireless mouse. Battery included. Way better than trackpad for long study sessions. Pickup near USF.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "s5",
    title: "Laptop Stand, Foldable Aluminum, Silver",
    price: 15,
    condition: "Like New",
    category: "study-and-class-essentials",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
    description: "Foldable aluminum laptop stand. Adjustable height. Moving out of LME and this does not fit in my bag. Pickup near campus.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "s6",
    title: "Blue Light Glasses, Clear Frame",
    price: 7,
    condition: "Like New",
    category: "study-and-class-essentials",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
    description: "Blue light blocking glasses, clear frames. No prescription. Made a difference during late night study sessions. Pickup near USF.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "s7",
    title: "Sticky Notes and Highlighter Set",
    price: 0,
    condition: "Good",
    category: "study-and-class-essentials",
    image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=300&fit=crop",
    description: "Moving out of my freshman dorm in Gilson and just want this gone. Sticky notes, highlighters, random desk stuff. Free, just come grab it.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  }
];

export const HOME_LISTINGS = LISTINGS.filter(l => l.category === "home-and-living");
export const STUDY_LISTINGS = LISTINGS.filter(l => l.category === "study-and-class-essentials");

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

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

export const LISTINGS = [
  {
    id: "h1",
    title: "Desk Lamp, Adjustable LED, White",
    price: 12,
    condition: "Good",
    category: "home-and-living",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Adjustable white LED desk lamp. Works perfectly, great for late night studying in your dorm or apartment. Pickup near USF campus.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "h2",
    title: "Standing Fan, 3 Speed, Black",
    price: 18,
    condition: "Good",
    category: "home-and-living",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
    description: "Black 3 speed standing fan. Fully functional. SF apartments get warm, this will save you. Pickup near USF campus.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "h3",
    title: "Bedside Table, White, Minimalist",
    price: 25,
    condition: "Like New",
    category: "home-and-living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    description: "Small white bedside table, minimalist style. Barely used. Fits perfectly in a dorm or studio. Solid and sturdy. Pickup near USF.",
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
    title: "TI-84 Plus Graphing Calculator",
    price: 32,
    condition: "Good",
    category: "study-and-class-essentials",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    description: "TI-84 Plus. Works perfectly, comes with the cover. Needed for half the math classes at USF. Buying new is $100+. Pickup near campus.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "s2",
    title: "HDMI to USB-C Adapter, White",
    price: 6,
    condition: "Like New",
    category: "study-and-class-essentials",
    image: "https://images.unsplash.com/photo-1593640408182-31c228f2c8e0?w=400&h=300&fit=crop",
    description: "Used twice for class presentations. Works perfectly with MacBooks. Do not get caught without one. Pickup near USF.",
    marketplaceUrl: "https://www.trickly.io/market/CampusNeeds"
  },
  {
    id: "s3",
    title: "USB Flash Drive, 64GB, Black",
    price: 4,
    condition: "Like New",
    category: "study-and-class-essentials",
    image: "https://images.unsplash.com/photo-1591138990893-2b6dc9e8dec0?w=400&h=300&fit=crop",
    description: "64GB USB drive. Barely touched. Good for assignments and printing at the USF library. Pickup near campus.",
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

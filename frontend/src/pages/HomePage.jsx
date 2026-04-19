import { CategoryCard } from "@/components/shared/CategoryCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SEOHead } from "@/components/shared/SEOHead";
import { OnboardingModal } from "@/components/shared/OnboardingModal";
import { TrustBar } from "@/components/shared/TrustBar";
import { MARKETPLACE_URL, LIVE_CATEGORIES, HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown, Search, ShieldCheck, MapPin, CheckCircle, Shield, Lock, Users, AtSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Your campus.
              <br />
              <span className="text-accent">Your exchange.</span>
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
              Buy and sell with verified USF students. Furniture, textbooks, and essentials — no shipping, no strangers. Just your campus community.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Live marketplace <span className="text-accent">·</span> Verified USF students only <span className="text-accent">·</span> Stripe protected
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="gold" size="lg" className="w-full sm:w-auto group" asChild>
                <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                  Browse the Exchange
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="hidden sm:flex w-full sm:w-auto" asChild>
                <a href="#how-it-works">
                  How does it work?
                  <ChevronDown className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6147143/pexels-photo-6147143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="USF students interacting on campus"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const icons = [Search, ShieldCheck, MapPin];
  const iconBgs = ['bg-green-50', 'bg-amber-50', 'bg-green-50'];
  const iconColors = ['text-primary', 'text-amber-600', 'text-primary'];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned heading */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Three steps.
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            Safe, fast, and built for USF students.
          </p>
          <div className="w-12 h-0.5 bg-accent mt-4 mb-10"></div>
        </div>

        {/* Step cards with connectors */}
        <div className="space-y-0">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-xl border-l-[3px] border-l-[#004D32] p-5 shadow-sm border border-border/40"
                >
                  <div className="flex gap-4">
                    {/* Icon block */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBgs[i]}`}>
                      <Icon className={`h-5 w-5 ${iconColors[i]}`} />
                    </div>
                    
                    {/* Text block */}
                    <div className="flex-1">
                      <div className="text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">
                        STEP {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-base font-bold text-foreground mt-0.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Connector line between cards */}
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="w-px h-6 bg-border/40 mx-6"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust note */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            <CheckCircle className="h-3 w-3 text-primary inline mr-1" />
            Every buyer and seller is a verified USF student. No exceptions.
          </p>
        </div>
      </div>
    </section>
  );
};

const WhyCampusNeedsSection = () => {
  return (
    <section className="py-12 sm:py-20" style={{ backgroundColor: "#FDF5E6" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10" style={{ color: "#2D2D2D" }}>
          Why Campus Needs exists
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Founder Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex-shrink-0 mx-auto md:mx-0"
          >
            <div className="w-[140px] h-[140px] md:w-[260px] md:h-[260px] rounded-full md:rounded-xl border-2 border-accent overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
                alt="Shubh Mehta, Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex-1 text-center md:text-left space-y-4"
            style={{ color: "#2D2D2D" }}
          >
            <p className="text-base leading-relaxed">
              A USF student sold her desk lamp on Facebook Marketplace. The buyer showed up, took it, and the Venmo payment reversed. She lost 18 dollars and felt unsafe on her own campus.
            </p>
            <p className="text-base leading-relaxed">
              That story is not rare. The Better Business Bureau reports 81 percent of 18 to 24 year olds get scammed online. Meanwhile every May, thousands of dollars of usable furniture and textbooks go straight to campus dumpsters.
            </p>
            <p className="text-base leading-relaxed">
              Campus Needs is the fix. USF verified. Stripe protected. On campus only. Built by a Don, for Dons.
            </p>
            <p className="text-base italic mt-6" style={{ color: "#C99700" }}>
              Shubh Mehta, Founder, USF Class of 2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { number: 30, suffix: "+", label: "Active listings" },
    { number: 100, suffix: "%", label: "USF verified" },
    { number: 0, suffix: "Stripe", label: "Protected payments" },
    { number: 2026, suffix: "", label: "Launched" },
  ];

  const CountUpNumber = ({ end, suffix, duration = 1.5 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView && typeof end === 'number') {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      }
    }, [isInView, end, duration]);

    return (
      <span ref={ref}>
        {suffix === "Stripe" ? suffix : count + suffix}
      </span>
    );
  };

  return (
    <section className="py-10 sm:py-16" style={{ backgroundColor: "#004D32" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold tracking-widest text-accent mb-8 uppercase">
          The Numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                <CountUpNumber end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyThisWorksSection = () => {
  const features = [
    {
      icon: AtSign,
      header: "Real Dons only",
      body: "Facebook Marketplace has 3 billion people. Campus Needs has 5,300 USF students, every one verified by their usfca email."
    },
    {
      icon: Lock,
      header: "Payments in flow",
      body: "Competitors at 240 colleges never integrated payments. Every Campus Needs transaction runs through Stripe, so scams are structurally impossible."
    },
    {
      icon: MapPin,
      header: "Campus pickup only",
      body: "No shipping. No parking lots. You meet someone you already walk past in Gleeson or Lo Schiavo, not a stranger from the internet."
    }
  ];

  return (
    <section className="py-10 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Why this one works
          </h2>
          <p className="text-base" style={{ color: "#FDF5E6" }}>
            Campus marketplaces have been tried. We studied every one that failed. Here is what makes Campus Needs different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-accent/30 rounded-lg p-6 bg-background"
              >
                <Icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="text-base font-bold text-foreground mb-2">
                  {feature.header}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CategoriesSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What USF students are buying and selling"
          subtitle="Browse by category or see all listings"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-5">
          {LIVE_CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustBadges = () => {
  const badges = [
    { icon: Shield, label: "Verified USF" },
    { icon: Lock, label: "Stripe Protected" },
    { icon: MapPin, label: "On Campus Only" },
    { icon: Users, label: "No Strangers" },
  ];

  return (
    <section className="py-8 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-accent/30 bg-background"
              >
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-foreground/80">{badge.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const BrowseByCategorySection = () => {
  const categories = [
    {
      title: "Home and Living",
      subtitle: "Furniture, lamps, mini fridges and more",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      url: "https://connect.exono.me/Market/campusneeds?category=home%20and%20living"
    },
    {
      title: "Study and Class Essentials",
      subtitle: "Calculators, adapters, study gear and more",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      url: "https://connect.exono.me/Market/campusneeds?category=study%20and%20class%20essentials"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-green-tint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Browse by Category"
          subtitle="Everything USF students need, organized by category."
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, i) => (
            <motion.a
              key={i}
              href={category.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative min-h-[220px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Dark Green Overlay (55% opacity) */}
              <div className="absolute inset-0 bg-primary opacity-55" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-base text-white/90">
                    {category.subtitle}
                  </p>
                </div>
                
                <Button
                  variant="gold"
                  size="default"
                  className="w-full sm:w-auto group-hover:bg-accent/90 transition-colors duration-200"
                  asChild
                >
                  <span>
                    Browse Listings
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ListItemBanner = () => {
  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-balance">
            Have something to sell or offer?
          </h2>
          <p className="text-base text-primary-foreground/75 max-w-lg mx-auto">
            Submit your item or service. We verify your USF email and list it for you.
          </p>
          <div className="pt-2">
            <Button variant="gold" size="lg" className="w-full sm:w-auto group" asChild>
              <Link to="/list-your-item">
                List Your Item
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "Is Campus Needs only for USF students?",
      a: "Yes. Campus Needs is built specifically for University of San Francisco students. Everyone signs in with their @usfca.edu email, so you know you're dealing with real classmates.",
    },
    {
      q: "Do I have to pay to browse?",
      a: "Nope. Browsing Campus Needs is completely free. You can see what other USF students are selling without signing up.",
    },
    {
      q: "How do payments work?",
      a: "Payments run through Stripe on our marketplace at connect.exono.me. Your card data never touches our servers. Stripe is PCI DSS Level 1 certified, the highest payment security standard. We do not accept Venmo, cash, or Zelle, so scams, reversed payments, and fake payment screenshots are not possible on Campus Needs.",
    },
    {
      q: "What can I buy or sell here?",
      a: "Furniture, textbooks, electronics, class gear, everyday essentials. If it's useful for USF students and safe to exchange on or near campus, it belongs here.",
    },
  ];

  return (
    <section className="py-12 sm:py-20" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10"
        >
          Quick Answers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-xl border border-border/60 bg-card p-4 sm:p-6 shadow-card"
            >
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {faq.q}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Campus Needs – Buy & Sell at USF | Student Marketplace"
        description="The USF-only student marketplace. Buy dorm furniture, sell textbooks, borrow gear from verified USFCA students. Free to browse."
      />
      <OnboardingModal />
      <HeroSection />
      <TrustBar />
      <TrustBadges />
      <BrowseByCategorySection />
      <HowItWorksSection />
      <WhyCampusNeedsSection />
      <CategoriesSection />
      <WhyThisWorksSection />
      <ListItemBanner />
      <FAQSection />
      <StatsSection />
    </>
  );
}

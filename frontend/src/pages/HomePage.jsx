import { CategoryCard } from "@/components/shared/CategoryCard";
import { StepCard } from "@/components/shared/StepCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SEOHead } from "@/components/shared/SEOHead";
import { OnboardingModal } from "@/components/shared/OnboardingModal";
import { TrustBar } from "@/components/shared/TrustBar";
import { MARKETPLACE_URL, LIVE_CATEGORIES, HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
              17 listings live <span className="text-accent">·</span> USF students only <span className="text-accent">·</span> Free to browse
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="gold" size="lg" className="w-full sm:w-auto group" asChild>
                <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                  Browse the Exchange
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
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
  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-green-tint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Three simple steps to get what you need from your campus community."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
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

const BrowseByCategorySection = () => {
  const categories = [
    {
      title: "Home and Living",
      subtitle: "Furniture, lamps, mini fridges and more",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      url: "https://connect.exono.me/Market/campusneeds?category=home%20and%20living"
    },
    {
      title: "Study and Class Essentials",
      subtitle: "Calculators, adapters, study gear and more",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
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
      a: "You coordinate payment directly with the seller — cash, Venmo, Zelle, whatever works. Meet in public campus spots like the library or student center.",
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
      <BrowseByCategorySection />
      <HowItWorksSection />
      <CategoriesSection />
      <ListItemBanner />
      <FAQSection />
    </>
  );
}

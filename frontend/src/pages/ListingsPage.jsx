import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEOHead } from "@/components/shared/SEOHead";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ProductCard } from "@/components/shared/ProductCard";
import { LISTINGS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function ListingsPage() {
  const [searchParams] = useSearchParams();
  const defaultCategory = searchParams.get("category") || "all";
  const [activeTab, setActiveTab] = useState(defaultCategory);

  const filtered = activeTab === "all"
    ? LISTINGS
    : LISTINGS.filter(l => l.category === activeTab);

  const tabs = [
    { id: "all", label: "All Listings" },
    { id: "home-and-living", label: "Home and Living" },
    { id: "study-and-class-essentials", label: "Study and Class Essentials" },
  ];

  return (
    <>
      <SEOHead
        title="Browse Listings \u2014 Campus Needs"
        description="Browse secondhand items and student essentials from USF students. Find furniture, study gear, and more at student prices."
      />

      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Browse Listings
          </h1>
          <p className="mt-3 text-base text-primary-foreground/75 max-w-lg">
            Student priced. Pickup only. USF verified.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">
              No listings found in this category yet.
            </p>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((listing, i) => (
                <ProductCard key={listing.id} listing={listing} index={i} />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

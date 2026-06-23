import { CTABanner } from "@/components/shared/CTABanner";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CategoriesPage() {
  const categories = [
    {
      title: "Home and Living",
      subtitle: "Furniture, lamps, mini fridges and more",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
      url: "https://connect.exono.me/Market/campusneeds?category=home%20and%20living",
      active: true
    },
    {
      title: "Study and Class Essentials",
      subtitle: "Calculators, adapters, study gear and more",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      url: "https://connect.exono.me/Market/campusneeds?category=study%20and%20class%20essentials",
      active: true
    },
    {
      title: "Campus Closet",
      subtitle: "Secondhand clothing and style finds",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      url: "#",
      active: false,
      badge: "Coming with launch"
    }
  ];

  return (
    <>
      <SEOHead
        title="Browse Categories, Campus Needs University of San Francisco (USFCA)"
        description="Explore Home and Living, Study Essentials, and more on Campus Needs, the verified University of San Francisco (USFCA) student marketplace."
      />
      {/* Page Header */}
      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Browse by Category
          </h1>
          <p className="mt-3 text-base text-primary-foreground/75 max-w-lg">
            Everything you need, organized by what matters most to campus life.
          </p>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-14 sm:py-16 bg-green-tint">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Browse by Category
            </h2>
            <p className="text-base text-muted-foreground">
              Everything students need, organized by category.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative min-h-[220px] rounded-xl overflow-hidden shadow-lg ${category.active ? 'hover:shadow-xl cursor-pointer' : ''} transition-shadow duration-300 group`}
                onClick={() => {
                  if (category.active) {
                    window.open(category.url, '_blank');
                  }
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                
                {/* Dark Green Overlay (55% opacity) */}
                <div className="absolute inset-0 bg-primary opacity-55" />
                
                {/* Badge for inactive categories */}
                {category.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                      {category.badge}
                    </span>
                  </div>
                )}
                
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
                  
                  {category.active && (
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
                  )}
                  {!category.active && (
                    <div className="w-full sm:w-auto py-2 px-4 rounded-md bg-white/10 text-white/60 text-sm text-center">
                      Coming soon
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

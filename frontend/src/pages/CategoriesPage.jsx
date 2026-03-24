import { CategoryCard } from "@/components/shared/CategoryCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { SEOHead } from "@/components/shared/SEOHead";
import { CATEGORIES } from "@/lib/constants";

export default function CategoriesPage() {
  return (
    <>
      <SEOHead
        title="Browse Categories — Campus Needs"
        description="Explore Convenience Runs, Dorm Essentials, Course Materials, and Short Term Borrowing on Campus Needs."
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

      {/* Category Grid */}
      <section className="py-14 sm:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

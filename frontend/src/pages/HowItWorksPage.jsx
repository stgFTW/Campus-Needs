import { StepCard } from "@/components/shared/StepCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SEOHead } from "@/components/shared/SEOHead";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { motion } from "framer-motion";
import { DollarSign, Heart } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <>
      <SEOHead
        title="How It Works — Campus Needs"
        description="Learn how Campus Needs connects USF students to buy, sell, and borrow safely on campus."
      />
      {/* Page Header */}
      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            How It Works
          </h1>
          <p className="mt-3 text-base text-primary-foreground/75 max-w-lg">
            Getting what you need from your campus community is simple.
          </p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-14 sm:py-20 bg-green-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Who is Campus Needs for?"
            subtitle="Whether you want to earn or save, Campus Needs works for you."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Providers Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-border/60 bg-card p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Providers
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Students who want to earn flexible income by offering services,
                selling items, or lending things they already own. Run errands,
                sell your old textbooks, or rent out your mini-fridge before
                summer — on your own time, at your own price.
              </p>
            </motion.div>

            {/* Buyers Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-xl border border-border/60 bg-card p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-tint flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Buyers
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Students who need affordable help on campus. Whether it's
                groceries delivered to your dorm, a desk for your room, or a
                calculator for finals week — find it from someone who already
                goes to your school, at prices that make sense.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

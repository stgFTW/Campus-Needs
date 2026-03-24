import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/CTABanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MARKETPLACE_URL, CATEGORIES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin, Banknote, ShoppingBag, Sofa, BookOpen, RefreshCw } from "lucide-react";

const iconMap = {
  ShoppingBag,
  Sofa,
  BookOpen,
  RefreshCw,
};

const whyPeerToPeer = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "Every user is a verified USF student.",
  },
  {
    icon: MapPin,
    title: "Local",
    description: "Everything happens on or near campus.",
  },
  {
    icon: Banknote,
    title: "Affordable",
    description: "Peer pricing beats retail and delivery apps every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground max-w-2xl leading-snug">
            Your campus has everything you need. Now you can actually get it.
          </h1>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-base sm:text-lg text-foreground leading-relaxed"
          >
            Campus Needs is a hyper-local marketplace built exclusively for
            University of San Francisco students. Whether you need someone to
            grab groceries, want to sell your dorm furniture before moving out,
            or need a textbook for next week's class — Campus Needs connects
            you with a verified peer who goes to your school. No strangers. No
            shipping. No overpaying. Just students helping students, right on
            campus.
          </motion.p>
        </div>
      </section>

      {/* Our Four Categories */}
      <section className="py-14 sm:py-20 bg-green-tint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Four Categories" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CATEGORIES.map((cat, i) => {
              const Icon = iconMap[cat.icon];
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/60 shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-tint flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon className="h-5 w-5 text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Peer-to-Peer? */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why peer-to-peer?" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyPeerToPeer.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center space-y-3 p-6"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="py-14 sm:py-20 bg-green-tint">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The Problem We're Solving" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-8 space-y-6 text-center"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              USF sits on a hilltop in San Francisco — one of the most expensive
              cities in the world. Students can't have cars. There's no retail
              strip at the campus entrance. Instacart charges fees that add up
              fast. Craigslist is full of strangers. Facebook groups are messy
              and unverified. Campus Needs fixes all of that in one place.
            </p>
            <Button variant="default" size="lg" className="group" asChild>
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                Explore the Marketplace
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

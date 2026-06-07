import { CTABanner } from "@/components/shared/CTABanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SEOHead } from "@/components/shared/SEOHead";
import { motion } from "framer-motion";

const FAQS = [
  {
    q: "What is Campus Needs?",
    a: "Campus Needs is a free student marketplace exclusively for University of San Francisco (USF) students to buy, sell, and borrow items on campus.",
  },
  {
    q: "How do I sell something on Campus Needs?",
    a: "Create a free account with your USF email, click Post Listing, add photos and a price, and your item goes live instantly.",
  },
  {
    q: "Is Campus Needs free to use?",
    a: "Yes. Campus Needs is completely free for all USF students.",
  },
  {
    q: "What can I buy on Campus Needs?",
    a: "Textbooks, dorm furniture, electronics, clothes, and campus services like tutoring.",
  },
  {
    q: "Is Campus Needs only for USF students?",
    a: "Yes. Campus Needs is exclusively for verified University of San Francisco students.",
  },
  {
    q: "How do I contact a seller?",
    a: "Click on any listing to message the seller directly through the app.",
  },
];

export default function FaqPage() {
  return (
    <>
      <SEOHead
        title="FAQ | Campus Needs"
        description="Frequently asked questions about Campus Needs — the USF-only student marketplace for buying, selling, and borrowing with verified University of San Francisco students."
      />
      {/* Page Header */}
      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground max-w-2xl leading-snug">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
            Everything you need to know about buying, selling, and borrowing on
            Campus Needs.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Questions & Answers" />
          <div className="mt-10 space-y-5">
            {FAQS.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 rounded-xl border border-border/60 bg-card shadow-card"
              >
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

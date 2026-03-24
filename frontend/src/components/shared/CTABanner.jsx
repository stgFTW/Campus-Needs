import { Button } from "@/components/ui/button";
import { MARKETPLACE_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTABanner = ({
  headline = "Ready to buy, sell, or borrow?",
  buttonText = "Go to Campus Needs Marketplace",
}) => {
  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-balance">
            {headline}
          </h2>
          <Button
            variant="gold"
            size="lg"
            className="group"
            asChild
          >
            <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
              {buttonText}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

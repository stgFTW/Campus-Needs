import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const signals = [
  "Verified @usfca.edu students only",
  "No shipping. Meet on campus.",
  "Free to list. Free to browse.",
];

export const TrustBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="py-4 sm:py-5"
      style={{ backgroundColor: "#E8F5ED" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
          {signals.map((signal, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <div className="hidden sm:block w-px h-4 bg-primary/20 mx-5" />
              )}
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {signal}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

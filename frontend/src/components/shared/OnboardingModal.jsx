import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MARKETPLACE_URL } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, ShieldCheck, MapPin, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

const STORAGE_KEY = "campus_needs_onboarded";

const slides = [
  {
    icon: ArrowLeftRight,
    headline: "Welcome to Campus Needs",
    text: "The peer-to-peer marketplace built exclusively for USF students.",
  },
  {
    icon: ShieldCheck,
    headline: "Verified students only",
    text: "Every listing on Campus Needs is from a verified @usfca.edu student, reviewed before it goes live.",
  },
  {
    icon: MapPin,
    headline: "Everything happens on campus",
    text: "No shipping. No delivery fees. No strangers. Just students meeting on campus to exchange.",
  },
  {
    icon: ArrowRight,
    headline: "Ready to explore?",
    text: "Browse live listings from real USF students right now.",
    isFinal: true,
  },
];

export const OnboardingModal = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const timer = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md sm:max-w-lg bg-card rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Green header bar */}
            <div className="bg-primary px-5 py-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-primary-foreground">
                Campus Needs
              </span>
              <button
                onClick={dismiss}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-8 sm:py-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {slide.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                    {slide.text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Buttons */}
              <div className="mt-8 space-y-3">
                {slide.isFinal ? (
                  <>
                    <Button variant="gold" size="lg" className="w-full" asChild>
                      <a
                        href={MARKETPLACE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={dismiss}
                      >
                        Browse the Marketplace
                      </a>
                    </Button>
                    <button
                      onClick={dismiss}
                      className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                    >
                      Skip and explore the site
                    </button>
                  </>
                ) : (
                  <div className="flex items-center justify-between">
                    <button
                      onClick={dismiss}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1"
                    >
                      Skip
                    </button>
                    <div className="flex items-center gap-2">
                      {current > 0 && (
                        <button
                          onClick={prev}
                          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                          aria-label="Previous"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                      )}
                      <Button variant="gold" size="default" onClick={next}>
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === current
                        ? "bg-accent w-5"
                        : "bg-border hover:bg-muted-foreground/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

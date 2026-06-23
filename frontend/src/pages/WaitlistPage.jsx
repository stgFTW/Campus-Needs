import { useState, useEffect } from "react";
import { SEOHead } from "@/components/shared/SEOHead";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.textContent = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    const style = document.createElement('style');
    style.textContent = `
      iframe[src*="tally.so"] {
        /* Tally form button override will be handled by Tally's customization settings */
      }
    `;
    document.head.appendChild(style);

    return () => {
      const tallyScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (tallyScript) {
        tallyScript.remove();
      }
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Join the Waitlist, Campus Needs"
        description="Be the first to know when Campus Needs launches at the University of San Francisco."
      />

      {/* Page Header */}
      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Join the Waitlist
          </h1>
          <p className="mt-3 text-base text-primary-foreground/75 max-w-lg">
            Be the first in when Campus Needs launches at the University of San Francisco.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-primary/20 bg-green-tint p-8 sm:p-10 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                You're on the list!
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                We'll email you the moment Campus Needs launches at the University of San Francisco.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Tally Form Embed */}
              <iframe 
                data-tally-src="https://tally.so/embed/Bz6qV7?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0" 
                title="Join the Waitlist"
                style={{ border: 0, margin: 0 }}
              ></iframe>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

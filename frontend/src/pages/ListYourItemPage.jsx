import { useState, useEffect } from "react";
import { SEOHead } from "@/components/shared/SEOHead";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ListYourItemPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    // Add custom CSS to override Tally button color
    const style = document.createElement('style');
    style.innerHTML = `
      iframe[src*="tally.so"] {
        /* Tally form button override will be handled by Tally's customization settings */
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup script on unmount
      const tallyScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (tallyScript) {
        tallyScript.remove();
      }
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <SEOHead
        title="List Your Item — Campus Needs"
        description="Submit your item or service to be listed on the Campus Needs USF student marketplace."
      />

      {/* Page Header */}
      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            List your item or service
          </h1>
          <p className="mt-3 text-base text-primary-foreground/75 max-w-lg">
            Submit your details below. We verify your USF email and list it on
            your behalf within 24 hours.
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
                Listing submitted!
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                Your listing has been submitted. We will review it and verify
                your USF email within 24 hours. If approved, your item will go
                live on the Campus Needs marketplace.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Tally Form Embed */}
              <div style={{ width: '100%', maxWidth: '800px', margin: '40px auto 0' }}>
                <iframe 
                  data-tally-src="https://tally.so/embed/eq7rMl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="1233" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0" 
                  title="Campus Needs - List Your Item"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

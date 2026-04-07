import { SEOHead } from "@/components/shared/SEOHead";
import { CONTACT_EMAIL } from "@/lib/constants";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy \u2014 Campus Needs"
        description="Learn how Campus Needs collects, uses, and protects your information as a University of San Francisco student."
      />

      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Privacy Policy
          </h1>
          <p className="mt-3 text-base text-primary-foreground/75">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Who We Are</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Campus Needs is a peer-to-peer marketplace built exclusively for
              University of San Francisco (USF) students. We help students buy,
              sell, and exchange items and services on campus. Campus Needs is
              operated independently and is not officially affiliated with the
              University of San Francisco.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">What We Collect</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When you submit a listing through our form, we collect the following
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li>Your full name</li>
              <li>Your USF email address (@usfca.edu)</li>
              <li>Listing details: item name, description, price, category, and preferred meetup location</li>
              <li>Any optional notes you include</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not collect payment information, passwords, or any data
              beyond what you voluntarily submit through our listing form.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li>To verify that you are a current USF student via your @usfca.edu email</li>
              <li>To review and publish your listing on the Campus Needs marketplace</li>
              <li>To contact you about your listing status</li>
              <li>To improve the Campus Needs platform and user experience</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Data Storage and Security</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your listing submissions are stored securely. We take reasonable
              measures to protect your information from unauthorized access,
              alteration, or destruction. However, no method of electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Cookies and Analytics</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Campus Needs uses localStorage to remember whether you have seen
              our onboarding guide. We may use basic analytics to understand
              site usage. We do not use tracking cookies for advertising.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Your Rights</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You may request to view, update, or delete any personal information
              we hold about you. To make a request, email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or how we handle
              your data, please reach out to us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}

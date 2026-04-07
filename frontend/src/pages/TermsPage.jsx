import { SEOHead } from "@/components/shared/SEOHead";
import { CONTACT_EMAIL } from "@/lib/constants";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Use \u2014 Campus Needs"
        description="Terms and conditions for using the Campus Needs peer-to-peer marketplace at the University of San Francisco."
      />

      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Terms of Use
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
            <h2 className="text-xl font-semibold text-foreground">Agreement to Terms</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              By accessing or using Campus Needs, you agree to be bound by these
              Terms of Use. If you do not agree with any part of these terms,
              you should not use the platform. Campus Needs is intended
              exclusively for current University of San Francisco students.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Eligibility</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Campus Needs is available only to individuals who hold a valid
              @usfca.edu email address. By submitting a listing, you confirm
              that you are a currently enrolled student at the University of
              San Francisco and that all information you provide is accurate.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">User Conduct</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When using Campus Needs, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li>Provide accurate and honest descriptions of items and services</li>
              <li>Set fair and transparent pricing</li>
              <li>Communicate respectfully with other students</li>
              <li>Complete exchanges safely in public campus locations</li>
              <li>Not post prohibited items including weapons, drugs, alcohol, counterfeit goods, or stolen property</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Listings and Transactions</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Campus Needs is a listing and discovery platform. We do not process
              payments, handle shipping, or mediate transactions. All exchanges
              occur directly between students. Campus Needs is not responsible
              for the quality, safety, or legality of listed items, the accuracy
              of listings, or the ability of users to complete transactions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Listing Review</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All listings are reviewed before going live. We reserve the right
              to reject, remove, or modify any listing at our sole discretion
              for any reason, including but not limited to: inaccurate
              descriptions, prohibited items, inappropriate content, or
              unverified email addresses.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Campus Needs is provided \u201cas is\u201d without warranties of any kind.
              We are not liable for any damages arising from your use of the
              platform, including but not limited to disputes between buyers
              and sellers, lost or damaged items, or personal injury resulting
              from in-person exchanges.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Changes to These Terms</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We may update these Terms of Use from time to time. Continued use
              of Campus Needs after changes are posted constitutes acceptance
              of the revised terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For questions about these Terms of Use, contact us at{" "}
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

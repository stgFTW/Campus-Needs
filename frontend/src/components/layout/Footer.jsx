import { Link } from "react-router-dom";
import { MARKETPLACE_URL, CONTACT_EMAIL, LISTINGS_EMAIL, SUPPORT_EMAIL } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img
                src="/campus-needs-logo.png"
                alt="Campus Needs logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-primary-foreground tracking-tight">
                Campus Needs
              </span>
            </Link>
            <p className="text-sm font-medium text-accent">
              Your campus. Your exchange.
            </p>
            <p className="text-sm text-primary-foreground/70">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-primary-foreground transition-colors duration-200"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-xs text-primary-foreground/50 leading-relaxed">
              A USF-only peer-to-peer marketplace. Powered by Exonome.
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <h4 className="text-sm font-semibold text-accent mb-4">Explore</h4>
            <nav className="flex flex-col gap-2.5">
              <a
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Browse Exchange
              </a>
              <Link
                to="/categories"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Categories
              </Link>
              <Link
                to="/how-it-works"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Column 3 — Sellers */}
          <div>
            <h4 className="text-sm font-semibold text-accent mb-4">Sellers</h4>
            <nav className="flex flex-col gap-2.5">
              <Link
                to="/list-your-item"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                List Your Item
              </Link>
              <a
                href={`mailto:${LISTINGS_EMAIL}`}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Email Listings
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Get Support
              </a>
            </nav>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <h4 className="text-sm font-semibold text-accent mb-4">Legal</h4>
            <nav className="flex flex-col gap-2.5">
              <Link
                to="/privacy"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                Terms of Use
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider + Bottom bar */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Campus Needs. Built for USF students only.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Powered by Exonome
          </p>
        </div>
      </div>
    </footer>
  );
};

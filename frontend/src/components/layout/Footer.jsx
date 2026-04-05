import { Link } from "react-router-dom";
import { MARKETPLACE_URL, CONTACT_EMAIL } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Logo & Info */}
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
          </div>

          {/* Browse CTA */}
          <div className="md:text-right md:flex md:flex-col md:items-end md:justify-center">
            <Button variant="gold" size="default" className="group" asChild>
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                Browse Marketplace
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 text-center">
            © 2025 Campus Needs. Built for USF students.
          </p>
        </div>
      </div>
    </footer>
  );
};

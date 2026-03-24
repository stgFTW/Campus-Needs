import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { MARKETPLACE_URL } from "@/lib/constants";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "List Your Item", path: "/list-your-item" },
  { label: "About", path: "/about" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" onClick={closeMobile}>
            <img
              src="/campus-needs-logo.png"
              alt="Campus Needs logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-lg font-bold text-primary-foreground tracking-tight">
              Campus Needs
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="gold"
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                Browse Listings
              </a>
            </Button>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 relative z-[60]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Nav */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 bg-secondary animate-fade-in">
          <nav className="flex flex-col h-full px-6 py-6">
            <div className="space-y-1 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobile}
                  className={`block px-4 py-3.5 rounded-lg text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-accent bg-primary/20"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-2">
              <Button variant="gold" size="lg" className="w-full" asChild>
                <a
                  href={MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                >
                  Browse Listings
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

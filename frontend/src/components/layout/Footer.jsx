import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "List Your Item", path: "/list-your-item" },
  { label: "About", path: "/about" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Logo & Description */}
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
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Campus Needs is a student-run marketplace at the University of San
              Francisco, powered by Exonome.
            </p>
          </div>

          {/* Links */}
          <div className="md:text-right">
            <h4 className="text-sm font-semibold text-accent mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 md:items-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 space-y-2">
          <p className="text-xs text-primary-foreground/50 text-center">
            No account needed to browse. Just click a category and explore.
          </p>
          <p className="text-xs text-primary-foreground/50 text-center">
            © 2026 Campus Needs
          </p>
        </div>
      </div>
    </footer>
  );
};

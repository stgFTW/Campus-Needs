import { Home, BookOpen, ShoppingBag, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const iconMap = {
  Home,
  BookOpen,
  ShoppingBag,
  RefreshCw,
};

export const CategoryCard = ({ category, index = 0 }) => {
  const Icon = iconMap[category.icon];

  // Map category IDs to their respective URLs
  const getCategoryUrl = (categoryId) => {
    const urlMap = {
      'home-and-living': 'https://connect.exono.me/Market/campusneeds?category=home%20and%20living',
      'study-and-class-essentials': 'https://connect.exono.me/Market/campusneeds?category=study%20and%20class%20essentials'
    };
    return urlMap[categoryId] || '#';
  };

  if (category.live) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col group border-0 bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="pb-3">
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/15 flex items-center justify-center mb-3 group-hover:bg-primary-foreground/25 transition-colors duration-300">
              {Icon && <Icon className="h-6 w-6 text-primary-foreground" />}
            </div>
            <CardTitle className="text-lg font-semibold text-primary-foreground">
              {category.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription className="text-sm text-primary-foreground/75 leading-relaxed">
              {category.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button
              variant="gold"
              size="sm"
              className="w-full"
              asChild
            >
              <a 
                href={getCategoryUrl(category.id)} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Browse Listings
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  }

  // Coming Soon variant — grayed out with gold badge
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col relative border border-border/40 bg-muted/50 opacity-80">
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-0.5 hover:bg-accent">
          Coming Soon
        </Badge>
        <CardHeader className="pb-3">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3">
            {Icon && <Icon className="h-6 w-6 text-muted-foreground" />}
          </div>
          <CardTitle className="text-lg font-semibold text-muted-foreground">
            {category.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="text-sm text-muted-foreground/70 leading-relaxed">
            {category.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

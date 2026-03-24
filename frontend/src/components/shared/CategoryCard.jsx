import { ShoppingBag, Sofa, BookOpen, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MARKETPLACE_URL } from "@/lib/constants";
import { motion } from "framer-motion";

const iconMap = {
  ShoppingBag,
  Sofa,
  BookOpen,
  RefreshCw,
};

export const CategoryCard = ({ category, index = 0 }) => {
  const Icon = iconMap[category.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col group hover:shadow-card-hover transition-shadow duration-300 border-border/60">
        <CardHeader className="pb-3">
          <div className="w-12 h-12 rounded-lg bg-green-tint flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors duration-300">
            {Icon && <Icon className="h-6 w-6 text-primary" />}
          </div>
          <CardTitle className="text-lg font-semibold text-foreground">
            {category.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
            {category.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
              Browse
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

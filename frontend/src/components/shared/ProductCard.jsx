import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const conditionColor = {
  "Like New": "bg-green-100 text-green-800",
  "Good": "bg-blue-100 text-blue-800",
  "Fair": "bg-yellow-100 text-yellow-800",
};

export const ProductCard = ({ listing, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border border-border/50 hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative overflow-hidden aspect-[4/3] bg-muted">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop";
            }}
          />
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${conditionColor[listing.condition] || "bg-gray-100 text-gray-800"}`}>
              {listing.condition}
            </span>
          </div>
        </div>

        <CardContent className="flex-1 pt-4 pb-2 px-4">
          <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 mb-2">
            {listing.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {listing.description}
          </p>
        </CardContent>

        <CardFooter className="px-4 pb-4 pt-2 flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-primary">
            {listing.price === 0 ? (
              <span className="text-accent">FREE</span>
            ) : (
              `$${listing.price}`
            )}
          </span>
          <Button
            size="sm"
            variant="default"
            className="text-xs px-4"
            asChild
          >
            <a
              href={listing.marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Exchange
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

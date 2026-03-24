import { motion } from "framer-motion";

export const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={`space-y-3 ${
        centered ? "text-center" : "text-left"
      } ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

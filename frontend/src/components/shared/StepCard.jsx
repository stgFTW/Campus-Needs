import { motion } from "framer-motion";

export const StepCard = ({ step, index = 0, detailed = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="flex flex-col items-center text-center"
    >
      {/* Step Number */}
      <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4 shadow-accent-glow">
        <span className="text-xl font-bold text-accent-foreground">
          {step.step}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
        {step.description}
      </p>

      {/* Detailed paragraph for How It Works page */}
      {detailed && step.detail && (
        <p className="mt-3 text-sm text-muted-foreground/80 leading-relaxed max-w-sm">
          {step.detail}
        </p>
      )}
    </motion.div>
  );
};

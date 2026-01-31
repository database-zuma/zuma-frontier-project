"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const frontierVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 0.5,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#111111]" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 226, 115, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 226, 115, 0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Floating Badge - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-32 left-8 md:left-16"
      >
        <Badge 
          variant="default" 
          className="bg-[#00E273]/10 text-[#00E273] border-[#00E273]/30 px-4 py-2 text-sm font-medium"
        >
          AI-Powered Future
        </Badge>
      </motion.div>

      {/* Floating Badge - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-32 right-8 md:right-16 hidden md:block"
      >
        <Badge 
          variant="outline" 
          className="border-white/20 text-white/70 px-4 py-2 text-sm"
        >
          Continuous Improvements Division
        </Badge>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Headline */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <span className="text-5xl md:text-7xl lg:text-8xl font-light text-white/90 tracking-tight">
              ZUMA
            </span>
            <span className="hidden md:block text-4xl md:text-6xl text-white/30">—</span>
            <motion.span
              variants={frontierVariants}
              className="text-6xl md:text-8xl lg:text-[120px] font-bold gradient-text frontier-glow tracking-tight"
            >
              FRONTIER
            </motion.span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-white/80 font-medium mb-4"
        >
          The Dawn of Intelligent Operations
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-10"
        >
          Where AI meets ambition. Where innovation becomes standard. Where Zuma leads the future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-[#00E273] hover:bg-[#00E273]/90 text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,226,115,0.3)]"
          >
            Explore the Future
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-8 py-6 text-base rounded-full transition-all duration-300"
          >
            Our Vision
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {[
            "4 Projects Building Tomorrow",
            "Operations Reimagined",
            "The Future Starts Now",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-2 text-white/60 text-sm">
              <Check className="w-4 h-4 text-[#00E273]" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}

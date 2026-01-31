"use client";

import { motion } from "framer-motion";

// Grain texture SVG - full coverage noise
const GrainOverlay = () => (
  <div 
    className="absolute inset-0 opacity-[0.15] pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      mixBlendMode: 'overlay',
    }}
  />
);

// Abstract organic blob graphic component - with grain and color variations
export function AbstractGraphic({ variant = 1 }: { variant?: number }) {
  const graphics = [
    // Variant 1: Branch Super App - Yellow-Green spectrum (warm, energetic)
    <div key="v1" className="relative w-full h-full overflow-hidden bg-[#0a0a0a]">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      {/* Large yellow-green blob */}
      <motion.div
        animate={{ 
          scale: [1, 1.08, 1],
          rotate: [0, 3, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[120%] h-[100%] -left-[10%] -top-[20%]"
        style={{
          background: 'radial-gradient(ellipse at 40% 60%, rgba(200, 255, 100, 0.5) 0%, rgba(150, 230, 80, 0.3) 25%, rgba(100, 200, 60, 0.15) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Secondary blob - warmer yellow */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[100%] h-[80%] left-[20%] top-[10%]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 230, 100, 0.35) 0%, rgba(220, 200, 80, 0.2) 40%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Accent blob - lime */}
      <motion.div
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-[60%] h-[60%] right-[-10%] bottom-[10%]"
        style={{
          background: 'radial-gradient(circle, rgba(180, 255, 100, 0.4) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      
      <GrainOverlay />
    </div>,

    // Variant 2: Warehouse Super App - Aqua-Cyan spectrum (cool, tech)
    <div key="v2" className="relative w-full h-full overflow-hidden bg-[#0a0a0a]">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1515] via-[#0a0f12] to-[#0a0a0a]" />
      
      {/* Large aqua blob */}
      <motion.div
        animate={{ 
          scale: [1, 1.06, 1],
          x: [-10, 10, -10],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[110%] h-[90%] left-[-5%] top-[5%]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(100, 240, 200, 0.45) 0%, rgba(80, 220, 180, 0.3) 30%, rgba(60, 200, 160, 0.15) 55%, transparent 75%)',
          filter: 'blur(55px)',
        }}
      />
      
      {/* Secondary blob - cyan blue */}
      <motion.div
        animate={{ 
          scale: [1, 1.08, 1],
          y: [0, -15, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute w-[90%] h-[80%] right-[-15%] top-[20%]"
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, rgba(100, 220, 255, 0.35) 0%, rgba(80, 200, 240, 0.2) 45%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />
      
      {/* Accent blob - teal */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute w-[50%] h-[50%] left-[10%] bottom-[5%]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 180, 0.4) 0%, transparent 65%)',
          filter: 'blur(35px)',
        }}
      />
      
      <GrainOverlay />
    </div>,

    // Variant 3: Multi-MoltBot System - Purple-Pink spectrum (AI, futuristic)
    <div key="v3" className="relative w-full h-full overflow-hidden bg-[#0a0a0a]">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#120a15] via-[#0f0a12] to-[#0a0a0a]" />
      
      {/* Large purple blob */}
      <motion.div
        animate={{ 
          scale: [1, 1.07, 1],
          rotate: [0, -4, 0],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[100%] h-[100%] left-[0%] top-[0%]"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(180, 120, 255, 0.4) 0%, rgba(150, 100, 220, 0.25) 35%, rgba(120, 80, 190, 0.12) 60%, transparent 80%)',
          filter: 'blur(65px)',
        }}
      />
      
      {/* Secondary blob - pink/magenta */}
      <motion.div
        animate={{ 
          scale: [1, 1.09, 1],
          x: [0, 25, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute w-[80%] h-[70%] left-[-10%] top-[30%]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 120, 200, 0.35) 0%, rgba(220, 100, 170, 0.2) 40%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Accent blob - violet */}
      <motion.div
        animate={{ 
          opacity: [0.35, 0.55, 0.35],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-[45%] h-[55%] right-[5%] bottom-[15%]"
        style={{
          background: 'radial-gradient(circle, rgba(140, 100, 255, 0.45) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      
      <GrainOverlay />
    </div>,

    // Variant 4: Creative Hub Agents - Orange-Coral spectrum (creative, warm)
    <div key="v4" className="relative w-full h-full overflow-hidden bg-[#0a0a0a]">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a120a] via-[#120d08] to-[#0a0a0a]" />
      
      {/* Large coral blob */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[120%] h-[110%] left-[-10%] top-[-10%]"
        style={{
          background: 'radial-gradient(ellipse at 45% 55%, rgba(255, 160, 120, 0.45) 0%, rgba(255, 140, 100, 0.3) 28%, rgba(230, 120, 80, 0.15) 52%, transparent 78%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Secondary blob - orange */}
      <motion.div
        animate={{ 
          scale: [1, 1.06, 1],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute w-[90%] h-[80%] right-[-5%] top-[10%]"
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, rgba(255, 180, 80, 0.4) 0%, rgba(240, 160, 60, 0.22) 42%, transparent 68%)',
          filter: 'blur(55px)',
        }}
      />
      
      {/* Accent blob - gold */}
      <motion.div
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute w-[55%] h-[50%] left-[15%] bottom-[10%]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 200, 100, 0.4) 0%, transparent 62%)',
          filter: 'blur(38px)',
        }}
      />
      
      <GrainOverlay />
    </div>,
  ];

  return (
    <div className="relative w-full h-full">
      {graphics[variant - 1] || graphics[0]}
    </div>
  );
}

// Product showcase card with abstract graphic
export function ProductCard({ 
  title, 
  description, 
  variant,
  delay = 0 
}: { 
  title: string; 
  description: string; 
  variant: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div 
        className="relative h-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Graphic container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <AbstractGraphic variant={variant} />
          
          {/* Shine effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)',
              transform: 'translateX(-100%)',
              animation: 'shine 3s infinite',
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-normal text-white mb-2">{title}</h3>
          <p className="text-sm text-white/50 font-light">{description}</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.div>
  );
}

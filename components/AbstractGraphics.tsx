"use client";

import { motion } from "framer-motion";

// Abstract gradient graphic component
export function AbstractGraphic({ variant = 1 }: { variant?: number }) {
  const graphics = [
    // Variant 1: Gradient sphere with grain
    <div className="relative w-full h-full">
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(0, 255, 136, 0.8), rgba(0, 226, 115, 0.4), rgba(0, 178, 95, 0.2))',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute inset-[10%] rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 226, 115, 0.9), rgba(0, 178, 95, 0.6), rgba(99, 102, 241, 0.3))',
          boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.3), 0 0 80px rgba(0, 226, 115, 0.4)',
        }}
      />
      <div 
        className="absolute top-[20%] left-[25%] w-[30%] h-[20%] rounded-full bg-white/30 blur-xl"
      />
      <div 
        className="absolute inset-0 rounded-full opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />
    </div>,

    // Variant 2: Floating crystal/shard
    <div className="relative w-full h-full">
      <motion.div
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[15%]"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(168, 85, 247, 0.6), rgba(0, 226, 115, 0.3))',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          boxShadow: '0 0 60px rgba(99, 102, 241, 0.5), inset -10px -10px 40px rgba(0,0,0,0.2)',
          filter: 'blur(2px)',
        }}
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}
      />
    </div>,

    // Variant 3: Glowing orb with rings
    <div className="relative w-full h-full">
      <div 
        className="absolute inset-[20%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.6), transparent)',
          filter: 'blur(30px)',
        }}
      />
      <div 
        className="absolute inset-[25%] rounded-full border-2 border-[#00E273]/30"
        style={{
          boxShadow: '0 0 40px rgba(0, 226, 115, 0.3), inset 0 0 40px rgba(0, 226, 115, 0.1)',
        }}
      />
      <div 
        className="absolute inset-[35%] rounded-full border border-[#00E273]/20"
      />
      <div 
        className="absolute inset-[40%] rounded-full bg-gradient-to-br from-[#00E273] to-[#00b35f]"
        style={{
          boxShadow: '0 0 60px rgba(0, 226, 115, 0.6)',
        }}
      />
      <div 
        className="absolute top-[35%] left-[40%] w-[15%] h-[10%] rounded-full bg-white/40 blur-md"
      />
    </div>,

    // Variant 4: Abstract wave/form
    <div className="relative w-full h-full overflow-hidden">
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 226, 115, 0.8)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.6)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.4)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M40,100 Q70,40 100,100 T160,100"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="20"
          filter="url(#glow)"
          strokeLinecap="round"
          animate={{ d: ["M40,100 Q70,40 100,100 T160,100", "M40,100 Q70,160 100,100 T160,100", "M40,100 Q70,40 100,100 T160,100"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
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
        className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
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
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
              transform: 'translateX(-100%)',
              animation: 'shine 3s infinite',
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-normal text-white mb-2">{title}</h3>
          <p className="text-sm text-white/50 font-light">{description}</p>
        </div>      </div>

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

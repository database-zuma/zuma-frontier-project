"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Animated background component
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.4) 0%, rgba(0, 226, 115, 0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.3) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, rgba(0, 226, 115, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(0, 226, 115, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(99, 102, 241, 0.15) 0px, transparent 50%)
          `,
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

// Logo ticker component - SCROLLING LEFT LIKE MISTRAL
function LogoTicker() {
  const logos = [
    "Placeholder Partner 1",
    "Placeholder Partner 2", 
    "Placeholder Partner 3",
    "Placeholder Partner 4",
    "Placeholder Partner 5",
    "Placeholder Partner 6",
    "Placeholder Partner 7",
    "Placeholder Partner 8",
    "Placeholder Partner 9",
    "Placeholder Partner 10",
  ];

  // Double the array for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-8 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mb-6"
      >
        <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-light">Meet our partners</p>
      </motion.div>
      
      <div className="relative">
        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container - moves LEFT */}
        <motion.div 
          className="flex items-center gap-16"
          animate={{ x: [0, -50 * logos.length * 2] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          {allLogos.map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 text-white/30 hover:text-[#00E273] transition-colors duration-300 shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-[#00E273]"></div>
              <span className="text-sm font-light tracking-wide whitespace-nowrap">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="pt-24 sm:pt-32 pb-8 sm:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Headline */}
              <div className="space-y-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white leading-[0.9] tracking-tight"
                >
                  FRONTIER
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#00E273] tracking-tight"
                >
                  Project.
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg text-white/50 max-w-md leading-relaxed font-light"
              >
                Accelerating AI adoption at Zuma Indonesia.
                We help operations teams build intelligent systems
                to solve the hardest business challenges.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-[#00E273] hover:bg-[#00FF88] text-black font-normal px-8 py-6 text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00E273]/20 group"
                >
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-8 py-6 text-sm rounded-full transition-all duration-300 font-normal"
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Stats - Shows only on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="lg:hidden flex flex-wrap gap-4 justify-center"
            >
              {[
                { value: '4', label: 'AI Projects' },
                { value: '24/7', label: 'Operations' },
                { value: '2026', label: 'Vision Year' },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="px-6 py-4 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="text-2xl font-extralight text-[#00E273]">{stat.value}</div>
                  <div className="text-xs text-white/50 font-light">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Right - Glassmorphism Cards - Desktop only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-[500px] hidden lg:block"
            >
              {/* Card 1 - Top */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-56 rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E273] to-[#00b35f] flex items-center justify-center text-white text-sm font-normal">
                    A
                  </div>
                  <div>
                    <div className="text-sm font-normal text-white">AI Agent</div>
                    <div className="text-xs font-light text-white/40">Processing...</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#00E273] to-[#00FF88] rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs font-light text-white/40">
                    <span>Task progress</span>
                    <span>75%</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Bottom Left */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 left-0 w-52 rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-light text-white/40 uppercase tracking-wider">Status</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E273] animate-pulse"></span>
                    <span className="text-xs font-normal text-[#00E273]">Active</span>
                  </span>
                </div>
                <div className="text-3xl font-extralight text-white mb-1">4</div>
                <div className="text-xs font-light text-white/40">Projects Running</div>
              </motion.div>

              {/* Card 3 - Center */}
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [-1, 1, -1],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 226, 115, 0.3)',
                  boxShadow: '0 0 40px rgba(0, 226, 115, 0.2)',
                }}
              >
                <div className="text-center">
                  <div className="text-4xl font-extralight text-white mb-1">2026</div>
                  <div className="text-xs font-light text-white/50 uppercase tracking-[0.15em]">The Future</div>
                  <div className="mt-4 flex justify-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#00E273]"
                        style={{ opacity: 0.3 + i * 0.35 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-[#00E273]"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Logo Ticker */}
        <LogoTicker />
      </div>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

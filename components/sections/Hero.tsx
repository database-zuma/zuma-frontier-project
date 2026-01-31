"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Logo ticker component
function LogoTicker() {
  const logos = [
    "Branch Super App",
    "Warehouse App", 
    "Multi-MoltBot",
    "Creative Hub",
    "AI Agents",
    "Automation",
    "Operations",
    "Intelligence",
  ];

  return (
    <div className="w-full overflow-hidden py-8 border-t border-gray-100/50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mb-6"
      >
        <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-light">Meet our projects</p>
      </motion.div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-400 hover:text-[#00E273] transition-colors duration-300">
              <div className="w-2 h-2 rounded-full bg-[#00E273]"></div>
              <span className="text-sm font-light tracking-wide">{logo}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-400 hover:text-[#00E273] transition-colors duration-300">
              <div className="w-2 h-2 rounded-full bg-[#00E273]"></div>
              <span className="text-sm font-light tracking-wide">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Futuristic Gradient Background */}
      <div className="absolute inset-0">
        {/* Base white */}
        <div className="absolute inset-0 bg-white" />
        
        {/* Soft gradient orbs */}
        <div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0, 226, 115, 0.4) 0%, rgba(0, 226, 115, 0.1) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        <div 
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        <div 
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(0, 226, 115, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 226, 115, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 226, 115, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Headline - Light font weight */}
              <div className="space-y-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-gray-900 leading-[0.9] tracking-tight"
                >
                  FRONTIER
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#00E273] tracking-tight"
                >
                  Project.
                </motion.p>
              </div>

              {/* Description - Light weight */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-500 max-w-md leading-relaxed font-light"
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
                  className="bg-[#00E273] hover:bg-[#00d166] text-black font-normal px-8 py-6 text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00E273]/20 group"
                >
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 px-8 py-6 text-sm rounded-full transition-all duration-300 font-normal"
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - Glassmorphism Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-[500px] hidden lg:block"
            >
              {/* Background glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 226, 115, 0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Card 1 - Top */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-56 glass-card rounded-2xl p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E273] to-[#00b35f] flex items-center justify-center text-white text-sm font-normal shadow-lg shadow-[#00E273]/30">
                    A
                  </div>
                  <div>
                    <div className="text-sm font-normal text-gray-800">AI Agent</div>
                    <div className="text-xs font-light text-gray-400">Processing...</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#00E273] to-[#00FF88] rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs font-light text-gray-400">
                    <span>Task progress</span>
                    <span>75%</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Bottom Left */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 left-0 w-52 glass-card rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-light text-gray-400 uppercase tracking-wider">Status</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E273] animate-pulse"></span>
                    <span className="text-xs font-normal text-[#00E273]">Active</span>
                  </span>
                </div>
                <div className="text-3xl font-extralight text-gray-800 mb-1">4</div>
                <div className="text-xs font-light text-gray-400">Projects Running</div>
              </motion.div>

              {/* Card 3 - Center (Main) */}
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [-1, 1, -1],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 glass-card rounded-2xl p-6 glow-green"
              >
                <div className="text-center">
                  <div className="text-4xl font-extralight text-gray-800 mb-1">2026</div>
                  <div className="text-xs font-light text-gray-500 uppercase tracking-[0.15em]">The Future</div>
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

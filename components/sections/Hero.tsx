"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Hero Background - Bright green gradient orbs for header only
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Bright gradient orb - top left */}
      <div
        className="absolute -top-40 -left-40 w-[900px] h-[900px] rounded-full animate-pulse-hero"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.5) 0%, rgba(0, 226, 115, 0.15) 40%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform, opacity',
        }}
      />
      
      {/* Bright gradient orb - right side */}
      <div
        className="absolute top-1/4 -right-20 w-[700px] h-[700px] rounded-full animate-pulse-hero-delayed"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.45) 0%, rgba(0, 184, 153, 0.15) 40%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform, opacity',
        }}
      />
      
      {/* Bright gradient orb - bottom right */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full animate-pulse-hero"
        style={{
          background: 'radial-gradient(circle, rgba(122, 224, 96, 0.35) 0%, rgba(0, 226, 115, 0.1) 40%, transparent 70%)',
          filter: 'blur(70px)',
          willChange: 'transform, opacity',
          animationDelay: '-3s',
        }}
      />

      {/* Bright mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(at 30% 20%, rgba(0, 226, 115, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(0, 212, 170, 0.15) 0px, transparent 50%),
            radial-gradient(at 60% 60%, rgba(122, 224, 96, 0.12) 0px, transparent 50%)
          `,
        }}
      />

      <style jsx>{`
        @keyframes pulse-hero {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.85;
          }
        }
        @keyframes pulse-hero-delayed {
          0%, 100% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 0.75;
          }
        }
        .animate-pulse-hero {
          animation: pulse-hero 8s ease-in-out infinite;
        }
        .animate-pulse-hero-delayed {
          animation: pulse-hero-delayed 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Animated Line Chart - Stock/Financial Growth Style (Optimized for Performance)
function AnimatedLineChart() {
  // Stock chart path - upward trend with realistic volatility
  const stockChartPath = "M 0 480 L 40 470 L 80 490 L 120 460 L 160 440 L 200 455 L 240 420 L 280 430 L 320 390 L 360 410 L 400 370 L 440 350 L 480 380 L 520 340 L 560 320 L 600 350 L 640 300 L 680 280 L 720 310 L 760 260 L 800 240 L 840 270 L 880 220 L 920 200 L 960 180 L 1000 150";

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-40"
      style={{ willChange: 'auto', transform: 'translateZ(0)' }}
    >
      <svg 
        viewBox="0 0 1000 600" 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for the main line */}
          <linearGradient id="stockGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,226,115,0.15)" />
            <stop offset="100%" stopColor="rgba(0,226,115,0.4)" />
          </linearGradient>
          
          {/* Area fill gradient */}
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,226,115,0.06)" />
            <stop offset="100%" stopColor="rgba(0,226,115,0)" />
          </linearGradient>
        </defs>

        {/* Area fill under main chart */}
        <path
          d={`${stockChartPath} L 1000 600 L 0 600 Z`}
          fill="url(#areaGradient)"
          className="chart-area"
        />

        {/* Main stock chart line - no filters for performance */}
        <path
          d={stockChartPath}
          stroke="url(#stockGradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="chart-line"
        />

        {/* Static data points - no animations */}
        {[
          { x: 240, y: 420 },
          { x: 480, y: 380 },
          { x: 720, y: 310 },
          { x: 960, y: 180 },
        ].map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#00E273"
            opacity="0.4"
          />
        ))}
      </svg>

      <style jsx>{`
        .chart-area {
          opacity: 0;
          animation: fadeIn 2s ease-out 0.5s forwards;
        }
        
        .chart-line {
          stroke-dasharray: 2500;
          stroke-dashoffset: 2500;
          animation: drawLine 3s ease-out forwards;
        }
        
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

// Vanishing Point Perspective Grid - Optimized with CSS animations only
function VanishingPointGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg 
        viewBox="0 0 1000 600" 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial fade from vanishing point - darker */}
          <radialGradient id="vanishGlow" cx="75%" cy="35%" r="60%">
            <stop offset="0%" stopColor="rgba(0,226,115,0.06)" />
            <stop offset="50%" stopColor="rgba(0,226,115,0.02)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Subtle glow at vanishing point - static */}
        <ellipse cx="750" cy="210" rx="350" ry="250" fill="url(#vanishGlow)" />

        {/* Horizontal lines - brighter for header */}
        {[...Array(8)].map((_, i) => {
          const yStart = 60 + i * 70;
          const yEnd = 210 + (yStart - 300) * 0.15;
          return (
            <line
              key={`h-${i}`}
              x1="0"
              y1={yStart}
              x2="750"
              y2={yEnd}
              stroke={i % 4 === 0 ? "rgba(0,226,115,0.08)" : "rgba(255,255,255,0.035)"}
              strokeWidth={i % 4 === 0 ? "0.8" : "0.35"}
            />
          );
        })}

        {/* Vertical lines - more visible */}
        {[...Array(5)].map((_, i) => {
          const xPos = 100 + i * 160;
          const perspectiveFactor = 1 - (xPos / 1000) * 0.5;
          const xEnd = xPos + (750 - xPos) * (1 - perspectiveFactor);
          return (
            <line
              key={`v-${i}`}
              x1={xPos}
              y1="0"
              x2={xEnd}
              y2="600"
              stroke={i % 2 === 0 ? "rgba(0,226,115,0.04)" : "rgba(255,255,255,0.025)"}
              strokeWidth="0.4"
            />
          );
        })}

        {/* Minimal diagonal lines */}
        {[...Array(3)].map((_, i) => {
          const angle = -30 + i * 30;
          const radians = (angle * Math.PI) / 180;
          const length = 500;
          const x2 = 750 - Math.cos(radians) * length;
          const y2 = 210 - Math.sin(radians) * length;
          return (
            <line
              key={`d-${i}`}
              x1="750"
              y1="210"
              x2={x2}
              y2={y2}
              stroke="rgba(0,226,115,0.03)"
              strokeWidth="0.35"
            />
          );
        })}

        {/* Static accent dots */}
        {[...Array(3)].map((_, i) => {
          const angle = (i * 120) * Math.PI / 180;
          const distance = 100 + i * 30;
          const x = 750 - Math.cos(angle) * distance;
          const y = 210 - Math.sin(angle) * distance * 0.5;
          return (
            <circle
              key={`dot-${i}`}
              cx={x}
              cy={y}
              r={1}
              fill="rgba(0,226,115,0.15)"
            />
          );
        })}
      </svg>
    </div>
  );
}

// Zuma Departments ticker - scrolling departments
function DepartmentsTicker() {
  const departments = [
    "Human Resources & General Affairs Department",
    "Financial, Accounting, Tax, Asset, & Legal Department",
    "Operations Department",
    "Product Development Department",
    "Wholesale & B2B Department",
    "Online Department",
    "Creative & Marketing Department",
    "Bali Branch",
    "Lombok Branch",
    "Jatim Branch",
    "Jakarta Branch",
    "Sumatera Branch",
    "Batam Branch",
    "Sulawesi Branch",
  ];

  // Double the array for seamless loop
  const allDepartments = [...departments, ...departments];

  return (
    <div className="w-full overflow-hidden py-8 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mb-6"
      >
        <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-light">Zuma Indonesia Departments</p>
      </motion.div>
      
      <div className="relative">
        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container - moves LEFT */}
        <motion.div 
          className="flex items-center gap-16"
          animate={{ x: [0, -80 * departments.length] }}
          transition={{
            x: {
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          {allDepartments.map((department, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 text-white/40 hover:text-[#00E273] transition-colors duration-300 shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-[#00E273]/50"></div>
              <span className="text-sm font-light tracking-wide whitespace-nowrap">{department}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background - Bright green orbs for header */}
      <HeroBackground />
      {/* Wireframe Grid */}
      <VanishingPointGrid />
      {/* Animated Line Chart - In front of grid */}
      <AnimatedLineChart />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="pt-20 sm:pt-24 pb-6 sm:pb-8">
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
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9] tracking-tight font-mono"
                >
                  frontier
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#00E273] tracking-tight font-mono"
                >
                  projects.
                </motion.p>
              </div>

              {/* Description - with urgency */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg text-white/50 max-w-md leading-relaxed font-light"
              >
                <span className="text-white/70">By 2027, 75% of retail operations will be AI-augmented.</span>{" "}
                The question isn&apos;t whether to adopt—it&apos;s whether Zuma leads or follows.
                We&apos;re building the intelligent systems that keep us ahead.
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
                  Are you Zumans?
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                  className="px-6 py-4 rounded-md"
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
                className="absolute top-0 right-0 w-56 rounded-md p-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#00E273] to-[#00b35f] flex items-center justify-center text-white text-sm font-normal">
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
                className="absolute bottom-20 left-0 w-52 rounded-md p-5"
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 rounded-md p-6"
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

        {/* Zuma Departments Ticker */}
        <DepartmentsTicker />
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

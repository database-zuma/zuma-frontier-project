"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

// Claude Logo Component
const ClaudeLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4z"/>
    <path d="M16 8c-.5 0-1 .1-1.5.3-.4.2-.8.5-1.1.8-.3.4-.6.8-.8 1.3-.2.5-.3 1-.3 1.5s.1 1 .3 1.5c.2.5.5.9.8 1.3.3.4.7.7 1.1.9.5.2 1 .3 1.5.3s1-.1 1.5-.3c.5-.2.9-.5 1.2-.9.4-.4.6-.8.8-1.3.2-.5.3-1 .3-1.5s-.1-1-.3-1.5c-.2-.5-.5-.9-.8-1.3-.4-.4-.8-.7-1.2-.9-.5-.2-1-.3-1.5-.3zM12 18c-.5 0-1 .1-1.5.3-.4.2-.8.5-1.1.8-.3.4-.6.8-.8 1.3-.2.5-.3 1-.3 1.5s.1 1 .3 1.5c.2.5.5.9.8 1.3.3.4.7.7 1.1.9.5.2 1 .3 1.5.3s1-.1 1.5-.3c.5-.2.9-.5 1.2-.9.4-.4.6-.8.8-1.3.2-.5.3-1 .3-1.5s-.1-1-.3-1.5c-.2-.5-.5-.9-.8-1.3-.4-.4-.8-.7-1.2-.9-.5-.2-1-.3-1.5-.3zM20 18c-.5 0-1 .1-1.5.3-.4.2-.8.5-1.1.8-.3.4-.6.8-.8 1.3-.2.5-.3 1-.3 1.5s.1 1 .3 1.5c.2.5.5.9.8 1.3.3.4.7.7 1.1.9.5.2 1 .3 1.5.3s1-.1 1.5-.3c.5-.2.9-.5 1.2-.9.4-.4.6-.8.8-1.3.2-.5.3-1 .3-1.5s-.1-1-.3-1.5c-.2-.5-.5-.9-.8-1.3-.4-.4-.8-.7-1.2-.9-.5-.2-1-.3-1.5-.3z"/>
  </svg>
);

// Kimi Logo Component
const KimiLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M16 2L4 9v14l12 7 12-7V9L16 2zm0 2.5l10 5.75v11.5l-10 5.75-10-5.75V10.25l10-5.75z"/>
    <path d="M16 8l-6 3.5v7L16 22l6-3.5v-7L16 8zm0 2l4 2.5v5L16 20l-4-2.5v-5L16 10z"/>
  </svg>
);

// AI Foundation - Premium tier
const aiFoundation = [
  { 
    name: "Claude Opus 4.5", 
    description: "Strategic AI",
    logo: ClaudeLogo,
  },
  { 
    name: "Kimi K2.5", 
    description: "Reasoning AI",
    logo: KimiLogo,
  },
];

// Tech stack logos - organized in rows for alternating scroll
const techRows = [
  // Row 1: Frontend & Frameworks (scrolls right)
  [
    { name: "Next.js", color: "#ffffff" },
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind CSS", color: "#38B2AC" },
    { name: "Vercel", color: "#ffffff" },
  ],
  // Row 2: Backend & Database (scrolls left)
  [
    { name: "Python", color: "#3776AB" },
    { name: "FastAPI", color: "#009688" },
    { name: "Supabase", color: "#3ECF8E" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Node.js", color: "#339933" },
  ],
  // Row 3: AI & Cloud (scrolls right)
  [
    { name: "Gemini", color: "#4285F4" },
    { name: "OpenAI", color: "#ffffff" },
    { name: "GCP", color: "#4285F4" },
    { name: "Docker", color: "#2496ED" },
    { name: "GitHub", color: "#ffffff" },
  ],
];

// SVG Icons for each technology
const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    "Next.js": (
      <svg viewBox="0 0 180 180" className="w-full h-full">
        <mask id="nextMask" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="white"/>
        </mask>
        <g mask="url(#nextMask)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.5 130.5L66.5 50.5V129.5" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M110.5 50.5H149.5" stroke="white" strokeWidth="16" strokeLinecap="round"/>
        </g>
      </svg>
    ),
    "React": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
        <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#61DAFB" strokeWidth="3"/>
        <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 50 50)"/>
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" rx="15" fill="#3178C6"/>
        <path d="M65 75V85H85V90H15V85H35V75H65Z" fill="white"/>
        <text x="50" y="65" textAnchor="middle" fill="white" fontSize="45" fontWeight="bold" fontFamily="Arial">TS</text>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 25c-10 0-16 5-18 15 3-4 7-6 11-6 5 0 7 2 7 6 0 3-2 6-5 10-7 8-12 12-12 20 0 10 8 17 18 17 10 0 20-7 24-17-8 4-14 6-18 6-5 0-7-2-7-6 0-3 2-6 5-10 7-8 12-12 12-20 0-10-8-15-17-15z" fill="#38B2AC"/>
      </svg>
    ),
    "Vercel": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,10 90,90 10,90" fill="white"/>
      </svg>
    ),
    "Python": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10c-10 0-20 5-20 15v10h20v5h-25c-10 0-15 10-15 20s5 20 15 20h10v-15c0-10 10-15 20-15h15v-20c0-10-10-15-20-15z" fill="#3776AB"/>
        <path d="M75 30h-10v15c0 10-10 15-20 15h-15v20c0 10 10 15 20 15s20-5 20-15v-10h-10v-5h25c10 0 15-10 15-20s-5-20-15-20z" fill="#FFD43B"/>
      </svg>
    ),
    "FastAPI": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" rx="20" fill="#009688"/>
        <path d="M25 35h50v10H25zM25 55h40v10H25zM25 75h30v10H25z" fill="white"/>
      </svg>
    ),
    "Supabase": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 5L15 55h30l-10 40 40-50H45l10-40z" fill="#3ECF8E"/>
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M70 20c-10 0-20 5-25 15-5-10-15-15-25-15-15 0-25 10-25 25 0 20 25 40 50 55 25-15 50-35 50-55 0-15-10-25-25-25z" fill="#336791"/>
        <text x="50" y="55" textAnchor="middle" fill="white" fontSize="25" fontWeight="bold">Pg</text>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10L15 30v40l35 20 35-20V30L50 10z" fill="#339933"/>
        <text x="50" y="60" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Node</text>
      </svg>
    ),
    "Gemini": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 5L55 45L95 50L55 55L50 95L45 55L5 50L45 45Z" fill="#4285F4"/>
      </svg>
    ),
    "OpenAI": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8"/>
        <path d="M50 20c17 0 30 13 30 30s-13 30-30 30" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round"/>
      </svg>
    ),
    "GCP": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 20L20 50l30 30 30-30-30-30z" fill="#4285F4"/>
        <circle cx="50" cy="50" r="15" fill="#EA4335"/>
      </svg>
    ),
    "Docker": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="40" width="15" height="15" fill="#2496ED"/>
        <rect x="40" y="40" width="15" height="15" fill="#2496ED"/>
        <rect x="60" y="40" width="15" height="15" fill="#2496ED"/>
        <rect x="30" y="25" width="15" height="15" fill="#2496ED"/>
        <rect x="50" y="25" width="15" height="15" fill="#2496ED"/>
        <path d="M20 60h60c0 15-10 25-25 25s-25-10-25-25z" fill="#2496ED"/>
      </svg>
    ),
    "GitHub": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 5C25 5 5 25 5 50c0 20 12 36 30 42 2 0 3-1 3-2v-8c-12 2-15-6-15-6-2-5-5-6-5-6-4-3 0-3 0-3 5 0 7 5 7 5 4 7 11 5 14 4 0-3 2-5 3-6-10-1-20-5-20-21 0-5 2-9 5-12-1-1-2-5 0-11 0 0 4-1 13 5 4-1 8-2 12-2s8 1 12 2c9-6 13-5 13-5 2 6 1 10 0 11 3 3 5 7 5 12 0 16-10 20-20 21 2 2 3 4 3 7v15c0 1 1 2 3 2 18-6 30-22 30-42 0-25-20-45-45-45z" fill="white"/>
      </svg>
    ),
  };

  return icons[name] || <div className="w-full h-full bg-white/20 rounded-lg" />;
};

// Tech Logo Card Component
const TechLogo = ({ name, color }: { name: string; color: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="group relative flex-shrink-0"
    >
      <div 
        className="relative w-20 h-20 sm:w-24 sm:h-24 p-4 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `0 0 30px ${color}40, 0 0 60px ${color}20`,
          }}
        />
        
        {/* Inner glow */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
          }}
        />
        
        {/* Border glow on hover */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            border: `1px solid ${color}60`,
          }}
        />
        
        {/* Icon */}
        <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 opacity-80 group-hover:opacity-100 transition-opacity">
          <TechIcon name={name} />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <span className="text-xs text-white/60 font-light">{name}</span>
      </div>
    </motion.div>
  );
};

// Scrolling Row Component
const ScrollingRow = ({
  technologies,
  direction = "right",
  speed = 30,
}: {
  technologies: typeof techRows[0];
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Create enough copies for seamless loop (need at least 2 full sets visible + 1 for buffer)
  const items = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <motion.div
        className="flex gap-6 sm:gap-8"
        initial={{ x: direction === "right" ? 0 : "-50%" }}
        animate={{
          x: direction === "right" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }
        }}
        style={{ width: 'max-content' }}
      >
        {items.map((tech, index) => (
          <TechLogo key={`${tech.name}-${index}`} name={tech.name} color={tech.color} />
        ))}
      </motion.div>
    </div>
  );
};

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 226, 115, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs text-[#00E273] uppercase tracking-[0.2em] mb-4 font-light">Technology</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 font-mono">
            built on
            <br />
            <span className="text-[#00E273]">enterprise-grade ai</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/40 max-w-2xl mx-auto font-light px-4 sm:px-0">
            The same AI powering Fortune 500 companies, now driving Zuma&apos;s operations.
          </p>
        </motion.div>

        {/* AI Foundation - Premium Tier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-6 text-center font-light flex items-center justify-center gap-2">
            <Brain className="w-4 h-4 text-[#00E273]" />
            AI Foundation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {aiFoundation.map((ai, index) => (
              <motion.div
                key={ai.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="relative p-6 sm:p-8 rounded-lg sm:rounded-xl text-center transition-all duration-300 hover:scale-105 min-w-[200px]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 226, 115, 0.15) 0%, rgba(0, 226, 115, 0.05) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 226, 115, 0.3)',
                    boxShadow: '0 0 40px rgba(0, 226, 115, 0.1)',
                  }}
                >
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#00E273]/0 to-[#00E273]/0 group-hover:from-[#00E273]/20 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <ai.logo className="w-8 h-8 text-[#00E273] mx-auto mb-3" />
                    <p className="text-white font-medium text-lg mb-1">
                      {ai.name}
                    </p>
                    <p className="text-xs text-[#00E273] font-light">
                      {ai.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-white/10" />
          <p className="text-xs text-white/30 uppercase tracking-[0.15em] font-light">Tech Stack</p>
          <div className="h-px w-16 bg-white/10" />
        </div>

        {/* Scrolling Tech Stack Rows */}
        <div className="space-y-2">
          {techRows.map((row, index) => (
            <ScrollingRow 
              key={index}
              technologies={row}
              direction={index % 2 === 0 ? "right" : "left"}
              speed={40 + index * 5}
            />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 font-light text-sm">
            Built with modern tools for the modern enterprise
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

// Claude Logo Component - Official Anthropic brand logo
const ClaudeLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 512 509.64" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#D77655" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.612-115.613 115.612H115.612C52.026 509.639 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z"/>
    <path fill="#FCF2EE" fillRule="nonzero" d="M142.27 316.619l73.655-41.326 1.238-3.589-1.238-1.996-3.589-.001-12.31-.759-42.084-1.138-36.498-1.516-35.361-1.896-8.897-1.895-8.34-10.995.859-5.484 7.482-5.03 10.717.935 23.683 1.617 35.537 2.452 25.782 1.517 38.193 3.968h6.064l.86-2.451-2.073-1.517-1.618-1.517-36.776-24.922-39.81-26.338-20.852-15.166-11.273-7.683-5.687-7.204-2.451-15.721 10.237-11.273 13.75.935 3.513.936 13.928 10.716 29.749 23.027 38.848 28.612 5.687 4.727 2.275-1.617.278-1.138-2.553-4.271-21.13-38.193-22.546-38.848-10.035-16.101-2.654-9.655c-.935-3.968-1.617-7.304-1.617-11.374l11.652-15.823 6.445-2.073 15.545 2.073 6.547 5.687 9.655 22.092 15.646 34.78 24.265 47.291 7.103 14.028 3.791 12.992 1.416 3.968 2.449-.001v-2.275l1.997-26.641 3.69-32.707 3.589-42.084 1.239-11.854 5.863-14.206 11.652-7.683 9.099 4.348 7.482 10.716-1.036 6.926-4.449 28.915-8.72 45.294-5.687 30.331h3.313l3.792-3.791 15.342-20.372 25.782-32.227 11.374-12.789 13.27-14.129 8.517-6.724 16.1-.001 11.854 17.617-5.307 18.199-16.581 21.029-13.75 17.819-19.716 26.54-12.309 21.231 1.138 1.694 2.932-.278 44.536-9.479 24.062-4.347 28.714-4.928 12.992 6.066 1.416 6.167-5.106 12.613-30.71 7.583-36.018 7.204-53.636 12.689-.657.48.758.935 24.164 2.275 10.337.556h25.301l47.114 3.514 12.309 8.139 7.381 9.959-1.238 7.583-18.957 9.655-25.579-6.066-59.702-14.205-20.474-5.106-2.83-.001v1.694l17.061 16.682 31.266 28.233 39.152 36.397 1.997 8.999-5.03 7.102-5.307-.758-34.401-25.883-13.27-11.651-30.053-25.302-1.996-.001v2.654l6.926 10.136 36.574 54.975 1.895 16.859-2.653 5.485-9.479 3.311-10.414-1.895-21.408-30.054-22.092-33.844-17.819-30.331-2.173 1.238-10.515 113.261-4.929 5.788-11.374 4.348-9.478-7.204-5.03-11.652 5.03-23.027 6.066-30.052 4.928-23.886 4.449-29.674 2.654-9.858-.177-.657-2.173.278-22.37 30.71-34.021 45.977-26.919 28.815-6.445 2.553-11.173-5.789 1.037-10.337 6.243-9.2 37.257-47.392 22.47-29.371 14.508-16.961-.101-2.451h-.859l-98.954 64.251-17.618 2.275-7.583-7.103.936-11.652 3.589-3.791 29.749-20.474-.101.102.024.101z"/>
  </svg>
);

// Kimi Logo Component - Official Moonshot AI brand logo  
const KimiLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M503 114.333v280c0 60.711-49.29 110-110 110H113c-60.711 0-110-49.289-110-110v-280c0-60.71 49.289-110 110-110h280c60.71 0 110 49.29 110 110z" fill="#000"/>
    <path d="M342.065 189.759c1.886-2.42 3.541-4.63 5.289-6.77.81-1.007.74-1.771-.046-2.824-7.58-9.965-8.298-21.028-3.935-32.254 3.275-8.448 10.52-12.406 19.373-13.25 5.52-.521 10.936.046 15.959 2.73 6.596 3.53 10.438 8.912 11.688 16.341.995 5.926.81 11.712-.868 17.452-2.974 10.161-10.277 15.427-20.287 16.758-8.31 1.11-16.734 1.25-25.113 1.817-.648.046-1.308 0-2.06 0z" fill="#027aff"/>
    <path d="M321.512 144.254h-50.064l-39.637 90.384h-56.036v-89.99H131v232.868h44.787v-98.103h78.973c13.598 0 26.015-7.927 31.744-20.252v118.355h44.787v-98.103c0-23.342-18.239-42.97-41.523-44.671v-.116h-24.593a45.577 45.577 0 0026.884-24.534l29.453-65.838z" fill="#fff"/>
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

// SVG Icons for each technology - MONOCHROME style (white/gray)
const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    "Next.js": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="white" fillOpacity="0.9"/>
        <path d="M70 72L38 30V70" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M62 30L70 30" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round"/>
      </svg>
    ),
    "React": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="6" fill="white" fillOpacity="0.9"/>
        <ellipse cx="50" cy="50" rx="35" ry="14" fill="none" stroke="white" strokeWidth="2" opacity="0.8"/>
        <ellipse cx="50" cy="50" rx="35" ry="14" fill="none" stroke="white" strokeWidth="2" opacity="0.8" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="35" ry="14" fill="none" stroke="white" strokeWidth="2" opacity="0.8" transform="rotate(120 50 50)"/>
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="5" y="5" width="90" height="90" rx="12" fill="white" fillOpacity="0.9"/>
        <text x="50" y="65" textAnchor="middle" fill="#0a0a0a" fontSize="40" fontWeight="bold" fontFamily="Arial">TS</text>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 25c-10 0-16 5-18 15 3-4 7-6 11-6 5 0 7 2 7 6 0 3-2 6-5 10-7 8-12 12-12 20 0 10 8 17 18 17 10 0 20-7 24-17-8 4-14 6-18 6-5 0-7-2-7-6 0-3 2-6 5-10 7-8 12-12 12-20 0-10-8-15-17-15z" fill="white" fillOpacity="0.9"/>
      </svg>
    ),
    "Vercel": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,15 85,85 15,85" fill="white" fillOpacity="0.9"/>
      </svg>
    ),
    "Python": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10c-10 0-20 5-20 15v10h20v5h-25c-10 0-15 10-15 20s5 20 15 20h10v-15c0-10 10-15 20-15h15v-20c0-10-10-15-20-15z" fill="white" fillOpacity="0.7"/>
        <path d="M75 30h-10v15c0 10-10 15-20 15h-15v20c0 10 10 15 20 15s20-5 20-15v-10h-10v-5h25c10 0 15-10 15-20s-5-20-15-20z" fill="white" fillOpacity="0.9"/>
        <circle cx="35" cy="22" r="4" fill="#0a0a0a"/>
        <circle cx="65" cy="78" r="4" fill="#0a0a0a"/>
      </svg>
    ),
    "FastAPI": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="42" fill="white" fillOpacity="0.9"/>
        <path d="M35 30L65 50L35 70V30Z" fill="#0a0a0a"/>
      </svg>
    ),
    "Supabase": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M52 95c-2 3-7 1-7-3V55H15c-4 0-6-5-3-8l36-42c2-3 7-1 7 3v37h30c4 0 6 5 3 8L52 95z" fill="white" fillOpacity="0.9"/>
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <ellipse cx="50" cy="35" rx="35" ry="25" fill="none" stroke="white" strokeWidth="4" opacity="0.9"/>
        <path d="M15 35v30c0 14 16 25 35 25s35-11 35-25V35" fill="none" stroke="white" strokeWidth="4" opacity="0.9"/>
        <ellipse cx="50" cy="65" rx="35" ry="25" fill="none" stroke="white" strokeWidth="4" opacity="0.5"/>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 5L10 28v44l40 23 40-23V28L50 5z" fill="none" stroke="white" strokeWidth="4" opacity="0.9"/>
        <path d="M50 5v90M10 28l40 22 40-22M10 72l40-22 40 22" stroke="white" strokeWidth="2" opacity="0.5"/>
      </svg>
    ),
    "Gemini": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 5L55 42L92 50L55 58L50 95L45 58L8 50L45 42Z" fill="white" fillOpacity="0.9"/>
      </svg>
    ),
    "OpenAI": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 10a40 40 0 0 1 0 80" fill="none" stroke="white" strokeWidth="5" opacity="0.9" strokeLinecap="round"/>
        <path d="M50 10a40 40 0 0 0 0 80" fill="none" stroke="white" strokeWidth="5" opacity="0.5" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="8" fill="white" fillOpacity="0.9"/>
      </svg>
    ),
    "GCP": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 15L20 35v30l30 20 30-20V35L50 15z" fill="none" stroke="white" strokeWidth="4" opacity="0.9"/>
        <circle cx="50" cy="50" r="12" fill="white" fillOpacity="0.7"/>
        <path d="M50 15v70M20 35l60 30M80 35L20 65" stroke="white" strokeWidth="2" opacity="0.4"/>
      </svg>
    ),
    "Docker": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="12" y="42" width="12" height="12" fill="white" fillOpacity="0.9" rx="2"/>
        <rect x="28" y="42" width="12" height="12" fill="white" fillOpacity="0.9" rx="2"/>
        <rect x="44" y="42" width="12" height="12" fill="white" fillOpacity="0.9" rx="2"/>
        <rect x="60" y="42" width="12" height="12" fill="white" fillOpacity="0.9" rx="2"/>
        <rect x="28" y="28" width="12" height="12" fill="white" fillOpacity="0.7" rx="2"/>
        <rect x="44" y="28" width="12" height="12" fill="white" fillOpacity="0.7" rx="2"/>
        <rect x="44" y="14" width="12" height="12" fill="white" fillOpacity="0.5" rx="2"/>
        <path d="M5 58h90c-5 25-35 32-45 32S10 78 5 58z" fill="white" fillOpacity="0.3"/>
      </svg>
    ),
    "GitHub": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 5C25 5 5 25 5 50c0 20 12 36 30 42 2 0 3-1 3-2v-8c-12 2-15-6-15-6-2-5-5-6-5-6-4-3 0-3 0-3 5 0 7 5 7 5 4 7 11 5 14 4 0-3 2-5 3-6-10-1-20-5-20-21 0-5 2-9 5-12-1-1-2-5 0-11 0 0 4-1 13 5 4-1 8-2 12-2s8 1 12 2c9-6 13-5 13-5 2 6 1 10 0 11 3 3 5 7 5 12 0 16-10 20-20 21 2 2 3 4 3 7v15c0 1 1 2 3 2 18-6 30-22 30-42 0-25-20-45-45-45z" fill="white" fillOpacity="0.9"/>
      </svg>
    ),
  };

  return icons[name] || <div className="w-full h-full bg-white/20 rounded-lg" />;
};

// Tech Logo Card Component - Monochrome style with minimal rounding
const TechLogo = ({ name }: { name: string; color?: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative flex-shrink-0"
    >
      <div 
        className="relative w-20 h-20 sm:w-24 sm:h-24 p-4 rounded-md flex items-center justify-center transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Subtle hover glow - white/gray only */}
        <div 
          className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}
        />
        
        {/* Border highlight on hover */}
        <div 
          className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        />
        
        {/* Icon */}
        <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 opacity-60 group-hover:opacity-100 transition-opacity">
          <TechIcon name={name} />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <span className="text-xs text-white/50 font-light">{name}</span>
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

        {/* AI Foundation - Premium Tier - Big Standalone Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-8 text-center font-light flex items-center justify-center gap-2">
            <Brain className="w-4 h-4 text-[#00E273]" />
            AI Foundation
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            {aiFoundation.map((ai, index) => (
              <motion.div
                key={ai.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group text-center"
              >
                {/* Big standalone logo - no box */}
                <div className="relative">
                  {/* Subtle glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{
                      background: index === 0 ? 'rgba(215, 118, 85, 0.3)' : 'rgba(2, 122, 255, 0.3)',
                    }}
                  />
                  <ai.logo className="w-20 h-20 sm:w-24 sm:h-24 relative z-10 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <p className="text-white font-medium text-base sm:text-lg mt-4 mb-1">
                  {ai.name}
                </p>
                <p className="text-xs text-white/50 font-light">
                  {ai.description}
                </p>
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

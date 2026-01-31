"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

// AI Foundation - Premium tier
const aiFoundation = [
  { 
    name: "Claude Opus 4.5", 
    description: "Strategic AI",
    icon: Brain,
  },
  { 
    name: "Kimi K2.5", 
    description: "Reasoning AI",
    icon: Sparkles,
  },
];

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Supabase", category: "Database" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Gemini", category: "AI" },
  { name: "GCP", category: "Cloud" },
  { name: "Vercel", category: "Deployment" },
];

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
                    <ai.icon className="w-8 h-8 text-[#00E273] mx-auto mb-3" />
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
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-white/10" />
          <p className="text-xs text-white/30 uppercase tracking-[0.15em] font-light">Tech Stack</p>
          <div className="h-px w-16 bg-white/10" />
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div 
                className="relative p-4 sm:p-6 rounded-lg sm:rounded-xl text-center transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#00E273]/0 to-[#00E273]/0 group-hover:from-[#00E273]/10 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10">
                  <p className="text-white font-normal mb-1 group-hover:text-[#00E273] transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-xs text-white/30 font-light">
                    {tech.category}
                  </p>
                </div>
              </div>
            </motion.div>
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

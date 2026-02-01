"use client";

import { motion } from "framer-motion";
import { Lightbulb, Hammer, Rocket } from "lucide-react";

// Animated green gradient background component
function GreenGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Animated gradient orbs - green family */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.3) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(122, 224, 96, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(at 30% 20%, rgba(0, 226, 115, 0.08) 0px, transparent 50%),
            radial-gradient(at 70% 80%, rgba(0, 184, 153, 0.06) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(0, 212, 170, 0.04) 0px, transparent 50%)
          `,
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

const phases = [
  {
    number: "01",
    title: "Foundation",
    subtitle: "Laying the groundwork for tomorrow",
    description: "Setting up infrastructure, establishing workflows, and deploying our first AI tools.",
    icon: Lightbulb,
    status: "current",
  },
  {
    number: "02",
    title: "Acceleration",
    subtitle: "Building momentum, scaling impact",
    description: "Expanding tool suite, integrating across departments, and measuring ROI.",
    icon: Hammer,
    status: "upcoming",
  },
  {
    number: "03",
    title: "Transformation",
    subtitle: "Proving the future is now",
    description: "Full AI adoption, intelligent automation everywhere, and continuous innovation.",
    icon: Rocket,
    status: "future",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Animated green gradient background */}
      <GreenGradientBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs text-[#00E273] uppercase tracking-[0.2em] mb-4 font-light">Strategic Roadmap</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 font-mono">
            our path to the
            <br />
            <span className="text-[#00E273]">future</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/50 max-w-2xl mx-auto font-light px-4 sm:px-0">
            From first steps to full transformation. This is how we build the future, one breakthrough at a time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Phases */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div 
                  className="relative p-6 sm:p-8 rounded-md h-full transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: phase.status === 'current' ? '1px solid rgba(0, 226, 115, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Phase number */}
                  <div className="text-5xl sm:text-6xl font-extralight text-white/10 mb-4">
                    {phase.number}
                  </div>

                  {/* Icon */}
                  <div 
                    className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 ${
                      phase.status === 'current' 
                        ? 'bg-gradient-to-br from-[#00E273] to-[#00b35f] text-white' 
                        : 'bg-white/5 text-white/40'
                    }`}
                  >
                    <phase.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-normal text-white mb-2">{phase.title}</h3>
                  <p className="text-sm text-[#00E273] font-light mb-3">{phase.subtitle}</p>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{phase.description}</p>

                  {/* Status indicator */}
                  {phase.status === 'current' && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E273]/10 text-[#00E273] text-xs font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E273] animate-pulse" />
                        Current
                      </span>
                    </div>
                  )}
                </div>

                {/* Connector dot - desktop */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

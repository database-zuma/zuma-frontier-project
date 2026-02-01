"use client";

import { motion } from "framer-motion";
import { AbstractGraphic } from "@/components/AbstractGraphics";

const initiatives = [
  {
    id: 1,
    title: "AI Powered Apps",
    tagline: "Smart tools for every team",
    description: "Custom applications that think, learn, and adapt to your workflow.",
    variant: 1,
  },
  {
    id: 2,
    title: "AI Assistants",
    tagline: "Your 24/7 digital workforce",
    description: "Intelligent agents that handle tasks, answer questions, and boost productivity.",
    variant: 2,
  },
  {
    id: 3,
    title: "Auto Workflows",
    tagline: "Repetitive work, automated",
    description: "Self-running processes that eliminate manual steps and human error.",
    variant: 3,
  },
  {
    id: 4,
    title: "Data Strategy",
    tagline: "Decisions backed by intelligence",
    description: "Turn raw data into actionable insights that drive smarter moves.",
    variant: 4,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8"
        >
          <p className="text-xs text-[#00E273] uppercase tracking-[0.2em] mb-4 font-light">What We Do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 font-mono">
            building the future,
            <br />
            <span className="text-[#00E273]">now</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/40 max-w-2xl mx-auto font-light">
            Four pillars. One mission. Transforming how Zuma operates through intelligent systems.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          {/* Gradient fade on left */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          
          {/* Gradient fade on right */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          {/* Scroll container */}
          <div 
            className="overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex gap-4 sm:gap-6 px-4 sm:px-8 lg:px-16" style={{ width: 'max-content' }}>
              {initiatives.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex-shrink-0 snap-start snap-always"
                >
                  <div 
                    className="relative w-[300px] sm:w-[340px] lg:w-[380px] h-[420px] sm:h-[460px] rounded-md overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {/* Abstract Graphic Area - Top 60% */}
                    <div className="relative h-[60%] overflow-hidden">
                      <AbstractGraphic variant={item.variant} />
                      
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80" />
                    </div>

                    {/* Content Area - Bottom 40% */}
                    <div className="relative h-[40%] p-6 flex flex-col justify-center">
                      <div>
                        <h3 className="text-xl font-normal text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-[#00E273] font-light mb-3">{item.tagline}</p>
                        <p className="text-sm text-white/50 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

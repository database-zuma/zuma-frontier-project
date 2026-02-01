"use client";

import { motion } from "framer-motion";

const visionCards = [
  {
    title: "Integrated Data Management",
    description: "Connecting every system and source into one unified, intelligent data ecosystem.",
  },
  {
    title: "Single Source of Truth",
    description: "One centralized platform where all teams access accurate, real-time information.",
  },
  {
    title: "AI-First Operations",
    description: "Intelligence embedded in every workflow, decision, and process from day one.",
  },
  {
    title: "Continuous Improvement",
    description: "Self-optimizing systems that learn from every interaction and evolve constantly.",
  },
];

export function Vision() {
  return (
    <section id="vision" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-xs text-[#00E273] uppercase tracking-[0.2em] mb-4 font-light">Our Vision</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 font-mono">
            the dawn of a
            <br />
            <span className="text-[#00E273]">new era</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/50 max-w-2xl mx-auto font-light px-4 sm:px-0">
            We stand at the frontier of transformation. Where artificial intelligence 
            meets human ingenuity, and where Zuma Indonesia leads the future of operations.
          </p>
        </motion.div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
          {visionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full">
                {/* Glass Card - Dark version */}
                <div
                  className="relative h-full p-5 sm:p-6 rounded-md overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border border-white/10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Hover gradient */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-[#00E273]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-normal text-white mb-3">{card.title}</h3>
                    
                    <p className="text-sm text-white/50 font-light leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

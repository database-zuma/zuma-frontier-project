"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const visionCards = [
  {
    icon: Sparkles,
    title: "AI-First Operations",
    description: "Transforming every process with intelligent automation and predictive insights.",
  },
  {
    icon: () => (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Continuous Improvement",
    description: "Building systems that learn, adapt, and optimize themselves over time.",
  },
  {
    icon: () => (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Future Ready",
    description: "Pioneering technologies that position Zuma Indonesia at the frontier of innovation.",
  },
  {
    icon: () => (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Enterprise Scale",
    description: "Robust, secure, and scalable solutions designed for production workloads.",
  },
];

export function Vision() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Light section background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs text-[#00E273] uppercase tracking-[0.2em] mb-4 font-light">Our Vision</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6">
            The Dawn of a
            <br />
            <span className="text-[#00E273]">New Era</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light">
            We stand at the frontier of transformation. Where artificial intelligence 
            meets human ingenuity, and where Zuma Indonesia leads the future of operations.
          </p>
        </motion.div>

        {/* Vision Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full">
                {/* Glass Card - Light version */}
                <div 
                  className="relative h-full p-6 rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border border-gray-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {/* Hover gradient */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-[#00E273]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E273] to-[#00b35f] flex items-center justify-center text-white mb-4 shadow-lg shadow-[#00E273]/20">
                      <card.icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-lg font-normal text-gray-900 mb-2">{card.title}</h3>
                    
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 text-[#00E273] hover:text-[#00b35f] transition-colors font-light"
          >
            Explore our projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

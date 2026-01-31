"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AbstractGraphic } from "@/components/AbstractGraphics";

const projects = [
  {
    id: 1,
    title: "Branch Super App",
    tagline: "Intelligent Store Operations",
    description: "Mobile-first PWA for Area Supervisors to manage replenishment orders with real-time tracking and AI-powered recommendations.",
    status: "Live",
    statusColor: "bg-[#00E273]",
    variant: 1,
  },
  {
    id: 2,
    title: "Warehouse Super App",
    tagline: "Next-Gen Logistics",
    description: "Desktop operations platform for warehouse teams with smart automation, predictive alerts, and seamless coordination.",
    status: "Planning",
    statusColor: "bg-[#00D4AA]",
    variant: 2,
  },
  {
    id: 3,
    title: "Multi-MoltBot System",
    tagline: "AI Workforce",
    description: "Meet the team of the future: ARIA, DATUM, and CODER. AI agents working 24/7 to amplify human potential across every operation.",
    status: "Brainstorm",
    statusColor: "bg-[#00B899]",
    variant: 3,
  },
  {
    id: 4,
    title: "Creative Hub Agents",
    tagline: "Generative Creativity",
    description: "AI-powered creative workflows that accelerate innovation while maintaining brand consistency through intelligent generation.",
    status: "Developing",
    statusColor: "bg-[#7AE060]",
    variant: 4,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 226, 115, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8"
        >
          <p className="text-xs text-[#00E273] uppercase tracking-[0.2em] mb-4 font-light">Active Projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 font-mono">
            building tomorrow,
            <br />
            <span className="text-[#00E273]">today</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/40 max-w-2xl mx-auto font-light">
            Four projects. One vision. Unlimited potential. Each project represents 
            a step toward the AI-powered future of Zuma Indonesia.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          {/* Gradient fade on left */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          {/* Gradient fade on right */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Scroll container - with snap scrolling for mobile */}
          <div 
            className="overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex gap-4 sm:gap-6 px-4 sm:px-8 lg:px-16" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer flex-shrink-0 snap-start snap-always"
                >
                  <div 
                    className="relative w-[300px] sm:w-[340px] lg:w-[380px] h-[440px] sm:h-[480px] rounded-lg sm:rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Abstract Graphic Area - Top 60% */}
                    <div className="relative h-[60%] overflow-hidden">
                      <AbstractGraphic variant={project.variant} />
                      
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/80" />
                      
                      {/* Shine effect on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
                          transform: 'translateX(-100%)',
                          animation: 'shine 3s infinite',
                        }}
                      />
                    </div>

                    {/* Content Area - Bottom 40% */}
                    <div className="relative h-[40%] p-6 flex flex-col justify-between">
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-normal text-white">{project.title}</h3>
                          <Badge 
                            className={`${project.statusColor} text-white text-xs font-normal px-2 py-0.5`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-[#00E273] font-light mb-3">{project.tagline}</p>
                        <p className="text-sm text-white/50 font-light leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-[#00E273] group-hover:gap-3 transition-all">
                          <span className="text-sm font-light">Learn more</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-[#00E273] transition-colors" />
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
        @keyframes shine {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
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

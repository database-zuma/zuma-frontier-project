"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Branch Super App",
    tagline: "Intelligent Store Operations",
    description: "Mobile-first PWA for Area Supervisors to manage replenishment orders with real-time tracking and AI-powered recommendations.",
    status: "Live",
    statusColor: "bg-[#00E273]",
    gradient: "from-[#00E273]/20 to-transparent",
  },
  {
    id: 2,
    title: "Warehouse Super App",
    tagline: "Next-Gen Logistics",
    description: "Desktop operations platform for warehouse teams with smart automation, predictive alerts, and seamless coordination.",
    status: "Planning",
    statusColor: "bg-blue-500",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    id: 3,
    title: "Multi-MoltBot System",
    tagline: "AI Workforce",
    description: "Meet the team of the future: ARIA, DATUM, and CODER. AI agents working 24/7 to amplify human potential across every operation.",
    status: "Brainstorm",
    statusColor: "bg-purple-500",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    id: 4,
    title: "Creative Hub Agents",
    tagline: "Generative Creativity",
    description: "AI-powered creative workflows that accelerate innovation while maintaining brand consistency through intelligent generation.",
    status: "Developing",
    statusColor: "bg-orange-500",
    gradient: "from-orange-500/20 to-transparent",
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-[#00E273] uppercase tracking-[0.2em] mb-4 font-light">Active Projects</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white mb-6">
            Building Tomorrow,
            <br />
            <span className="text-[#00E273]">Today</span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto font-light">
            Four projects. One vision. Unlimited potential. Each project represents 
            a step toward the AI-powered future of Zuma Indonesia.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div 
                className="relative h-full p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-normal text-white">{project.title}</h3>
                        <Badge 
                          className={`${project.statusColor} text-white text-xs font-normal px-2 py-0.5`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#00E273] font-light">{project.tagline}</p>
                    </div>
                    
                    <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-[#00E273] transition-colors" />
                  </div>

                  {/* Description */}
                  <p className="text-white/50 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-[#00E273] group-hover:gap-3 transition-all">
                    <span className="text-sm font-light">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
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

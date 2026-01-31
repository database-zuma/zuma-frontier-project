"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Logo ticker component
function LogoTicker() {
  const logos = [
    { name: "Branch Super App", color: "#00E273" },
    { name: "Warehouse App", color: "#00E273" },
    { name: "Multi-MoltBot", color: "#00E273" },
    { name: "Creative Hub", color: "#00E273" },
    { name: "AI Agents", color: "#00E273" },
    { name: "Automation", color: "#00E273" },
    { name: "Operations", color: "#00E273" },
    { name: "Intelligence", color: "#00E273" },
  ];

  return (
    <div className="w-full overflow-hidden py-8 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mb-6"
      >
        <p className="text-sm text-gray-400 uppercase tracking-wider">Meet our projects</p>
      </motion.div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400 hover:text-[#00E273] transition-colors">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: logo.color }}
              >
                {logo.name.charAt(0)}
              </div>
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400 hover:text-[#00E273] transition-colors">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: logo.color }}
              >
                {logo.name.charAt(0)}
              </div>
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background gradient - subtle orange to white like Mistral */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 226, 115, 0.15), transparent)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Headline */}
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 leading-none"
                >
                  FRONTIER
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#00E273]"
                >
                  Project.
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed"
              >
                Accelerating AI adoption at Zuma Indonesia.
                We help operations teams build intelligent systems
                to solve the hardest business challenges.
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
                  className="bg-[#00E273] hover:bg-[#00d166] text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 group"
                >
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base rounded-full transition-all duration-300"
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Abstract geometric composition */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central glowing orb */}
                  <div 
                    className="absolute w-64 h-64 rounded-full opacity-60"
                    style={{
                      background: 'radial-gradient(circle, rgba(0, 226, 115, 0.4) 0%, rgba(0, 226, 115, 0.1) 50%, transparent 70%)',
                      filter: 'blur(40px)',
                    }}
                  />
                  
                  {/* Floating cards */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-48 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#00E273] flex items-center justify-center text-white font-bold">A</div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">AI Agent</div>
                        <div className="text-xs text-gray-500">Processing...</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-0 left-0 w-48 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500 uppercase">Status</span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#00E273] animate-pulse"></span>
                        <span className="text-xs text-[#00E273]">Active</span>
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">4</div>
                    <div className="text-xs text-gray-500">Projects Running</div>
                  </motion.div>

                  <motion.div
                    animate={{ x: [-5, 5, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 bg-gradient-to-br from-[#00E273] to-[#00b35f] rounded-2xl shadow-2xl p-6 text-white"
                  >
                    <div className="text-3xl font-bold mb-1">2026</div>
                    <div className="text-sm opacity-80">The Future</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Logo Ticker */}
        <LogoTicker />
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
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#020202]">
      {/* Full Width Aurora Background */}
      <div className="absolute inset-0">
        {/* Deep base */}
        <div className="absolute inset-0 bg-[#020202]" />
        
        {/* Large blurry aurora - Zuma Green */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(0, 226, 115, 0.25) 0%, rgba(0, 226, 115, 0.1) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Secondary aurora - blue/purple */}
        <div 
          className="absolute top-1/3 right-0 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        
        {/* Bottom glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(0, 226, 115, 0.15) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Full Width FRONTIER Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-20 md:pt-32 pb-8"
      >
        {/* Badge above */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6"
        >
          <Badge 
            variant="outline" 
            className="border-[#00E273]/30 text-[#00E273]/80 bg-transparent px-5 py-2 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-space-mono), monospace' }}
          >
            Continuous Improvements Division
          </Badge>
        </motion.div>

        {/* Massive FRONTIER - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-center px-4"
        >
          <h1
            className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] leading-none tracking-tighter"
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontWeight: 700,
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F0F0 25%, #00E273 60%, #00FF88 85%, #00E273 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 60px rgba(0, 226, 115, 0.5)) drop-shadow(0 0 120px rgba(0, 226, 115, 0.3))',
            }}
          >
            FRONTIER
          </h1>
        </motion.div>

        {/* Tagline below FRONTIER */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm md:text-base text-[#00E273]/60 tracking-[0.3em] uppercase mt-4"
          style={{ fontFamily: 'var(--font-space-mono), monospace' }}
        >
          The Dawn of Intelligent Operations
        </motion.p>
      </motion.div>

      {/* Content Area with Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-8 pb-20"
      >
        <div className="relative w-full max-w-2xl"
        >
          {/* Glass Card */}
          <div className="relative"
          >
            {/* Glass background */}
            <div 
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(40px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            />
            
            {/* Subtle gradient border */}
            <div 
              className="absolute -inset-[1px] rounded-3xl opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 226, 115, 0.4) 0%, transparent 50%, rgba(99, 102, 241, 0.2) 100%)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                WebkitMaskComposite: 'xor',
                padding: '1px',
              }}
            />

            {/* Card Content */}
            <div className="relative px-8 md:px-12 py-10 text-center"
            >
              <p
                className="text-white/40 text-sm md:text-base mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-space-mono), monospace' }}
              >
                Pioneering AI excellence at Zuma Indonesia. 
                Building the future of operations through intelligent automation and continuous improvement.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <Button
                  size="lg"
                  className="bg-[#00E273] hover:bg-[#00FF88] text-black font-semibold px-8 py-6 text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,226,115,0.4)]"
                  style={{ fontFamily: 'var(--font-space-mono), monospace' }}
                >
                  Explore the Future
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white/40 hover:text-white hover:bg-white/5 px-8 py-6 text-sm rounded-full transition-all duration-300"
                  style={{ fontFamily: 'var(--font-space-mono), monospace' }}
                >
                  View Projects
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
              >
                {[
                  { label: "Projects", value: "4" },
                  { label: "Status", value: "Active" },
                  { label: "Year", value: "2026" },
                ].map((stat, i) => (
                  <div key={i} className="text-center"
                  >
                    <div 
                      className="text-xl md:text-2xl text-[#00E273] mb-1"
                      style={{ fontFamily: 'var(--font-space-mono), monospace', fontWeight: 700 }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-[10px] text-white/30 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-space-mono), monospace' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none" />
    </section>
  );
}

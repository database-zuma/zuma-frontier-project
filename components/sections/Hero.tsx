"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Deep Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0c] via-[#050505] to-[#050505]" />
        
        {/* Radial glow - Zuma Green */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 226, 115, 0.3) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Secondary glow - blue/purple for depth */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.4) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Top accent */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-30"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 226, 115, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-4 md:mx-8 max-w-4xl w-full"
      >
        {/* Main Glass Card */}
        <div className="relative">
          {/* Glass background with border */}
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          />
          
          {/* Glow border effect */}
          <div 
            className="absolute -inset-[1px] rounded-3xl opacity-50"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 226, 115, 0.3) 0%, transparent 50%, rgba(99, 102, 241, 0.2) 100%)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
              WebkitMaskComposite: 'xor',
              padding: '1px',
            }}
          />

          {/* Content */}
          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <Badge 
                variant="outline" 
                className="border-[#00E273]/40 text-[#00E273] bg-[#00E273]/10 px-5 py-2.5 text-sm font-medium"
              >
                Continuous Improvements Division
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="leading-none">
                <span 
                  className="block text-7xl sm:text-8xl md:text-9xl lg:text-[140px] tracking-wider"
                  style={{
                    fontFamily: 'var(--font-vt323), monospace',
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 20%, #00E273 50%, #00FF88 80%, #00E273 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 50px rgba(0, 226, 115, 0.4)) drop-shadow(0 0 100px rgba(0, 226, 115, 0.2))',
                    letterSpacing: '0.1em',
                  }}
                >
                  FRONTIER
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-lg text-[#00E273]/70 mb-4 tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-space-mono), monospace' }}
            >
              The Dawn of Intelligent Operations
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-white/30 text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-space-mono), monospace' }}
            >
              Pioneering AI excellence at Zuma Indonesia. 
              Building the future of operations through intelligent automation.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-[#00E273] hover:bg-[#00FF88] text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,226,115,0.4)]"
              >
                Explore the Future
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                className="text-white/40 hover:text-white hover:bg-white/5 px-8 py-6 text-base rounded-full transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats - Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { label: "Projects", value: "4" },
            { label: "Status", value: "Active" },
            { label: "Vision", value: "2026" },
          ].map((stat, i) => (
            <div 
              key={i}
              className="text-center py-4 px-4 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div 
                className="text-3xl md:text-4xl text-[#00E273] mb-1"
                style={{ fontFamily: 'var(--font-vt323), monospace' }}
              >
                {stat.value}
              </div>
              <div 
                className="text-xs text-white/30 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-space-mono), monospace' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

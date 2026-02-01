"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Instagram } from "lucide-react";
import Image from "next/image";

// Unified green gradient background - same style across all sections
function UnifiedGreenBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Animated gradient orbs - positioned for footer */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(at 30% 0%, rgba(0, 226, 115, 0.08) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(0, 184, 153, 0.06) 0px, transparent 50%)
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

export function Footer() {
  return (
    <footer id="footer" className="relative py-20 overflow-hidden bg-[#0a0a0a] border-t border-white/10">
      {/* Unified green gradient background */}
      <UnifiedGreenBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/ZUMA_FINAL LOGO_UPDATED-08.png"
                  alt="Zuma Frontier"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-normal text-white">Zuma Frontier</span>
            </div>
            <p className="text-white/40 font-light max-w-sm">
              Pioneering AI excellence at Zuma Indonesia. Building the future of operations through intelligent automation.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-normal mb-4">Projects</h4>
            <ul className="space-y-2">
              {["Branch Super App", "Warehouse", "MoltBot", "Creative Hub"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-[#00E273] transition-colors font-light text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-normal mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/database-zuma/zuma-frontier-project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#00E273] hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/zuma.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#00E273] hover:bg-white/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-light">© 2026 Zuma Frontier Project. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-sm font-light transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

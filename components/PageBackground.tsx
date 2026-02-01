"use client";

import { motion } from "framer-motion";

// Continuous green gradient background - Hero style without wireframe
export function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Large gradient orb - top left area */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.4) 0%, rgba(0, 226, 115, 0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Large gradient orb - right side */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.4) 0%, rgba(0, 184, 153, 0.15) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Large gradient orb - bottom area */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-1/4 w-[900px] h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.3) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Medium orb - center left */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(122, 224, 96, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Medium orb - upper right */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.25) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Mesh gradient overlay - Hero style */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, rgba(0, 226, 115, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(0, 212, 170, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(0, 226, 115, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(0, 184, 153, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(122, 224, 96, 0.1) 0px, transparent 50%)
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

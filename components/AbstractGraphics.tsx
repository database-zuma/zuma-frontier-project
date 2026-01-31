"use client";

import { motion } from "framer-motion";

// Abstract organic blob graphic component - inspired by soft, glowing shapes
export function AbstractGraphic({ variant = 1 }: { variant?: number }) {
  const graphics = [
    // Variant 1: Branch Super App - Single large organic blob (main design)
    <div key="v1" className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <div 
        className="absolute w-[70%] h-[70%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 226, 115, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Main blob - bottom layer */}
      <motion.div
        animate={{ 
          scale: [1, 1.02, 1],
          rotate: [0, 2, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[55%] h-[55%]"
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, rgba(0, 226, 115, 0.6) 0%, rgba(0, 178, 95, 0.4) 50%, rgba(0, 100, 60, 0.2) 100%)',
          borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
          filter: 'blur(20px)',
        }}
      />
      {/* Main blob - top layer */}
      <motion.div
        animate={{ 
          scale: [1, 1.03, 1],
          rotate: [0, -3, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute w-[45%] h-[50%]"
        style={{
          background: 'radial-gradient(ellipse at 35% 35%, rgba(0, 255, 136, 0.7) 0%, rgba(0, 226, 115, 0.5) 40%, rgba(0, 178, 95, 0.3) 100%)',
          borderRadius: '50% 50% 40% 60% / 60% 40% 60% 40%',
          filter: 'blur(8px)',
          transform: 'translate(-5%, -5%)',
        }}
      />
      {/* Highlight */}
      <div 
        className="absolute w-[20%] h-[15%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
          filter: 'blur(10px)',
          transform: 'translate(-30%, -40%)',
        }}
      />
    </div>,

    // Variant 2: Warehouse Super App - Wider, more structured blob
    <div key="v2" className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <div 
        className="absolute w-[80%] h-[60%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 226, 115, 0.25) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Main blob - wide bottom */}
      <motion.div
        animate={{ 
          scaleX: [1, 1.03, 1],
          scaleY: [1, 0.98, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[65%] h-[45%]"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(0, 226, 115, 0.5) 0%, rgba(0, 178, 95, 0.3) 60%, rgba(0, 80, 50, 0.15) 100%)',
          borderRadius: '45% 55% 50% 50% / 60% 60% 40% 40%',
          filter: 'blur(15px)',
        }}
      />
      {/* Overlay blob */}
      <motion.div
        animate={{ 
          x: [-3, 3, -3],
          y: [-2, 2, -2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[50%] h-[40%]"
        style={{
          background: 'radial-gradient(ellipse at 40% 35%, rgba(0, 255, 150, 0.6) 0%, rgba(0, 226, 115, 0.4) 50%, transparent 100%)',
          borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%',
          filter: 'blur(6px)',
          transform: 'translate(5%, -10%)',
        }}
      />
      {/* Small accent blob */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[20%] h-[20%]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
          transform: 'translate(60%, 30%)',
        }}
      />
    </div>,

    // Variant 3: Multi-MoltBot System - Multiple floating blobs (representing AI agents)
    <div key="v3" className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow */}
      <div 
        className="absolute w-[90%] h-[90%]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 226, 115, 0.15) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Main central blob */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[35%] h-[35%]"
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, rgba(0, 255, 136, 0.7) 0%, rgba(0, 226, 115, 0.4) 60%, transparent 100%)',
          borderRadius: '55% 45% 50% 50% / 50% 55% 45% 50%',
          filter: 'blur(6px)',
        }}
      />
      {/* Floating blob 1 - top right */}
      <motion.div
        animate={{ 
          x: [0, 8, 0],
          y: [0, -5, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute w-[22%] h-[22%]"
        style={{
          background: 'radial-gradient(ellipse at 45% 45%, rgba(0, 226, 115, 0.6) 0%, rgba(0, 178, 95, 0.3) 70%, transparent 100%)',
          borderRadius: '50% 50% 45% 55% / 55% 50% 50% 45%',
          filter: 'blur(5px)',
          transform: 'translate(70%, -50%)',
        }}
      />
      {/* Floating blob 2 - bottom left */}
      <motion.div
        animate={{ 
          x: [0, -6, 0],
          y: [0, 6, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute w-[20%] h-[20%]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 255, 150, 0.55) 0%, rgba(0, 200, 100, 0.3) 70%, transparent 100%)',
          borderRadius: '45% 55% 50% 50% / 50% 45% 55% 50%',
          filter: 'blur(4px)',
          transform: 'translate(-65%, 55%)',
        }}
      />
      {/* Floating blob 3 - top left */}
      <motion.div
        animate={{ 
          x: [0, -4, 0],
          y: [0, -8, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        className="absolute w-[18%] h-[18%]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 226, 115, 0.5) 0%, rgba(0, 178, 95, 0.25) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(5px)',
          transform: 'translate(-55%, -60%)',
        }}
      />
      {/* Small accent - bottom right */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[12%] h-[12%]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(4px)',
          transform: 'translate(55%, 70%)',
        }}
      />
    </div>,

    // Variant 4: Creative Hub Agents - Flowing artistic blob with gradient blend
    <div key="v4" className="relative w-full h-full flex items-center justify-center">
      {/* Wide ambient glow */}
      <div 
        className="absolute w-[85%] h-[70%]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 226, 115, 0.2) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Main flowing blob */}
      <motion.div
        animate={{ 
          borderRadius: [
            '60% 40% 55% 45% / 55% 60% 40% 45%',
            '45% 55% 40% 60% / 60% 45% 55% 40%',
            '55% 45% 60% 40% / 40% 55% 45% 60%',
            '60% 40% 55% 45% / 55% 60% 40% 45%',
          ],
          rotate: [0, 3, -2, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[55%] h-[50%]"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.5) 0%, rgba(0, 226, 115, 0.4) 40%, rgba(100, 180, 130, 0.3) 70%, rgba(168, 85, 247, 0.15) 100%)',
          filter: 'blur(12px)',
        }}
      />
      {/* Overlay bright spot */}
      <motion.div
        animate={{ 
          x: [-5, 8, -5],
          y: [-3, 5, -3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[35%] h-[35%]"
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, rgba(0, 255, 150, 0.65) 0%, rgba(0, 226, 115, 0.35) 50%, transparent 100%)',
          borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%',
          filter: 'blur(6px)',
          transform: 'translate(-15%, -15%)',
        }}
      />
      {/* Secondary accent blob */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[25%] h-[22%]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 226, 115, 0.4) 0%, rgba(120, 100, 200, 0.2) 60%, transparent 100%)',
          borderRadius: '45% 55% 50% 50% / 50% 45% 55% 50%',
          filter: 'blur(8px)',
          transform: 'translate(50%, 40%)',
        }}
      />
      {/* Highlight */}
      <div 
        className="absolute w-[15%] h-[12%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.25) 0%, transparent 70%)',
          filter: 'blur(8px)',
          transform: 'translate(-35%, -45%)',
        }}
      />
    </div>,
  ];

  return (
    <div className="relative w-full h-full bg-[#0a0a0a]">
      {graphics[variant - 1] || graphics[0]}
    </div>
  );
}

// Product showcase card with abstract graphic
export function ProductCard({ 
  title, 
  description, 
  variant,
  delay = 0 
}: { 
  title: string; 
  description: string; 
  variant: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div 
        className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Graphic container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <AbstractGraphic variant={variant} />
          
          {/* Shine effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
              transform: 'translateX(-100%)',
              animation: 'shine 3s infinite',
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-normal text-white mb-2">{title}</h3>
          <p className="text-sm text-white/50 font-light">{description}</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          20% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.div>
  );
}

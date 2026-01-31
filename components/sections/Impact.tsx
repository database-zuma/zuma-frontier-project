"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 4, suffix: "+", label: "AI Projects", description: "Active development" },
  { value: 24, suffix: "/7", label: "Operations", description: "Always running" },
  { value: 100, suffix: "%", label: "Commitment", description: "To innovation" },
  { value: 2026, suffix: "", label: "Vision Year", description: "Future ready" },
];

export function Impact() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-xs text-[#00E273] uppercase tracking-[0.2em] mb-4 font-light">Impact & Metrics</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-4 sm:mb-6">
            The Future
            <br />
            <span className="text-[#00E273]">By Numbers</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto font-light px-4 sm:px-0">
            Every metric tells a story of transformation. Every number represents 
            potential unlocked through intelligent automation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 px-4 sm:px-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div 
                className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-base font-normal text-gray-800 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400 font-light">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

// Optimized dark background with subtle green accents
export function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark - even darker */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      
      {/* Large gradient orb - top left - very subtle */}
      <div
        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.15) 0%, rgba(0, 226, 115, 0.05) 40%, transparent 70%)',
          filter: 'blur(100px)',
          willChange: 'transform, opacity',
        }}
      />
      
      {/* Large gradient orb - right side - very subtle */}
      <div
        className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full animate-pulse-slower"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.12) 0%, rgba(0, 184, 153, 0.04) 40%, transparent 70%)',
          filter: 'blur(120px)',
          willChange: 'transform, opacity',
        }}
      />
      
      {/* Large gradient orb - bottom area - very subtle */}
      <div
        className="absolute bottom-0 left-1/4 w-[900px] h-[900px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.1) 0%, transparent 60%)',
          filter: 'blur(100px)',
          willChange: 'transform, opacity',
          animationDelay: '-4s',
        }}
      />

      {/* Subtle mesh gradient overlay - much darker */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, rgba(0, 226, 115, 0.08) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(0, 212, 170, 0.05) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(0, 226, 115, 0.06) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(0, 184, 153, 0.04) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(122, 224, 96, 0.04) 0px, transparent 50%)
          `,
        }}
      />

      {/* Noise texture - subtle */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.35;
          }
        }
        @keyframes pulse-slower {
          0%, 100% {
            transform: scale(1.1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 14s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

"use client";

// Dark background with subtle green gradient accents
export function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Subtle green gradient orbs - positioned across page */}
      <div
        className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.12) 0%, rgba(0, 226, 115, 0.04) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.1) 0%, rgba(0, 184, 153, 0.03) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      <div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 184, 153, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <div
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 115, 0.06) 0%, transparent 60%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Subtle mesh overlay - minimal green tint */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(at 30% 10%, rgba(0, 226, 115, 0.06) 0px, transparent 40%),
            radial-gradient(at 70% 30%, rgba(0, 212, 170, 0.04) 0px, transparent 45%),
            radial-gradient(at 20% 70%, rgba(0, 184, 153, 0.05) 0px, transparent 40%),
            radial-gradient(at 80% 80%, rgba(122, 224, 96, 0.03) 0px, transparent 50%)
          `,
        }}
      />

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

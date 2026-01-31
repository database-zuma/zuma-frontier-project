"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Vision", href: "#vision" },
    { label: "Impact", href: "#impact" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Glassmorphism Container */}
        <div 
          className="flex items-center justify-between px-4 md:px-6 py-3 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Logo with Zuma Image */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8">
              <Image
                src="/ZUMA_FINAL LOGO_UPDATED-08.png"
                alt="Zuma Frontier"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-medium text-white tracking-tight text-sm">Zuma Frontier</span>
          </a>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-normal text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTAs - Right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm font-normal text-white/60 hover:text-white transition-colors duration-200 px-3"
            >
              Contact
            </a>
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 text-sm font-medium rounded-full px-5 h-8 transition-all duration-200"
            >
              View Projects
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Dropdown */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1, y: 0 } : { height: 0, opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden mt-2"
        >
          <div 
            className="py-4 px-4 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/70 hover:text-white hover:bg-white/5 px-4 py-2.5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                className="text-sm text-white/70 hover:text-white px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button
                className="w-full justify-center bg-[#00E273] hover:bg-[#00FF88] text-black font-medium rounded-full"
                onClick={() => setIsOpen(false)}
              >
                View Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

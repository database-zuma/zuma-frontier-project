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
    { label: "Solutions", href: "#solutions" },
    { label: "Vision", href: "#vision" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Zuma Image */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/ZUMA_FINAL LOGO_UPDATED-08.png"
                alt="Zuma Frontier"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-normal text-white tracking-tight text-lg">Zuma Frontier</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-light text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-sm text-white/70 hover:text-white hover:bg-white/10"
            >
              Contact
            </Button>
            <Button
              className="bg-[#00E273] hover:bg-[#00FF88] text-black text-sm font-medium rounded-full px-6"
            >
              View Projects
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-black/80 backdrop-blur-lg rounded-2xl mt-2"
        >
          <div className="py-4 space-y-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-white/70 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button
                variant="ghost"
                className="w-full justify-center text-white/70 hover:text-white hover:bg-white/10"
              >
                Contact
              </Button>
              <Button
                className="w-full justify-center bg-[#00E273] hover:bg-[#00FF88] text-black"
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

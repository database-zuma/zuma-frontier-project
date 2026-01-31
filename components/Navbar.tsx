"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E273] to-[#00b35f] flex items-center justify-center text-white font-normal">
              Z
            </div>
            <span className="font-normal text-gray-900 tracking-tight">Zuma Frontier</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Contact
            </Button>
            <Button
              className="bg-[#00E273] hover:bg-[#00d166] text-black text-sm font-medium rounded-full px-6"
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
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button
                variant="ghost"
                className="w-full justify-center text-gray-600"
              >
                Contact
              </Button>
              <Button
                className="w-full justify-center bg-[#00E273] hover:bg-[#00d166] text-black"
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

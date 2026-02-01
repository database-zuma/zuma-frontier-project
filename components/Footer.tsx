"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="footer" className="relative py-20 overflow-hidden border-t border-white/10">
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

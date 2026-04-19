"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "ACCUEIL", href: "#home" },
  { name: "GOCINÉ", href: "#gocine" },
  { name: "SERVICES", href: "#services" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-midnight-abyss/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tighter text-white">
            GO<span className="text-gold-champagne group-hover:text-white transition-colors duration-300">EVENTS</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-widest text-white/70 hover:text-gold-champagne transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="hidden md:block px-6 py-2 border border-gold-champagne/30 rounded-full text-[10px] font-bold tracking-[0.2em] text-gold-champagne hover:bg-gold-champagne hover:text-midnight-abyss transition-all duration-500 group relative overflow-hidden">
          <span className="relative z-10">BRIEFEZ-NOUS</span>
          <div className="absolute inset-0 bg-gold-champagne translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>

        {/* Mobile menu icon placeholder */}
        <button className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
        </button>
      </div>
    </motion.nav>
  );
}

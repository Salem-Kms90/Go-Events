"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-midnight-abyss">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
          alt="Concert Hero"
          fill
          priority
          className="object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-midnight-abyss via-midnight-abyss/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-gold-champagne font-bold tracking-[0.4em] text-[10px] mb-4"
          >
            L'ÉVÉNEMENTIEL HAUTE COUTURE
          </motion.span>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            DOMINEZ <br />
            <span className="text-gradient-gold italic">LA SCÈNE.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            De la conception à la réalisation, nous transformons vos ambitions en expériences mémorables et immersives.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="group flex items-center justify-between gap-8 bg-gold-champagne px-8 py-5 rounded-full text-midnight-abyss font-bold text-xs tracking-widest hover:bg-white transition-all duration-300">
              EXPLORER NOS SERVICES
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="flex items-center gap-4 px-8 py-5 rounded-full border border-white/10 glass text-white font-bold text-xs tracking-widest hover:bg-white/10 transition-all duration-300">
              <div className="w-6 h-6 rounded-full bg-gold-champagne flex items-center justify-center">
                <Play className="w-3 h-3 fill-midnight-abyss text-midnight-abyss ml-0.5" />
              </div>
              SHOWREEL 2026
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-linear-to-b from-gold-champagne/50 to-transparent" />
        <span className="text-[9px] text-white/30 tracking-[0.3em] vertical-rl">SCROLL</span>
      </div>
    </section>
  );
}

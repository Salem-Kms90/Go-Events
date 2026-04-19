"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "L'Aube Urbaine",
    category: "COURT MÉTRAGE",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    color: "#D4AF37"
  },
  {
    id: 2,
    title: "Gala des Étoiles",
    category: "ÉVÉNEMENT",
    image: "https://images.unsplash.com/photo-1514525253344-93444007874a?auto=format&fit=crop&q=80",
    color: "#D4AF37"
  },
  {
    id: 3,
    title: "Techno Symphony",
    category: "CONCERT",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
    color: "#D4AF37"
  },
  {
    id: 4,
    title: "Noir Silence",
    category: "DOCUMENTAIRE",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
    color: "#D4AF37"
  },
  {
    id: 5,
    title: "Infinite Motion",
    category: "BRANDING",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
    color: "#D4AF37"
  }
];

export default function GoCine() {
  return (
    <section id="gocine" className="py-24 bg-midnight-abyss overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-gold-champagne font-bold tracking-[0.4em] text-[10px] mb-4 block uppercase">
              Streaming Experience
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
              GoCiné <span className="text-white/20 not-italic">Gallery</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            Une immersion totale dans nos meilleures productions. Naviguez à travers nos projets comme sur votre plateforme de streaming préférée.
          </p>
        </div>
      </div>

      <div className="flex gap-6 px-6 overflow-x-auto pb-12 scrollbar-hide no-scrollbar">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative flex-none w-[350px] aspect-video group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden border border-white/5 group-hover:border-gold-champagne/50 transition-colors duration-500">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-midnight-abyss via-transparent to-transparent opacity-60" />
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-midnight-abyss/40 backdrop-blur-[2px]">
              <span className="text-[9px] font-bold tracking-[0.2em] text-gold-champagne mb-1">{project.category}</span>
              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>

              <div className="flex gap-3">
                <button className="flex-1 bg-white text-midnight-abyss py-2 rounded flex items-center justify-center gap-2 text-[10px] font-black tracking-widest hover:bg-gold-champagne transition-colors">
                  <Play className="w-3 h-3 fill-current" /> VOIR
                </button>
                <button className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

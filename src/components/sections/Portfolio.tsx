"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Festival Lumière",
    category: "Culturel",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 2,
    title: "Gala d'Excellence",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 3,
    title: "Avant-Première 'L'Aube'",
    category: "Cinéma",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: 4,
    title: "Fashion Week Paris",
    category: "Mode",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: 5,
    title: "Lancement TechX",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 6,
    title: "Concert Symphonique",
    category: "Musique",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800&auto=format&fit=crop",
    size: "small",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-midnight-abyss">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-champagne text-sm font-bold tracking-[0.3em] uppercase block mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-5xl font-light italic"
          >
            L'Art de <span className="text-gold-champagne font-normal not-italic">l'Exception</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={cn(
                "group relative overflow-hidden rounded-sm cursor-pointer",
                project.size === "large" ? "md:row-span-2" : "",
                project.size === "medium" ? "md:col-span-1" : ""
              )}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-abyss/90 via-midnight-abyss/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-gold-champagne text-xs font-bold tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-light">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

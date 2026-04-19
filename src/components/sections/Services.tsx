"use client";

import { motion } from "framer-motion";
import { Star, Zap, Shield, Camera } from "lucide-react";

const services = [
  {
    title: "ESSENTIEL",
    price: "À partir de 1 500€",
    features: ["Couverture photo", "Captation vidéo 4K", "Post-production standard", "Livraison sous 15 jours"],
    icon: Camera
  },
  {
    title: "PRESTIGE",
    price: "À partir de 5 000€",
    features: ["Équipe complète (3 pers)", "Live Streaming HD", "Aftermovie premium", "Interview & Storytelling", "Livraison sous 7 jours"],
    icon: Star,
    featured: true
  },
  {
    title: "SUR MESURE",
    price: "Sur Devis",
    features: ["Production cinématographique", "Régie multicam", "Drone & FPV", "Accès plateforme GoCiné", "Support 24/7"],
    icon: Zap
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-midnight-abyss relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold-champagne font-bold tracking-[0.4em] text-[10px] mb-4 block uppercase">
            Nos Packs
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase opacity-10 absolute left-1/2 -translate-x-1/2 top-20 select-none">
            SERVICES
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white relative z-10">
            DES SOLUTIONS <span className="text-gradient-gold">D'EXCEPTION.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-500 ${
                service.featured
                ? "bg-gold-champagne/5 border-gold-champagne/30 scale-105 z-10"
                : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <service.icon className="w-10 h-10 text-gold-champagne mb-8" />
              <h4 className="text-white/40 font-bold tracking-widest text-xs mb-2 uppercase">{service.title}</h4>
              <p className="text-2xl font-black text-white mb-8 italic">{service.price}</p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/60 text-sm">
                    <Shield className="w-4 h-4 text-gold-champagne/40" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold tracking-widest text-[10px] transition-all duration-300 ${
                service.featured
                ? "bg-gold-champagne text-midnight-abyss hover:bg-white"
                : "bg-white/5 text-white hover:bg-white/10"
              }`}>
                CHOISIR CE PACK
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

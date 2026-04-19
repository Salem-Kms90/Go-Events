"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-midnight-abyss relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-champagne/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-champagne text-sm font-bold tracking-[0.3em] uppercase block mb-4"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-5xl md:text-6xl font-light italic mb-8"
            >
              Prêt pour votre <br />
              <span className="text-gold-champagne font-normal not-italic">prochain chapitre ?</span>
            </motion.h2>

            <p className="text-white/60 text-lg mb-12 max-w-md font-light leading-relaxed">
              Qu'il s'agisse d'une production cinématographique ou d'un gala exclusif, nous donnons vie à vos ambitions les plus folles.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gold-champagne/20 flex items-center justify-center group-hover:bg-gold-champagne group-hover:text-midnight-abyss transition-all duration-500">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium">contact@goevents.fr</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gold-champagne/20 flex items-center justify-center group-hover:bg-gold-champagne group-hover:text-midnight-abyss transition-all duration-500">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Téléphone</p>
                  <p className="text-white font-medium">+33 (0) 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gold-champagne/20 flex items-center justify-center group-hover:bg-gold-champagne group-hover:text-midnight-abyss transition-all duration-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Siège</p>
                  <p className="text-white font-medium">Place Vendôme, Paris</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass p-10 md:p-12 rounded-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/40 text-xs uppercase tracking-widest ml-1">Nom Complet</label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-champagne/50 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/40 text-xs uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="jean@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-champagne/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/40 text-xs uppercase tracking-widest ml-1">Type de Projet</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-champagne/50 focus:outline-none transition-colors appearance-none">
                  <option className="bg-midnight-abyss text-white">Cinéma / GoCiné</option>
                  <option className="bg-midnight-abyss text-white">Événementiel Corporate</option>
                  <option className="bg-midnight-abyss text-white">Production Culturelle</option>
                  <option className="bg-midnight-abyss text-white">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-white/40 text-xs uppercase tracking-widest ml-1">Votre Message</label>
                <textarea
                  rows={4}
                  placeholder="Décrivez-nous votre vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-champagne/50 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold-champagne text-midnight-abyss font-bold py-4 rounded-lg flex items-center justify-center gap-3 group transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                ENVOYER LE BRIEFING
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

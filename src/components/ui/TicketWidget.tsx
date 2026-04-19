"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, X, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TicketWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const eventTypes = [
    { id: "pro", label: "Professionnel", desc: "Conférences, Lancements, Séminaires" },
    { id: "culture", label: "Culturel", desc: "Concerts, Festivals, Expositions" },
    { id: "private", label: "Privé", desc: "Gala, Soirée VIP, Célébration" }
  ];

  const reset = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setSelectedType(null);
    }, 500);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gold-champagne rounded-full flex items-center justify-center shadow-2xl shadow-gold-champagne/20 group overflow-hidden"
      >
        <Ticket className="w-7 h-7 text-midnight-abyss relative z-10" />
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={reset}
              className="absolute inset-0 bg-midnight-abyss/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass-gold rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                      Réservation <span className="text-gold-champagne">Directe</span>
                    </h3>
                    <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">Étape {step} sur 2</p>
                  </div>
                  <button onClick={reset} className="text-white/40 hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {step === 1 ? (
                  <div className="space-y-4">
                    <p className="text-white/60 text-sm mb-6">Quel type d'événement souhaitez-vous organiser ?</p>
                    <div className="grid gap-3">
                      {eventTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedType(type.id)}
                          className={cn(
                            "w-full text-left p-4 rounded-xl border transition-all duration-300 group",
                            selectedType === type.id
                              ? "bg-gold-champagne border-gold-champagne text-midnight-abyss"
                              : "bg-white/5 border-white/10 text-white hover:border-gold-champagne/50"
                          )}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-bold text-sm tracking-widest uppercase">{type.label}</p>
                              <p className={cn("text-[10px] mt-1", selectedType === type.id ? "text-midnight-abyss/70" : "text-white/40")}>
                                {type.desc}
                              </p>
                            </div>
                            <ArrowRight className={cn("w-4 h-4 transition-transform group-hover:translate-x-1", selectedType === type.id ? "text-midnight-abyss" : "text-gold-champagne")} />
                          </div>
                        </button>
                      ))}
                    </div>

                    <button
                      disabled={!selectedType}
                      onClick={() => setStep(2)}
                      className="w-full mt-8 py-4 bg-white text-midnight-abyss font-black tracking-[0.2em] text-xs rounded-xl disabled:opacity-30 transition-all hover:bg-gold-champagne"
                    >
                      CONTINUER
                    </button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-gold-champagne/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-gold-champagne" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Demande Envoyée !</h4>
                    <p className="text-white/40 text-sm max-w-[250px] mx-auto mb-8">
                      Un expert GoEvents vous contactera sous 24h pour discuter de votre projet {selectedType}.
                    </p>
                    <button
                      onClick={reset}
                      className="px-10 py-4 border border-gold-champagne/30 rounded-full text-gold-champagne font-bold text-[10px] tracking-widest hover:bg-gold-champagne hover:text-midnight-abyss transition-all duration-500"
                    >
                      FERMER
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

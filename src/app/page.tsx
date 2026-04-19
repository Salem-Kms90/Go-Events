import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import GoCine from "@/components/sections/GoCine";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import TicketWidget from "@/components/ui/TicketWidget";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <GoCine />
      <Services />
      <Portfolio />
      <Contact />

      <footer className="py-12 bg-midnight-abyss border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-xl font-black tracking-tighter text-white">
            GO<span className="text-gold-champagne">EVENTS</span>
          </span>
          <p className="text-white/20 text-[10px] tracking-widest uppercase">
            © 2026 GoEvents | Branche d'Ajr_Groupe. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["INSTAGRAM", "LINKEDIN", "VIMEO"].map((social) => (
              <span key={social} className="text-[9px] font-bold text-white/40 hover:text-gold-champagne cursor-pointer transition-colors">
                {social}
              </span>
            ))}
          </div>
        </div>
      </footer>

      <TicketWidget />
    </main>
  );
}

import { useState } from "react";
import Reveal from "./Reveal";

// Ordinate per % di richiesta dal modulo reale
const feats = [
  { emoji: "💬", title: "Consigli su relazioni", pct: "65%", desc: "La funzione più richiesta. Comunicazione col partner, dinamiche relazionali, gestione dei conflitti emotivi." },
  { emoji: "🧠", title: "Preparazione mentale", pct: "58%", desc: "Strumenti per gestire ansia da prestazione, aspettative irrealistiche e insicurezze emotive." },
  { emoji: "📚", title: "Contenuti educativi", pct: "56%", desc: "Moduli moderni su sessualità, consenso e protezione. Linguaggio diretto, non da manuale scolastico." },
  { emoji: "🗺️", title: "Guida alla prima esperienza", pct: "49%", desc: "Un percorso graduale e senza giudizi per affrontare le prime esperienze con consapevolezza." },
  { emoji: "🤫", title: "Supporto anonimo", pct: "49%", desc: "Chiedi ciò che non oseresti chiedere a nessuno. Anonimato totale, risposta senza giudizio." },
  { emoji: "🔒", title: "Tutorial su protezione", pct: "44%", desc: "Guide pratiche su preservativi, contraccezione e prevenzione — chiare, concrete e senza imbarazzo." },
];

function FeatCard({ emoji, title, pct, desc, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className={`rounded-2xl p-7 border transition-all duration-300 cursor-default h-full flex flex-col ${
          hov ? "bg-purple/[0.05] border-purple/20" : "bg-[#12121e] border-white/[0.07]"
        }`}
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-purple/10 flex items-center justify-center text-xl">
            {emoji}
          </div>
          <span className="font-display font-bold text-sm grad-text">{pct}</span>
        </div>
        <h3 className="font-display font-bold text-base text-[#f1f0ff] mb-2">{title}</h3>
        <p className="font-body font-light text-sm text-[#6b6a80] leading-[1.75] flex-1">{desc}</p>
      </div>
    </Reveal>
  );
}

export default function Features() {
  return (
    <section id="funzionalità" className="py-32 px-[5vw] bg-[#0d0d16] border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="font-body text-xs tracking-[0.15em] text-violet uppercase mb-3">Funzionalità</div>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-[#f1f0ff] leading-[1.1] tracking-tight">
              Costruito su ciò che<br />
              <span className="grad-text">i ragazzi chiedono davvero.</span>
            </h2>
            <p className="font-body font-light text-sm text-[#6b6a80] mt-4 max-w-md mx-auto leading-relaxed">
              Le funzionalità sono ordinate per popolarità reale — la % indica quanti utenti l'hanno richiesta nel nostro modulo.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {feats.map((f, i) => <FeatCard key={i} {...f} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  );
}

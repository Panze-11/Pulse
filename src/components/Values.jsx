import { useState } from "react";
import Reveal from "./Reveal";

const vals = [
  { icon: "🤝", title: "Rispetto",        desc: "Nessun contenuto giudicante. Ogni utente è trattato con dignità assoluta." },
  { icon: "🌍", title: "Inclusività",     desc: "Pulse è per tutti, indipendentemente da orientamento, genere o background." },
  { icon: "✅", title: "Responsabilità",  desc: "Contenuti verificati da esperti in psicologia e salute sessuale. Nessuna improvvisazione." },
  { icon: "🛡️", title: "Discrezione",    desc: "La privacy è nell'architettura del prodotto, non solo nelle promesse." },
];

function ValueRow({ icon, title, desc, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className={`flex gap-4 items-start p-5 rounded-xl border transition-all duration-300 cursor-default ${
          hov ? "bg-purple/[0.04] border-purple/20" : "bg-transparent border-transparent"
        }`}
      >
        <span className="text-2xl shrink-0">{icon}</span>
        <div>
          <div className="font-display font-bold text-base text-[#f1f0ff] mb-1">{title}</div>
          <div className="font-body font-light text-sm text-[#6b6a80] leading-[1.7]">{desc}</div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Values() {
  return (
    <section id="valori" className="py-32 px-[5vw] bg-[#0d0d16] border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <Reveal>
          <div className="font-body text-xs tracking-[0.15em] text-violet uppercase mb-3">Valori</div>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-[#f1f0ff] leading-[1.1] tracking-tight mb-6">
            Ciò in cui<br />
            <span className="grad-text">crediamo.</span>
          </h2>
          <p className="font-body font-light text-sm text-[#6b6a80] leading-[1.8] max-w-md">
            Ogni decisione — di prodotto, di contenuto, di design — passa attraverso questi quattro filtri.
            Non sono slogan. Sono vincoli di progetto.
          </p>

          {/* Pulse animation */}
          <div className="relative w-32 h-32 mt-12">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-purple/20"
                style={{ animation: `ping ${1.8 + i * 0.6}s ease-out ${i * 0.4}s infinite` }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full grad-bg flex items-center justify-center text-2xl glow-purple">
                💜
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-1">
          {vals.map((v, i) => <ValueRow key={i} {...v} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  );
}

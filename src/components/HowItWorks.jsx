import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Accedi", desc: "Crea un profilo anonimo in pochi secondi. Zero dati sensibili richiesti." },
  { n: "02", title: "Rispondi", desc: "4 domande per capire dove sei nel tuo percorso personale." },
  { n: "03", title: "Esplora", desc: "Moduli su educazione, emozioni e relazioni personalizzati per te." },
  { n: "04", title: "Cresci", desc: "Traccia i progressi e sviluppa consapevolezza reale nel tempo." },
];

export default function HowItWorks() {
  return (
    <section id="percorso" className="py-32 px-[5vw] border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <div className="font-body text-xs tracking-[0.15em] text-violet uppercase mb-3">Come funziona</div>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-[#f1f0ff] leading-[1.1] tracking-tight">
              Semplice. Privato. <span className="grad-text">Efficace.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="absolute top-[22px] left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] h-px hidden lg:block"
            style={{ background: "linear-gradient(90deg, #8b5cf6, #ec4899)", opacity: 0.25 }} />

          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-11 h-11 rounded-full grad-bg flex items-center justify-center mx-auto mb-5 relative z-10 glow-purple-sm">
                  <span className="font-display font-extrabold text-xs text-white">{s.n}</span>
                </div>
                <h3 className="font-display font-bold text-base text-[#f1f0ff] mb-2">{s.title}</h3>
                <p className="font-body font-light text-sm text-[#6b6a80] leading-[1.7]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

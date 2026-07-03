import { useState } from "react";
import Reveal from "./Reveal";
import useStats from "./useStats";

const tags = ["Privato", "Sicuro", "Non giudicante", "Moderno"];

const points = [
  { icon: "📱", text: "La maggior parte dei giovani si informa su sessualità e relazioni tramite social e TikTok — fonti che distorcono la realtà invece di spiegarla." },
  { icon: "😰", text: "Molti ragazzi vivono ansia legata alla sessualità. Eppure l'educazione tradizionale viene giudicata insufficiente dalla maggioranza degli intervistati." },
  { icon: "🔒", text: "La privacy è la priorità assoluta. La maggioranza vuole che i propri dati restino solo sul dispositivo." },
];

function StatCard({ n, label }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`rounded-2xl p-8 border transition-all duration-300 cursor-default ${
        hov ? "bg-purple/[0.07] border-purple/20" : "bg-[#12121e] border-white/[0.07]"
      }`}
    >
      <div className="font-display font-extrabold text-[clamp(2rem,3.5vw,3rem)] grad-text leading-none mb-3 tracking-tight">
        {n}
      </div>
      <p className="font-body font-light text-sm text-[#6b6a80] leading-[1.7]">{label}</p>
    </div>
  );
}

export default function Problem() {
  const stats = useStats();

  const statCards = [
    { n: `${stats.useresti}%`, label: `dei ${stats.totale} ragazzi intervistati userebbe o considera Pulse` },
    { n: `${stats.ansia}%`,    label: "ha provato ansia o insicurezza legata alla sessualità" },
    { n: `${stats.social}%`,   label: "si informa principalmente da social media e TikTok" },
    { n: `${stats.noEducazione}%`, label: "ritiene che l'educazione sessuale tradizionale non sia sufficiente" },
  ];

  return (
    <section id="problema" className="py-32 px-[5vw] border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <Reveal>
              <div className="font-body text-xs tracking-[0.15em] text-violet uppercase mb-3">
                Il problema — dati reali
              </div>
              <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-[#f1f0ff] leading-[1.1] tracking-tight mb-8">
                Troppe domande,<br />
                <span className="grad-text">poche risposte vere.</span>
              </h2>
            </Reveal>
            <div className="flex flex-col gap-5">
              {points.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-[10px] bg-purple/10 flex items-center justify-center text-base shrink-0 mt-0.5">
                      {p.icon}
                    </div>
                    <p className="font-body font-light text-sm text-[#9d9cb8] leading-[1.8]">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple/[0.06] border border-purple/[0.12] w-fit">
                <span className="text-xs">📊</span>
                <span className="font-body text-xs text-[#6b6a80]">
                  Dati da <span className="text-violet">{stats.totale} risposte reali</span> — aggiornato il {stats.aggiornato}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {statCards.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <StatCard n={s.n} label={s.label} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 p-10 rounded-2xl bg-purple/[0.06] border border-purple/[0.15] flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <div className="font-display font-bold text-lg text-[#f1f0ff] mb-1.5">
                Pulse non è un'app sessuale.
              </div>
              <div className="font-body font-light text-sm text-[#6b6a80] leading-[1.7]">
                È uno spazio di crescita personale — privato, moderno e costruito attorno alle reali esigenze dei giovani.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-purple/10 border border-purple/20 font-body text-xs text-violet">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

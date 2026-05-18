import { useState } from "react";

const tabs = ["Percorso", "Moduli", "Profilo"];

function ScreenPercorso() {
  return (
    <div className="pb-4">
      <div className="px-[1.1rem] mb-4">
        <div className="text-[0.6rem] text-[#6b6a80] font-body tracking-widest mb-1">BUONGIORNO</div>
        <div className="text-base font-display font-bold text-[#f1f0ff]">Il tuo percorso</div>
      </div>
      {/* Progress */}
      <div className="px-[1.1rem] mb-5">
        <div className="bg-purple/10 rounded-full h-[5px] overflow-hidden">
          <div className="h-full w-[42%] grad-bg rounded-full" />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[0.55rem] text-[#6b6a80] font-body">Progresso</span>
          <span className="text-[0.55rem] text-violet font-body">42%</span>
        </div>
      </div>
      {/* Cards */}
      {[
        { emoji: "🧠", label: "Benessere mentale", done: true },
        { emoji: "💬", label: "Comunicazione",     done: true },
        { emoji: "🔒", label: "Consenso",          done: false, active: true },
        { emoji: "❤️", label: "Relazioni",         done: false },
      ].map((c, i) => (
        <div
          key={i}
          className={`mx-[1.1rem] mb-2 px-[0.9rem] py-3 rounded-xl flex items-center gap-3 border ${
            c.active
              ? "bg-purple/15 border-purple/20"
              : "bg-white/[0.03] border-white/[0.04]"
          }`}
        >
          <span className="text-[0.95rem]">{c.emoji}</span>
          <span
            className={`font-body text-[0.65rem] flex-1 ${
              c.done ? "line-through text-[#6b6a80]" : "text-[#f1f0ff]"
            }`}
          >
            {c.label}
          </span>
          {c.done && <span className="text-[0.6rem] text-violet">✓</span>}
          {c.active && <div className="w-[6px] h-[6px] rounded-full bg-purple" />}
        </div>
      ))}
    </div>
  );
}

function ScreenModuli() {
  const items = [
    { emoji: "🌱", label: "Corpo & identità",    tag: "Base",       color: "text-cyan-400" },
    { emoji: "💡", label: "Educazione sessuale",  tag: "Intermedio", color: "text-violet" },
    { emoji: "🤝", label: "Relazioni sane",       tag: "Avanzato",   color: "text-pink" },
    { emoji: "🧘", label: "Gestione ansia",       tag: "Mentale",    color: "text-emerald-400" },
  ];
  return (
    <div className="px-[1.1rem]">
      <div className="text-base font-display font-bold text-[#f1f0ff] mb-4">Moduli</div>
      {items.map((m, i) => (
        <div key={i} className="flex items-center gap-3 p-[0.85rem] rounded-xl bg-white/[0.03] border border-white/[0.05] mb-2">
          <div className="w-8 h-8 rounded-[10px] bg-purple/10 flex items-center justify-center text-[0.9rem] shrink-0">
            {m.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-body text-[0.65rem] text-[#f1f0ff] font-medium truncate">{m.label}</div>
            <div className={`font-body text-[0.55rem] mt-[2px] ${m.color}`}>{m.tag}</div>
          </div>
          <div className="w-5 h-5 rounded-full bg-purple/15 flex items-center justify-center shrink-0">
            <span className="text-violet text-[0.5rem]">→</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ScreenProfilo() {
  const stats = [
    { label: "Moduli completati", val: "2/8" },
    { label: "Giorni di percorso", val: "12" },
    { label: "Livello",            val: "Intermedio" },
  ];
  return (
    <div className="px-[1.1rem]">
      <div className="text-center mb-5">
        <div className="w-13 h-13 rounded-full grad-bg mx-auto mb-2 flex items-center justify-center text-2xl w-[52px] h-[52px]">
          🌿
        </div>
        <div className="font-display font-bold text-[0.95rem] text-[#f1f0ff]">Il tuo spazio</div>
        <div className="font-body text-[0.6rem] text-[#6b6a80] mt-[2px]">Privato · Sicuro · Tuo</div>
      </div>
      {stats.map((s, i) => (
        <div key={i} className="flex justify-between items-center py-3 border-b border-white/[0.04]">
          <span className="font-body text-[0.62rem] text-[#6b6a80]">{s.label}</span>
          <span className="font-body text-[0.65rem] text-violet font-medium">{s.val}</span>
        </div>
      ))}
      <div className="mt-4 p-3 rounded-xl bg-purple/10 border border-purple/20 text-center">
        <div className="font-body text-[0.6rem] text-violet">🔒 Privacy totale garantita</div>
      </div>
    </div>
  );
}

const screens = [<ScreenPercorso key={0} />, <ScreenModuli key={1} />, <ScreenProfilo key={2} />];

export default function PhoneMockup() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute w-80 h-80 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }} />

      {/* Shell */}
      <div
        className="relative w-[240px] rounded-[36px] overflow-hidden"
        style={{
          background: "#0c0c18",
          border: "1.5px solid rgba(139,92,246,0.25)",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.5), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(139,92,246,0.12)",
        }}
      >
        {/* Notch */}
        <div className="h-7 bg-[#080812] flex items-center justify-center">
          <div className="w-14 h-2 rounded-full bg-[#111120]" />
        </div>

        {/* Status bar */}
        <div className="flex justify-between items-center px-[1.1rem] pt-1 pb-2">
          <span className="font-body text-[0.55rem] text-[#6b6a80]">9:41</span>
          <div className="flex gap-1 items-end">
            {[6, 5, 4].map((h, i) => (
              <div key={i} className="w-[4px] bg-[#6b6a80] rounded-[1px]" style={{ height: h }} />
            ))}
          </div>
        </div>

        {/* Screen */}
        <div className="min-h-[380px] pb-2">{screens[active]}</div>

        {/* Tab bar */}
        <div className="flex border-t border-white/[0.05] pt-2 pb-3 bg-[#0a0a16]">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex-1 flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer"
            >
              <div
                className="w-1 h-1 rounded-full transition-colors duration-200"
                style={{ background: active === i ? "#8b5cf6" : "transparent" }}
              />
              <span
                className="font-body text-[0.52rem] transition-colors duration-200"
                style={{ color: active === i ? "#a78bfa" : "#6b6a80" }}
              >
                {t}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

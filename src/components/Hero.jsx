import { useEffect, useState } from "react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  const base = "transition-all duration-[1000ms] ease-[cubic-bezier(.4,0,.2,1)]";
  const visible = loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-[5vw] pt-32 pb-20 max-w-[1200px] mx-auto">
      {/* Left */}
      <div className={`${base} ${visible}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple/10 border border-purple/20 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple inline-block" />
          <span className="font-body text-xs text-violet tracking-wide">Educazione · Benessere · Crescita</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.06] tracking-tight text-[#f1f0ff] mb-6">
          Cresci con<br />
          <span className="grad-text">consapevolezza.</span>
        </h1>

        {/* Sub */}
        <p className="font-body font-light text-[1.05rem] text-[#9d9cb8] leading-[1.75] max-w-[440px] mb-10">
          Pulse è lo spazio privato che ti accompagna nella crescita personale e nella
          consapevolezza sessuale. Senza giudizi, senza rumore.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button className="grad-bg text-white font-body font-medium text-sm px-8 py-3.5 rounded-full glow-purple hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(139,92,246,0.45)] transition-all duration-200">
            Scopri il percorso
          </button>
          <a href="#problema" className="font-body text-sm text-[#9d9cb8] px-8 py-3.5 rounded-full border border-white/[0.07] hover:border-white/20 hover:text-[#f1f0ff] transition-all duration-200">
            Perché Pulse →
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex">
            {["🧑","👩","🧑‍🦱","👨‍🦰","🧒"].map((e, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#09090f] flex items-center justify-center text-xs"
                style={{ background: `hsl(${260 + i * 15},60%,28%)`, marginLeft: i > 0 ? -8 : 0 }}
              >{e}</div>
            ))}
          </div>
          <span className="font-body text-xs text-[#6b6a80]">
            Presto in arrivo —{" "}
            <span className="text-violet">unisciti alla lista</span>
          </span>
        </div>
      </div>

      {/* Right — mockup */}
      <div
        className={`${base} delay-150`}
        style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(28px) scale(0.97)" }}
      >
        <PhoneMockup />
      </div>
    </section>
  );
}

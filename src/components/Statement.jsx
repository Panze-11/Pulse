import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="py-28 px-[5vw] bg-[#0d0d16] border-t border-white/[0.07]">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <p className="font-display font-bold text-[clamp(1.5rem,3.2vw,2.4rem)] text-[#f1f0ff] leading-[1.55] tracking-tight">
            "Il 77% dei giovani impara la sessualità da social e TikTok.
            Il 91% userebbe Pulse.{" "}
            <span className="grad-text">Il bisogno è reale — e i numeri lo confermano.</span>"
          </p>
          <div className="mt-7 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full grad-bg flex items-center justify-center text-sm shrink-0">
              💜
            </div>
            <span className="font-body font-light text-sm text-[#6b6a80] tracking-wide">
              — Il team Pulse, da 43 risposte reali raccolte nel maggio 2026
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import useStats from "./useStats";

export default function Statement() {
  const stats = useStats();

  return (
    <section className="py-28 px-[5vw] bg-[#0d0d16] border-t border-white/[0.07]">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <p className="font-display font-bold text-[clamp(1.5rem,3.2vw,2.4rem)] text-[#f1f0ff] leading-[1.55] tracking-tight">
            "Il {stats.social}% dei giovani impara la sessualità da social e TikTok.
            Il {stats.useresti}% userebbe Pulse.{" "}
            <span className="grad-text">Il bisogno è reale — e i numeri lo confermano.</span>"
          </p>
          <div className="mt-7 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full grad-bg flex items-center justify-center text-sm shrink-0">
              💜
            </div>
            <span className="font-body font-light text-sm text-[#6b6a80] tracking-wide">
              — Il team Pulse, da {stats.totale} risposte reali raccolte nel {stats.aggiornato}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

export default function Survey() {
  return (
    <section className="py-24 px-[5vw] border-t border-white/[0.07] bg-[#0d0d16]">
      <div className="max-w-[900px] mx-auto">

        <Reveal>
          <div className="rounded-2xl border border-purple/20 bg-purple/[0.04] p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">

            {/* LEFT */}
            <div className="flex-1">
              <div className="font-body text-xs tracking-[0.15em] text-violet uppercase mb-3">
                La tua opinione conta
              </div>

              <h2 className="font-display font-extrabold text-[clamp(1.6rem,3.5vw,2.4rem)] text-[#f1f0ff] leading-[1.15] tracking-tight mb-4">
                Aiutaci a costruire<br />
                <span className="grad-text">Pulse insieme.</span>
              </h2>

              <p className="font-body font-light text-sm text-[#6b6a80] leading-[1.8] max-w-md">
                Rispondi a poche domande anonime — ci aiuta a capire cosa serve davvero e a migliorare il prodotto. Ci vogliono meno di 2 minuti.
              </p>

              {/* STATS */}
              <div className="flex gap-6 mt-6">
                <div>
                  <div className="font-display font-extrabold text-2xl grad-text">44</div>
                  <div className="font-body text-xs text-[#6b6a80] mt-0.5">risposte raccolte</div>
                </div>

                <div className="w-px bg-white/[0.07]" />

                <div>
                  <div className="font-display font-extrabold text-2xl grad-text">&lt; 2 min</div>
                  <div className="font-body text-xs text-[#6b6a80] mt-0.5">per completarlo</div>
                </div>

                <div className="w-px bg-white/[0.07]" />

                <div>
                  <div className="font-display font-extrabold text-2xl grad-text">100%</div>
                  <div className="font-body text-xs text-[#6b6a80] mt-0.5">anonimo</div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center gap-4 shrink-0">

              <div className="w-20 h-20 rounded-2xl grad-bg flex items-center justify-center text-4xl glow-purple">
                📋
              </div>

              {/* BOTTONCINO FUNZIONANTE */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdrGXjaySYREqqZt4e5UZqct3XO7tcFBkeU0jEcUxeOl64xfQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="grad-bg text-white font-body font-medium text-sm px-8 py-3.5 rounded-full glow-purple hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(139,92,246,0.45)] transition-all duration-200 whitespace-nowrap"
              >
                Compila il sondaggio →
              </a>

              <span className="font-body text-xs text-[#6b6a80]">
                Anonimo · Nessun account richiesto
              </span>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

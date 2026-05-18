import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-3.5 font-body font-light text-sm text-[#f1f0ff] outline-none focus:border-purple/50 transition-colors duration-200 placeholder:text-[#6b6a80]";

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "d9cf3379-13e4-4fc2-aaa3-4ddfefb92b99",
        name: form.name,
        email: form.email,
        message: form.msg,
      }),
    });

    setSent(true);
  };

  return (
    <section id="contatti" className="py-32 px-[5vw] border-t border-white/[0.07]">
      <div className="max-w-[540px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <div className="font-body text-xs tracking-[0.15em] text-violet uppercase mb-3">Contatti</div>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,2.8rem)] text-[#f1f0ff] leading-[1.1] tracking-tight mb-3">
              Parliamo.
            </h2>
            <p className="font-body font-light text-sm text-[#6b6a80] leading-[1.7]">
              Vuoi collaborare, proporre qualcosa o semplicemente saperne di più?
            </p>
          </div>

          {!sent ? (
            <div className="flex flex-col gap-3">
              <input
                placeholder="Il tuo nome"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                placeholder="La tua email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              <textarea
                placeholder="Il tuo messaggio…"
                value={form.msg}
                onChange={e => setForm({ ...form, msg: e.target.value })}
                rows={5}
                className={`${inputClass} resize-none`}
              />
              <button
                onClick={handleSubmit}
                className="w-full grad-bg text-white font-body font-medium text-sm py-4 rounded-xl mt-1 glow-purple hover:opacity-90 transition-opacity duration-200"
              >
                Invia messaggio
              </button>
            </div>
          ) : (
            <div className="text-center py-16 rounded-2xl border border-purple/20 bg-purple/[0.05]">
              <div className="text-4xl mb-4">💜</div>
              <div className="font-display font-bold text-lg text-[#f1f0ff] mb-1">Messaggio ricevuto!</div>
              <div className="font-body font-light text-sm text-[#6b6a80]">Ti risponderemo presto.</div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

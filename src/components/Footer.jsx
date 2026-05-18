import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="py-10 px-[5vw] border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="Pulse" className="h-5 w-auto" />
        <span className="font-display font-extrabold text-base tracking-tight text-[#f1f0ff]">
          Pulse
        </span>
      </div>
      <span className="font-body font-light text-xs text-[#6b6a80]">
        © 2026 Pulse. Tutti i diritti riservati.
      </span>
    </footer>
  );
}

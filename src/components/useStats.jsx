import { useState, useEffect } from "react";

const STATS_URL = "https://docs.google.com/spreadsheets/d/1j6wvsR4t2zoM61C4psfM6QQpegs07hSIwPukkT_pW4o/edit?usp=sharing";

const DEFAULT_STATS = {
  totale: 43,
  useresti: 91,
  ansia: 58,
  social: 77,
  noEducazione: 60,
  aggiornato: "maggio 2026",
  features: {
    relazioni: 65,
    mentale: 58,
    educativi: 56,
    primaEsperienza: 49,
    anonimo: 49,
    protezione: 44,
  },
};

export default function useStats() {
  const [stats, setStats] = useState(DEFAULT_STATS);

  useEffect(() => {
    fetch(STATS_URL)
      .then((r) => r.json())
      .then((data) => setStats({ ...DEFAULT_STATS, ...data }))
      .catch(() => {}); // fallback ai dati statici se fallisce
  }, []);

  return stats;
}


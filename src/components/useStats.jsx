import { useState, useEffect } from "react";

const STATS_URL = "https://script.google.com/macros/s/AKfycbx_M5sgVLx25BuqcleNNaCUzQCL_EaOfqcQsKo3vrahgjxTv2fbsaBo6OdNM43XJ7Z5/exec";

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
      .catch((err) => console.error("Errore fetch stats:", err));
  }, []);

  return stats;
}

import { useState } from "react";
import Reveal from "./Reveal";

const techs = [
  {
    tag: "Linguaggi Web — Base",
    emoji: "🏗️",
    title: "HTML & CSS",
    where: "Struttura e stile di ogni pagina web — incluso Pulse",
    summary: "HTML (HyperText Markup Language) definisce la struttura semantica della pagina. CSS (Cascading Style Sheets) ne definisce l'aspetto visivo. In Pulse, il codice React viene compilato da Vite in HTML+CSS puro che il browser legge.",
    steps: [
      { label: "HTML — Struttura semantica", desc: "Tag come <section>, <nav>, <button>, <form> definiscono il significato degli elementi. Il browser li trasforma nel DOM (Document Object Model), albero di oggetti manipolabili via JS." },
      { label: "DOM — Document Object Model", desc: "Il browser crea un albero di nodi a partire dall'HTML. JavaScript può accedere e modificare ogni nodo: document.getElementById(), querySelector(), createElement()." },
      { label: "CSS — Cascata e specificità", desc: "Le regole CSS si applicano a cascata: inline > id > class > tag. In Pulse si usa Tailwind CSS: classi utility precompilate (es. text-sm, bg-purple/10) che Vite include solo se usate." },
      { label: "Flexbox e Grid", desc: "I layout di Pulse usano CSS Flexbox (display:flex) per righe e colonne e CSS Grid (grid-template-columns) per le griglie di card. Responsivo con breakpoint (sm: md: lg:) di Tailwind." },
      { label: "CSS Custom Properties & Animazioni", desc: "Le animazioni fade-up usano transition: opacity, transform con cubic-bezier. Il gradiente viola→pink è background: linear-gradient(135deg, #8b5cf6, #ec4899) applicato con -webkit-background-clip: text." },
    ],
    code: `<!-- HTML generato da React dopo la compilazione -->
<section id="problema" class="py-32 px-[5vw]">
  <div class="max-w-[1200px] mx-auto">
    <h2 class="font-display font-extrabold
               text-[#f1f0ff] leading-[1.1]">
      Troppe domande,
      <span class="grad-text">poche risposte vere.</span>
    </h2>
  </div>
</section>

/* CSS generato da Tailwind per .grad-text */
.grad-text {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
    color: "amber",
  },
  {
    tag: "Linguaggi Web — Logica",
    emoji: "⚙️",
    title: "JavaScript & JSX",
    where: "Tutta la logica interattiva di Pulse: form, animazioni, fetch, stato",
    summary: "JavaScript è il linguaggio di programmazione del browser. Gestisce eventi, manipola il DOM, fa richieste di rete e aggiorna l'interfaccia in tempo reale senza ricaricare la pagina. JSX è un'estensione di sintassi usata da React: permette di scrivere HTML dentro JS.",
    steps: [
      { label: "Variabili, funzioni e arrow function", desc: "Pulse usa const/let (mai var). Le arrow function (() => {}) sono lo standard moderno. Ogni componente React è una funzione che ritorna JSX." },
      { label: "Array methods: map, filter, find", desc: "Le liste di feature, valori, step sono array. .map() trasforma ogni elemento in JSX: feats.map((f, i) => <FeatCard key={i} {...f} />). Fondamentale in React." },
      { label: "Destructuring & spread operator", desc: "{ name, email } = form estrae proprietà da oggetti. {...f} passa tutte le props di un oggetto a un componente. Rende il codice conciso e leggibile." },
      { label: "Async/Await e Promise", desc: "Le fetch() in Pulse sono async: await fetch(...) aspetta la risposta senza bloccare il thread. .then().catch() è la versione Promise equivalente usata in Problem.jsx." },
      { label: "Event handling", desc: "onClick={handleSubmit}, onChange={e => setForm({...form, name: e.target.value})}. Gli eventi del browser (click, input, scroll) vengono catturati e gestiti da funzioni JS." },
    ],
    code: `// Contact.jsx — JavaScript moderno in Pulse

// Arrow function async con await
const handleSubmit = async () => {
  if (!form.name || !form.email) return; // guard clause

  // fetch restituisce una Promise → await la risolve
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form), // oggetto JS → stringa JSON
  });

  if (res.ok) setSent(true); // aggiorna stato React
};

// Array.map() in Features.jsx
const feats = [{ emoji:"💬", title:"Consigli"}, ...];
feats.map((f, i) => (       // JSX dentro JS
  <FeatCard key={i} {...f} delay={i * 0.07} />
))`,
    color: "purple",
  },
  {
    tag: "Formato Dati",
    emoji: "📋",
    title: "JSON",
    where: "Dati statistici in Problem.jsx e payload del form in Contact.jsx",
    summary: "JSON (JavaScript Object Notation) è il formato standard per lo scambio di dati su web. È testo leggibile da umani e macchine, basato sulla sintassi degli oggetti JavaScript. In Pulse viene usato sia per ricevere dati (statistiche) sia per inviarli (form contatti).",
    steps: [
      { label: "Struttura JSON", desc: "Oggetti ({chiave: valore}), array ([...]), stringhe (\"...\"), numeri, booleani (true/false), null. Le chiavi devono essere stringhe con doppi apici." },
      { label: "JSON.stringify()", desc: "Converte un oggetto JavaScript in stringa JSON da inviare nel body di una richiesta HTTP. body: JSON.stringify({name, email, message}) → '{\"name\":\"Mario\",...}'" },
      { label: "JSON.parse() / .json()", desc: "Converte una stringa JSON in oggetto JS. fetch().then(r => r.json()) deserializza automaticamente la risposta HTTP con Content-Type: application/json." },
      { label: "JSON vs XML", desc: "JSON ha sostituito XML come formato di scambio dati perché più leggero, leggibile e nativo in JavaScript. REST API moderne usano quasi sempre JSON." },
      { label: "JSON nel file dati di Pulse", desc: "Il file su Google Drive contiene {totale:43, useresti:91, ansia:58, social:77, noEducazione:60, aggiornato:'maggio 2026'}. Problem.jsx lo legge e aggiorna i numeri nella UI senza modificare il codice." },
    ],
    code: `// JSON ricevuto dal server (dati statistici Pulse)
{
  "totale": 43,
  "useresti": 91,
  "ansia": 58,
  "social": 77,
  "noEducazione": 60,
  "aggiornato": "maggio 2026"
}

// JSON inviato al server (form contatti)
{
  "access_key": "d9cf3379-...",
  "name": "Mario Rossi",
  "email": "mario@email.com",
  "message": "Vorrei collaborare..."
}

// In Problem.jsx
fetch(url)
  .then(r => r.json())          // stringa → oggetto JS
  .then(data => setStats(data)) // usa i dati nella UI`,
    color: "cyan",
  },
  {
    tag: "Protocollo Applicativo — Livello 7",
    emoji: "🌐",
    title: "HTTP & HTTPS",
    where: "Ogni comunicazione di rete in Pulse: fetch dati, invio form",
    summary: "HTTP (HyperText Transfer Protocol) è il protocollo di comunicazione del web. Definisce come client e server si scambiano messaggi. HTTPS aggiunge TLS: tutti i dati sono cifrati in transito. Pulse usa HTTPS per ogni richiesta.",
    steps: [
      { label: "Richiesta HTTP — Request Line + Header + Body", desc: "POST /submit HTTP/1.1 | Host: api.web3forms.com | Content-Type: application/json | [body JSON]. Il browser costruisce questo messaggio partendo da fetch()." },
      { label: "Metodi HTTP: GET, POST, PUT, DELETE", desc: "GET: legge dati (Problem.jsx fetch i dati statistici). POST: invia dati (Contact.jsx invia il form). PUT: aggiorna. DELETE: elimina. Insieme formano il pattern REST." },
      { label: "Codici di stato HTTP", desc: "200 OK (successo), 201 Created, 400 Bad Request (errore client), 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error. res.ok è true se il codice è 200–299." },
      { label: "Header HTTP importanti", desc: "Content-Type: application/json (tipo del body), Authorization (token di accesso), Cache-Control (caching), Access-Control-Allow-Origin (CORS — vedi sicurezza)." },
      { label: "HTTP vs HTTPS", desc: "HTTP trasmette tutto in chiaro → intercettabile. HTTPS aggiunge il layer TLS (porta 443 invece di 80): i dati sono cifrati tra browser e server. Obbligatorio per qualsiasi app moderna." },
    ],
    code: `// Richiesta HTTP costruita da fetch() in Contact.jsx:

POST /submit HTTP/2
Host: api.web3forms.com
Content-Type: application/json
Origin: https://pulse-app.it

{"access_key":"d9cf3379...","name":"Mario","email":"..."}

// Risposta del server:
HTTP/2 200 OK
Content-Type: application/json
Access-Control-Allow-Origin: *

{"success": true, "message": "Email sent successfully!"}

// In JS:
const res = await fetch(url, { method:"POST", ... });
console.log(res.status); // 200
console.log(res.ok);     // true (200-299)`,
    color: "green",
  },
  {
    tag: "Sicurezza Web — Livello 6/7",
    emoji: "🔒",
    title: "TLS, Crittografia & CORS",
    where: "Protezione di tutte le comunicazioni di rete in Pulse",
    summary: "La sicurezza di Pulse si basa su tre livelli: TLS cifra il canale di comunicazione, la crittografia protegge i dati in transito, CORS protegge il browser da richieste cross-origin non autorizzate. Questi meccanismi corrispondono ai protocolli studiati in Sistemi e Reti.",
    steps: [
      { label: "TLS Handshake (SSL/TLS — livello 6 OSI)", desc: "1) Client Hello (versioni TLS + cipher suites) → 2) Server Hello + Certificato X.509 → 3) Verifica CA → 4) Key exchange ECDH → 5) Comunicazione cifrata AES-256. Tutto prima della prima riga HTTP." },
      { label: "Crittografia simmetrica vs asimmetrica", desc: "Durante il handshake si usa RSA/ECDH (asimmetrica) per scambiare la chiave in modo sicuro. Poi tutta la comunicazione usa AES (simmetrica) perché è più veloce. Esattamente come studiato in teoria." },
      { label: "Certificati X.509 e PKI", desc: "Il server invia un certificato digitale firmato da una CA (Certificate Authority). Il browser verifica la firma. Se il certificato è scaduto o self-signed → avviso 'Connessione non sicura'." },
      { label: "CORS — Cross-Origin Resource Sharing", desc: "Il browser blocca fetch() verso domini diversi (cross-origin) a meno che il server risponda con Access-Control-Allow-Origin. Questo protegge da attacchi CSRF. web3forms.com risponde con Access-Control-Allow-Origin: *." },
      { label: "XSS e protezione React", desc: "Cross-Site Scripting: un attaccante inietta codice JS nella pagina. React previene XSS automaticamente: ogni valore JSX viene escaped (< diventa &lt;). Non usa innerHTML direttamente." },
    ],
    code: `// TLS Handshake — livelli OSI in una fetch() Pulse:
//
// L7 HTTP:   POST /submit + headers JSON
// L6 TLS:    AES-256-GCM cifratura dei dati
//            (dopo handshake con ECDH + certificato X.509)
// L4 TCP:    connessione affidabile porta 443
// L3 IP:     routing verso api.web3forms.com
// L1/2 Wi-Fi: trasmissione fisica dei bit

// CORS — header inviato da web3forms.com:
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: Content-Type

// Senza questo header il browser blocca la risposta:
// "CORS policy: No 'Access-Control-Allow-Origin' header"

// XSS prevention in JSX (React):
// <p>{userInput}</p>  → React fa l'escaping automatico
// Non usa mai innerHTML con dati utente`,
    color: "pink",
  },
  {
    tag: "Frontend Architecture",
    emoji: "⚛️",
    title: "React, Componenti & Stato",
    where: "Intera architettura Pulse: ogni sezione è un componente React",
    summary: "React è una libreria JavaScript per costruire interfacce utente tramite componenti. Un componente è una funzione JS che riceve dati (props) e ritorna JSX. Lo stato (useState) sono dati che quando cambiano causano il re-render del componente.",
    steps: [
      { label: "Componente = funzione JS + JSX", desc: "function Hero() { return (<section>...</section>) }. JSX sembra HTML ma è JavaScript: viene compilato da Vite in React.createElement() calls. Ogni tag HTML diventa una chiamata a funzione." },
      { label: "Props — dati genitore→figlio", desc: "<FeatCard emoji='💬' title='Consigli' pct='65%' />. Il componente figlio riceve le props come parametro: function FeatCard({ emoji, title, pct }) {...}. Flusso dati unidirezionale." },
      { label: "useState — stato locale", desc: "const [sent, setSent] = useState(false). Quando setSent(true) viene chiamato, React re-renderizza solo il componente Contact. Il DOM viene aggiornato in modo efficiente (Virtual DOM diff)." },
      { label: "useEffect — effetti collaterali", desc: "useEffect(() => { fetch(...) }, []) esegue la fetch una volta al mount del componente. Il secondo argomento [] è l'array delle dipendenze: vuoto = esegui solo al primo render." },
      { label: "Virtual DOM & riconciliazione", desc: "React mantiene una copia virtuale del DOM in memoria. Ad ogni setState calcola il diff tra il vecchio e il nuovo Virtual DOM e aggiorna solo i nodi reali che sono cambiati. Più efficiente di manipolare il DOM direttamente." },
    ],
    code: `// Problem.jsx — componente completo con stato + fetch

export default function Problem() {
  // useState: dati iniziali hardcoded come fallback
  const [stats, setStats] = useState({
    totale: 43, useresti: 91, ansia: 58
  });

  // useEffect: fetch al mount, aggiorna stato
  useEffect(() => {
    fetch("https://drive.google.com/uc?...")
      .then(r => r.json())
      .then(data => setStats(data)) // → re-render con nuovi dati
      .catch(() => {});             // fallback: dati statici
  }, []); // [] = esegui solo una volta

  // JSX: usa i dati dello stato
  return (
    <section>
      <StatCard n={\`\${stats.useresti}%\`}
                label="userebbe Pulse" />
    </section>
  );
}`,
    color: "purple",
  },
  {
    tag: "Livello 4 OSI — Trasporto",
    emoji: "🔗",
    title: "TCP/IP & Stack OSI",
    where: "Livello di trasporto sotto ogni comunicazione di rete in Pulse",
    summary: "Ogni fetch() di Pulse attraversa tutti e 7 i livelli del modello OSI. TCP garantisce l'affidabilità della trasmissione (livello 4), IP gestisce il routing (livello 3). Conoscere lo stack completo permette di capire cosa succede davvero quando il browser invia una richiesta.",
    steps: [
      { label: "3-Way Handshake TCP", desc: "Prima di inviare qualsiasi dato HTTP, browser e server stabiliscono la connessione TCP: SYN → SYN-ACK → ACK. Solo dopo parte il TLS handshake, poi la richiesta HTTP." },
      { label: "Segmentazione e riassemblaggio", desc: "TCP divide i dati in segmenti con numero di sequenza. Se un segmento va perso viene ritrasmesso. Il ricevente riassembla i segmenti nell'ordine corretto prima di passarli a TLS/HTTP." },
      { label: "DNS — risoluzione del nome", desc: "Prima del TCP handshake, il browser interroga il DNS per tradurre 'api.web3forms.com' in un indirizzo IP. UDP porta 53. Solo con l'IP può aprire la connessione TCP." },
      { label: "Porta 443 e multiplexing", desc: "HTTPS usa la porta 443. Il server ha un processo in ascolto su quella porta. HTTP/2 permette multiple richieste parallele sulla stessa connessione TCP (multiplexing), riducendo la latenza." },
      { label: "IP e routing", desc: "IP (livello 3) gestisce il routing dei pacchetti tra reti diverse. Ogni router legge l'IP di destinazione e decide il next-hop. NAT traduce IP privati (192.168.x.x) in IP pubblico." },
    ],
    code: `// Stack completo di una fetch() in Pulse:
//
// fetch("https://api.web3forms.com/submit")
//
// L7 Applicazione: HTTP POST /submit
//                  Content-Type: application/json
//                  body: {"name":"Mario",...}
//
// L6 Presentazione: TLS 1.3 — cifratura AES-256-GCM
//
// L5 Sessione:      TLS Session ID (riuso connessione)
//
// L4 Trasporto:     TCP — 3-way handshake
//                   Porta sorgente: 52341 (random)
//                   Porta dest: 443
//
// L3 Rete:          IP — routing
//                   DNS: web3forms.com → 104.21.x.x
//
// L2 Collegamento:  Ethernet frame / Wi-Fi 802.11
//
// L1 Fisico:        bit su cavo/onde radio`,
    color: "cyan",
  },
];

const colorMap = {
  purple: { bg: "bg-purple/10", border: "border-purple/20", text: "text-violet", dot: "bg-purple" },
  pink:   { bg: "bg-pink/10",   border: "border-pink/20",   text: "text-pink",   dot: "bg-pink" },
  cyan:   { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400", dot: "bg-cyan-500" },
  green:  { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-500" },
  amber:  { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400", dot: "bg-amber-500" },
};

function TechCard({ tech, index }) {
  const [open, setOpen] = useState(false);
  const [codeOpen, setCodeOpen] = useState(false);
  const c = colorMap[tech.color] || colorMap.purple;

  return (
    <Reveal delay={index * 0.06}>
      <div className={`rounded-2xl border bg-[#12121e] transition-all duration-300 overflow-hidden ${open ? "border-purple/20" : "border-white/[0.07]"}`}>
        {/* Header */}
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full text-left px-7 py-6 flex items-start gap-4"
        >
          <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center text-xl shrink-0 mt-0.5`}>
            {tech.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className={`font-body text-xs tracking-[0.12em] uppercase mb-1 ${c.text}`}>{tech.tag}</div>
            <div className="font-display font-bold text-base text-[#f1f0ff]">{tech.title}</div>
            <div className="font-body font-light text-xs text-[#6b6a80] mt-1 italic">{tech.where}</div>
          </div>
          <div className={`w-7 h-7 rounded-full ${c.bg} border ${c.border} flex items-center justify-center shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={c.text} />
            </svg>
          </div>
        </button>

        {open && (
          <div className="px-7 pb-7 border-t border-white/[0.05]">
            <p className="font-body font-light text-sm text-[#9d9cb8] leading-[1.8] mt-5 mb-6">
              {tech.summary}
            </p>

            {/* Steps */}
            <div className="relative pl-6 mb-6">
              <div className={`absolute left-[7px] top-0 bottom-0 w-[2px] rounded-full opacity-25`}
                style={{ background: `linear-gradient(to bottom, #8b5cf6, #ec4899)` }} />
              {tech.steps.map((step, i) => (
                <div key={i} className="relative mb-5 last:mb-0">
                  <div className={`absolute left-[-17px] top-[5px] w-[10px] h-[10px] rounded-full ${c.dot} border-2 border-[#12121e]`} />
                  <div className="font-display font-bold text-xs text-[#f1f0ff] mb-1">{step.label}</div>
                  <div className="font-body font-light text-xs text-[#6b6a80] leading-[1.75]">{step.desc}</div>
                </div>
              ))}
            </div>

            {/* Code */}
            <button
              onClick={() => setCodeOpen(o => !o)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${c.bg} border ${c.border} font-body text-xs ${c.text} hover:opacity-80 transition-opacity mb-3`}
            >
              <span>{codeOpen ? "▾" : "▸"}</span>
              {codeOpen ? "Nascondi codice" : "Vedi nel codice del sito →"}
            </button>
            {codeOpen && (
              <pre className="bg-[#08080f] border border-white/[0.06] rounded-xl p-5 text-xs text-[#c3e88d] font-mono leading-[1.85] overflow-x-auto whitespace-pre-wrap">
                {tech.code}
              </pre>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function TechDeepDive() {
  return (
    <section id="tecnica" className="py-32 px-[5vw] bg-[#0d0d16] border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="font-body text-xs tracking-[0.15em] text-violet uppercase mb-3">
              Informatica &amp; Sistemi e Reti — 5° anno
            </div>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)] text-[#f1f0ff] leading-[1.1] tracking-tight">
              La tecnologia<br />
              <span className="grad-text">dietro Pulse.</span>
            </h2>
            <p className="font-body font-light text-sm text-[#6b6a80] mt-4 max-w-lg mx-auto leading-relaxed">
              Ogni sezione del sito usa concetti del programma scolastico. Clicca su ogni tecnologia per vedere come teoria e codice reale si collegano.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {techs.map((tech, i) => (
            <TechCard key={i} tech={tech} index={i} />
          ))}
        </div>

        {/* OSI Stack box */}
        <Reveal delay={0.2}>
          <div className="mt-16 p-8 rounded-2xl bg-purple/[0.06] border border-purple/[0.15]">
            <div className="font-display font-bold text-base text-[#f1f0ff] mb-2">
              Stack OSI completo — <span className="grad-text">una sola fetch() in Pulse</span>
            </div>
            <p className="font-body font-light text-xs text-[#6b6a80] mb-5 leading-relaxed">
              Quando Contact.jsx invia il form, i dati attraversano tutti e 7 i livelli del modello OSI — esattamente come studiato in Sistemi e Reti.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
              {[
                { n: "L7", name: "Applicazione", proto: "HTTP POST + JSON", color: "bg-purple/10 border-purple/20 text-violet" },
                { n: "L6", name: "Presentazione", proto: "TLS 1.3 / AES-256", color: "bg-purple/10 border-purple/20 text-violet" },
                { n: "L5", name: "Sessione", proto: "TLS Session", color: "bg-purple/10 border-purple/20 text-violet" },
                { n: "L4", name: "Trasporto", proto: "TCP — porta 443", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" },
                { n: "L3", name: "Rete", proto: "IP + DNS", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" },
                { n: "L2", name: "Collegamento", proto: "Ethernet frame", color: "bg-amber-500/10 border-amber-500/20 text-amber-400" },
                { n: "L1", name: "Fisico", proto: "Wi-Fi 802.11 / cavo", color: "bg-amber-500/10 border-amber-500/20 text-amber-400" },
              ].map((l) => (
                <div key={l.n} className={`rounded-xl border px-3 py-3 text-center ${l.color}`}>
                  <div className="font-display font-extrabold text-lg">{l.n}</div>
                  <div className="font-body font-medium text-[0.65rem] text-[#f1f0ff] mt-0.5">{l.name}</div>
                  <div className="font-body font-light text-[0.58rem] mt-1 opacity-60">{l.proto}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

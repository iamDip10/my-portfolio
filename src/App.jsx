import { useState, useEffect, useRef } from "react";


import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiDocker,
  SiPostman,
  SiLinux,
  SiElectronbuilder,
  SiWordpress,
  SiMailboxdotorg,
  SiChainlink
} from "react-icons/si";

// ─── Utility ─────────────────────────────────────────────────────────────────
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const el = document.documentElement;
          setProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Education", "Reviews", "Contact"];

const SKILLS = {
  Backend: [
    { name: "Python", level: 90, icon: SiPython },
    { name: "Django", level: 85, icon: SiDjango },
    { name: "FastAPI", level: 80, icon: SiFastapi },
    { name: "PostgreSQL", level: 82, icon: SiPostgresql },
    { name: "MySQL", level: 78, icon: SiMysql},
  ],
  Frontend: [
    { name: "React", level: 75, icon: SiReact},
    { name: "TypeScript", level: 70, icon: SiTypescript },
    { name: "JavaScript", level: 78, icon: SiJavascript },
    { name: "Tailwind CSS", level: 80, icon: SiTailwindcss },
  ],
  Tools: [
    { name: "GitHub", level: 85, icon: SiGithub },
    { name: "Linux", level: 80, icon: SiLinux },
    { name: "Docker", level: 72, icon: SiDocker},
    { name: "Postman", level: 85, icon: SiPostman},
  ],
};

const PROJECTS = [
  {
    name: "RentMate",
    tagline: "Rental Management Platform",
    description:
      "A full-featured rental management platform enabling landlords and tenants to manage properties, payments, and maintenance requests seamlessly. Integrates OpenStreetMap for location-based property discovery.",
    tech: ["Django", "Tailwind CSS", "MySQL", "OpenStreetMap API"],
    features: [
      "Property listing & search with map integration",
      "Tenant & landlord dashboards",
      "Automated rent tracking & invoicing",
      "Maintenance request workflow",
    ],
    color: "#00d4ff",
    icon: "",
    github: "https://github.com/dipsaha",
    demo: "#",
    comingSoon: false
  },
  {
    name: "SupportDesk",
    tagline: "Customer Support Ticketing System",
    description:
      "A scalable, async-first ticketing system built for high-volume customer support operations. Features real-time updates via Celery/Redis, priority queuing, and SLA tracking.",
    tech: ["Django", "PostgreSQL", "Redis", "Celery"],
    features: [
      "Async task processing with Celery",
      "Real-time ticket status updates",
      "Priority queuing & SLA tracking",
      "Agent performance analytics",
    ],
    color: "#a855f7",
    icon: "",
    github: "https://github.com/dipsaha",
    demo: "#",
    comingSoon:true
  },
];

const EXPERIENCE = [
  {
    role: "Associate Specialist, Tech Support",
    company: "Ollyo",
    period: "2024 – Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Provided advanced technical support for high-traffic web applications and production systems.",
"Diagnosed and resolved issues related to product workflows, plugin conflicts, and server-side behavior.",
"Collaborated closely with software engineers to reproduce bugs, investigate root causes, and improve system reliability.",
"Gained hands-on exposure to production debugging and software maintenance practices.",
"Assisted clients with feature configurations, troubleshooting, and deployment-related issues.",
"Developed strong asynchronous communication and problem-solving skills in a remote collaboration environment."
    ],
    color: "#00d4ff",
  },

  {
    role: "Content Writer (Intern)",
    company: "Youth School for Social Entrepreneurs (YSSE)",
    period: "March 2023 – July 2023",
    location: "Dhaka, Bangladesh",
    points: [
      "Wrote and optimized blogs, reports, newsletters, and digital content.",
      "Improved SEO performance and content engagement across multiple platforms.",
      "Recognized as 'Intern of the Month' and 'Spotlight of the Month'."
    ],
    color: "#00d4ff",
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "United International University (Bangladesh)",
    period: "2020 – 2025",
    detail: "I have been awarded full scholarships 4 times, half scholarships 6 times, and 25% scholarships in almost every trimester based on my academic performance",
    icon: SiElectronbuilder,
  },

  {
    degree: "Higher Secondary Certificate",
    institution: "Dhaka College",
    period: "2017 – 2019",
    detail: "Achieved GPA-5 with an average score of 85% in the board examination",
    icon: SiElectronbuilder,
  },

  {
    degree: "Secondary School Certificate",
    institution: "Ideal School and College",
    period: "2017",
    detail: "Achieved GPA-5 with an average score of 91% in the board examination",
    icon: SiElectronbuilder,
  },
];


const REVIEWS = [
  {
    id: 1,
    // Replace with your actual screenshot URL or import
    image: "https://snipboard.io/ZsnMhR.jpg",
    client: "",
    role: "",
    company: "",
    platform: "Trustpilot",
    rating: '',
    highlight: "",
    color: "#00d4ff",
  },
  {
    id: 2,
    // Replace with your actual screenshot URL or import
    image: "https://snipboard.io/pcWJoM.jpg",
    client: "",
    role: "",
    company: "",
    platform: "Trustpilot",
    rating: '',
    highlight: "",
    color: "#00d4ff",
  },
  {
    id: 3,
    // Replace with your actual screenshot URL or import
    image: "https://snipboard.io/GrSMcC.jpg",
    client: "",
    role: "",
    company: "",
    platform: "Trustpilot",
    rating: '',
    highlight: "",
    color: "#00d4ff",
  },
  {
    id: 4,
    // Replace with your actual screenshot URL or import
    image: "https://snipboard.io/8kZPSw.jpg",
    client: "",
    role: "",
    company: "",
    platform: "Trustpilot",
    rating: '',
    highlight: "",
    color: "#00d4ff",
  },
  {
    id: 5,
    // Replace with your actual screenshot URL or import
    image: "https://snipboard.io/B9GDzH.jpg",
    client: "",
    role: "",
    company: "",
    platform: "Trustpilot",
    rating: '',
    highlight: "",
    color: "#00d4ff",
  },
 
  {
    id: 6,
    // Replace with your actual screenshot URL or import
    image: "https://snipboard.io/dEuwWJ.jpg",
    client: "",
    role: "",
    company: "",
    platform: "Trustpilot",
    rating: '',
    highlight: "",
    color: "#00d4ff",
  },
  {
    id: 7,
    // Replace with your actual screenshot URL or import
    image: "https://snipboard.io/dupVi1.jpg",
    client: "",
    role: "",
    company: "",
    platform: "Trustpilot",
    rating: '',
    highlight: "",
    color: "#00d4ff",
  },
 
];

// ─── Global Styles ────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #050814; color: #fff; overflow-x: hidden; font-family: 'DM Sans', sans-serif; }
  ::selection { background: rgba(0,212,255,0.3); }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #050814; }
  ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.3); border-radius: 2px; }

  @keyframes pulse-dot {
    0%,100% { opacity:1; transform:scale(1); }
    50% { opacity:0.4; transform:scale(0.8); }
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes spin-slow-r { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
  @keyframes float-a { 0%,100%{transform:translateY(-6px)} 50%{transform:translateY(6px)} }
  @keyframes float-b { 0%,100%{transform:translateY(4px)} 50%{transform:translateY(-4px)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
  @keyframes loadSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

  /* CSS-only particle background */
  @keyframes drift1 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(30px,-20px)} 66%{transform:translate(-20px,30px)} }
  @keyframes drift2 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(-25px,35px)} 66%{transform:translate(40px,-15px)} }
  @keyframes drift3 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(20px,40px)} 66%{transform:translate(-35px,-25px)} }

  .nav-link {
    background: none; border: none;
    color: rgba(255,255,255,0.6);
    cursor: pointer; font-size: 12px;
    font-family: 'Space Mono', monospace;
    letter-spacing: 1px; text-transform: uppercase;
    transition: color 0.2s; padding: 4px 0;
  }
  .nav-link:hover { color: #00d4ff; }
  .nav-link.active { color: #00d4ff; }

  .card-hover {
    transition: border-color 0.2s, transform 0.25s, background 0.2s;
  }
  .card-hover:hover {
    border-color: rgba(0,212,255,0.25) !important;
    transform: translateY(-4px);
  }

  .proj-card {
    transition: border-color 0.2s, transform 0.25s, box-shadow 0.25s, background 0.2s;
  }

  .btn-primary {
    background: linear-gradient(135deg,#00d4ff,#0066ff);
    border: none; border-radius: 10px; color: #fff;
    cursor: pointer; font-size: 13px;
    font-family: 'Space Mono', monospace; font-weight: 700;
    padding: 13px 26px; letter-spacing: 1px;
    box-shadow: 0 0 24px rgba(0,212,255,0.25);
    transition: transform 0.2s, box-shadow 0.2s;
    will-change: transform;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,212,255,0.4); }

  .btn-secondary {
    background: transparent;
    border: 1px solid rgba(168,85,247,0.45);
    border-radius: 10px; color: #a855f7;
    cursor: pointer; font-size: 13px;
    font-family: 'Space Mono', monospace; font-weight: 700;
    padding: 13px 26px; letter-spacing: 1px;
    transition: background 0.2s, border-color 0.2s;
  }
  .btn-secondary:hover { background: rgba(168,85,247,0.1); border-color: #a855f7; }

  .skill-card {
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 14px; padding: 1.3rem;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
    will-change: transform;
  }
  .skill-card:hover {
    background: rgba(0,212,255,0.055);
    border-color: rgba(0,212,255,0.22);
    transform: translateY(-3px);
  }

  .contact-link {
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 1rem 1.2rem;
    display: flex; align-items: center; gap: 1rem;
    text-decoration: none; color: inherit;
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
    will-change: transform;
  }
  .contact-link:hover { transform: translateX(4px); }

  @media (max-width: 900px) {
    .desktop-nav { display: none !important; }
    .hamburger { display: flex !important; }
  }
  @media (max-width: 700px) {
    .hero-grid { grid-template-columns: 1fr !important; }
    .about-grid { grid-template-columns: 1fr !important; }
    .contact-grid { grid-template-columns: 1fr !important; }
    .stats-grid { grid-template-columns: repeat(3,1fr) !important; }
    .about-cards { grid-template-columns: 1fr 1fr !important; }
    .viz-container { display: none !important; }
    .section-pad { padding: 4.5rem 0 !important; }
    .hero-pad { padding: 5.5rem 1.2rem 3rem !important; }
  }
  @media (max-width: 480px) {
    .stats-grid { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
    .about-cards { grid-template-columns: 1fr !important; }
    .proj-grid { grid-template-columns: 1fr !important; }
    .inner-pad { padding: 0 1.2rem !important; }
  }
`;

const responsiveStyles = `
/* ============================= */
/* MOBILE RESPONSIVE SYSTEM */
/* ============================= */

*{
  box-sizing:border-box;
}

html{
  overflow-x:hidden;
  scroll-behavior:smooth;
}

body{
  overflow-x:hidden;
}

/* ============================= */
/* LARGE TABLETS */
/* ============================= */

@media (max-width: 1100px){

  .hero-grid,
  .about-grid,
  .contact-grid{
    grid-template-columns:1fr !important;
    gap:2.5rem !important;
  }

  .viz-container{
    order:-1;
  }

  .proj-grid{
    grid-template-columns:1fr !important;
  }

}

/* ============================= */
/* TABLET */
/* ============================= */

@media (max-width: 768px){

  .inner-pad,
  .hero-pad{
    padding-left:1.2rem !important;
    padding-right:1.2rem !important;
  }

  .section-pad{
    padding:4.5rem 0 !important;
  }

  .hero-grid{
    gap:2rem !important;
  }

  .about-grid{
    gap:2rem !important;
  }

  .about-cards{
    grid-template-columns:1fr !important;
  }

  .stats-grid{
    grid-template-columns:1fr !important;
    padding:1.2rem !important;
    gap:1rem !important;
  }

  .proj-grid{
    gap:1.2rem !important;
  }

  .contact-grid{
    gap:2rem !important;
  }

  .desktop-nav{
    display:none !important;
  }

  .hamburger{
    display:flex !important;
  }

}

/* ============================= */
/* MOBILE */
/* ============================= */

@media (max-width: 640px){

  h1{
    font-size:2.4rem !important;
    line-height:1.05 !important;
  }

  h2{
    font-size:2rem !important;
    line-height:1.1 !important;
  }

  p{
    font-size:14px !important;
  }

  .hero-pad{
    padding-top:7rem !important;
    padding-bottom:3rem !important;
  }

  .section-pad{
    padding:4rem 0 !important;
  }

  .inner-pad,
  .hero-pad{
    padding-left:1rem !important;
    padding-right:1rem !important;
  }

  .skill-card{
    padding:1rem !important;
  }

  .proj-card{
    border-radius:16px !important;
  }

  .proj-card h3{
    font-size:18px !important;
  }

  .proj-card p{
    font-size:13px !important;
  }

  .contact-link{
    padding:0.85rem !important;
  }

  .contact-link span{
    font-size:12px !important;
  }

  button{
    min-height:44px;
  }

  input,
  textarea{
    font-size:16px !important;
  }

}

/* ============================= */
/* SMALL MOBILE */
/* ============================= */

@media (max-width: 480px){

  h1{
    font-size:2rem !important;
  }

  h2{
    font-size:1.7rem !important;
  }

  .hero-pad{
    padding-top:6.5rem !important;
  }

  .stats-grid{
    border-radius:14px !important;
  }

  .proj-grid{
    grid-template-columns:1fr !important;
  }

  .contact-grid{
    grid-template-columns:1fr !important;
  }

  .about-grid{
    grid-template-columns:1fr !important;
  }

  .about-cards{
    grid-template-columns:1fr !important;
  }

  .review-carousel-card{
    width:100% !important;
  }

}

/* ============================= */
/* REVIEWS CAROUSEL MOBILE FIX */
/* ============================= */

@media (max-width: 768px){

  .reviews-carousel-wrap{
    min-height:auto !important;
    padding-bottom:4rem !important;
  }

  .review-slide{
    width:100% !important;
    transform:none !important;
    opacity:1 !important;
    position:relative !important;
    margin-bottom:1rem !important;
    filter:none !important;
  }

  .review-nav-btn{
    width:42px !important;
    height:42px !important;
    font-size:18px !important;
  }

}

/* ============================= */
/* MOBILE MENU */
/* ============================= */

.mobile-menu{
  position:fixed;
  top:64px;
  left:0;
  right:0;

  background:rgba(5,8,20,0.98);

  backdrop-filter:blur(20px);

  border-top:1px solid rgba(255,255,255,0.08);

  padding:1rem;

  display:flex;
  flex-direction:column;
  gap:0.8rem;

  z-index:999;
}

.mobile-menu button{
  width:100%;

  text-align:left;

  padding:0.9rem 1rem;

  border:none;

  border-radius:12px;

  background:rgba(255,255,255,0.04);

  color:#fff;

  font-family:'DM Sans',sans-serif;
}

/* ============================= */
/* IMAGE SAFETY */
/* ============================= */

img{
  max-width:100%;
  height:auto;
}

/* ============================= */
/* OVERFLOW FIX */
/* ============================= */

section,
div{
  max-width:100%;
}
`;

// ─── Components ──────────────────────────────────────────────────────────────
function CSSParticleBg() {
  const dots = [
    { x: "8%", y: "15%", anim: "drift1 18s ease-in-out infinite", op: 0.35 },
    { x: "22%", y: "70%", anim: "drift2 22s ease-in-out infinite", op: 0.25 },
    { x: "50%", y: "20%", anim: "drift3 16s ease-in-out infinite", op: 0.2 },
    { x: "75%", y: "55%", anim: "drift1 20s ease-in-out infinite 3s", op: 0.3 },
    { x: "88%", y: "30%", anim: "drift2 24s ease-in-out infinite 6s", op: 0.2 },
    { x: "40%", y: "80%", anim: "drift3 19s ease-in-out infinite 2s", op: 0.28 },
    { x: "15%", y: "45%", anim: "drift1 21s ease-in-out infinite 8s", op: 0.18 },
    { x: "65%", y: "10%", anim: "drift2 17s ease-in-out infinite 4s", op: 0.22 },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: d.x, top: d.y,
            width: 3, height: 3,
            borderRadius: "50%",
            background: "#00d4ff",
            opacity: d.op,
            animation: d.anim,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

function ProgressBar({ progress }) {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999, height: 3, background: "transparent" }}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg,#00d4ff,#a855f7)",
          transition: "width 0.15s linear",
          willChange: "width",
        }}
      />
    </div>
  );
}

function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <nav
      style={{
        position: "fixed", top: 3, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(5,8,20,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 18, fontWeight: 700, color: "#00d4ff", letterSpacing: -1, flexShrink: 0 }}>
          dip<span style={{ color: "#a855f7" }}>.</span>dev
        </div>
        <div className="desktop-nav" style={{ display: "flex", gap: "1.8rem", alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className={`nav-link${active === l ? " active" : ""}`}>{l}</button>
          ))}
          <button onClick={() => scrollTo("Contact")} className="btn-primary" style={{ fontSize: 11, padding: "7px 16px" }}>HIRE ME</button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          style={{ display: "none", background: "none", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#fff", cursor: "pointer", fontSize: 18, padding: "6px 10px", alignItems: "center", justifyContent: "center" }}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div style={{ background: "rgba(5,8,20,0.97)", padding: "1.2rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem", borderTop: "1px solid rgba(0,212,255,0.1)" }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="nav-link" style={{ textAlign: "left", fontSize: 14, padding: "6px 0" }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Section({ id, children, style = {} }) {
  const [ref, visible] = useInView(0.06);
  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function SectionLabel({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#00d4ff", letterSpacing: 3, textTransform: "uppercase", flexShrink: 0 }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,212,255,0.4), transparent)" }} />
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#fff", margin: "0 0 1rem", lineHeight: 1.1 }}>
      {children}
    </h2>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const [typed, setTyped] = useState("");
  const phrases = ["Tech Support Enginner", "Python Backend Developer", "API Architect", "Django & FastAPI Dev", "Debugger"];
  const phraseRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;
    const tick = () => {
      const phrase = phrases[phraseRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        setTyped(phrase.slice(0, charRef.current));
        if (charRef.current === phrase.length) {
          deletingRef.current = true;
          timeout = setTimeout(tick, 2000);
          return;
        }
      } else {
        charRef.current--;
        setTyped(phrase.slice(0, charRef.current));
        if (charRef.current === 0) {
          deletingRef.current = false;
          phraseRef.current = (phraseRef.current + 1) % phrases.length;
        }
      }
      timeout = setTimeout(tick, deletingRef.current ? 40 : 75);
    };
    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const badges = ["Django", "FastAPI", "Python", "PostgreSQL", "Redis", "Docker", "REST APIs", "Wordpress"];

  return (
    <div
      id="home"
      style={{
        minHeight: "100vh", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center",
        background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,255,0.1) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(168,85,247,0.08) 0%, transparent 60%), #050814",
      }}
    >
      <CSSParticleBg />
      <div style={{ position: "absolute", top: "12%", left: "3%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "8%", right: "3%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="hero-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem 4rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.18)", borderRadius: 100, padding: "5px 14px", marginBottom: "1.2rem" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00d4ff", flexShrink: 0, animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#00d4ff", letterSpacing: 2, textTransform: "uppercase" }}>Available for Work</span>
            </div>

            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "rgba(0,212,255,0.65)", letterSpacing: 3, textTransform: "uppercase", margin: "0 0 0.7rem" }}>
              Hi, I'm Dip Saha
            </p>

            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4.5vw,3.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, margin: "0 0 0.4rem", minHeight: "2.5em" }}>
              <span style={{ background: "linear-gradient(135deg,#00d4ff,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {typed}
              </span>
              <span style={{ color: "#00d4ff", animation: "blink 1s step-end infinite" }}>|</span>
            </h1>

            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 460, margin: "1rem 0 1.8rem", fontFamily: "'DM Sans', sans-serif" }}>
              Building scalable backend systems, production-grade REST APIs, and robust data pipelines.
              Passionate about clean architecture, system reliability, and solving complex engineering challenges.
            </p>

            <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <button className="btn-primary" onClick={() => scrollTo("projects")}>View Projects →</button>
              <button className="btn-secondary" onClick={() => scrollTo("contact")}>Contact Me</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {badges.map((b, i) => (
                <span key={b} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontFamily: "'Space Mono', monospace", color: "rgba(255,255,255,0.45)", letterSpacing: 0.5, animation: `fadeUp 0.5s ease ${i * 60}ms both` }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right – lightweight viz */}
          <div className="viz-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <BackendViz />
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.2rem", marginTop: "3.5rem", padding: "1.8rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16 }}>
          {[
            { num: "2+", label: "Years Experience" },
            { num: "2+", label: "Projects Completed" },
            { num: "100%", label: "Remote Ready" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, fontFamily: "'Syne', sans-serif", background: "linear-gradient(135deg,#00d4ff,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{num}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BackendViz() {
  const nodes = [
    { emoji: SiFastapi, label: "FastAPI", color: "#00d4ff", anim: "float-a 3s ease-in-out infinite" },
    { emoji: SiDjango, label: "Django", color: "#a855f7", anim: "float-b 3.5s ease-in-out infinite" },
    { emoji: SiPostgresql, label: "PostgreSQL", color: "#00d4ff", anim: "float-a 4s ease-in-out infinite 0.5s" },
    { emoji: SiMysql, label: "MySql", color: "#a855f7", anim: "float-b 3.2s ease-in-out infinite 1s" },
    { emoji: SiWordpress, label: "Wordpress", color: "#00d4ff", anim: "float-a 3.8s ease-in-out infinite 1.5s" },
    { emoji: SiJavascript, label: "Javascript", color: "#a855f7", anim: "float-b 3.6s ease-in-out infinite 0.8s" },
  ];
  return (
    <div style={{ position: "relative", width: 340, height: 340 }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(0,212,255,0.1)", animation: "spin-slow 25s linear infinite", willChange: "transform" }} />
      <div style={{ position: "absolute", inset: 30, borderRadius: "50%", border: "1px solid rgba(168,85,247,0.08)", animation: "spin-slow-r 18s linear infinite", willChange: "transform" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 90, height: 90, borderRadius: "50%", background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34 }}>
        🐍
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, position: "absolute", inset: 0, padding: 16, alignContent: "space-between" }}>
        {nodes.map(({ emoji: Icon, label, color, anim }) => (
          <div key={label} style={{  borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, padding: "8px 4px", animation: anim, willChange: "transform" }}>
            <span style={{ fontSize: 50 }}><Icon color={color}/></span>
            {/* <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", fontFamily: "'Space Mono', monospace", textAlign: "center" }}>{label}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <Section id="about" className="section-pad" style={{ padding: "6rem 0", background: "linear-gradient(180deg,#050814 0%,#080d1e 100%)" }}>
      <div className="inner-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <SectionLabel label="About Me" />
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <SectionTitle>Backend engineer, <span style={{ background: "linear-gradient(135deg,#00d4ff,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>problem solver</span></SectionTitle>
            {[
              "I'm Dip Saha, a backend-focused software developer with hands-on experience in tech support engineering at Ollyo. My day-to-day involves debugging live systems, tracing technical failures, and working side-by-side with engineers to keep real-world applications running reliably on Wordpress ecosystem.",
              "I specialize in Python-based backend stacks Django and FastAPI, and I'm deeply interested with distributed systems concepts like database optimization, and REST API design.",
              "Now I'm looking to take that foundation into a focused backend engineering role contributing to startups and teams where system reliability and scalability aren't afterthoughts.",
            ].map((text, i) => (
              <p key={i} style={{ color: "rgba(255,255,255,0.52)", lineHeight: 1.85, fontSize: 14.5, fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>{text}</p>
            ))}
          </div>
          <div className="about-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem" }}>
            {[
              { icon: "🔍", title: "Production Debugging", desc: "Trace and resolve live system failures with minimal downtime" },
              { icon: "🏗️", title: "Scalable APIs", desc: "Design REST APIs that hold up under real traffic and evolve cleanly" },
              { icon: "🤝", title: "Team Collaboration", desc: "Comfortable working with cross-functional engineering teams" },
              { icon: "📈", title: "System Thinking", desc: "Approach problems with architecture-first, sustainable solutions" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-hover" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "1.2rem" }}>
                <div style={{ fontSize: 26, marginBottom: "0.6rem" }}>{icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", fontFamily: "'Syne', sans-serif", marginBottom: "0.35rem" }}>{title}</div>
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────
function Skills() {
  const [activeTab, setActiveTab] = useState("Backend");
  return (
    <Section id="skills" className="section-pad" style={{ padding: "6rem 0", background: "#080d1e" }}>
      <div className="inner-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <SectionLabel label="Technical Skills" />
        <SectionTitle>My Tech Stack</SectionTitle>
        <div style={{ display: "flex", gap: "0.7rem", marginBottom: "2.2rem", flexWrap: "wrap" }}>
          {Object.keys(SKILLS).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? "linear-gradient(135deg,#00d4ff,#0066ff)" : "rgba(255,255,255,0.04)",
                border: activeTab === tab ? "none" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8, color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.45)",
                cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: 11,
                fontWeight: 700, letterSpacing: 1, padding: "8px 18px", textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "1rem" }}>
          {SKILLS[activeTab].map(({ name, icon, level }, i) => (
            <SkillCard key={name} name={name} icon={icon} level={level} delay={i * 55} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function SkillCard({ name, icon:Icon, level, delay }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className="skill-card" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(18px)", transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms` }}>
      <div style={{ fontSize: 26, marginBottom: "0.7rem" }}>
        <Icon size={40} color="rgba(0, 212, 255, 0.733)"/>
      </div>
      <div style={{ fontSize: 13.5, fontWeight: 600, color: "#fff", fontFamily: "'Syne', sans-serif", marginBottom: "0.75rem" }}>{name}</div>
      {/* <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ height: "100%", width: visible ? `${level}%` : "0%", background: "linear-gradient(90deg,#00d4ff,#a855f7)", borderRadius: 10, transition: `width 1.1s ease ${delay + 180}ms`, willChange: "width" }} />
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", marginTop: 5, fontFamily: "'Space Mono', monospace" }}>{level}%</div> */}
    </div>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <Section id="projects" className="section-pad" style={{ padding: "6rem 0", background: "linear-gradient(180deg,#080d1e 0%,#050814 100%)" }}>
      <div className="inner-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <SectionLabel label="Featured Work" />
        <SectionTitle>Projects</SectionTitle>
        <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 14.5, fontFamily: "'DM Sans', sans-serif", marginBottom: "2.5rem", maxWidth: 480 }}>
          Real-world applications built with scalability and developer experience in mind.
        </p>
        <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,440px),1fr))", gap: "1.6rem" }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} delay={i * 80} />)}
        </div>
      </div>
    </Section>
  );
}

// function ProjectCard({ project, delay }) {
//   const [ref, visible] = useInView(0.08);
//   const [hovered, setHovered] = useState(false);
//   const { name, tagline, description, tech, features, color, icon, github, demo } = project;
//   return (
//     <div
//       ref={ref}
//       className="proj-card"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: hovered ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.02)",
//         border: `1px solid ${hovered ? `${color}2e` : "rgba(255,255,255,0.07)"}`,
//         borderRadius: 18, overflow: "hidden",
//         opacity: visible ? 1 : 0,
//         transform: visible ? (hovered ? "translateY(-5px)" : "translateY(0)") : "translateY(28px)",
//         transition: `opacity 0.55s ease ${delay}ms, transform 0.35s ease, border-color 0.2s, box-shadow 0.3s, background 0.2s`,
//         boxShadow: hovered ? `0 18px 50px ${color}12` : "none",
//         willChange: "transform",
//       }}
//     >
//       <div style={{ background: `linear-gradient(135deg, ${color}18, ${color}08)`, padding: "1.6rem 1.6rem 1.2rem", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.8rem" }}>
//         <div>
//           <div style={{ fontSize: 38, marginBottom: "0.4rem" }}>{icon}</div>
//           <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", margin: "0 0 3px" }}>{name}</h3>
//           <p style={{ fontSize: 11, color: `${color}bb`, fontFamily: "'Space Mono', monospace", margin: 0, letterSpacing: 1, textTransform: "uppercase" }}>{tagline}</p>
//         </div>
//         <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
//           {[{ href: github, label: "🐙 GitHub" }, { href: demo, label: "🚀 Demo Coming Soon", accent: true }].map(({ href, label, accent }) => (
//             <a key={label} href={href} target="_blank" rel="noopener noreferrer"
//               style={{ background: accent ? `${color}1a` : "rgba(255,255,255,0.07)", border: `1px solid ${accent ? `${color}40` : "rgba(255,255,255,0.12)"}`, borderRadius: 7, color: accent ? color : "#fff", fontSize: 10, fontFamily: "'Space Mono', monospace", padding: "6px 10px", textDecoration: "none", display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" }}>
//               {label}
//             </a>
//           ))}
//         </div>
//       </div>
//       <div style={{ padding: "1.3rem 1.6rem 1.6rem" }}>
//         <p style={{ color: "rgba(255,255,255,0.47)", fontSize: 13, lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif", marginBottom: "1.1rem" }}>{description}</p>
//         <div style={{ marginBottom: "1.3rem" }}>
//           <div style={{ fontSize: 10, fontFamily: "'Space Mono', monospace", color: "rgba(255,255,255,0.28)", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.6rem" }}>Key Features</div>
//           {features.map((f) => (
//             <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem", marginBottom: "0.35rem" }}>
//               <span style={{ color, fontSize: 11, marginTop: 2, flexShrink: 0 }}>▸</span>
//               <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.42)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>{f}</span>
//             </div>
//           ))}
//         </div>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
//           {tech.map((t) => (
//             <span key={t} style={{ background: `${color}0e`, border: `1px solid ${color}2e`, borderRadius: 5, color: `${color}bb`, fontSize: 10, fontFamily: "'Space Mono', monospace", padding: "3px 9px", letterSpacing: 0.5 }}>{t}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


function ProjectCard({ project, delay }) {
  const [ref, visible] = useInView(0.08);
  const [hovered, setHovered] = useState(false);

  const {
    name,
    tagline,
    description,
    tech,
    features,
    color,
    icon,
    github,
    demo,
    comingSoon,
  } = project;

  return (
    <div
      ref={ref}
      className="proj-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",

        background: hovered
          ? "rgba(255,255,255,0.035)"
          : "rgba(255,255,255,0.02)",

        border: `1px solid ${
          hovered ? `${color}2e` : "rgba(255,255,255,0.07)"
        }`,

        borderRadius: 18,
        overflow: "hidden",

        opacity: visible ? 1 : 0,

        transform: visible
          ? hovered
            ? "translateY(-5px)"
            : "translateY(0)"
          : "translateY(28px)",

        transition: `
          opacity 0.55s ease ${delay}ms,
          transform 0.35s ease,
          border-color 0.2s,
          box-shadow 0.3s,
          background 0.2s
        `,

        boxShadow: hovered
          ? `0 18px 50px ${color}12`
          : "none",

        willChange: "transform",

        filter: comingSoon ? "grayscale(0.15)" : "none",
      }}
    >
      {/* COMING SOON OVERLAY */}
      {comingSoon && (
  <div
    style={{
      position: "absolute",
      inset: 0,

      zIndex: 10,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",

      background: "rgba(10,12,25,0.25)",
    }}
  >
    <div
      style={{
        padding: "12px 22px",

        borderRadius: 999,

        background: "rgba(255,255,255,0.08)",

        border: `1px solid ${color}55`,

        color: "#fff",

        fontFamily: "'Space Mono', monospace",
        fontSize: 11,

        letterSpacing: 2,
        textTransform: "uppercase",

        boxShadow: `0 0 30px ${color}22`,
      }}
    >
      ⚡ Currently Crafting
    </div>
  </div>
)}

      {/* TOP */}
      <div
        style={{
          background: `linear-gradient(135deg, ${color}18, ${color}08)`,

          padding: "1.6rem 1.6rem 1.2rem",

          borderBottom: "1px solid rgba(255,255,255,0.05)",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "0.8rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 38,
              marginBottom: "0.4rem",
            }}
          >
            {icon}
          </div>

          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 20,
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 3px",
            }}
          >
            {name}
          </h3>

          <p
            style={{
              fontSize: 11,
              color: `${color}bb`,
              fontFamily: "'Space Mono', monospace",
              margin: 0,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {tagline}
          </p>
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexShrink: 0,
          }}
        >
          {[
            {
              href: github,
              label: "🐙 GitHub",
            },

            {
              href: demo,
              label: comingSoon
                ? "🚧 In Progress"
                : "🚀 Live Demo",

              accent: true,
            },
          ].map(({ href, label, accent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: accent
                  ? `${color}1a`
                  : "rgba(255,255,255,0.07)",

                border: `1px solid ${
                  accent
                    ? `${color}40`
                    : "rgba(255,255,255,0.12)"
                }`,

                borderRadius: 7,

                color: accent ? color : "#fff",

                fontSize: 10,
                fontFamily: "'Space Mono', monospace",

                padding: "6px 10px",

                textDecoration: "none",

                display: "flex",
                alignItems: "center",
                gap: 4,

                whiteSpace: "nowrap",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          padding: "1.3rem 1.6rem 1.6rem",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.47)",
            fontSize: 13,
            lineHeight: 1.75,
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "1.1rem",
          }}
        >
          {description}
        </p>

        {/* FEATURES */}
        <div
          style={{
            marginBottom: "1.3rem",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontFamily: "'Space Mono', monospace",
              color: "rgba(255,255,255,0.28)",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            Key Features
          </div>

          {features.map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.55rem",
                marginBottom: "0.35rem",
              }}
            >
              <span
                style={{
                  color,
                  fontSize: 11,
                  marginTop: 2,
                  flexShrink: 0,
                }}
              >
                ▸
              </span>

              <span
                style={{
                  fontSize: 12.5,
                  color: "rgba(255,255,255,0.42)",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.5,
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>

        {/* TECH STACK */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.45rem",
          }}
        >
          {tech.map((t) => (
            <span
              key={t}
              style={{
                background: `${color}0e`,
                border: `1px solid ${color}2e`,
                borderRadius: 5,

                color: `${color}bb`,

                fontSize: 10,
                fontFamily: "'Space Mono', monospace",

                padding: "3px 9px",

                letterSpacing: 0.5,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
// ── Experience ────────────────────────────────────────────────────────────────
function Experience() {
  return (
    <Section id="experience" className="section-pad" style={{ padding: "6rem 0", background: "#080d1e" }}>
      <div className="inner-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <SectionLabel label="Work History" />
        <SectionTitle>Experience</SectionTitle>
        <div style={{ marginTop: "2.5rem" }}>
          {EXPERIENCE.map((exp) => (
            <div key={exp.role} style={{ display: "flex", gap: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 13, height: 13, borderRadius: "50%", background: exp.color, boxShadow: `0 0 12px ${exp.color}`, marginTop: 5 }} />
                <div style={{ width: 1, flex: 1, background: `linear-gradient(${exp.color}44, transparent)`, marginTop: 8 }} />
              </div>
              <div style={{ flex: 1, paddingBottom: "2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.3rem" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>{exp.role}</h3>
                  <span style={{ background: `${exp.color}14`, border: `1px solid ${exp.color}30`, borderRadius: 6, color: exp.color, fontSize: 10, fontFamily: "'Space Mono', monospace", padding: "4px 10px", flexShrink: 0 }}>{exp.period}</span>
                </div>
                <div style={{ fontSize: 13, color: exp.color, fontFamily: "'Space Mono', monospace", marginBottom: "0.25rem" }}>{exp.company}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", fontFamily: "'DM Sans', sans-serif", marginBottom: "1rem" }}>📍 {exp.location}</div>
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "1.2rem" }}>
                  {exp.points.map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.7rem", marginBottom: i < exp.points.length - 1 ? "0.8rem" : 0 }}>
                      <span style={{ color: exp.color, flexShrink: 0, marginTop: 2, fontSize: 11 }}>▸</span>
                      <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── Education ─────────────────────────────────────────────────────────────────
function Education() {
  return (
    <Section id="education" className="section-pad" style={{ padding: "6rem 0", background: "linear-gradient(180deg,#080d1e 0%,#050814 100%)" }}>
      <div className="inner-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <SectionLabel label="Academic Background" />
        <SectionTitle>Education</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,340px),1fr))", gap: "1.3rem", marginTop: "2rem" }}>
          {EDUCATION.map((ed) => {
            const Icon = ed.icon
            return(
            <div key={ed.degree} className="card-hover" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "1.8rem" }}>
              <div style={{ fontSize: 38, marginBottom: "0.9rem" }}><Icon color="rgb(0, 212, 255)"/> </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: "#fff", margin: "0 0 0.4rem", lineHeight: 1.4 }}>{ed.degree}</h3>
              <div style={{ fontSize: 13, color: "#00d4ff", fontFamily: "'Space Mono', monospace", marginBottom: "0.25rem" }}>{ed.institution}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.7rem" }}>{ed.period}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>{ed.detail}</div>
            </div>
          )}
          )}
        </div>
      </div>
    </Section>
  );
}


// // ── Reviews ───────────────────────────────────────────────────────────────────
// function ReviewCard({ review, index }) {
//   const [ref, visible] = useInView(0.08);
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const { id, image, client, role, company, platform, rating, highlight, color } = review;
 
//   const platformColors = {
//     Upwork: "#14a800",
//     Fiverr: "#1dbf73",
//     LinkedIn: "#0a66c2",
//     Direct: "#00d4ff",
//   };
//   const pColor = platformColors[platform] || "#00d4ff";
 
//   return (
//     <>
//       <div
//         ref={ref}
//         className="review-card-wrap"
//         onClick={() => setLightboxOpen(true)}
//         style={{
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(28px)",
//           transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
//         }}
//       >
//         {/* Card shell */}
//         <div
//           style={{
//             position: "relative",
//             background: "rgba(255,255,255,0.02)",
//             border: `1px solid rgba(255,255,255,0.07)`,
//             borderRadius: 20,
//             overflow: "hidden",
//             boxShadow: `0 0 0 0 ${color}`,
//             transition: "box-shadow 0.3s, border-color 0.3s",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.borderColor = `${color}40`;
//             e.currentTarget.style.boxShadow = `0 20px 60px ${color}18, 0 0 0 1px ${color}20`;
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
//             e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
//           }}
//         >
//           {/* Corner decorations */}
//           {[
//             { top: 0, left: 0, borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`, borderTopLeftRadius: 20 },
//             { top: 0, right: 0, borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}`, borderTopRightRadius: 20 },
//             { bottom: 0, left: 0, borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}`, borderBottomLeftRadius: 20 },
//             { bottom: 0, right: 0, borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}`, borderBottomRightRadius: 20 },
//           ].map((pos, i) => (
//             <div
//               key={i}
//               className="review-corner"
//               style={{
//                 position: "absolute",
//                 width: 18, height: 18,
//                 opacity: 0,
//                 transition: "opacity 0.3s",
//                 zIndex: 3,
//                 pointerEvents: "none",
//                 animation: "corner-pulse 2s ease-in-out infinite",
//                 ...pos,
//               }}
//             />
//           ))}
 
//           {/* Screenshot area */}
//           <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/10", background: "#03060f" }}>
//             <img
//               src={image}
//               alt={`Review from ${client}`}
//               style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease", filter: "brightness(0.9)" }}
//               onMouseEnter={(e) => { e.target.style.transform = "scale(1.04)"; }}
//               onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; }}
//             />
 
//             {/* Scanline effect */}
//             <div
//               className="review-scanline"
//               style={{
//                 position: "absolute",
//                 left: 0, right: 0,
//                 height: "20%",
//                 background: `linear-gradient(180deg, transparent 0%, ${color}08 50%, transparent 100%)`,
//                 opacity: 0,
//                 pointerEvents: "none",
//                 animation: "none",
//                 transition: "opacity 0.3s",
//                 zIndex: 2,
//               }}
//             />
 
//             {/* Overlay on hover */}
//             <div
//               className="review-overlay"
//               style={{
//                 position: "absolute", inset: 0,
//                 background: `radial-gradient(circle at center, ${color}14 0%, transparent 70%)`,
//                 opacity: 0,
//                 transition: "opacity 0.3s",
//                 zIndex: 1,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//               }}
//             >
//               <div style={{
//                 background: "rgba(5,8,20,0.75)",
//                 border: `1px solid ${color}40`,
//                 borderRadius: 10,
//                 padding: "8px 16px",
//                 fontFamily: "'Space Mono', monospace",
//                 fontSize: 11,
//                 color: color,
//                 letterSpacing: 2,
//                 backdropFilter: "blur(8px)",
//               }}>
//                 CLICK TO EXPAND
//               </div>
//             </div>
 
//             {/* Platform badge */}
//             <div style={{
//               position: "absolute", top: 12, right: 12,
//               background: `${pColor}22`,
//               border: `1px solid ${pColor}55`,
//               borderRadius: 6,
//               padding: "4px 10px",
//               fontSize: 9,
//               fontFamily: "'Space Mono', monospace",
//               color: pColor,
//               letterSpacing: 1.5,
//               textTransform: "uppercase",
//               zIndex: 4,
//               backdropFilter: "blur(8px)",
//             }}>
//               {platform}
//             </div>
//           </div>
 
//           {/* Card footer */}
//           <div style={{
//             padding: "1rem 1.2rem",
//             background: "rgba(255,255,255,0.015)",
//             borderTop: "1px solid rgba(255,255,255,0.05)",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: "0.8rem",
//             flexWrap: "wrap",
//           }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
//               {/* Avatar circle */}
//               <div style={{
//                 width: 36, height: 36,
//                 borderRadius: "50%",
//                 background: `linear-gradient(135deg, ${color}33, ${color}11)`,
//                 border: `1px solid ${color}44`,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontFamily: "'Syne', sans-serif",
//                 fontWeight: 800,
//                 fontSize: 13,
//                 color: color,
//                 flexShrink: 0,
//               }}>
//                 {id}
//               </div>
//               <div>
//                 <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "'Syne', sans-serif", lineHeight: 1.2 }}>{client}</div>
//                 <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}>{role} · {company}</div>
//               </div>
//             </div>
 
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
//               {/* Stars */}
//               <div style={{ display: "flex", gap: 2 }}>
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <span key={i} style={{ fontSize: 20, color: i < rating ? "#fbbf24" : "rgba(255,255,255,0.15)" }}>★</span>
//                 ))}
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </div>
 
//       {/* Lightbox */}
//       {lightboxOpen && (
//         <div
//           onClick={() => setLightboxOpen(false)}
//           style={{
//             position: "fixed", inset: 0,
//             background: "rgba(3,5,14,0.92)",
//             zIndex: 9998,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: "2rem",
//             backdropFilter: "blur(12px)",
//           }}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               position: "relative",
//               maxWidth: 900,
//               width: "100%",
//               borderRadius: 20,
//               overflow: "hidden",
//               border: `1px solid ${color}44`,
//               boxShadow: `0 0 80px ${color}22, 0 40px 80px rgba(0,0,0,0.6)`,
//               animation: "fadeUp 0.3s ease",
//             }}
//           >
//             <img src={image} alt={`Review from ${client}`} style={{ width: "100%", display: "block" }} />
 
//             {/* Lightbox info bar */}
//             <div style={{
//               padding: "1rem 1.4rem",
//               background: "rgba(5,8,20,0.95)",
//               borderTop: `1px solid ${color}25`,
//               display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem",
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
//                 <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${color}33, ${color}11)`, border: `1px solid ${color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color }}>
//                   {client.charAt(0)}
//                 </div>
//                 <div>
//                   <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Syne', sans-serif" }}>{client}</div>
//                   <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>{role} · {company}</div>
//                 </div>
//               </div>
//               <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
//                 <div style={{ display: "flex", gap: 2 }}>
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <span key={i} style={{ fontSize: 14, color: i < rating ? "#fbbf24" : "rgba(255,255,255,0.15)" }}>★</span>
//                   ))}
//                 </div>
//                 <span style={{ background: `${pColor}22`, border: `1px solid ${pColor}55`, borderRadius: 6, padding: "4px 10px", fontSize: 10, fontFamily: "'Space Mono', monospace", color: pColor, letterSpacing: 1 }}>{platform}</span>
//               </div>
//             </div>
 
//             {/* Close button */}
//             <button
//               onClick={() => setLightboxOpen(false)}
//               style={{
//                 position: "absolute", top: 14, right: 14,
//                 background: "rgba(5,8,20,0.8)",
//                 border: `1px solid ${color}40`,
//                 borderRadius: "50%",
//                 color: color,
//                 cursor: "pointer",
//                 width: 34, height: 34,
//                 fontSize: 16,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 backdropFilter: "blur(8px)",
//                 transition: "background 0.2s",
//                 fontFamily: "monospace",
//               }}
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
 
// function Reviews() {
//   const [ref, visible] = useInView(0.06);
//   const totalRatings = REVIEWS.reduce((a, r) => a + r.rating, 0);
//   const avgRating = (totalRatings / REVIEWS.length).toFixed(1);
 
//   return (
//     <Section
//       id="reviews"
//       className="section-pad"
//       style={{ padding: "6rem 0", background: "linear-gradient(180deg,#050814 0%,#080d1e 100%)", position: "relative", overflow: "hidden" }}
//     >
//       {/* Ambient glow blobs */}
//       <div style={{ position: "absolute", top: "10%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
 
//       <div className="inner-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
//         <SectionLabel label="Client Feedback" />
 
//         {/* Header row */}
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
//           <div>
//             <SectionTitle>
//               What Clients{" "}
//               <span style={{ background: "linear-gradient(135deg,#00d4ff,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 Say
//               </span>
//             </SectionTitle>
//             <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 14.5, fontFamily: "'DM Sans', sans-serif", maxWidth: 420, margin: 0 }}>
//               Real feedback from real clients — hover to inspect, click to expand.
//             </p>
//           </div>
 
//           {/* Rating summary chip */}
//           <div
//             ref={ref}
//             style={{
//               opacity: visible ? 1 : 0,
//               transform: visible ? "translateY(0)" : "translateY(16px)",
//               transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
//               background: "rgba(255,255,255,0.025)",
//               border: "1px solid rgba(0,212,255,0.2)",
//               borderRadius: 16,
//               padding: "1rem 1.5rem",
//               display: "flex",
//               alignItems: "center",
//               gap: "1.2rem",
//               backdropFilter: "blur(12px)",
//             }}
//           >
//             <div style={{ textAlign: "center" }}>
//               <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "'Syne', sans-serif", background: "linear-gradient(135deg,#fbbf24,#f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>
//                 {avgRating}
//               </div>
//               <div style={{ display: "flex", gap: 2, justifyContent: "center", marginTop: 4 }}>
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <span key={i} style={{ fontSize: 12, color: "#fbbf24" }}>★</span>
//                 ))}
//               </div>
//             </div>
//             <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.08)" }} />
//             <div>
//               <div style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#00d4ff", lineHeight: 1 }}>{REVIEWS.length}+</div>
//               <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, textTransform: "uppercase", marginTop: 3 }}>Reviews</div>
//             </div>
//             <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.08)" }} />
//             <div>
//               <div style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#a855f7", lineHeight: 1 }}>100%</div>
//               <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, textTransform: "uppercase", marginTop: 3 }}>Satisfied</div>
//             </div>
//           </div>
//         </div>
 
//         {/* Grid of review cards */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
//             gap: "1.4rem",
//           }}
//         >
//           {REVIEWS.map((review, i) => (
//             <ReviewCard key={review.id} review={review} index={i} />
//           ))}
//         </div>
 
//         {/* Bottom hint */}
//         <div style={{ textAlign: "center", marginTop: "2rem" }}>
//           <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: 2, textTransform: "uppercase" }}>
//             ↑ Click any card to view full screenshot
//           </span>
//         </div>
//       </div>
//     </Section>
//   );
// }

function ReviewsCarousel() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? REVIEWS.length - 1 : prev - 1
    );
  };

  const current = REVIEWS[active];

  return (
    <Section
      id="reviews"
      className="section-pad"
      style={{
        padding: "7rem 0",
        background:
          "radial-gradient(circle at top,#0c1225 0%,#050814 45%,#03060f 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          top: -150,
          left: -120,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1250,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* heading */}
        <div
          style={{
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#00d4ff",
              fontFamily: "'Space Mono', monospace",
              marginBottom: 14,
            }}
          >
            Client Feedback
          </div>

          <h2
            style={{
              fontSize: "clamp(2.4rem,5vw,4.5rem)",
              lineHeight: 1,
              margin: 0,
              fontFamily: "'Syne', sans-serif",
              color: "#fff",
              fontWeight: 800,
            }}
          >
            Trusted by{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#00d4ff,#a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clients
            </span>
          </h2>
        </div>

        {/* carousel */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 650,
          }}
        >
          {REVIEWS.map((review, index) => {
            const offset = index - active;

            let transform = "";
            let opacity = 0;
            let zIndex = 0;
            let scale = 0.75;

            if (offset === 0) {
              transform = "translateX(0) scale(1)";
              opacity = 1;
              zIndex = 5;
              scale = 1;
            } else if (offset === -1 || offset === REVIEWS.length - 1) {
              transform = "translateX(-72%) scale(0.82)";
              opacity = 0.45;
              zIndex = 3;
            } else if (offset === 1 || offset === -(REVIEWS.length - 1)) {
              transform = "translateX(72%) scale(0.82)";
              opacity = 0.45;
              zIndex = 3;
            } else {
              transform = "scale(0.65)";
              opacity = 0;
            }

            return (
              <div
                key={review.id}
                style={{
                  position: "absolute",

                  width: "min(100%, 820px)",

                  transition:
                    "all 0.6s cubic-bezier(.22,.61,.36,1)",

                  transform,

                  opacity,

                  zIndex,

                  filter:
                    offset === 0
                      ? "blur(0px)"
                      : "blur(3px)",
                }}
              >
                <div
                  style={{
                    position: "relative",

                    background:
                      "rgba(255,255,255,0.03)",

                    border:
                      offset === 0
                        ? `1px solid ${review.color}55`
                        : "1px solid rgba(255,255,255,0.06)",

                    borderRadius: 28,

                    overflow: "hidden",

                    backdropFilter: "blur(20px)",

                    boxShadow:
                      offset === 0
                        ? `0 30px 80px ${review.color}22`
                        : "none",
                  }}
                >
                  {/* glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(circle at top right, ${review.color}18 0%, transparent 40%)`,
                      pointerEvents: "none",
                    }}
                  />

                  {/* image */}
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={review.image}
                      alt=""
                      style={{
                        width: "100%",
                        display: "block",
                        objectFit: "contain",
                        aspectRatio: "16/10",
                      }}
                    />

                    {/* futuristic overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,

                        background:
                          "linear-gradient(to top, rgba(3,6,15,0.9), transparent 45%)",
                      }}
                    />

                    {/* floating badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: 20,
                        right: 20,

                        background: `${review.color}20`,
                        border: `1px solid ${review.color}55`,

                        borderRadius: 999,

                        padding: "8px 16px",

                        color: review.color,

                        fontSize: 11,

                        letterSpacing: 2,

                        textTransform: "uppercase",

                        fontFamily:
                          "'Space Mono', monospace",

                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {review.platform}
                    </div>

                    {/* bottom content */}
                    <div
                      style={{
                        position: "absolute",
                        left: 30,
                        bottom: 30,
                        right: 30,
                      }}
                    >
                 

                    

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
{/* 
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: 0,

              zIndex: 20,

              width: 54,
              height: 54,

              borderRadius: "50%",

              border:
                "1px solid rgba(255,255,255,0.1)",

              background:
                "rgba(255,255,255,0.05)",

              backdropFilter: "blur(12px)",

              color: "#fff",

              fontSize: 24,

              cursor: "pointer",
            }}
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: 0,

              zIndex: 20,

              width: 54,
              height: 54,

              borderRadius: "50%",

              border:
                "1px solid rgba(255,255,255,0.1)",

              background:
                "rgba(255,255,255,0.05)",

              backdropFilter: "blur(12px)",

              color: "#fff",

              fontSize: 24,

              cursor: "pointer",
            }}
          >
            →
          </button> */}

          {/* left button */}
<button
  onClick={prevSlide}
  style={{
    position: "absolute",

    left: window.innerWidth < 768 ? 12 : 0,

    zIndex: 20,

    width: window.innerWidth < 768 ? 38 : 54,
    height: window.innerWidth < 768 ? 38 : 54,

    minWidth: 0,
    minHeight: 0,

    borderRadius: "50%",

    border:
      window.innerWidth < 768
        ? "1px solid rgba(0,212,255,0.25)"
        : "1px solid rgba(255,255,255,0.1)",

    background:
      window.innerWidth < 768
        ? "rgba(0,212,255,0.12)"
        : "rgba(255,255,255,0.05)",

    backdropFilter: "blur(12px)",

    color:
      window.innerWidth < 768
        ? "#00d4ff"
        : "#fff",

    fontSize: window.innerWidth < 768 ? 18 : 24,

    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    boxShadow:
      window.innerWidth < 768
        ? "0 0 20px rgba(0,212,255,0.18)"
        : "none",

    transition: "all .25s ease",
  }}
>
  ←
</button>

{/* right button */}
<button
  onClick={nextSlide}
  style={{
    position: "absolute",

    right: window.innerWidth < 768 ? 12 : 0,

    zIndex: 20,

    width: window.innerWidth < 768 ? 38 : 54,
    height: window.innerWidth < 768 ? 38 : 54,

    minWidth: 0,
    minHeight: 0,

    borderRadius: "50%",

    border:
      window.innerWidth < 768
        ? "1px solid rgba(168,85,247,0.3)"
        : "1px solid rgba(255,255,255,0.1)",

    background:
      window.innerWidth < 768
        ? "rgba(168,85,247,0.12)"
        : "rgba(255,255,255,0.05)",

    backdropFilter: "blur(12px)",

    color:
      window.innerWidth < 768
        ? "#a855f7"
        : "#fff",

    fontSize: window.innerWidth < 768 ? 18 : 24,

    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    boxShadow:
      window.innerWidth < 768
        ? "0 0 20px rgba(168,85,247,0.18)"
        : "none",

    transition: "all .25s ease",
  }}
>
  →
</button>
        </div> 

        {/* indicators */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: "2rem",
          }}
        >
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? 42 : 10,
                height: 10,

                border: "none",

                borderRadius: 999,

                background:
                  active === i
                    ? "linear-gradient(135deg,#00d4ff,#a855f7)"
                    : "rgba(255,255,255,0.15)",

                transition: "all 0.35s ease",

                cursor: "pointer",
              }}
            />
          ))}
        </div> */}

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    gap: 8,

    marginTop: "1rem",

    position: "absolute",
    bottom: 20,
    left: "50%",

    transform: "translateX(-50%)",

    zIndex: 20,

    background: "rgba(255,255,255,0.04)",

    border: "1px solid rgba(255,255,255,0.08)",

    backdropFilter: "blur(12px)",

    padding: "8px 14px",

    borderRadius: 999,
  }}
>
  {REVIEWS.map((_, i) => (
    <button
    key={i}
    onClick={() => setActive(i)}
    style={{
      width: active === i ? 8 : 6,
      height: active === i ? 8 : 6,
  
      minHeight: 0,
      minWidth: 0,
  
      padding: 0,
  
      border: "none",
      borderRadius: "50%",
  
      flexShrink: 0,
  
      background:
        active === i
          ? "linear-gradient(135deg,#00d4ff,#a855f7)"
          : "rgba(255,255,255,0.2)",
  
      boxShadow:
        active === i
          ? "0 0 10px rgba(0,212,255,0.45)"
          : "none",
  
      transition: "all .25s ease",
  
      cursor: "pointer",
    }}
  />
  ))}
</div>
      </div>
    </Section>
  );
}
// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: 10, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: 14,
    padding: "12px 15px", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
  };

  const links = [
    { label: "Email", value: "saha.dipofficial171@gmail.com", href: "mailto:saha.dipofficial171@gmail.com", color: "#00d4ff", icon: SiMailboxdotorg },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/dip-saha-5b87a9207/", href: "https://www.linkedin.com/in/dip-saha-5b87a9207/", color: "#a855f7", icon: SiChainlink },
    { label: "GitHub", value: "https://github.com/iamDip10/", href: "https://github.com/iamDip10/", color: "#00d4ff", icon: SiGithub },
  ];

  return (
    <Section id="contact" className="section-pad" style={{ padding: "6rem 0", background: "#050814" }}>
      <div className="inner-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <SectionLabel label="Get In Touch" />
        <SectionTitle>Contact Me</SectionTitle>
        <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 14.5, fontFamily: "'DM Sans', sans-serif", marginBottom: "2.5rem", maxWidth: 480 }}>
          Open to backend engineering roles, freelance projects, and remote opportunities.
        </p>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3.5rem", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
              {links.map((item) => {
                const Icon = item.icon;
                return(
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link"
                  style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "0.9rem 1.1rem", display: "flex", alignItems: "center", gap: "0.9rem", textDecoration: "none", color: "inherit", transition: "border-color 0.2s, background 0.2s, transform 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${item.color}30`; e.currentTarget.style.background = `${item.color}07`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)"; }}
                >
                  <div style={{ fontSize: 20, width: 40, height: 40, background: `${item.color}14`, border: `1px solid ${item.color}20`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon color={item.color}/>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.value}</div>
                  </div>
                  <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.18)", fontSize: 14 }}>→</span>
                </a>
              )}
              )}
            </div>
            <div style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.14)", borderRadius: 12, padding: "1.1rem 1.3rem", display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00d4ff", flexShrink: 0, marginTop: 5, animation: "pulse-dot 2s ease-in-out infinite" }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#00d4ff", fontFamily: "'Syne', sans-serif", marginBottom: 4 }}>Currently Available</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>Open to backend roles and select freelance projects. Prefer remote positions.</div>
              </div>
            </div>
          </div>

          {/* Form — no <form> tag to avoid submit reload in artifact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {[
              { key: "name", label: "Name", placeholder: "John Doe", type: "text" },
              { key: "email", label: "Email", placeholder: "you@company.com", type: "email" },
            ].map(({ key, label, placeholder, type }) => (
              <div key={key}>
                <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.45rem" }}>{label}</label>
                <input style={inputStyle} type={type} placeholder={placeholder} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(0,212,255,0.38)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; }}
                />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.45rem" }}>Message</label>
              <textarea style={{ ...inputStyle, height: 130, resize: "vertical" }} placeholder="Tell me about the role or project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={(e) => { e.target.style.borderColor = "rgba(0,212,255,0.38)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; }}
              />
            </div>
            <button
              onClick={handleSubmit}
              style={{
                background: sent ? "linear-gradient(135deg,#00c853,#00e676)" : "linear-gradient(135deg,#00d4ff,#0066ff)",
                border: "none", borderRadius: 10, color: "#fff", cursor: "pointer",
                fontSize: 13, fontFamily: "'Space Mono', monospace", fontWeight: 700,
                padding: "13px 26px", letterSpacing: 1,
                boxShadow: sent ? "0 0 24px rgba(0,200,83,0.28)" : "0 0 24px rgba(0,212,255,0.22)",
                transition: "all 0.3s",
              }}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#03060f", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2rem 1.5rem", textAlign: "center" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 18, fontWeight: 700, color: "#00d4ff", marginBottom: "0.8rem" }}>
        dip<span style={{ color: "#a855f7" }}>.</span>dev
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.4rem" }}>
        Dip Saha · Wordpress Support Enginner · Python Backend Developer · Dhaka, Bangladesh
      </p>
      <p style={{ fontSize: 10, color: "rgba(255,255,255,0.12)", fontFamily: "'Space Mono', monospace" }}>
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

function BackToTop({ progress }) {
  if (progress < 20) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#00d4ff,#a855f7)", border: "none", color: "#fff", cursor: "pointer", fontSize: 17, zIndex: 999, boxShadow: "0 0 16px rgba(0,212,255,0.28)", transition: "transform 0.2s", willChange: "transform" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const progress = useScrollProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);

    const t = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(t);
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  if (loading) {
    return (
      <div style={{ position: "fixed", inset: 0, background: "#050814", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.2rem", zIndex: 10000 }}>
        <div style={{ width: 44, height: 44, border: "2px solid rgba(0,212,255,0.18)", borderTop: "2px solid #00d4ff", borderRadius: "50%", animation: "loadSpin 0.7s linear infinite" }} />
        <div style={{ fontFamily: "monospace", fontSize: 12, color: "rgba(0,212,255,0.45)", letterSpacing: 3 }}>LOADING...</div>
      </div>
    );
  }

  return (
    <div>
       <style>{responsiveStyles}</style>
      <ProgressBar progress={progress} />
      <Navbar active={null} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <ReviewsCarousel />
      <Contact />
      <Footer />
      <BackToTop progress={progress} />
    </div>
  );
}

















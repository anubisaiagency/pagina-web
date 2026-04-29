import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, TrendingUp, Zap, Shield } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  alpha: number;
}

// ─── Canvas particle network (desktop + tablet) ───────────────────────────────
const ParticleCanvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const MOBILE   = window.innerWidth < 768;
    const COUNT    = MOBILE ? 22 : 55;
    const CONNECT  = MOBILE ? 100 : 135;
    const REPEL_R  = 130;
    const SPEED    = MOBILE ? 0.25 : 0.45;
    const DOT_CLR  = (a: number) => `rgba(96,165,250,${a})`;  // blue-400
    const LINE_CLR = (a: number) => `rgba(59,130,246,${a})`;  // blue-500

    let W = 0, H = 0, raf = 0;
    let mx = -999, my = -999;
    let particles: Particle[] = [];

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const spawn = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r:  Math.random() * 1.4 + 0.8,
        alpha: Math.random() * 0.45 + 0.25,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        // move
        p.x += p.vx;
        p.y += p.vy;
        // bounce
        if (p.x <= 0 || p.x >= W) { p.vx *= -1; p.x = Math.max(0, Math.min(W, p.x)); }
        if (p.y <= 0 || p.y >= H) { p.vy *= -1; p.y = Math.max(0, Math.min(H, p.y)); }
        // mouse repel
        const dx = p.x - mx, dy = p.y - my;
        const d  = Math.hypot(dx, dy);
        if (d < REPEL_R && d > 0) {
          const f = ((REPEL_R - d) / REPEL_R) * 2.8;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }
        // draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = DOT_CLR(p.alpha);
        ctx.fill();
      }

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < CONNECT) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = LINE_CLR((1 - d / CONNECT) * 0.35);
            ctx.lineWidth   = 0.7;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    const onResize = () => { resize(); spawn(); };
    const onMove   = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    };
    const onLeave  = () => { mx = -999; my = -999; };
    const onTouch  = (e: TouchEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.touches[0].clientX - r.left;
      my = e.touches[0].clientY - r.top;
    };

    resize(); spawn(); tick();
    window.addEventListener('resize', onResize);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('touchmove', onTouch, { passive: true });
    canvas.addEventListener('touchend', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// ─── Mobile stat card ─────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, value, label }: { icon: React.FC<{ size?: number; className?: string }>; value: string; label: string }) => (
  <div className="flex flex-col items-center gap-1.5 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm">
    <Icon size={16} className="text-blue-400" />
    <span className="text-lg font-bold text-white leading-none">{value}</span>
    <span className="text-[11px] text-white/55 text-center leading-tight">{label}</span>
  </div>
);

// ─── Main hero ────────────────────────────────────────────────────────────────
export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

    {/* Canvas — interactive on desktop, simplified on mobile */}
    <ParticleCanvas />

    {/* Blue atmospheric glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4  w-[500px] h-[500px] rounded-full bg-blue-600/18 blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full bg-blue-500/12 blur-[110px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>

    {/* ═══════════════════════════════════════════════════════════════
        DESKTOP / TABLET layout  (md+)
    ═══════════════════════════════════════════════════════════════ */}
    <div className="relative z-10 hidden md:flex flex-col items-center text-center container mx-auto px-6 pt-28 pb-16">

      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 border border-blue-300/20 rounded-full text-sm text-white/80 backdrop-blur-sm mb-8 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
        <span className="text-blue-400">✦</span>
        Especialistas en E-commerce — Tienda · Portal exclusivo · Agente IA
      </div>

      <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-white text-balance leading-[1.03] animate-fade-in-up opacity-0 [animation-delay:150ms] [animation-fill-mode:forwards]">
        Landing Pages que
      </h1>
      <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-balance leading-[1.03] bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards] mt-1 mb-8">
        venden de verdad.
      </h1>

      <p className="text-xl text-white/60 max-w-2xl text-balance animate-fade-in-up opacity-0 [animation-delay:450ms] [animation-fill-mode:forwards] mb-10">
        Construimos tiendas de alto rendimiento con tu propio portal de control
        y un agente de IA que trabaja por ti 24/7.
      </p>

      <div className="flex items-center gap-4 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] mb-14">
        <button
          onClick={() => scrollTo('pricing')}
          className="group flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
        >
          Ver planes y precios
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() => scrollTo('contact')}
          className="px-8 py-4 bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/35 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
        >
          Demo gratuita
        </button>
      </div>

      {/* Social proof */}
      <div className="flex flex-wrap justify-center gap-8 opacity-30 hover:opacity-60 transition-opacity duration-500 animate-fade-in-up opacity-0 [animation-delay:750ms] [animation-fill-mode:forwards]">
        {['Shopify', 'Meta Ads', 'Google Ads', 'Klaviyo', 'TikTok Ads'].map((t) => (
          <span key={t} className="text-xs font-bold text-white tracking-widest uppercase">{t}</span>
        ))}
      </div>
    </div>

    {/* ═══════════════════════════════════════════════════════════════
        MOBILE layout  (< md)
    ═══════════════════════════════════════════════════════════════ */}
    <div className="relative z-10 flex md:hidden flex-col items-center text-center w-full px-5 pt-28 pb-10 min-h-screen justify-between">

      {/* Top: heading block */}
      <div className="flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-500/10 border border-blue-300/20 rounded-full text-xs text-white/75 backdrop-blur-sm mb-6 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
          <span className="text-blue-400 text-[10px]">✦</span>
          E-commerce · Portal · Agente IA 24/7
        </div>

        <h1 className="text-[2.6rem] font-bold tracking-tighter text-white leading-[1.08] animate-fade-in-up opacity-0 [animation-delay:150ms] [animation-fill-mode:forwards]">
          Landing Pages que
        </h1>
        <h1 className="text-[2.6rem] font-bold tracking-tighter leading-[1.08] bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-up opacity-0 [animation-delay:280ms] [animation-fill-mode:forwards] mb-5">
          venden de verdad.
        </h1>

        <p className="text-base text-white/60 leading-relaxed animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] mb-8 max-w-xs">
          Tiendas de alto rendimiento con portal exclusivo y agente de IA 24/7.
        </p>

        {/* Stat chips — mobile exclusive */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-xs animate-fade-in-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] mb-8">
          <StatCard icon={TrendingUp} value="+38%"  label="conversión media" />
          <StatCard icon={Zap}        value="50+"   label="tiendas creadas"  />
          <StatCard icon={Shield}     value="24/7"  label="Agente IA"        />
        </div>
      </div>

      {/* Bottom: CTA block — anchored at the bottom */}
      <div className="flex flex-col gap-3 w-full animate-fade-in-up opacity-0 [animation-delay:650ms] [animation-fill-mode:forwards]">
        <button
          onClick={() => scrollTo('pricing')}
          className="group flex items-center justify-center gap-2 w-full py-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-2xl font-semibold text-base transition-all active:scale-95 shadow-lg shadow-blue-500/30"
        >
          Ver planes y precios
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() => scrollTo('contact')}
          className="w-full py-4 bg-white/8 active:bg-white/15 border border-white/15 text-white rounded-2xl font-semibold text-base transition-all active:scale-95 backdrop-blur-sm"
        >
          Solicita una demo gratuita
        </button>

        {/* Scroll hint */}
        <button
          onClick={() => scrollTo('services')}
          className="flex items-center justify-center gap-1 mt-2 text-white/35 text-xs hover:text-white/60 transition-colors"
        >
          <ChevronDown size={16} className="animate-bounce" />
          Explorar servicios
        </button>
      </div>
    </div>

  </section>
);

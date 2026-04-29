import { useState } from 'react';
import { TrendingUp, ArrowRight, RotateCcw } from 'lucide-react';

const fmt = (n: number) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

export const ROICalculator = () => {
  const [traffic, setTraffic]     = useState('');
  const [cr, setCr]               = useState('');
  const [aov, setAov]             = useState('');
  const [showResult, setShowResult] = useState(false);

  const visitors  = parseFloat(traffic) || 0;
  const crPct     = parseFloat(cr)      || 0;
  const ticket    = parseFloat(aov)     || 0;

  // Our average uplift from real cases (+38% CR)
  const UPLIFT = 1.38;

  const revenueNow  = visitors * (crPct / 100) * ticket;
  const revenueNew  = visitors * (crPct / 100) * UPLIFT * ticket;
  const extraMonth  = revenueNew - revenueNow;
  const extraYear   = extraMonth * 12;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (visitors > 0 && crPct > 0 && ticket > 0) setShowResult(true);
  };

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all';

  return (
    <section className="py-28 bg-primary/5 border-y border-primary/10">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">

          {/* ── Left copy ── */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <TrendingUp size={15} />
              Calculadora de Revenue
            </div>

            <h2 className="text-4xl font-bold tracking-tight mb-5">
              ¿Cuánto revenue estás dejando sobre la mesa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Introduce los datos de tu tienda y calcula cuánto podrías ganar con una landing de alta conversión.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Basado en nuestros casos reales (+38% CR de media)',
                'Cálculo con tu tráfico y ticket actual',
                'Proyección mensual y anual sin compromiso',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Mini stat strip */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '+38%', label: 'conversión media' },
                { value: '50+',  label: 'tiendas creadas'  },
                { value: '24/7', label: 'Agente IA activo' },
              ].map((s) => (
                <div key={s.label} className="bg-background rounded-2xl p-4 border border-border text-center">
                  <div className="text-xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: calculator card ── */}
          <div className="bg-background rounded-3xl shadow-lg border border-border p-8">
            {!showResult ? (
              <form onSubmit={handleCalculate} className="space-y-5">
                <div>
                  <label htmlFor="traffic" className="block text-sm font-medium text-foreground mb-1.5">
                    Visitas mensuales a tu tienda
                  </label>
                  <input
                    id="traffic"
                    type="number"
                    min="1"
                    placeholder="Ej: 5000"
                    value={traffic}
                    onChange={(e) => setTraffic(e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="cr" className="block text-sm font-medium text-foreground mb-1.5">
                    Tasa de conversión actual (%)
                  </label>
                  <input
                    id="cr"
                    type="number"
                    min="0.01"
                    step="0.01"
                    max="100"
                    placeholder="Ej: 1.2"
                    value={cr}
                    onChange={(e) => setCr(e.target.value)}
                    required
                    className={inputClass}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Media del sector e-commerce: 1–3 %. Si no la sabes, pon 1.5.
                  </p>
                </div>

                <div>
                  <label htmlFor="aov" className="block text-sm font-medium text-foreground mb-1.5">
                    Ticket medio por pedido (€)
                  </label>
                  <input
                    id="aov"
                    type="number"
                    min="1"
                    placeholder="Ej: 45"
                    value={aov}
                    onChange={(e) => setAov(e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
                >
                  Calcular mi revenue extra
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-center">Tu potencial sin explotar</h3>

                {/* Revenue comparison */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-secondary/40 rounded-2xl p-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wide">Ahora</p>
                    <p className="text-2xl font-bold text-foreground">{fmt(revenueNow)}</p>
                    <p className="text-xs text-muted-foreground mt-1">al mes</p>
                  </div>
                  <div className="bg-primary/8 border border-primary/20 rounded-2xl p-4 text-center">
                    <p className="text-xs text-primary mb-1 font-medium uppercase tracking-wide">Con Anubis AI</p>
                    <p className="text-2xl font-bold text-primary">{fmt(revenueNew)}</p>
                    <p className="text-xs text-muted-foreground mt-1">al mes</p>
                  </div>
                </div>

                {/* Main result */}
                <div className="bg-green-500/8 border border-green-500/20 rounded-2xl p-5 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Estás dejando sobre la mesa</p>
                  <p className="text-4xl font-bold text-green-600">{fmt(extraYear)}</p>
                  <p className="text-sm text-muted-foreground mt-1">al año · <span className="font-semibold text-foreground">{fmt(extraMonth)}/mes</span></p>
                </div>

                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  Cálculo basado en una mejora media del +38% en tasa de conversión, según nuestros casos reales. El resultado real depende del sector, producto y tráfico.
                </p>

                <button
                  onClick={scrollToContact}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
                >
                  Quiero recuperar ese dinero
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => setShowResult(false)}
                  className="flex items-center justify-center gap-1.5 w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RotateCcw size={13} />
                  Recalcular
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

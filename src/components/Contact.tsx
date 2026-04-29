import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mnjwaavr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[340px] text-center gap-4 py-12">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h4 className="text-xl font-bold">¡Mensaje enviado!</h4>
        <p className="text-muted-foreground max-w-xs">
          Te responderemos en menos de 24 h. Mientras tanto, reserva tu demo abajo.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-primary underline underline-offset-2 mt-2"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="sector" className="text-sm font-medium text-foreground">Sector / nicho</label>
        <input
          id="sector"
          name="sector"
          type="text"
          placeholder="Ej: moda, suplementos, electrónica…"
          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">¿Qué necesitas?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Cuéntanos tu proyecto: tienda actual, objetivos de conversión, presupuesto…"
          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 px-4 py-3 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Algo salió mal. Inténtalo de nuevo o escríbenos directamente.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
      >
        {status === 'sending' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar mensaje
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Sin spam. Te respondemos en menos de 24 h.
      </p>
    </form>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container px-6 mx-auto">

        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            ¿Listo para que tu tienda <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">convierta?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cuéntanos tu proyecto o reserva una demo. Primera consulta gratuita y sin compromiso.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Left: Contact form ── */}
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-10 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Escríbenos</h3>
                <p className="text-sm text-muted-foreground">Te respondemos en &lt;24 h</p>
              </div>
            </div>
            <ContactForm />
          </div>

          {/* ── Right: Calendly inline ── */}
          <div className="bg-secondary/30 rounded-3xl overflow-hidden border border-border/50">
            <div className="flex items-center gap-3 p-8 pb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Agenda tu demo gratuita</h3>
                <p className="text-sm text-muted-foreground">30 min · sin compromiso · online</p>
              </div>
            </div>

            {/* Calendly inline widget — script loaded in index.html */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/anubis-ai-agency/30min"
              style={{ minWidth: '320px', height: '660px' }}
            />
          </div>
        </div>

        {/* Contact strip */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="mailto:contacto@anubisaiagency.com"
            className="flex items-center gap-3 p-5 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-secondary/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email</p>
              <p className="text-sm font-semibold text-foreground">contacto@anubisaiagency.com</p>
            </div>
          </a>

          <a
            href="tel:+34602382912"
            className="flex items-center gap-3 p-5 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-secondary/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Teléfono</p>
              <p className="text-sm font-semibold text-foreground">+34 602 38 29 12</p>
            </div>
          </a>

          <div className="flex items-center gap-3 p-5 rounded-2xl border border-border/50 bg-secondary/10">
            <div className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Ubicación</p>
              <p className="text-sm font-semibold text-foreground">Málaga, España</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

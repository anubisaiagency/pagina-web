import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            ¿Listo para que tu tienda convierta?
          </h2>
          <p className="text-xl text-muted-foreground">
            Cuéntanos tu proyecto. Primera consulta gratuita y sin compromiso.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-secondary/30 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden">
          {/* Guarantee Badge */}
          <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-sm">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium">Demo gratuita incluida</span>
          </div>

          <h3 className="text-3xl font-bold mb-6">Agenda tu demo gratuita</h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            En 30 minutos te mostramos cómo quedaría tu landing, qué automatizaciones implementaríamos y cuánto podría aumentar tu conversión.
          </p>

          <button
            onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/anubisaiagency/30min' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-all mb-8 shadow-lg shadow-primary/20 hover:scale-105"
          >
            Reservar demo ahora
            <ArrowRight size={20} />
          </button>

          <p className="text-sm text-muted-foreground mb-12 max-w-md mx-auto">
            <strong className="text-foreground">Sin permanencia:</strong> Todos nuestros planes son mensuales. Si no ves resultados en 30 días, cancelas sin coste.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <a href="mailto:contacto@anubisaiagency.com" className="flex flex-col items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
            <a href="tel:+34694249575" className="flex flex-col items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <Phone size={20} />
              </div>
              <span className="text-sm font-medium">Llamar</span>
            </a>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground">
                <MapPin size={20} />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Málaga, ES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

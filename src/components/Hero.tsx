import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* 1 — Vídeo de fondo */}
      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2 — Overlay semitransparente encima del vídeo */}
      <div className="absolute inset-0 bg-background/78" />

      {/* 3 — Viñeta radial: oscurece bordes para fundir con el resto de la página */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,transparent,hsl(var(--background)))]" />

      {/* 4 — Contenido: último en el DOM = encima de todo */}
      <div className="relative container px-6 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/80 backdrop-blur-sm animate-fade-in opacity-0 [animation-fill-mode:forwards]">
            <span className="text-xs font-medium text-foreground">
              Especialistas en E-commerce — Tienda + Portal exclusivo + Agente IA
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            Landing Pages que
            <br />
            <span className="text-primary">venden de verdad.</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-foreground max-w-2xl mx-auto text-balance animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]" style={{ textShadow: '0 0 20px hsl(var(--background)), 0 0 40px hsl(var(--background))' }}>
            Construimos tiendas de alto rendimiento con tu propio portal de control y un agente de IA que trabaja por ti 24/7.
          </p>

          <div className="flex flex-col items-center gap-8 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="group px-8 py-4 bg-foreground text-background rounded-full text-lg font-medium hover:bg-foreground/90 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                Ver planes y precios
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-full text-lg font-medium hover:bg-secondary transition-all hover:scale-105 active:scale-95"
              >
                Solicita una demo gratuita
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="flex flex-wrap justify-center gap-8 opacity-80 hover:opacity-100 transition-all duration-500">
              {['Shopify', 'Meta Ads', 'Google Ads', 'Klaviyo', 'TikTok Ads'].map((tool) => (
                <span key={tool} className="text-lg font-bold text-foreground/60">{tool}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

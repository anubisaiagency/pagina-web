import { Search, Paintbrush, Link, TrendingUp } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Estrategia & Análisis',
      description: 'Estudiamos tu nicho, competencia y buyer persona. Definimos la oferta, el mensaje y la estructura de conversión antes de escribir una sola línea de código.',
    },
    {
      icon: Paintbrush,
      number: '02',
      title: 'Diseño & Desarrollo Shopify',
      description: 'Construimos tu landing page en Shopify optimizada para velocidad y conversión: copy persuasivo, UX testada y checkout sin fricciones.',
    },
    {
      icon: Link,
      number: '03',
      title: 'Portal de control & Agente IA',
      description: 'Activamos tu panel exclusivo con el CRM, las automatizaciones de email/SMS y el agente de IA entrenado con tu marca para atender y convertir 24/7.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Optimización Continua',
      description: 'Monitorizamos métricas clave, ejecutamos tests A/B y ajustamos el funnel cada mes para que tu conversión mejore de forma constante.',
    },
  ];

  return (
    <section id="process" className="py-32 bg-background overflow-hidden relative">
      <div className="container px-6 mx-auto relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            El Protocolo Anubis.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            4 fases para lanzar una tienda que convierte desde el día 1.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Mascot & Orbiting Symbols */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Central Mascot */}
            <div className="relative z-20 w-64 h-64 md:w-80 md:h-80 animate-float">
              <img
                src="/anubis.png"
                alt="Anubis Mascot"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              />
            </div>

            {/* Orbiting Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="w-[300px] h-[300px] border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Orbiting Icons */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-background p-3 rounded-full border border-primary/30 shadow-lg shadow-primary/20">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-background p-3 rounded-full border border-primary/30 shadow-lg shadow-primary/20">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 bg-background p-3 rounded-full border border-primary/30 shadow-lg shadow-primary/20">
                <Paintbrush className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 bg-background p-3 rounded-full border border-primary/30 shadow-lg shadow-primary/20">
                <Link className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Luminous Connection to Right Column */}
            <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-primary translate-x-1/2 z-0" />
          </div>

          {/* Right Column: Steps */}
          <div className="space-y-12 relative">
            {/* Vertical Luminous Thread */}
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 hidden md:block" />

            {steps.map((step, index) => {
              return (
                <div key={index} className="relative pl-20 group">
                  {/* Connector Node */}
                  <div className="absolute left-[27px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 hidden md:block shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                  <div className="text-sm font-bold text-primary mb-2 tracking-wider uppercase">
                    Fase {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

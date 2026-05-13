import { Check, ArrowRight, Star } from 'lucide-react';

const juniorFeatures = [
  'Tienda Shopify optimizada para conversión',
  'Sub-cuenta Anubis con tu marca (acceso, dashboard y métricas)',
  'Agente IA conversacional 24/7 (chat web + email)',
  'Generador de copy IA (descripciones, FAQs, anuncios)',
  'Recuperación de carrito por email',
  'Soporte por email',
];

const growthFeatures = [
  'Todo lo del Junior, más:',
  'Agente IA con WhatsApp y SMS',
  'Recuperación de carrito multi-canal (email + SMS + WhatsApp)',
  'Automatizaciones post-compra y upsells',
  'A/B testing de landings',
  'Dashboard de métricas completo',
  'Soporte prioritario',
];

const FoundingCard = ({
  title,
  setup,
  price,
  priceOld,
  features,
  ctaHref,
}: {
  title: string;
  setup: string;
  price: string;
  priceOld: string;
  features: string[];
  ctaHref: string;
}) => (
  <div className="relative rounded-3xl p-8 flex flex-col bg-amber-500/5 border-2 border-amber-400/40 shadow-lg shadow-amber-500/10 h-full">
    <div className="mb-5">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground mb-4">{setup}</p>
      <div className="flex items-end gap-2 mb-1">
        <span className="text-4xl font-bold text-amber-600 dark:text-amber-400">{price}</span>
        <span className="text-muted-foreground text-sm mb-1">/mes</span>
        <span className="text-sm text-muted-foreground line-through ml-1">{priceOld}/mes</span>
      </div>
      <p className="text-xs text-muted-foreground">Durante 12 meses, después pasa a tarifa regular</p>
    </div>

    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check size={16} className="shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
          {f}
        </li>
      ))}
    </ul>

    <a
      href={ctaHref}
      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-medium text-sm bg-amber-500 hover:bg-amber-600 text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/25"
    >
      Reservar mi plaza
      <ArrowRight size={16} />
    </a>
  </div>
);

export const FoundingMembers = () => (
  <section id="founding" className="py-32 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

    <div className="container px-6 mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-400/30 rounded-full text-sm font-semibold text-amber-700 dark:text-amber-400 mb-6">
          <Star size={14} className="fill-current" />
          2 plazas disponibles
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Founding <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Members</span>
        </h2>
        <p className="text-xl text-muted-foreground text-balance">
          Los dos primeros clientes que firmen entran con tarifa especial durante 12 meses a cambio de testimoniales y feedback. Cuando se cubran las plazas, esta sección desaparece de la web.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
        <FoundingCard
          title="Plan Junior — Tarifa Founding"
          setup="200€ setup por tienda · 1 tienda nueva al mes"
          price="67€"
          priceOld="97€"
          features={juniorFeatures}
          ctaHref="#contact"
        />
        <FoundingCard
          title="Plan Growth — Tarifa Founding"
          setup="200€ setup por tienda · 3 tiendas nuevas al mes"
          price="197€"
          priceOld="297€"
          features={growthFeatures}
          ctaHref="#contact"
        />
      </div>

      <div className="max-w-4xl mx-auto bg-amber-500/5 border border-amber-400/25 rounded-2xl p-6 md:p-8">
        <p className="font-semibold text-foreground mb-4">Qué pedimos a cambio de la tarifa Founding:</p>
        <ul className="space-y-3">
          {[
            'Testimonial en vídeo de 60 segundos al cumplir 3 meses',
            'Permiso para usar tu logo y resultados como caso de estudio',
            'Una llamada de 30 minutos al mes durante los primeros 6 meses para que nos digas qué mejorar',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check size={16} className="shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
  </section>
);

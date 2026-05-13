import { Check, ArrowRight, Store } from 'lucide-react';

interface Plan {
  name: string;
  setup: string;
  stores: string;
  priceNow?: string;
  priceCustom?: string;
  period?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  enterprise?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Junior',
    setup: '200€ setup por tienda',
    stores: '1 tienda nueva al mes',
    priceNow: '97€',
    period: '/mes',
    features: [
      'Tienda Shopify optimizada para conversión',
      'Sub-cuenta Anubis con tu marca (acceso, dashboard y métricas)',
      'Agente IA conversacional 24/7 (chat web + email)',
      'Generador de copy IA (descripciones, FAQs, anuncios)',
      'Recuperación de carrito por email',
      'Soporte por email',
    ],
    cta: 'Empezar ahora',
    ctaHref: '#contact',
  },
  {
    name: 'Growth',
    setup: '200€ setup por tienda',
    stores: '3 tiendas nuevas al mes',
    priceNow: '297€',
    period: '/mes',
    features: [
      'Todo lo del Junior, más:',
      'Agente IA con WhatsApp y SMS',
      'Recuperación de carrito multi-canal (email + SMS + WhatsApp)',
      'Automatizaciones post-compra y upsells',
      'A/B testing de landings',
      'Dashboard de métricas completo',
      'Soporte prioritario',
    ],
    cta: 'Empezar ahora',
    ctaHref: '#contact',
    featured: true,
    badge: 'Best Seller',
  },
  {
    name: 'Scale',
    setup: '200€ setup por tienda',
    stores: '8 tiendas nuevas al mes',
    priceNow: '597€',
    period: '/mes',
    features: [
      'Todo lo del Growth, más:',
      'Agente IA avanzado con pipelines de ventas',
      'Integración Meta Ads y Google Ads',
      'Reportes personalizados',
      'Soporte dedicado por WhatsApp',
    ],
    cta: 'Empezar ahora',
    ctaHref: '#contact',
  },
  {
    name: 'Enterprise',
    setup: 'Para marcas escalando a +100k/mes',
    stores: 'Volumen personalizado',
    priceCustom: 'Custom Quote',
    features: [
      'Infraestructura Shopify Plus',
      'Portal white-label con tu marca',
      'Equipo dedicado de ingeniería',
      'Integraciones ERP / 3PL',
      'SLA garantizado 99.9%',
      'Account Manager exclusivo',
    ],
    cta: 'Contactar',
    ctaHref: '#contact',
    enterprise: true,
  },
];

export const Pricing = () => (
  <section id="pricing" className="py-32 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container px-6 mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Planes y <span className="text-primary">precios.</span>
        </h2>
        <p className="text-xl text-muted-foreground text-balance">
          Elige el plan que se adapta a la etapa de tu negocio. Sin permanencia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
              plan.featured
                ? 'bg-primary/5 border-2 border-primary shadow-xl shadow-primary/10'
                : plan.enterprise
                ? 'bg-secondary/20 border border-border/50'
                : 'bg-secondary/20 border border-border/50 hover:border-primary/20'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="mb-5">
              <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{plan.setup}</p>

              {plan.priceCustom ? (
                <div className="text-3xl font-bold text-foreground">{plan.priceCustom}</div>
              ) : (
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold ${plan.featured ? 'text-primary' : 'text-foreground'}`}>
                    {plan.priceNow}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm mb-1">{plan.period}</span>
                  )}
                </div>
              )}
            </div>

            <div className={`flex items-center gap-2 px-3 py-2.5 rounded-xl mb-6 ${
              plan.featured ? 'bg-primary/10' : 'bg-foreground/5'
            }`}>
              <Store
                size={15}
                className={`shrink-0 ${plan.featured ? 'text-primary' : 'text-foreground/60'}`}
              />
              <span className={`text-sm font-semibold ${plan.featured ? 'text-primary' : 'text-foreground'}`}>
                {plan.stores}
              </span>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check
                    size={16}
                    className={`shrink-0 mt-0.5 ${plan.featured ? 'text-primary' : 'text-foreground'}`}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={plan.ctaHref}
              className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
                plan.featured
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25'
                  : plan.enterprise
                  ? 'border border-border text-foreground hover:border-primary/30 hover:text-primary'
                  : 'bg-foreground text-background hover:bg-foreground/90'
              }`}
            >
              {plan.cta}
              <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

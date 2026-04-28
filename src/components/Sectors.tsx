import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const cases = [
  {
    emoji: '👕',
    client: 'Moda & Streetwear',
    sector: 'Fashion',
    result: 'Conversión +42%',
    description: 'Landing pages con lookbooks dinámicos y social proof en tiempo real que disparan la urgencia de compra.',
    details: {
      challenge: 'Las tiendas de moda tienen altísima competencia en paid media. Sin una landing específica por colección, el tráfico de ads rebotaba al 78%.',
      solution: 'Desarrollamos landings por colección con vídeo hero, contador de stock en vivo, galería de UGC y upsell inteligente integrado en Shopify, con automatizaciones de seguimiento post-compra activadas desde el portal.',
      results: [
        'Tasa de rebote reducida del 78% al 34%.',
        'Conversión de ads x2.3 respecto a la home genérica.',
        'LTV mejorado un 28% gracias a automatizaciones de retención post-compra.',
      ],
    },
  },
  {
    emoji: '💊',
    client: 'Suplementos & Salud',
    sector: 'Health',
    result: 'ROAS 4.8x',
    description: 'Funnels de venta con storytelling científico, testimonios verificados y suscripciones recurrentes.',
    details: {
      challenge: 'La categoría de suplementos tiene restricciones publicitarias severas. El copy genérico no convertía y el ROAS se quedaba en 1.9x.',
      solution: 'Creamos funnels con landing educativa (el problema) → landing producto (la solución) → upsell pack → suscripción. Toda la secuencia automatizada para nutrir clientes indecisos hasta la compra.',
      results: [
        'ROAS de Meta Ads pasó de 1.9x a 4.8x.',
        'Suscripciones recurrentes suponen el 35% del revenue.',
        'Reducción de devoluciones gracias al onboarding de IA.',
      ],
    },
  },
  {
    emoji: '✨',
    client: 'Belleza & Cosmética',
    sector: 'Beauty',
    result: 'AOV +61€',
    description: 'Experiencias de compra inmersivas con quiz de skin type y bundles personalizados por IA.',
    details: {
      challenge: 'El ticket medio era bajo (22€) y los clientes no repetían compra. Sin personalización, las recomendaciones de producto eran irrelevantes.',
      solution: 'Quiz interactivo de skin type → producto recomendado por IA → bundle personalizado → secuencia de retención automática a los 21 y 45 días post-compra.',
      results: [
        'AOV (ticket medio) aumentó de 22€ a 83€.',
        'Tasa de repetición de compra del 52% a los 60 días.',
        'Chatbot resuelve el 80% de consultas sin intervención.',
      ],
    },
  },
  {
    emoji: '📱',
    client: 'Electrónica & Tech',
    sector: 'Tech',
    result: 'CR 3.8%',
    description: 'Comparativas técnicas dinámicas, garantías destacadas y checkout ultrarrápido que eliminan fricciones.',
    details: {
      challenge: 'Los compradores de electrónica investigan mucho antes de comprar. Las landings genéricas no respondían las objeciones técnicas ni generaban confianza suficiente.',
      solution: 'Landing con tabla de especificaciones técnicas, sección de preguntas frecuentes respondidas por IA, badge de garantía oficial y widget de chat para dudas de última hora.',
      results: [
        'Conversion rate del 3.8% (sector media: 1.4%).',
        'Tiempo en página +3.2 minutos por usuario.',
        'Soporte vía chatbot reduce tickets en un 67%.',
      ],
    },
  },
  {
    emoji: '🐾',
    client: 'Mascotas',
    sector: 'Pets',
    result: 'Suscripciones x3',
    description: 'Landings emocionales con UGC de mascotas reales que conectan y convierten a suscripción recurrente.',
    details: {
      challenge: 'El nicho de mascotas tiene mucha oferta. El diferencial no era el precio sino la conexión emocional, pero las tiendas no la transmitían.',
      solution: 'Landing con galería de fotos de clientes reales y sus mascotas, testimonios en vídeo, producto personalizable por raza/tamaño y CTA a suscripción mensual con descuento.',
      results: [
        'Suscripciones mensuales triplicadas en 60 días.',
        'CTR de email sequence del 38% (media del sector: 14%).',
        'NPS de 72 gracias a onboarding automático de IA.',
      ],
    },
  },
  {
    emoji: '🏠',
    client: 'Hogar & Decoración',
    sector: 'Home',
    result: 'Rebote -44%',
    description: 'Visualización 3D de productos en entorno real, cross-sells inteligentes y financiación integrada.',
    details: {
      challenge: 'El hogar requiere que el cliente imagine el producto en su casa. Sin esa visualización, la incertidumbre disparaba la tasa de rebote y las devoluciones.',
      solution: 'Landing con galería lifestyle de alta calidad, filtros por estilo de decoración, sección de "combina con" (cross-sell automático Shopify) y opción de pago aplazado en checkout.',
      results: [
        'Tasa de rebote reducida del 71% al 27%.',
        'Devoluciones bajaron un 44% por expectativas alineadas.',
        'Cross-sell automático suma 34€ extra por pedido.',
      ],
    },
  },
];

export const Sectors = () => {
  return (
    <section id="sectors" className="py-32 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Nichos en los que trabajamos.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencia real en los verticales de e-commerce que más venden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Dialog key={index}>
              <div className="bg-background p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-primary/10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{item.emoji}</div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded-full">
                    {item.sector}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1">{item.client}</h3>
                <p className="text-primary font-medium text-sm mb-4">{item.result}</p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                <DialogTrigger asChild>
                  <div className="pt-6 border-t border-border flex items-center text-sm font-medium text-primary cursor-pointer group-hover:gap-2 transition-all mt-auto">
                    Ver caso <ArrowRight size={16} className="ml-1" />
                  </div>
                </DialogTrigger>
              </div>

              <DialogContent className="sm:max-w-[600px] rounded-3xl p-0 overflow-hidden">
                <div className="bg-primary/5 p-8 border-b border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{item.emoji}</div>
                    <div>
                      <DialogTitle className="text-2xl font-bold">{item.client}</DialogTitle>
                      <DialogDescription className="text-base font-medium text-primary">
                        {item.result}
                      </DialogDescription>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">El Desafío</h4>
                    <p className="text-foreground leading-relaxed">{item.details.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">La Solución Anubis</h4>
                    <p className="text-foreground leading-relaxed">{item.details.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Resultados Clave</h4>
                    <ul className="space-y-2">
                      {item.details.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full rounded-full" size="lg" asChild>
                      <a href="#contact">Quiero resultados similares</a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

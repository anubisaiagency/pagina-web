import { ShoppingBag, LayoutDashboard, Bot } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [0, 1, 2].forEach((index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: ShoppingBag,
      title: 'Landing Pages de alta conversión',
      description: 'Diseñamos y desarrollamos la página de tu producto optimizada para convertir. Velocidad extrema, copy persuasivo y un checkout sin fricciones que guía al cliente hasta la compra.',
    },
    {
      icon: LayoutDashboard,
      title: 'Tu portal de control exclusivo',
      description: 'Tendrás acceso a un panel privado donde puedes ver en tiempo real tus ventas, tus leads, el estado de tus campañas y controlar tu agente de IA — todo desde un solo lugar.',
    },
    {
      icon: Bot,
      title: 'Agente de IA 24/7',
      description: 'Un agente entrenado con tu catálogo y tu marca que responde dudas, recupera carritos abandonados y cierra ventas de forma autónoma, sin que tú tengas que mover un dedo.',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-background">
      <div className="container px-6 mx-auto">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Lo que construimos.
          </h2>
          <p className="text-xl text-muted-foreground">
            Tres pilares para que tu tienda convierta, retenga y escale sin depender de ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

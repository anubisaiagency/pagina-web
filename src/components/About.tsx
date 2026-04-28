import { Award, Users, TrendingUp } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Tiendas lanzadas' },
    { icon: Users, value: '30+', label: 'Clientes activos' },
    { icon: TrendingUp, value: '+38%', label: 'Conversión media' },
  ];

  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Quiénes somos
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance mb-12">
            Somos ingenieros web especializados en construir tiendas que convierten.
            No hacemos webs bonitas — hacemos máquinas de venta.
          </p>
        </div>

        {/* Founder Card */}
        <div className="max-w-3xl mx-auto bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border mb-20">
          <div className="text-left">
              <h3 className="text-2xl font-bold mb-1">Aissa Omar</h3>
              <p className="text-primary font-medium text-sm mb-4">Desarrollador Web & CEO</p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Ingeniero especializado en desarrollo web de alto rendimiento y sistemas de ventas digitales para e-commerce y dropshipping. Su obsesión es una sola métrica: la tasa de conversión.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada proyecto incluye la tienda, un <strong className="text-foreground">portal de control exclusivo</strong> para el cliente y <strong className="text-foreground">agentes de IA</strong> que automatizan la captación, la retención y el soporte — todo desde un único panel.
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="text-center p-8 bg-background rounded-3xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

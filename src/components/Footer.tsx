import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: 'Servicios', href: '#services' },
      { label: 'Precios', href: '#pricing' },
      { label: 'Sectores', href: '#sectors' },
      { label: 'Proceso', href: '#process' },
      { label: 'Contacto', href: '#contact' },
    ],
    legal: [
      { label: 'Términos', href: 'https://anubisaiagency.com/terminos' },
      { label: 'Privacidad', href: 'https://anubisaiagency.com/privacidad' },
      { label: 'Cookies', href: 'https://anubisaiagency.com/cookies' },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-6 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-semibold tracking-tight">Anubis AI</span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Tu tienda, tu portal de control
              <br />
              y tu agente de IA — todo en uno.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Compañía</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener" className="hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contacto@anubisaiagency.com" className="hover:text-foreground transition-colors">
                  contacto@anubisaiagency.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+34694249575" className="hover:text-foreground transition-colors">
                  +34 694 249 575
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Málaga, ES</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Anubis AI Agency. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Cookies = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-6 py-32 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
      <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground leading-relaxed">
        <p>Última actualización: abril 2025</p>
        <h2 className="text-xl font-semibold text-foreground">1. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo para recordar información sobre tu visita y mejorar tu experiencia de navegación.</p>
        <h2 className="text-xl font-semibold text-foreground">2. Cookies que utilizamos</h2>
        <p><strong className="text-foreground">Cookies técnicas (necesarias):</strong> Imprescindibles para el funcionamiento básico del sitio. No requieren consentimiento.</p>
        <p><strong className="text-foreground">Cookies analíticas:</strong> Nos permiten conocer cómo los usuarios interactúan con el sitio (páginas visitadas, tiempo de permanencia). Utilizamos datos agregados y anonimizados.</p>
        <h2 className="text-xl font-semibold text-foreground">3. Cookies de terceros</h2>
        <p>Este sitio puede utilizar servicios de terceros (como Calendly) que instalan sus propias cookies. Consulta las políticas de privacidad de dichos servicios para más información.</p>
        <h2 className="text-xl font-semibold text-foreground">4. Cómo gestionar las cookies</h2>
        <p>Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento. Ten en cuenta que deshabilitar cookies puede afectar al funcionamiento de algunas funciones del sitio.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
          <li>Firefox: Opciones → Privacidad y seguridad</li>
          <li>Safari: Preferencias → Privacidad</li>
        </ul>
        <h2 className="text-xl font-semibold text-foreground">5. Contacto</h2>
        <p>Para cualquier consulta sobre nuestra política de cookies, escríbenos a <a href="mailto:contacto@anubisaiagency.com" className="text-primary hover:underline">contacto@anubisaiagency.com</a>.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Cookies;

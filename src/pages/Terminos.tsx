import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Terminos = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-6 py-32 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Términos y Condiciones</h1>
      <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground leading-relaxed">
        <p>Última actualización: abril 2025</p>
        <h2 className="text-xl font-semibold text-foreground">1. Aceptación de los términos</h2>
        <p>Al acceder y utilizar los servicios de Anubis AI Agency, aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte, no debes utilizar nuestros servicios.</p>
        <h2 className="text-xl font-semibold text-foreground">2. Descripción del servicio</h2>
        <p>Anubis AI Agency ofrece servicios de desarrollo web, landing pages para e-commerce, integración de sistemas de automatización y agentes de inteligencia artificial para negocios digitales.</p>
        <h2 className="text-xl font-semibold text-foreground">3. Propiedad intelectual</h2>
        <p>Todo el contenido, código y materiales desarrollados por Anubis AI Agency para el cliente pasan a ser propiedad del cliente una vez completado el pago íntegro del servicio contratado.</p>
        <h2 className="text-xl font-semibold text-foreground">4. Limitación de responsabilidad</h2>
        <p>Anubis AI Agency no será responsable de pérdidas indirectas, incidentales o consecuentes derivadas del uso o la imposibilidad de uso de nuestros servicios.</p>
        <h2 className="text-xl font-semibold text-foreground">5. Modificaciones</h2>
        <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entran en vigor en el momento de su publicación.</p>
        <h2 className="text-xl font-semibold text-foreground">6. Contacto</h2>
        <p>Para cualquier consulta sobre estos términos, contacta con nosotros en <a href="mailto:contacto@anubisaiagency.com" className="text-primary hover:underline">contacto@anubisaiagency.com</a>.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terminos;

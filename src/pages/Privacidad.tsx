import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Privacidad = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-6 py-32 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
      <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground leading-relaxed">
        <p>Última actualización: abril 2025</p>
        <h2 className="text-xl font-semibold text-foreground">1. Responsable del tratamiento</h2>
        <p>Anubis AI Agency, con domicilio en Málaga, España. Contacto: <a href="mailto:contacto@anubisaiagency.com" className="text-primary hover:underline">contacto@anubisaiagency.com</a></p>
        <h2 className="text-xl font-semibold text-foreground">2. Datos que recopilamos</h2>
        <p>Recopilamos únicamente los datos que nos proporcionas voluntariamente a través del formulario de contacto: nombre, email y mensaje. No recopilamos datos de pago ni información sensible.</p>
        <h2 className="text-xl font-semibold text-foreground">3. Finalidad del tratamiento</h2>
        <p>Los datos recogidos se utilizan exclusivamente para responder a tus consultas y gestionar la relación comercial contigo. No los utilizamos para ninguna otra finalidad sin tu consentimiento expreso.</p>
        <h2 className="text-xl font-semibold text-foreground">4. Base legal</h2>
        <p>El tratamiento de tus datos se basa en tu consentimiento (Art. 6.1.a RGPD) o en la ejecución de un contrato (Art. 6.1.b RGPD).</p>
        <h2 className="text-xl font-semibold text-foreground">5. Conservación de datos</h2>
        <p>Conservamos tus datos durante el tiempo necesario para la prestación del servicio y, posteriormente, durante los plazos legalmente exigidos.</p>
        <h2 className="text-xl font-semibold text-foreground">6. Tus derechos</h2>
        <p>Tienes derecho a acceder, rectificar, suprimir, oponerte y portar tus datos. Puedes ejercerlos escribiendo a <a href="mailto:contacto@anubisaiagency.com" className="text-primary hover:underline">contacto@anubisaiagency.com</a>.</p>
        <h2 className="text-xl font-semibold text-foreground">7. Cesión a terceros</h2>
        <p>No cedemos tus datos a terceros salvo obligación legal. Podemos utilizar proveedores de servicios (hosting, email) que actúan como encargados del tratamiento bajo acuerdo de confidencialidad.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacidad;

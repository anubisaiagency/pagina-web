import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { FoundingMembers } from '@/components/FoundingMembers';
import { Sectors } from '@/components/Sectors';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ROICalculator } from '@/components/ROICalculator';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FoundingMembers />
        <Pricing />
        <Sectors />
        <ROICalculator />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

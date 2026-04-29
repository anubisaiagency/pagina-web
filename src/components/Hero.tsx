import EtherealBeamsHero from '@/components/ui/ethereal-beams-hero';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export const Hero = () => (
  <EtherealBeamsHero
    onPrimary={() => scrollTo('pricing')}
    onSecondary={() => scrollTo('contact')}
  />
);

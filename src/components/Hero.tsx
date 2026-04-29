import { HeroOdyssey } from '@/components/ui/hero-odyssey';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export const Hero = () => (
  <HeroOdyssey
    onPrimary={() => scrollTo('pricing')}
    onSecondary={() => scrollTo('contact')}
  />
);

import React from 'react';
import { FluidNav } from '../components/landingpage/FluidNav';
import { Hero } from '../components/landingpage/Hero';
import { BentoGrid } from '../components/landingpage/BentoGrid';
import { ScrollRevealStagger } from '../components/landingpage/ScrollRevealStagger';
import { Footer } from '../components/landingpage/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <FluidNav />
      <main>
        <Hero />
        <BentoGrid />
        <ScrollRevealStagger />
      </main>
      <Footer />
    </div>
  );
}

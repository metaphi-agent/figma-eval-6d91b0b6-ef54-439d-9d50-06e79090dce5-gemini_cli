import React from 'react';
import { Header } from '../components/blocks/Header';
import { Hero } from '../components/blocks/Hero';
import { Logos } from '../components/blocks/Logos';
import { Features } from '../components/blocks/Features';
import { Benefits } from '../components/blocks/Benefits';
import { Pricing } from '../components/blocks/Pricing';
import { Footer } from '../components/blocks/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden relative font-sans">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};
import React, { Suspense } from 'react';
import Navbar from './components/blocks/Navbar';
import Hero from './components/blocks/Hero';
import Companies from './components/blocks/Companies';
import Features from './components/blocks/Features';
import Benefits from './components/blocks/Benefits';
import Pricing from './components/blocks/Pricing';
import Footer from './components/blocks/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <Features />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import UrgencyBar from './components/UrgencyBar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Repertoire from './components/Repertoire';
import Bonuses from './components/Bonuses';
import Results from './components/Results';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-brand-dark text-brand-text font-sans antialiased selection:bg-brand-green selection:text-white">
      <UrgencyBar />
      <Hero />
      <SocialProof />
      <Comparison />
      <HowItWorks />
      <Features />
      <Repertoire />
      <Bonuses />
      <Results />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
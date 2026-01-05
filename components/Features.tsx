import React from 'react';
import { FEATURES } from '../constants';
import Button from './Button';

const Features: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tudo o que você precisa para <span className="text-brand-green">começar do zero</span>
          </h2>
          <p className="text-brand-subtext max-w-2xl mx-auto">
            Esqueça métodos complicados. Aqui focamos na prática e no resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-brand-green/50 transition-colors group">
              <div className="mb-6 bg-brand-dark w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-brand-green group-hover:text-white transition-colors text-brand-green">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-brand-subtext leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={scrollToPricing} className="px-12">
            QUERO ACESSAR O CONTEÚDO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
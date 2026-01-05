import React from 'react';
import { BONUSES } from '../constants';
import { Gift } from 'lucide-react';
import Button from './Button';

const Bonuses: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-brand-green text-white mb-6 shadow-lg shadow-brand-green/20">
             <Gift size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bônus Exclusivos Para Hoje
          </h2>
          <p className="text-brand-subtext">
            Entrando agora, você leva todos esses presentes sem custo adicional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BONUSES.map((bonus, index) => (
            <div key={index} className="bg-brand-card rounded-2xl overflow-hidden border border-white/10 flex flex-col hover:border-brand-green/30 transition-colors">
              <div className="h-2 bg-brand-green"></div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-brand-green font-bold tracking-widest text-xs uppercase mb-2">
                  Bônus #{index + 1}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{bonus.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">{bonus.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-500 line-through text-sm">Valor: R$ {bonus.oldPrice},00</p>
                  <p className="text-brand-green font-bold text-lg">GRÁTIS</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
            <Button onClick={scrollToPricing} pulse>
                QUERO TOCAR VIOLÃO
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
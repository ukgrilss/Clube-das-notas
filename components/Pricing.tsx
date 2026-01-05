import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Check, AlertTriangle } from 'lucide-react';

const Pricing: React.FC = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    // Define a data de hoje para a urgência
    const today = new Date();
    setDate(today.toLocaleDateString('pt-BR'));
  }, []);

  return (
    <section id="offer" className="py-24 bg-brand-dark relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent pointer-events-none"></div>
        
      <div className="container mx-auto px-4 relative z-10">
        
        {/* CABEÇALHO DA OFERTA */}
        <div className="flex flex-col items-center justify-center mb-10 text-center">
            <div className="inline-flex items-center gap-2 bg-[#b91c1c] border border-red-500/30 text-white px-6 py-2.5 rounded-full font-bold uppercase text-xs md:text-sm tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] mb-6 animate-pulse">
                <AlertTriangle size={18} className="text-yellow-400 fill-yellow-400 text-opacity-100" />
                <span>Oferta por tempo limitado até {date}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                Tudo isso custa menos que <br className="hidden md:block" />
                <span className="text-brand-green">uma pizza de final de semana</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Uma única aula presencial custa em média <strong>R$ 80,00</strong>. Aqui você leva o curso completo + 1000 cifras + bônus vitalícios por uma fração desse valor.
            </p>
        </div>

        <div className="max-w-md mx-auto bg-brand-card rounded-3xl border-2 border-brand-green/50 shadow-2xl shadow-brand-green/20 overflow-hidden transform hover:scale-105 transition-transform duration-300">
          
          <div className="bg-brand-green p-4 text-center">
            <h3 className="text-brand-dark font-extrabold uppercase tracking-wider text-sm">Oferta Especial Hoje</h3>
          </div>

          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Clube das Notas</h2>
            <p className="text-gray-400 text-sm mb-6">Acesso Vitalício Completo</p>

            <div className="flex items-center justify-center gap-2 mb-2 text-gray-500 line-through">
                <span>De R$ 197,00</span>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">R$ 29,90</span>
              <p className="text-brand-green font-bold text-sm mt-2">Pagamento único (sem mensalidade)</p>
            </div>

            <Button 
                fullWidth 
                pulse 
                className="mb-6"
                onClick={() => window.open('https://pay.lowify.com.br/checkout?product_id=9tY8wb', '_blank')}
            >
              SIM! QUERO TOCAR AGORA
            </Button>

            <div className="space-y-4 text-left">
              {[
                "Curso prático do zero",
                "Acervo com +1000 Músicas",
                "Acesso vitalício ao portal",
                "Certificado de conclusão",
                "Garantia de 7 dias",
                "3 Bônus Exclusivos inclusos"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded-full">
                    <Check size={14} className="text-brand-green" />
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 p-4 text-center">
             <img src="https://picsum.photos/seed/cards/200/30" alt="Métodos de Pagamento" className="mx-auto opacity-50 grayscale h-6 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-brand-card border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0">
             <ShieldCheck size={120} className="text-brand-green" strokeWidth={1} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Risco Zero: 7 Dias de Garantia
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Você entra, assiste às aulas, testa o método e se por QUALQUER motivo achar que não é para você, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas.
            </p>
            <p className="text-brand-green font-bold">
              Seu investimento está 100% seguro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
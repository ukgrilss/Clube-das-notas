import React from 'react';
import { PlayCircle, Music2, PartyPopper } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-brand-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como funciona na prática?
          </h2>
          <p className="text-brand-subtext max-w-2xl mx-auto text-lg">
            Você não precisa de horas de estudo. O método é resumido em 3 passos simples:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Passo 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-dark/50 border border-white/5 relative">
            <div className="absolute -top-6 bg-brand-green text-brand-dark font-black text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20">
              1
            </div>
            <div className="mt-8 mb-4 text-brand-green">
              <PlayCircle size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Assista a Aula Rápida</h3>
            <p className="text-gray-400">
              Vídeos curtos e direto ao ponto mostrando exatamente onde colocar cada dedo. Sem teoria chata.
            </p>
          </div>

          {/* Passo 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-dark/50 border border-white/5 relative">
            <div className="absolute -top-6 bg-brand-green text-brand-dark font-black text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20">
              2
            </div>
            <div className="mt-8 mb-4 text-brand-green">
              <Music2 size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Siga a Cifra Simplificada</h3>
            <p className="text-gray-400">
              Escolha uma das +1000 músicas do acervo. Tudo desenhado para você não ter dúvida.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-dark/50 border border-white/5 relative">
             <div className="absolute -top-6 bg-brand-green text-brand-dark font-black text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20">
              3
            </div>
            <div className="mt-8 mb-4 text-brand-green">
              <PartyPopper size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Toque e Divirta-se</h3>
            <p className="text-gray-400">
              É só replicar o que viu. Em poucos minutos você estará tocando o som que sempre quis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
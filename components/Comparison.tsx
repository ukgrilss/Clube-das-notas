import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que o <span className="text-brand-green">Clube das Notas</span> é diferente?
          </h2>
          <p className="text-brand-subtext max-w-2xl mx-auto">
            Veja a diferença entre tentar aprender sozinho ou em escolas tradicionais versus o nosso método.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Lado Ruim */}
          <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <XCircle /> Métodos Tradicionais
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <XCircle size={20} className="text-red-500 shrink-0 mt-1" />
                <span>Mensalidades caras (R$ 150,00+ por mês)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <XCircle size={20} className="text-red-500 shrink-0 mt-1" />
                <span>Teoria musical chata e complexa</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <XCircle size={20} className="text-red-500 shrink-0 mt-1" />
                <span>Meses só fazendo exercício chato</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <XCircle size={20} className="text-red-500 shrink-0 mt-1" />
                <span>Partituras que parecem grego</span>
              </li>
            </ul>
          </div>

          {/* Lado Bom (Clube das Notas) */}
          <div className="bg-brand-green/5 border-2 border-brand-green rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
               RECOMENDADO
             </div>
            <h3 className="text-xl font-bold text-brand-green mb-6 flex items-center gap-2">
              <CheckCircle2 /> Clube das Notas
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle2 size={20} className="text-brand-green shrink-0 mt-1" />
                <span>Valor ÚNICO de R$ 29,90 (sem mensalidade)</span>
              </li>
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle2 size={20} className="text-brand-green shrink-0 mt-1" />
                <span>100% Prático: Aprenda tocando músicas</span>
              </li>
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle2 size={20} className="text-brand-green shrink-0 mt-1" />
                <span>Toque sua 1ª música na primeira semana</span>
              </li>
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle2 size={20} className="text-brand-green shrink-0 mt-1" />
                <span>Cifras simplificadas e visuais</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
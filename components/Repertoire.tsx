import React from 'react';
import { SONG_CATEGORIES } from '../constants';
import { Music2, CheckCircle2, Plus } from 'lucide-react';

const Repertoire: React.FC = () => {
  return (
    <section className="py-20 bg-brand-card relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full mb-4">
            <Music2 size={18} />
            <span className="font-bold uppercase text-xs tracking-wider">Músicas que todo mundo ama</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Um repertório completo para <br/>quem quer <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">tocar de verdade</span>
          </h2>
          <p className="text-brand-subtext max-w-2xl mx-auto">
            Do pop ao rock, do nacional ao internacional. Você vai ser a estrela da rodinha de violão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {SONG_CATEGORIES.map((category, idx) => (
            <div key={idx} className="bg-brand-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-green/30 transition-all">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.songs.map((song, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-brand-green shrink-0" />
                    <span>{song}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Indicador de +1000 Músicas */}
        <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 bg-brand-dark border border-brand-green/40 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                <div className="bg-brand-green rounded-full p-1">
                    <Plus size={16} className="text-brand-dark font-bold" strokeWidth={4} />
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">1000 Músicas</span>
                <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold pl-2 border-l border-white/10">Disponíveis</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
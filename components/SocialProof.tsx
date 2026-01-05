import React from 'react';
import { Star, Users, Infinity } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="bg-brand-card border-y border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
          
          <div className="flex items-center gap-3">
            <div className="bg-brand-green/10 p-3 rounded-full">
              <Users className="text-brand-green" size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold text-xl text-white">+5.000</p>
              <p className="text-sm text-brand-subtext">Alunos Satisfeitos</p>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10 hidden md:block"></div>

          <div className="flex items-center gap-3">
            <div className="bg-brand-green/10 p-3 rounded-full">
              <Star className="text-brand-green fill-brand-green" size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold text-xl text-white">4.9/5.0</p>
              <p className="text-sm text-brand-subtext">Avaliação Média</p>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10 hidden md:block"></div>

          <div className="flex items-center gap-3">
            <div className="bg-brand-green/10 p-3 rounded-full">
              <Infinity className="text-brand-green" size={24} />
            </div>
            <div className="text-left">
              <p className="font-bold text-xl text-white">Vitalício</p>
              <p className="text-sm text-brand-subtext">Acesso Para Sempre</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Histórias de quem <span className="text-brand-green">já está tocando</span>
          </h2>
          <p className="text-brand-subtext max-w-2xl mx-auto text-lg">
            Veja como pessoas comuns, que nunca tinham pego em um violão, estão realizando o sonho de tocar suas músicas favoritas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
             {/* Vídeo de Depoimento */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                 <div className="relative w-full max-w-[340px] rounded-2xl overflow-hidden border-2 border-brand-green/30 shadow-[0_0_40px_rgba(34,197,94,0.15)] bg-black transform rotate-2 hover:rotate-0 transition-all duration-500">
                    {/* @ts-ignore */}
                    <wistia-player media-id="rnzniuipkg" aspect="0.6030150753768844"></wistia-player>
                </div>
            </div>

             {/* Destaque em texto ao lado do vídeo */}
            <div className="order-2 lg:order-1 text-left space-y-8">
                 <div className="relative">
                    <Quote size={64} className="text-brand-green/10 absolute -top-6 -left-6 transform -scale-x-100" />
                    <p className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed relative z-10">
                        "Eu sempre achei que precisava de 'dom', mas com o método certo eu toquei minha primeira música em menos de uma semana. É surreal!"
                    </p>
                 </div>
                 
                 <div className="flex items-center gap-4 pl-4 border-l-4 border-brand-green">
                     <div>
                         <p className="font-bold text-white text-lg">André Silva</p>
                         <p className="text-brand-subtext text-sm mb-1">Aluno da Turma 4</p>
                         <div className="flex text-yellow-400 gap-1">
                             {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                         </div>
                     </div>
                 </div>
            </div>
        </div>
        
        {/* Grid de Depoimentos em Texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-brand-green/30 transition-all hover:-translate-y-1 shadow-lg flex flex-col">
                    <div className="flex gap-1 text-yellow-400 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                        ))}
                    </div>
                    <p className="text-gray-300 mb-8 leading-relaxed italic flex-1">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green to-emerald-700 flex items-center justify-center font-bold text-white shadow-lg">
                            {testimonial.name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-white">{testimonial.name}</p>
                            <p className="text-xs text-brand-subtext font-medium uppercase tracking-wide">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Results;
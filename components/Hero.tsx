import React, { useState, useEffect } from 'react';
import Button from './Button';
import LaptopMockup from './LaptopMockup';
import { AlertCircle, XCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [spots, setSpots] = useState(97);

  useEffect(() => {
    // Função para diminuir as vagas com tempo aleatório
    const decreaseSpots = () => {
      setSpots(prev => {
        // Para de diminuir quando chegar em 5 vagas para manter a urgência constante
        if (prev <= 5) return prev;
        // Diminui 1 vaga
        return prev - 1;
      });
    };

    const scheduleNextDrop = () => {
        // Intervalo aleatório entre 2 e 6 segundos
        const randomDelay = Math.floor(Math.random() * 4000) + 2000;
        return setTimeout(() => {
            decreaseSpots();
            scheduleNextDrop(); // Agenda a próxima queda recursivamente
        }, randomDelay);
    };

    const timerId = scheduleNextDrop();

    // Limpeza do timer ao desmontar o componente
    return () => clearTimeout(timerId);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/guitarhero1/1920/1080" 
          alt="Pessoa tocando violão" 
          className="w-full h-full object-cover"
        />
        {/* Darker overlay to make the content pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/80 to-brand-dark"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl flex flex-col items-center">
        
        {/* GANCHO DO "INIMIGO COMUM" */}
        <div className="flex items-center gap-2 py-1 px-4 rounded-full bg-red-500/10 text-red-400 font-semibold text-xs md:text-sm mb-6 border border-red-500/20 shadow-lg backdrop-blur-sm">
          <XCircle size={14} />
          <span>Esqueça a teoria chata e as partituras difíceis</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-5xl">
          O jeito mais fácil de tocar <br className="hidden md:block"/>
          <span className="text-brand-green">VIOLÃO DO ZERO</span> com <span className="bg-brand-green/10 px-2 rounded text-brand-green border border-brand-green/20">+1000 Músicas</span>
        </h1>
        
        <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
          O único método onde você não precisa "estudar" para tocar. É só pegar o violão, seguir o passo a passo e tocar sua música favorita hoje mesmo.
        </p>

        {/* MOCKUP DO NOTEBOOK COM A IMAGEM DENTRO */}
        <div className="w-full max-w-4xl mb-8 transform hover:scale-[1.01] transition-transform duration-500">
           <LaptopMockup imageSrc="https://i.postimg.cc/q78kjpd4/image.png" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-4 bg-brand-dark/80 p-6 md:p-8 rounded-3xl backdrop-blur-md border border-white/5 shadow-2xl max-w-md w-full">
          
          {/* AVISO DE URGÊNCIA */}
          <div className="w-full flex justify-center mb-1">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide shadow-[0_0_15px_rgba(220,38,38,0.5)] animate-pulse transition-all duration-300">
                <AlertCircle size={14} className="text-white" />
                <span>Restam apenas {spots} vagas</span>
            </div>
          </div>

          <Button onClick={scrollToPricing} pulse fullWidth className="text-lg md:text-xl py-4 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
            QUERO COMEÇAR AGORA
          </Button>
          <p className="text-xs md:text-sm text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            Acesso liberado imediatamente
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
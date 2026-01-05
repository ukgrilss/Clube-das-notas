import React from 'react';

interface LaptopMockupProps {
  imageSrc: string;
}

const LaptopMockup: React.FC<LaptopMockupProps> = ({ imageSrc }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-4 md:my-8 select-none pointer-events-none md:pointer-events-auto">
      {/* Laptop Body Container */}
      <div className="relative mx-auto w-full max-w-[800px]">
        
        {/* Lid (Screen) */}
        <div className="relative bg-[#0a0a0a] rounded-t-xl md:rounded-t-2xl p-[2%] pb-0 shadow-2xl ring-1 ring-white/10 border-t border-white/5">
          {/* Camera */}
          <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[0.8%] h-[0.8%] bg-white/20 rounded-full blur-[0.5px] z-20"></div>

          {/* Screen Display (Inner) */}
          <div className="relative aspect-[16/10] bg-black overflow-hidden rounded-t-sm border border-white/5 shadow-inner group">
             
             {/* Screen Content - Image */}
             <div className="absolute inset-0 bg-black">
                <img 
                    src={imageSrc} 
                    alt="Plataforma do Curso" 
                    className="w-full h-full object-cover object-top" 
                />
             </div>

             {/* Screen Reflection/Glass Effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-20"></div>
          </div>
        </div>

        {/* Base (Keyboard Area) */}
        <div className="relative bg-[#151515] h-[10px] md:h-[18px] w-[102%] -ml-[1%] rounded-b-lg md:rounded-b-xl shadow-2xl border-t border-white/5 flex justify-center">
            <div className="w-[15%] h-[40%] bg-white/10 rounded-b-md mt-0"></div>
        </div>

      </div>
    </div>
  );
};

export default LaptopMockup;
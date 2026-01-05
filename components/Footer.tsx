import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black text-center border-t border-white/10">
      <div className="container mx-auto px-4">
        <p className="font-bold text-white mb-2">Clube das Notas</p>
        <p className="text-gray-500 text-sm mb-4">
          &copy; 2026 Todos os direitos reservados.
        </p>
        <p className="text-gray-600 text-xs max-w-lg mx-auto">
          Este site não é afiliado ao Facebook ou a qualquer entidade da Meta. 
          Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
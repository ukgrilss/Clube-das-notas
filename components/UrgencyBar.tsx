import React, { useState, useEffect } from 'react';

const UrgencyBar: React.FC = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const today = new Date();
    setDate(today.toLocaleDateString('pt-BR'));
  }, []);

  return (
    <div className="bg-brand-urgency text-white text-center py-3 font-bold uppercase text-sm md:text-base sticky top-0 z-50 shadow-md">
      <span className="animate-pulse">🔥 Promoção válida somente até hoje: {date}</span>
    </div>
  );
};

export default UrgencyBar;
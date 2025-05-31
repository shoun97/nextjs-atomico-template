'use client';

import { useState, useEffect } from 'react';

const slides = [
  'Transforma tu negocio con tecnología.',
  'Creamos experiencias digitales efectivas.',
  'Desarrollamos soluciones web a medida.',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-blue-600 text-white text-center py-12 text-xl font-semibold transition-all duration-500">
      {slides[current]}
    </div>
  );
};

export default Slider;

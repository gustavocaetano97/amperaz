import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const backgroundImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2940',
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2940'
];

const Hero: React.FC = () => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setBgImage(randomImage);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-[90vh] relative flex items-center justify-center overflow-hidden pt-20 pb-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#300334]/95 to-black/80" />

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="max-w-4xl mx-auto text-center space-y-8 h-full flex flex-col items-center justify-between">

          <div className="space-y-8">
            <h1 className="text-7xl font-bold tracking-tight animate-fade-in">
              Crescimento de negócios muito além do tráfego pago
            </h1>
            <p className="text-2xl text-[#00FF00]">
              Energia na medida para o seu marketing
            </p>
          </div>

          <div className="w-full flex flex-col items-center">
            <button
              className="bg-[#00FF00] hover:bg-[#00DD00] text-black px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto font-semibold mb-8 z-10"
            >
              <span>Agende Consultoria Gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-8 animate-bounce">
              <ChevronDown className="w-8 h-8 text-[#00FF00]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

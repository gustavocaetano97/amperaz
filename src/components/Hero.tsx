import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK } from '../pages/Home';

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
    <section id="inicio" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#300334]/95 to-black/80" />

      <div className="container mx-auto px-4 relative z-10 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
            Crescimento de negócios muito além do tráfego pago
          </h1>
          <p className="text-xl sm:text-2xl text-[#00FF00]">
            Energia na medida para o seu marketing
          </p>
          <div className="pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#00FF00] hover:bg-[#00DD00] text-black px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 items-center space-x-2 mx-auto font-semibold"
            >
              <span>Agende Consultoria Gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator - Adjusted position */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#00FF00]" />
        </div>
      </div>
    </section>
  );
};

export default Hero
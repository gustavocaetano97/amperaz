import React from 'react';
import { Target, Star, Brain, ArrowRight } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="missao" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Target className="w-12 h-12 text-[#00FF00]" />
                <h2 className="text-3xl md:text-4xl font-bold">Nossa Missão</h2>
              </div>
              <p className="text-2xl font-semibold text-[#00FF00]">
                Nossa missão é conduzir marcas autênticas ao crescimento.
              </p>
              <div className="space-y-6">
                <p className="text-xl text-gray-300">
                  Somos a nova era. Entregamos a melhor estrutura de performance digital para empresas que querem crescer os seus negócios.
                </p>
                <p className="text-xl text-gray-300">
                  Pautamos cada passo da nossa jornada em inteligência de dados e somos fanáticos pela experiência de nossos parceiros.
                </p>
              </div>
              <button className="bg-[#00FF00] hover:bg-[#00DD00] text-black px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 font-semibold">
                <span>Conheça Nossa Metodologia</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Marketing Analytics Dashboard"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center p-8 bg-black/30 rounded-xl">
              <Star className="w-12 h-12 text-[#00FF00] mb-4" />
              <h3 className="text-xl font-semibold mb-4">Excelência</h3>
              <p className="text-gray-300 text-center">Comprometidos com resultados excepcionais em cada projeto</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-black/30 rounded-xl">
              <Brain className="w-12 h-12 text-[#00FF00] mb-4" />
              <h3 className="text-xl font-semibold mb-4">Inovação</h3>
              <p className="text-gray-300 text-center">Sempre à frente com soluções criativas e dados precisos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission
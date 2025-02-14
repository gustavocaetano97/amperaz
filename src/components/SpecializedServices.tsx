import React, { useState, useEffect } from 'react';
import {
  ShoppingCart, Bot, Search, Target, ArrowUpRight,
  BarChart2, MessageSquare, Link, Leaf, TrendingUp, CheckSquare,
  Rocket
} from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactNode;
  text: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, text }) => (
  <div className="group flex items-center space-x-3 py-2 transition-all duration-300">
    <div className="text-[#00FF00]">
      {icon}
    </div>
    <span className="relative">
      {text}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FF00] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </span>
  </div>
);

const SpecializedServices: React.FC = () => {
  const [activeColumn, setActiveColumn] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColumn((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black" data-analytics="specialized-services">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Rocket className="section-icon" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Muito além do tráfego pago em
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* E-commerce Column */}
          <div
            className={`space-y-6 transition-all duration-500 ${
              activeColumn === 0 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
            }`}
            onClick={() => setActiveColumn(0)}
          >
            <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200"
                alt="E-commerce Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold">E-commerce</h3>
            </div>
            <ServiceItem icon={<ShoppingCart size={20} />} text="Análise de histórico de compras" />
            <ServiceItem icon={<Bot size={20} />} text="Automação de atendimento 24/7" />
            <ServiceItem icon={<Search size={20} />} text="Pesquisa de mercado preditiva" />
            <ServiceItem icon={<Target size={20} />} text="SEO técnico avançado" />
            <ServiceItem icon={<ArrowUpRight size={20} />} text="Recuperação de carrinho automática" />
          </div>

          {/* Geração de Leads Column */}
          <div
            className={`space-y-6 transition-all duration-500 ${
              activeColumn === 1 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
            }`}
            onClick={() => setActiveColumn(1)}
          >
            <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="Lead Generation Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold">Geração de Leads</h3>
            </div>
            <ServiceItem icon={<BarChart2 size={20} />} text="Análise de funis em tempo real" />
            <ServiceItem icon={<MessageSquare size={20} />} text="Automação de nutrição multicanal" />
            <ServiceItem icon={<Link size={20} />} text="Integração CRM" />
            <ServiceItem icon={<Leaf size={20} />} text="SEO estratégico semântico" />
            <ServiceItem icon={<TrendingUp size={20} />} text="Análise de tráfego orgânico" />
            <ServiceItem icon={<CheckSquare size={20} />} text="Pesquisa de pré-qualificação" />
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          <button
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeColumn === 0 ? 'bg-[#00FF00]' : 'bg-gray-600'
            }`}
            onClick={() => setActiveColumn(0)}
          />
          <button
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeColumn === 1 ? 'bg-[#00FF00]' : 'bg-gray-600'
            }`}
            onClick={() => setActiveColumn(1)}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;
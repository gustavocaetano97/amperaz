import React from 'react';
import { ArrowDown, Target, Heart, DollarSign, Users } from 'lucide-react';

const steps = [
  {
    icon: <Target className="w-12 h-12 text-[#00FF00]" />,
    title: 'Aquisição',
    description: 'Atração qualificada de leads'
  },
  {
    icon: <Heart className="w-12 h-12 text-[#00FF00]" />,
    title: 'Engajamento',
    description: 'Construção de relacionamento'
  },
  {
    icon: <DollarSign className="w-12 h-12 text-[#00FF00]" />,
    title: 'Monetização',
    description: 'Conversão em vendas'
  },
  {
    icon: <Users className="w-12 h-12 text-[#00FF00]" />,
    title: 'Retenção',
    description: 'Fidelização do cliente'
  }
];

const Methodology: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Target className="section-icon" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Como?</h2>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item flex-1 text-center">
              <div className="flex flex-col items-center">
                {step.icon}
                <h3 className="text-2xl font-bold mb-2 mt-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2">
                  <ArrowDown size={24} className="text-[#00FF00] rotate-[-90deg]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology
import React from 'react';
import { BarChart2, Users, Database, Lightbulb, LineChart } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <LineChart className="section-icon" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          O que fazemos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="service-card">
            <BarChart2 size={40} className="text-[#00FF00] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Marketing Analytics</h3>
            <p className="text-gray-300">Análise profunda de dados para decisões estratégicas baseadas em evidências.</p>
          </div>
          <div className="service-card">
            <Users size={40} className="text-[#00FF00] mb-4" />
            <h3 className="text-2xl font-bold mb-4">CRM Estratégico</h3>
            <p className="text-gray-300">Gestão de relacionamento com cliente orientada a resultados.</p>
          </div>
          <div className="service-card">
            <Database size={40} className="text-[#00FF00] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Data Intelligence</h3>
            <p className="text-gray-300">Transformação de dados em insights acionáveis para seu negócio.</p>
          </div>
          <div className="service-card">
            <Lightbulb size={40} className="text-[#00FF00] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Growth Strategy</h3>
            <p className="text-gray-300">Estratégias personalizadas para crescimento sustentável.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
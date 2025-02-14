import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    company: 'TechStart',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200',
    investment: '50K',
    revenue: '450K',
    quote: 'Transformou completamente nossa estratégia digital.'
  },
  {
    company: 'EcoSolutions',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200',
    investment: '75K',
    revenue: '680K',
    quote: 'Resultados impressionantes em tempo recorde.'
  },
  {
    company: 'FinTech Pro',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200',
    investment: '100K',
    revenue: '920K',
    quote: 'Parceria fundamental para nosso crescimento.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="resultados" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <MessageSquare className="section-icon" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Resultados Reais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="mb-6">
                <div className="w-16 h-16 mb-4 mx-auto overflow-hidden rounded-full">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{testimonial.company}</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    Investimento: <span className="text-[#00FF00]">R$ {testimonial.investment}</span>
                  </p>
                  <p className="text-gray-300">
                    Receita: <span className="text-[#00FF00]">R$ {testimonial.revenue}</span>
                  </p>
                </div>
              </div>
              <blockquote className="text-lg italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#00FF00] hover:bg-[#00DD00] text-black px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto font-semibold">
            <span>Seja o Próximo Case de Sucesso</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials
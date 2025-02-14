import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona o processo de consultoria?',
    answer: 'Iniciamos com uma análise completa do seu negócio, identificando oportunidades de crescimento. Em seguida, desenvolvemos um plano estratégico personalizado com metas claras e mensuráveis.'
  },
  {
    question: 'Qual o investimento médio necessário?',
    answer: 'O investimento varia de acordo com as necessidades específicas do seu negócio e objetivos. Trabalhamos com planos flexíveis que se adaptam a diferentes orçamentos e escalas de operação.'
  },
  {
    question: 'Em quanto tempo posso ver resultados?',
    answer: 'Os primeiros resultados começam a aparecer entre 30 e 90 dias, dependendo do seu segmento e estratégia adotada. Focamos em crescimento sustentável e resultados de longo prazo.'
  },
  {
    question: 'Vocês atendem qualquer segmento de mercado?',
    answer: 'Sim, nossa metodologia se adapta a diferentes segmentos. Temos experiência em diversos setores, desde e-commerce até serviços B2B.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <HelpCircle className="section-icon" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#00FF00]" />
                ) : (
                  <ChevronDown className="text-[#00FF00]" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
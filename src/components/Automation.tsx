import React from 'react';
import { Bot, Zap, BarChart2, Clock, MessageSquare, ArrowRight } from 'lucide-react';

const Automation: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Bot className="section-icon" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Automação Inteligente
        </h2>

        <p className="text-xl text-[#00FF00] text-center max-w-4xl mx-auto mb-16">
        Converta 10x Mais Leads com WhatsApp Integrado à IA.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Problem Identified */}
          <div className="bg-black/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Problema Identificado</h3>
            <p className="text-xl text-gray-300 italic mb-6">
              "Quantos leads qualificados sua equipe perde por falhas na nutrição ou acompanhamento?"
            </p>
            <p className="text-xl text-gray-300 italic mb-6">
              "Como atender e filtrar as melhores oportunidades de maneira automática para que meu time de vendas seja certeiro no atendimento?"
            </p>
            <p className="text-xl text-gray-300 italic mb-6">
              "Onde posso otimizar o tempo dos vendedores para que potêncial deles seja maximizado"
            </p>
            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                alt="Team analyzing data"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>

          {/* Technical Solution */}
          <div className="bg-black/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Solução Técnica</h3>
            <p className="text-lg mb-6">
              Nossa arquitetura exclusiva integra:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <Zap className="text-[#00FF00] mr-3 mt-1 flex-shrink-0" size={20} />
                <span>WhatsApp Business API com respostas instantâneas</span>
              </li>
              <li className="flex items-start">
                <Bot className="text-[#00FF00] mr-3 mt-1 flex-shrink-0" size={20} />
                <span>CRM com IA preditiva que classifica leads em tempo real</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-[#00FF00] mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Sistema de nutrição e agendamento inteligente que reduz 80% do trabalho manual</span>
              </li>
              <li className="flex items-start">
                <BarChart2 className="text-[#00FF00] mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Análise de sentimentos para priorizar contatos urgentes e personalizar atendimentos</span>
              </li>
            </ul>
            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                alt="AI automation system"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Integration Showcase */}
        <p className="text-xl text-[#00FF00] text-center max-w-4xl mx-auto mb-16">
        Descubra como a fusão entre WhatsApp Business, CRM avançado e Inteligência Artificial vai mudar para sempre a geração de oportunidades para empresas como a sua
        </p>

        {/* Benefits Table */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Benefícios Comprovados</h3>

          <div className="overflow-hidden rounded-xl">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-black/50 text-left p-4 border-b border-zinc-700">Antes</th>
                  <th className="bg-black/50 text-left p-4 border-b border-zinc-700">Depois</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-zinc-800 bg-black/20">Leads frios no CRM</td>
                  <td className="p-4 border-b border-zinc-800 bg-black/20 text-[#00FF00]">Leads qualificados em tempo recorde e com follow-ups agendados automaticamente</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-800 bg-black/20">Respostas demoradas</td>
                  <td className="p-4 border-b border-zinc-800 bg-black/20 text-[#00FF00]">Atendimento 24h com chatbot IA especializado na sua empresa</td>
                </tr>
                <tr>
                  <td className="p-4 bg-black/20">Dados desconexos</td>
                  <td className="p-4 bg-black/20 text-[#00FF00]">Contato humano direcionado para momentos estratégicos e com informações matadoras</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-[#00FF00] hover:bg-[#00DD00] text-black px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
            Quero triplicar minhas oportunidades agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Automation;
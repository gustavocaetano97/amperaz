import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <main className="py-32 bg-zinc-900">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-[#00FF00] hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Voltar para a página inicial
        </Link>

        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="text-gray-300 mb-4">
              A Growth Agency está comprometida em proteger sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos</h2>
            <p className="text-gray-300 mb-4">Podemos coletar os seguintes tipos de informações:</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Nome e informações de contato</li>
              <li>Informações de perfil profissional</li>
              <li>Dados de uso do site</li>
              <li>Informações de comunicação</li>
              <li>Dados analíticos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Como Usamos suas Informações</h2>
            <p className="text-gray-300 mb-4">Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Comunicar sobre atualizações e ofertas</li>
              <li>Personalizar sua experiência</li>
              <li>Análise e otimização</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Dados</h2>
            <p className="text-gray-300 mb-4">
              Não vendemos suas informações pessoais. Podemos compartilhar dados com:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Prestadores de serviços autorizados</li>
              <li>Parceiros de negócios</li>
              <li>Autoridades legais quando exigido por lei</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Segurança de Dados</h2>
            <p className="text-gray-300 mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
            <p className="text-gray-300 mb-4">Você tem o direito de:</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de dados</li>
              <li>Retirar consentimento</li>
              <li>Receber seus dados em formato portável</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cookies e Tecnologias Similares</h2>
            <p className="text-gray-300 mb-4">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o tráfego e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Atualizações desta Política</h2>
            <p className="text-gray-300 mb-4">
              Podemos atualizar esta política periodicamente. Alterações significativas serão notificadas através de nosso site ou por email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
            <p className="text-gray-300">
              Para questões sobre privacidade, entre em contato através do email: privacidade@growthagency.com.br
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <main className="py-32 bg-zinc-900">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-[#00FF00] hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Voltar para a página inicial
        </Link>

        <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-300 mb-4">
              Ao acessar e usar os serviços da Growth Agency, você concorda com estes termos de uso. Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
            <p className="text-gray-300 mb-4">
              A Growth Agency fornece serviços de marketing digital, incluindo mas não se limitando a:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Consultoria em marketing digital</li>
              <li>Gestão de mídias sociais</li>
              <li>Otimização para motores de busca (SEO)</li>
              <li>Marketing de conteúdo</li>
              <li>Análise de dados e métricas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Uso dos Serviços</h2>
            <p className="text-gray-300 mb-4">
              Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos. Você não deve:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Violar quaisquer leis aplicáveis</li>
              <li>Infringir direitos de propriedade intelectual</li>
              <li>Transmitir malware ou código malicioso</li>
              <li>Interferir com a segurança de nossos serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
            <p className="text-gray-300 mb-4">
              Todo o conteúdo presente em nosso site e serviços, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade da Growth Agency ou de seus fornecedores e está protegido por leis de propriedade intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-gray-300 mb-4">
              A Growth Agency não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados ou uso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Modificações dos Termos</h2>
            <p className="text-gray-300 mb-4">
              Reservamos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente após a publicação dos termos atualizados em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
            <p className="text-gray-300">
              Para questões relacionadas a estes termos, entre em contato através do email: contato@growthagency.com.br
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Terms;
import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="w-40 h-12 relative mb-6">
              <img
                src={logo}
                alt="Growth Agency Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Transformando negócios com estratégias de growth hacking e marketing científico.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin size={18} className="text-[#00FF00] mr-2" />
                <span>Av. Paulista, 1000, São Paulo - SP</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="text-[#00FF00] mr-2" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="text-[#00FF00] mr-2" />
                <span>contato@growthagency.com.br</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-[#00FF00] transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-[#00FF00] transition-colors">Serviços</a></li>
              <li><a href="#missao" className="text-gray-400 hover:text-[#00FF00] transition-colors">Missão</a></li>
              <li><a href="#metodologia" className="text-gray-400 hover:text-[#00FF00] transition-colors">Metodologia</a></li>
              <li><a href="#resultados" className="text-gray-400 hover:text-[#00FF00] transition-colors">Resultados</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Redes Sociais</h3>
            <a
              href="https://instagram.com/growthagency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-[#00FF00] transition-colors"
            >
              <Instagram size={24} className="mr-2" />
              <span>@growthagency</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Growth Agency. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="/termos" className="text-gray-500 text-sm hover:text-[#00FF00] transition-colors">
              Termos de Uso
            </a>
            <a href="/privacidade" className="text-gray-500 text-sm hover:text-[#00FF00] transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
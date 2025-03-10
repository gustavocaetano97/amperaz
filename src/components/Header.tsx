import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoAmperaz from '../assets/logo_amperaz.webp';


interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const renderNavLinks = () => (
    <>
      {isHomePage ? (
        <>
          <a href="#inicio" className="nav-link">Início</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#missao" className="nav-link">Missão</a>
          <a href="#metodologia" className="nav-link">Metodologia</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </>
      ) : (
        <Link to="/" className="nav-link">Início</Link>
      )}
      <Link to="/blog" className="nav-link">Blog</Link>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="w-48 h-16 relative">
            <img
              src={logoAmperaz}
              alt="Amperaz Marketing Logo"
              className="w-full h-full object-contain scale-160"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {renderNavLinks()}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: '80px' }}
      >
        <nav className="flex flex-col space-y-8 p-8">
          {isHomePage && (
            <>
              <a href="#inicio" className="nav-link text-2xl" onClick={() => setIsMenuOpen(false)}>Início</a>
              <a href="#servicos" className="nav-link text-2xl" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#missao" className="nav-link text-2xl" onClick={() => setIsMenuOpen(false)}>Missão</a>
              <a href="#metodologia" className="nav-link text-2xl" onClick={() => setIsMenuOpen(false)}>Metodologia</a>
              <a href="#faq" className="nav-link text-2xl" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            </>
          )}
          <Link to="/blog" className="nav-link text-2xl" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
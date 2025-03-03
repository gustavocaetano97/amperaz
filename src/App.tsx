import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SpecializedServices from './components/SpecializedServices';
import Automation from './components/Automation';
import Mission from './components/Mission';
import Methodology from './components/Methodology';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        parallaxElements.forEach((el) => {
          const element = el as HTMLElement;
          element.style.transform = `translateY(${scrolled * 0.2}px)`;
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Services />
        <SpecializedServices />
        <Automation />
        <Mission />
        <Methodology />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
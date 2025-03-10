import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SpecializedServices from '../components/SpecializedServices';
import Automation from '../components/Automation';
import Mission from '../components/Mission';
import Methodology from '../components/Methodology';
import FAQ from '../components/FAQ';

export const WHATSAPP_LINK = "https://wa.me/5516981227368?text=Quero%20uma%20consultoria%20gratuita%20para%20acelerar%20as%20vendas%20do%20meu%20neg%C3%B3cio";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <SpecializedServices />
      <Automation />
      <Mission />
      <Methodology />
      <FAQ />
    </main>
  );
};

export default Home;
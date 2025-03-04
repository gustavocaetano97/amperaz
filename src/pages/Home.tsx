import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SpecializedServices from '../components/SpecializedServices';
import Automation from '../components/Automation';
import Mission from '../components/Mission';
import Methodology from '../components/Methodology';
import FAQ from '../components/FAQ';

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
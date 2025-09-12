import React from 'react';
import Hero from '../components/Hero';
import ContaminationRisks from '../components/ContaminationRisks';
import PlatformFeatures from '../components/PlatformFeatures';
import CallToAction from '../components/CallToAction';

const Home = ({ setCurrentPage }) => {
  return (
    <div>
      <Hero setCurrentPage={setCurrentPage} />
      <ContaminationRisks />
      <PlatformFeatures />
      <CallToAction setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
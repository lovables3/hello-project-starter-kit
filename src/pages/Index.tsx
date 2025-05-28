
import React from 'react';
import Hero from '@/components/Hero';
import ParticleBackground from '@/components/ParticleBackground';
import FeaturesSection from '@/components/FeaturesSection';
import QuizSection from '@/components/QuizSection';
import Footer from '@/components/Footer';
import MantleCat from '@/components/MantleCat';

const Index = () => {
  return (
    <div className="min-h-screen bg-mantle-dark text-white overflow-x-hidden">
      <ParticleBackground />
      
      <main>
        <Hero />
        <FeaturesSection />
        <QuizSection />
      </main>
      
      <Footer />
      
      {/* Always visible Mantle Cat mascot */}
      <MantleCat />
    </div>
  );
};

export default Index;

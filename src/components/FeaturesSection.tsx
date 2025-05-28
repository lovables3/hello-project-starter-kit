
import React from 'react';
import FeatureCard from './FeatureCard';
import { Spade, Settings, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
        <span className="bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent">
          Explore the Ecosystem
        </span>
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Discover the expanding universe of Mantle Network features and experiences
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          className="block cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => {
            const quizSection = document.getElementById('quiz-section');
            quizSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FeatureCard
            title="Mantle Mirror"
            description="Discover your digital identity through our interactive personality analysis, mapping your traits to the Mantle ecosystem."
            icon={<Settings className="h-8 w-8" />}
          />
        </div>
        
        <Link to="/blackjack" className="block transition-transform duration-300 hover:scale-105">
          <FeatureCard
            title="Blackjack"
            description="Classic 21 card game with a Mantle twist. Play against the AI or challenge friends in PvP mode. Get as close to 21 as possible without going bust!"
            icon={<Spade className="h-8 w-8" />}
          />
        </Link>
        
        <Link to="/lore" className="block transition-transform duration-300 hover:scale-105">
          <FeatureCard
            title="Lore Archive"
            description="Immerse yourself in the rich narrative history of the Mantle universe. Uncover stories, characters, and the evolving mythology."
            icon={<BookOpen className="h-8 w-8" />}
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturesSection;

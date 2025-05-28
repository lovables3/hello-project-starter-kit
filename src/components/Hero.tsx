
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mantle-mint/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mantle-pink/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Welcome Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden animate-float border-4 border-gradient-to-r from-mantle-mint to-mantle-pink p-1 bg-gradient-to-r from-mantle-mint to-mantle-pink">
            <div className="w-full h-full rounded-full overflow-hidden bg-mantle-dark">
              <img 
                src="/lovable-uploads/3cf4f769-b614-43af-b2f5-23148d38bcde.png" 
                alt="Welcome to Mantle Genesis" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent glow-text">
            Welcome to
          </span>
          <span className="block text-white mt-2">
            Mantle Genesis
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover your role in the modular L2 revolution. Take the quiz, explore the ecosystem, and join the future of decentralized coordination.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="button-gradient button-hover text-black font-semibold px-8 py-3 text-lg"
            onClick={() => {
              const featuresSection = document.querySelector('.py-20.px-4');
              featuresSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore the Ecosystem
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

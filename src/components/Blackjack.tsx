
import React from 'react';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import { Spade, ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blackjack: React.FC = () => {
  return (
    <div className="min-h-screen bg-mantle-dark text-white flex items-center justify-center px-4">
      {/* Back button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-10"
      >
        <Button 
          variant="outline"
          className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portal
        </Button>
      </Link>

      <GlassCard className="max-w-lg mx-auto text-center">
        <div className="mb-6">
          <Spade className="h-16 w-16 mx-auto mb-4 text-gray-500" />
          <h1 className="text-4xl font-bold text-gray-400 mb-2">
            Blackjack
          </h1>
          <p className="text-lg text-gray-500 font-medium">powered by Mantle</p>
        </div>
        
        <div className="mb-8">
          <Calendar className="h-12 w-12 mx-auto mb-4 text-mantle-mint" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent mb-4">
            Coming Soon
          </h2>
          <div className="text-3xl font-bold text-white mb-2">
            May 29
          </div>
          <p className="text-gray-400 text-lg">
            The cards are being shuffled...
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-600 rounded-lg bg-gray-800/30">
            <p className="text-gray-300 text-sm">
              Get ready for the ultimate blackjack experience on Mantle Network
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default Blackjack;

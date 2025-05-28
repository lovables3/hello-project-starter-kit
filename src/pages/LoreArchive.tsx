
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import TimelineMap from '@/components/lore/TimelineMap';
import LorePanel from '@/components/lore/LorePanel';
import GlassCard from '@/components/GlassCard';
import { LoreChapter } from '@/data/loreData';

const LoreArchive: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<LoreChapter | null>(null);

  return (
    <div className="min-h-screen bg-mantle-dark text-white overflow-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(77, 226, 193, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(77, 226, 193, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}
        />
      </div>

      {/* Navigation Header */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent">
              Lore Archive
            </h1>
            <p className="text-gray-400 mt-2">Journey through Mantle's evolution</p>
          </div>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Main Content with GlassCard styling */}
      <div className="relative z-10 flex-1 px-4 pb-8">
        <GlassCard className="max-w-6xl mx-auto">
          <TimelineMap onChapterSelect={setSelectedChapter} />
        </GlassCard>
      </div>

      {/* Lore Panel */}
      {selectedChapter && (
        <LorePanel 
          chapter={selectedChapter} 
          onClose={() => setSelectedChapter(null)}
          onChapterSelect={setSelectedChapter}
        />
      )}

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mantle-mint/10 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mantle-pink/10 rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default LoreArchive;

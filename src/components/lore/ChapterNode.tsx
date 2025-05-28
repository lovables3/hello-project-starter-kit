
import React from 'react';
import { Lock, BookOpen } from 'lucide-react';
import { LoreChapter } from '@/data/loreData';

interface ChapterNodeProps {
  chapter: LoreChapter;
  index: number;
  onClick: () => void;
}

const ChapterNode: React.FC<ChapterNodeProps> = ({ chapter, index, onClick }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
      style={{
        left: `${chapter.position.x}%`,
        top: `${chapter.position.y}%`,
        animationDelay: `${index * 200}ms`
      }}
      onClick={onClick}
    >
      {/* Node Circle */}
      <div className={`
        relative w-16 h-16 rounded-full border-2 transition-all duration-300
        ${chapter.isUnlocked 
          ? 'bg-gradient-to-r from-mantle-mint to-mantle-pink border-mantle-mint shadow-lg shadow-mantle-mint/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-mantle-mint/50' 
          : 'bg-gray-800 border-gray-600 group-hover:border-gray-500'
        }
        animate-fade-in
      `}>
        <div className="absolute inset-0 flex items-center justify-center">
          {chapter.isUnlocked ? (
            <BookOpen size={24} className="text-black" />
          ) : (
            <Lock size={20} className="text-gray-400" />
          )}
        </div>
        
        {/* Pulse Effect for Unlocked Chapters */}
        {chapter.isUnlocked && (
          <div className="absolute inset-0 rounded-full bg-mantle-mint/20 animate-ping"></div>
        )}
      </div>

      {/* Chapter Info */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/80 backdrop-blur-sm border border-mantle-mint/30 rounded-lg px-3 py-2 min-w-max">
          <h3 className={`font-bold text-sm ${chapter.isUnlocked ? 'text-mantle-mint' : 'text-gray-400'}`}>
            Chapter {chapter.id}
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            {chapter.subtitle || 'Coming Soon'}
          </p>
        </div>
      </div>

      {/* Chapter Number Badge */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-mantle-dark border border-mantle-mint rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-mantle-mint">{chapter.id}</span>
      </div>
    </div>
  );
};

export default ChapterNode;


import React from 'react';
import { X, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { LoreChapter, loreChapters } from '@/data/loreData';

interface LorePanelProps {
  chapter: LoreChapter;
  onClose: () => void;
  onChapterSelect: (chapter: LoreChapter) => void;
}

const LorePanel: React.FC<LorePanelProps> = ({ chapter, onClose, onChapterSelect }) => {
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      
      // Handle bold text with **
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="mb-3">
            {parts.map((part, partIndex) => 
              partIndex % 2 === 1 ? <strong key={partIndex} className="text-mantle-mint">{part}</strong> : part
            )}
          </p>
        );
      }
      
      return <p key={index} className="mb-3">{line}</p>;
    });
  };

  const currentIndex = loreChapters.findIndex(ch => ch.id === chapter.id);
  const previousChapter = currentIndex > 0 ? loreChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < loreChapters.length - 1 ? loreChapters[currentIndex + 1] : null;

  const handlePreviousChapter = () => {
    if (previousChapter) {
      onChapterSelect(previousChapter);
    }
  };

  const handleNextChapter = () => {
    if (nextChapter) {
      onChapterSelect(nextChapter);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Book-like container */}
        <div className="bg-gradient-to-br from-mantle-darkGray via-mantle-darkGray to-black border border-mantle-mint/30 rounded-lg shadow-2xl shadow-mantle-mint/20 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-mantle-mint/20 bg-gradient-to-r from-mantle-darkGray to-mantle-lightGray">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                chapter.isUnlocked 
                  ? 'bg-gradient-to-r from-mantle-mint to-mantle-pink' 
                  : 'bg-gray-700'
              }`}>
                {chapter.isUnlocked ? (
                  <span className="text-black font-bold">{chapter.id}</span>
                ) : (
                  <Lock size={18} className="text-gray-400" />
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{chapter.title}</h2>
                {chapter.subtitle && (
                  <p className="text-sm text-gray-400">{chapter.subtitle}</p>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex">
            {/* Main content area */}
            <div className="flex-1 p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              {chapter.isUnlocked ? (
                <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
                  {formatContent(chapter.content)}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Lock size={64} className="text-gray-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-400 mb-4">Chapter Locked</h3>
                  <p className="text-gray-500 text-lg">This chapter will be unlocked soon...</p>
                </div>
              )}
            </div>

            {/* Right side - page decoration */}
            <div className="w-16 bg-gradient-to-b from-mantle-mint/5 to-mantle-pink/5 border-l border-mantle-mint/10 flex flex-col justify-center items-center">
              <div className="w-2 h-32 bg-gradient-to-b from-mantle-mint to-mantle-pink rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Footer with navigation */}
          <div className="p-4 border-t border-mantle-mint/20 bg-mantle-darkGray/80 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {previousChapter && (
                <button 
                  onClick={handlePreviousChapter}
                  className="flex items-center space-x-2 text-gray-400 hover:text-mantle-mint transition-colors duration-200"
                >
                  <ChevronLeft size={16} />
                  <span className="text-sm">Previous</span>
                </button>
              )}
            </div>
            
            <div className="text-center">
              <span className="text-sm text-gray-500">
                {chapter.isUnlocked ? 'Available now' : 'Coming soon'} • Chapter {chapter.id} of {loreChapters.length}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {nextChapter && (
                <button 
                  onClick={handleNextChapter}
                  className="flex items-center space-x-2 text-gray-400 hover:text-mantle-mint transition-colors duration-200"
                >
                  <span className="text-sm">Next</span>
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LorePanel;

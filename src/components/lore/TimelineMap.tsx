
import React from 'react';
import { loreChapters, LoreChapter } from '@/data/loreData';
import ChapterNode from './ChapterNode';

interface TimelineMapProps {
  onChapterSelect: (chapter: LoreChapter) => void;
}

const TimelineMap: React.FC<TimelineMapProps> = ({ onChapterSelect }) => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {loreChapters.slice(0, -1).map((chapter, index) => {
          const nextChapter = loreChapters[index + 1];
          return (
            <line
              key={`line-${chapter.id}`}
              x1={`${chapter.position.x}%`}
              y1={`${chapter.position.y}%`}
              x2={`${nextChapter.position.x}%`}
              y2={`${nextChapter.position.y}%`}
              stroke="rgba(77, 226, 193, 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse-slow"
            />
          );
        })}
      </svg>

      {/* Chapter Nodes */}
      <div className="relative w-full h-full" style={{ zIndex: 2 }}>
        {loreChapters.map((chapter, index) => (
          <ChapterNode
            key={chapter.id}
            chapter={chapter}
            index={index}
            onClick={() => onChapterSelect(chapter)}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-mantle-mint rounded-full animate-particle-move opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: '8s'
          }}
        />
      ))}
    </div>
  );
};

export default TimelineMap;

import React from 'react';
import { Personality } from '../../types/quiz';
import { Button } from '@/components/ui/button';

type QuizResultProps = {
  result: Personality | null;
  onRestartQuiz: () => void;
};

const QuizResult: React.FC<QuizResultProps> = ({ result, onRestartQuiz }) => {
  if (!result) return null;

  return (
    <div className="text-center animate-fade-in">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 mb-6 overflow-hidden rounded-full bg-black p-1">
          <img 
            src={result.image} 
            alt={result.title} 
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent">
          You are... <span className="emoji">{result.emoji}</span> {result.title}
        </h3>
        <p className="mb-6 text-gray-300 max-w-xl mx-auto">{result.description}</p>
        <Button 
          onClick={onRestartQuiz}
          className="button-gradient button-hover text-black font-medium"
        >
          Retake Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizResult;

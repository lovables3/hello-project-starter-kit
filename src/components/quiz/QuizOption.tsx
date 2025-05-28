
import React from 'react';
import { Role } from '../../types/quiz';

type QuizOptionProps = {
  optionIndex: number;
  text: string;
  role: Role;
  isSelected: boolean;
  onOptionSelect: (index: string) => void;
};

const QuizOption: React.FC<QuizOptionProps> = ({ 
  optionIndex, 
  text, 
  isSelected, 
  onOptionSelect 
}) => {
  return (
    <div 
      className={`w-full text-left p-3 glass-card transition-all duration-300 cursor-pointer 
      ${isSelected ? 'border-mantle-mint/50 bg-mantle-lightGray/50' : 'hover:bg-mantle-lightGray/20 hover:border-mantle-mint/20'} 
      animate-fade-in select-none`}
      style={{ 
        animationDelay: `${optionIndex * 100}ms`,
        outline: 'none',
        caretColor: 'transparent'
      }}
      onClick={() => onOptionSelect(String(optionIndex))}
      tabIndex={0}
      role="radio"
      aria-checked={isSelected}
    >
      <div className="flex items-center w-full">
        <div 
          className={`mr-3 h-4 w-4 rounded-full border ${isSelected ? 'bg-mantle-mint border-mantle-mint' : 'border-gray-400'}`}
          style={{ pointerEvents: 'none' }}
        >
          {isSelected && <div className="h-2 w-2 rounded-full bg-black mx-auto mt-0.5" style={{ pointerEvents: 'none' }} />}
        </div>
        <span style={{ pointerEvents: 'none' }}>{text}</span>
      </div>
    </div>
  );
};

export default QuizOption;

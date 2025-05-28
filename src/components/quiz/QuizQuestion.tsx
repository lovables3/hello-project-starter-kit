
import React from 'react';
import { Question } from '../../types/quiz';
import QuizOption from './QuizOption';
import { Button } from '@/components/ui/button';

type QuizQuestionProps = {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: string | null;
  setSelectedOption: (index: string | null) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  setSelectedOption,
  onNextQuestion,
  isLastQuestion
}) => {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Question {currentIndex + 1} of {totalQuestions}</h3>
        <p className="text-xl mb-6">{question.text}</p>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <QuizOption
              key={index}
              optionIndex={index}
              text={option.text}
              role={option.role}
              isSelected={selectedOption === String(index)}
              onOptionSelect={setSelectedOption}
            />
          ))}
        </div>
        
        <div className="mt-6 flex justify-center">
          <Button
            onClick={onNextQuestion}
            disabled={selectedOption === null}
            className="button-gradient button-hover text-black font-medium"
          >
            {isLastQuestion ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-2">
          {Array.from({ length: totalQuestions }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-gradient-to-r from-mantle-mint to-mantle-pink"
                  : index < currentIndex
                  ? "bg-gray-400"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-400">
          {currentIndex + 1}/{totalQuestions}
        </p>
      </div>
    </>
  );
};

export default QuizQuestion;

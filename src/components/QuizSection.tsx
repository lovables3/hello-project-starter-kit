
import React from 'react';
import QuizModule from './QuizModule';

const QuizSection: React.FC = () => {
  return (
    <div id="quiz-section" className="py-16 px-4 sm:px-6 scroll-mt-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
        <span className="bg-gradient-to-r from-mantle-mint to-mantle-pink bg-clip-text text-transparent">
          What's Your Mantle Identity?
        </span>
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Take this quick quiz to discover your role in the Mantle ecosystem
      </p>
      
      <QuizModule />
    </div>
  );
};

export default QuizSection;

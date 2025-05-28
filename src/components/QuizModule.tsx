
import React from 'react';
import GlassCard from './GlassCard';
import { useQuizLogic } from './quiz/useQuizLogic';
import QuizQuestion from './quiz/QuizQuestion';
import QuizResult from './quiz/QuizResult';

const QuizModule: React.FC = () => {
  const {
    currentQuestionIndex,
    selectedOption,
    setSelectedOption,
    showResults,
    result,
    handleAnswer,
    restartQuiz,
    currentQuestion,
    totalQuestions,
    isLastQuestion
  } = useQuizLogic();

  return (
    <GlassCard className="max-w-2xl mx-auto">
      {!showResults ? (
        <QuizQuestion 
          question={currentQuestion}
          currentIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          onNextQuestion={handleAnswer}
          isLastQuestion={isLastQuestion}
        />
      ) : (
        <QuizResult 
          result={result}
          onRestartQuiz={restartQuiz}
        />
      )}
    </GlassCard>
  );
};

export default QuizModule;

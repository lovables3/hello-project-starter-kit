
import { useState } from 'react';
import { quizQuestions, personalityTypes } from '../../data/quizQuestions';
import { Role, Personality } from '../../types/quiz';

export const useQuizLogic = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Role>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<Personality | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleAnswer = () => {
    if (selectedOption === null) return;
    
    const questionId = quizQuestions[currentQuestionIndex].id;
    const role = quizQuestions[currentQuestionIndex].options[parseInt(selectedOption)].role;
    
    const updatedAnswers = {
      ...answers,
      [questionId]: role
    };
    
    setAnswers(updatedAnswers);
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setSelectedOption(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (allAnswers: Record<number, Role>) => {
    // Count occurrences of each role in answers
    const roleCounts: Record<Role, number> = {
      'constructor': 0,
      'sniffer': 0,
      'brawler': 0,
      'lurker': 0,
      'viber': 0,
      'lore': 0
    };
    
    Object.values(allAnswers).forEach(role => {
      roleCounts[role]++;
    });
    
    // Count total appearances of each role in questions
    const roleAppearances: Record<Role, number> = {
      'constructor': 0,
      'sniffer': 0,
      'brawler': 0,
      'lurker': 0,
      'viber': 0,
      'lore': 0
    };

    quizQuestions.forEach(question => {
      question.options.forEach(option => {
        roleAppearances[option.role]++;
      });
    });

    // Calculate selection ratio for each role
    const selectionRatios: Record<Role, number> = {
      'constructor': 0,
      'sniffer': 0,
      'brawler': 0,
      'lurker': 0,
      'viber': 0,
      'lore': 0
    };

    Object.keys(roleCounts).forEach(role => {
      const typedRole = role as Role;
      const appearances = roleAppearances[typedRole];
      // Avoid division by zero
      if (appearances > 0) {
        selectionRatios[typedRole] = roleCounts[typedRole] / appearances;
      }
    });
    
    // Find the role with highest selection ratio
    let maxRatio = 0;
    let resultRole: Role = 'constructor';
    
    Object.entries(selectionRatios).forEach(([role, ratio]) => {
      if (ratio > maxRatio) {
        maxRatio = ratio;
        resultRole = role as Role;
      }
    });
    
    setResult(personalityTypes[resultRole]);
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setResult(null);
    setSelectedOption(null);
  };

  return {
    currentQuestionIndex,
    selectedOption,
    setSelectedOption,
    showResults,
    result,
    handleAnswer,
    restartQuiz,
    currentQuestion: quizQuestions[currentQuestionIndex],
    totalQuestions: quizQuestions.length,
    isLastQuestion: currentQuestionIndex === quizQuestions.length - 1
  };
};

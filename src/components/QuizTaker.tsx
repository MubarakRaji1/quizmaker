import React, { useState } from 'react';
import { Quiz } from '../types/quiz';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface QuizTakerProps {
  quiz: Quiz;
  onComplete: (result: { score: number; answers: { questionId: string; selectedAnswer: number }[] }) => void;
}

export function QuizTaker({ quiz, onComplete }: QuizTakerProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(quiz.questions.length).fill(-1)
  );

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleComplete = () => {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);

    onComplete({
      score,
      answers: quiz.questions.map((q, i) => ({
        questionId: q.id,
        selectedAnswer: selectedAnswers[i]
      }))
    });
  };

  const question = quiz.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{quiz.title}</h2>
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all"
            style={{
              width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">{question.text}</h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-indigo-600 bg-indigo-600'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedAnswers[currentQuestion] === index && (
                    <Check size={12} className="text-white" />
                  )}
                </div>
                {option}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          disabled={currentQuestion === 0}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={16} />
          Previous
        </button>
        {currentQuestion === quiz.questions.length - 1 ? (
          <button
            onClick={handleComplete}
            disabled={selectedAnswers.includes(-1)}
            className="flex items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Complete Quiz
            <Check size={16} />
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            disabled={selectedAnswers[currentQuestion] === -1}
            className="flex items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
import React from 'react';
import { Quiz } from '../types/quiz';
import { Check, X } from 'lucide-react';

interface QuizResultProps {
  quiz: Quiz;
  userAnswers: { questionId: string; selectedAnswer: number }[];
  score: number;
  onRetry: () => void;
  onNewQuiz: () => void;
}

export function QuizResult({ quiz, userAnswers, score, onRetry, onNewQuiz }: QuizResultProps) {
  const percentage = (score / quiz.questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="text-4xl font-bold text-indigo-600">{score}</div>
            <div className="text-xl text-gray-500">out of {quiz.questions.length}</div>
          </div>
          <div className="mt-2 text-lg">
            {percentage >= 80 ? (
              <span className="text-green-600">Excellent!</span>
            ) : percentage >= 60 ? (
              <span className="text-yellow-600">Good job!</span>
            ) : (
              <span className="text-red-600">Keep practicing!</span>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {quiz.questions.map((question, index) => {
            const userAnswer = userAnswers.find(a => a.questionId === question.id);
            const isCorrect = userAnswer?.selectedAnswer === question.correctAnswer;

            return (
              <div
                key={question.id}
                className={`p-4 rounded-lg ${
                  isCorrect ? 'bg-green-50' : 'bg-red-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 p-1 rounded-full ${
                      isCorrect ? 'bg-green-100' : 'bg-red-100'
                    }`}
                  >
                    {isCorrect ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <X className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">
                      Question {index + 1}: {question.text}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`p-2 rounded ${
                            optionIndex === question.correctAnswer
                              ? 'bg-green-100 text-green-800'
                              : optionIndex === userAnswer?.selectedAnswer
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-50'
                          }`}
                        >
                          {option}
                          {optionIndex === question.correctAnswer && (
                            <span className="ml-2 text-sm">(Correct Answer)</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onRetry}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Try Again
          </button>
          <button
            onClick={onNewQuiz}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Take Another Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
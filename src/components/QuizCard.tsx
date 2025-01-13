import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Quiz } from '../types/quiz';

interface QuizCardProps {
  quiz: Quiz;
  onTakeQuiz: (quizId: string) => void;
}

export function QuizCard({ quiz, onTakeQuiz }: QuizCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
        {quiz.title}
      </h3>
      <p className="text-gray-600 mb-4">{quiz.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {quiz.questions.length} questions
        </span>
        <button
          onClick={() => onTakeQuiz(quiz.id)}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
        >
          Take Quiz
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdBy: string;
  createdAt: Date;
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  answers: { questionId: string; selectedAnswer: number }[];
}
import React, { useState } from 'react';
import { BookOpen, PlusCircle, LogOut } from 'lucide-react';
import { Quiz, QuizResult } from './types/quiz';
import { User } from './types/user';
import { QuizForm } from './components/QuizForm';
import { QuizCard } from './components/QuizCard';
import { QuizTaker } from './components/QuizTaker';
import { QuizResult as QuizResultComponent } from './components/QuizResult';
import { AuthModal } from './components/auth/AuthModal';
import { mockQuizzes } from './data/mockQuizzes';

type View = 'home' | 'create' | 'take' | 'result';

function App() {
  const [view, setView] = useState<View>('home');
  const [quizzes, setQuizzes] = useState<Quiz[]>(mockQuizzes);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string, password: string) => {
    setUser({
      id: '1',
      email,
      name: email.split('@')[0]
    });
  };

  const handleRegister = (name: string, email: string, password: string) => {
    setUser({
      id: '1',
      email,
      name
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleCreateQuiz = (quizData: any) => {
    const newQuiz: Quiz = {
      id: String(quizzes.length + 1),
      ...quizData,
      createdBy: user?.id || 'anonymous',
      createdAt: new Date(),
      questions: quizData.questions.map((q: any, index: number) => ({
        id: String(index + 1),
        ...q
      }))
    };
    setQuizzes([...quizzes, newQuiz]);
    setView('home');
  };

  const handleTakeQuiz = (quizId: string) => {
    const quiz = quizzes.find(q => q.id === quizId);
    if (quiz) {
      setCurrentQuiz(quiz);
      setView('take');
    }
  };

  const handleQuizComplete = (result: { score: number; answers: { questionId: string; selectedAnswer: number }[] }) => {
    if (currentQuiz) {
      setQuizResult({
        quizId: currentQuiz.id,
        score: result.score,
        totalQuestions: currentQuiz.questions.length,
        answers: result.answers
      });
      setView('result');
    }
  };

  if (!user) {
    return (
      <AuthModal
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Quiz Master
            </h1>
            <p className="text-gray-600">MADE WITH ❤️ BY MUBARAK RAJI</p>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {user.name}</span>
              {view === 'home' && (
                <button
                  onClick={() => setView('create')}
                  className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  <PlusCircle size={20} />
                  Create Quiz
                </button>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {view === 'home' && (
          <div>
            {quizzes.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900">No quizzes</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new quiz.</p>
                <div className="mt-6">
                  <button
                    onClick={() => setView('create')}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-md text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  >
                    <PlusCircle className="-ml-1 mr-2 h-5 w-5" />
                    Create Quiz
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizzes.map(quiz => (
                  <QuizCard
                    key={quiz.id}
                    quiz={quiz}
                    onTakeQuiz={handleTakeQuiz}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {view === 'create' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Create New Quiz
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
              <QuizForm onSubmit={handleCreateQuiz} />
            </div>
          </div>
        )}

        {view === 'take' && currentQuiz && (
          <div 
            className="min-h-[calc(100vh-8rem)]"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm"></div>
            <div className="relative">
              <QuizTaker
                quiz={currentQuiz}
                onComplete={handleQuizComplete}
              />
            </div>
          </div>
        )}

        {view === 'result' && currentQuiz && quizResult && (
          <QuizResultComponent
            quiz={currentQuiz}
            userAnswers={quizResult.answers}
            score={quizResult.score}
            onRetry={() => {
              setQuizResult(null);
              setView('take');
            }}
            onNewQuiz={() => {
              setCurrentQuiz(null);
              setQuizResult(null);
              setView('home');
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface QuizFormProps {
  onSubmit: (quiz: {
    title: string;
    description: string;
    questions: {
      text: string;
      options: string[];
      correctAnswer: number;
    }[];
  }) => void;
}

export function QuizForm({ onSubmit }: QuizFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([{
    text: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  }]);

  const addQuestion = () => {
    setQuestions([...questions, {
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0
    }]);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, questions });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Quiz Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={3}
          required
        />
      </div>

      <div className="space-y-4">
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Question {qIndex + 1}
              </label>
              {questions.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeQuestion(qIndex)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>

            <input
              type="text"
              value={question.text}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[qIndex].text = e.target.value;
                setQuestions(newQuestions);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-4"
              placeholder="Enter your question"
              required
            />

            {question.options.map((option, oIndex) => (
              <div key={oIndex} className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  name={`correct-${qIndex}`}
                  checked={question.correctAnswer === oIndex}
                  onChange={() => {
                    const newQuestions = [...questions];
                    newQuestions[qIndex].correctAnswer = oIndex;
                    setQuestions(newQuestions);
                  }}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[qIndex].options[oIndex] = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder={`Option ${oIndex + 1}`}
                  required
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={addQuestion}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <Plus size={16} />
          Add Question
        </button>
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Quiz
        </button>
      </div>
    </form>
  );
}
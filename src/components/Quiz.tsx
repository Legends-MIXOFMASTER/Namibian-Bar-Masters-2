import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

const Quiz = () => {
  const { courseId, quizId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: 'Which glass is typically used for a Martini?',
      options: [
        'Martini glass',
        'Highball glass',
        'Old Fashioned glass',
        'Collins glass'
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: 'What is the main spirit in a Mojito?',
      options: [
        'Vodka',
        'Gin',
        'Rum',
        'Tequila'
      ],
      correctAnswer: 2
    }
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz Results</h2>
          <p className="text-xl mb-6">
            You scored {score} out of {questions.length}
          </p>
          {score === questions.length ? (
            <div className="flex items-center justify-center text-green-500 mb-6">
              <CheckCircle className="h-12 w-12" />
            </div>
          ) : (
            <div className="flex items-center justify-center text-red-500 mb-6">
              <XCircle className="h-12 w-12" />
            </div>
          )}
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResults(false);
            }}
            className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
          >
            Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Question {currentQuestion + 1}</h2>
            <span className="text-gray-500">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-amber-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        
        <h3 className="text-xl text-gray-900 mb-6">
          {questions[currentQuestion].question}
        </h3>
        
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-amber-600 hover:bg-amber-50 transition"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
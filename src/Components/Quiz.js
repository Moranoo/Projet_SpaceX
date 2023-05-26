import React, { useState, useEffect } from 'react';
import questionsData from '../data/quiz.json';

function Quiz({ restartQuiz, handleRestartQuiz }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const shuffle = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    const shuffledQuestions = shuffle(questionsData).slice(0, 10).map((question) => {
      return {
        ...question,
        answer: question.answer.toString()
      };
    });

    setQuestions(shuffledQuestions);
  }, [restartQuiz]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setShowResult(false);
    handleRestartQuiz();
  };

  if (showResult) {
    return (
      <div>
        <h2>Résultat</h2>
        <p>
          Votre score : {score} / {questions.length}
        </p>
        <button onClick={handleRestart}>Recommencer</button>
      </div>
    );
  }

  return (
    <div>
      {questions.length > 0 ? (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <button onClick={() => handleAnswerSelect('True')}>Vrai</button>
          <button onClick={() => handleAnswerSelect('False')}>Faux</button>
          <button onClick={handleNextQuestion} disabled={selectedAnswer === ''}>
            Question suivante
          </button>
        </div>
      ) : (
        <p>Chargement des questions...</p>
      )}
    </div>
  );
}

export default Quiz;

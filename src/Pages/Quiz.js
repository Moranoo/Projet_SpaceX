import React, { useState, useEffect } from 'react';
import Quiz from '../Components/Quiz';
import HomeQuiz from '../Components/HomeQuiz';
import quizzesData from '../data/quiz3.json';

function QuizPage() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [startQuiz, setStartQuiz] = useState(false);
  const [restartQuiz, setRestartQuiz] = useState(false);

  useEffect(() => {
    setStartQuiz(false);
    setRestartQuiz(false);
  }, [restartQuiz]);

  const handleStartQuiz = (quizId) => {
    setSelectedQuiz(quizId);
    setStartQuiz(true);
  };

  const handleRestartQuiz = () => {
    setRestartQuiz(true);
  };

  return (
    <div className="App">
      {startQuiz ? (
        <Quiz
          restartQuiz={restartQuiz}
          handleRestartQuiz={handleRestartQuiz}
          quizData={quizzesData.find((quiz) => quiz.id === selectedQuiz)}
        />
      ) : (
        <HomeQuiz handleStartQuiz={handleStartQuiz} quizzesData={quizzesData} />
      )}
    </div>
  );
}

export default QuizPage;

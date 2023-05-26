import React from 'react';
import quizzesData from '../data/quiz3.json';

function HomeQuiz({ handleStartQuiz }) {
  return (
    <div>
      <h2>Choisissez un quiz :</h2>
      {quizzesData.map((quiz) => (
        <button key={quiz.id} onClick={() => handleStartQuiz(quiz.id)}> Quiz
          {quiz.quizNumber}
        </button>
      ))}
    </div>
  );
}

export default HomeQuiz;

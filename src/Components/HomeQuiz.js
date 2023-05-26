import React from 'react';

function HomeQuiz({ handleStartQuiz }) {
  return (
    <div>
      <h2>Choisissez un quiz :</h2>
      <button onClick={() => handleStartQuiz(1)}>Quiz 1</button>
      <button onClick={() => handleStartQuiz(2)}>Quiz 2</button>
      <button onClick={() => handleStartQuiz(3)}>Quiz 3</button>
      <button onClick={() => handleStartQuiz(4)}>Quiz 4</button>
    </div>
  );
}

export default HomeQuiz;

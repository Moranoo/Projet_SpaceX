import React, { useState, useEffect } from 'react';
import questionsData from '../data/quiz.json';

function Quiz({ restartQuiz, handleRestartQuiz }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const quizz = questionsData.map((item) => {
    return {
      id: item.id,
      question: item.question,
      answer: item.answer,
    };
  });
  console.log(quizz);

//   const randomArray = Array.from(questionsData).forEach((v,i,a) => {
//     const r = a.length - 1 - Math.trunc(Math.random() * i);
//     [ a[i], a[r] ] = [ a[r], a[i] ];
//   });
//   console.log(randomArray);

//   useEffect(() => {
    
    // const shuffle = (array) => {
    //     for (var i = array.length - 1; i > 0; i--) {
    //       var j = Math.floor(Math.random() * (i + 1));
    //       var temp = array[i];
    //       array[i] = array[j];
    //       array[j] = temp;
    //     }
    //     return array
    //   };
      
//     const shuffledQuestions = shuffle(questionsData).slice(0, 10);
//     setQuestions(shuffledQuestions);
//     console.log(questions);
//   }, [restartQuiz]);

//   const shuffle = (array) => {
//     const shuffledArray = [...array];
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }
//     return shuffledArray;
//   };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
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
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].question}</p>
      <button onClick={() => handleAnswerSelect('True')}>Vrai</button>
      <button onClick={() => handleAnswerSelect('False')}>Faux</button>
      <button onClick={handleNextQuestion} disabled={selectedAnswer === ''}>
        Question suivante
      </button>
    </div>
  );
}

export default Quiz;

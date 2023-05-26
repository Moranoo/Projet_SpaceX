import React, { useState, useEffect } from 'react';
import quizData from '../data/quiz3.json';

function Quiz({ restartQuiz, handleRestartQuiz }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(20);
  const [resultMessage, setResultMessage] = useState('')

  useEffect(() => {
    const shuffle = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    const shuffledQuestions = shuffle(quizData[0].questions).slice(0, 10).map((question, index) => {
      return {
        ...question,
        id: index + 1,
        answer: question.answers.find((answer) => answer.correct === true).option

      };
    });



    setQuestions(shuffledQuestions);

  }, [restartQuiz]);

  useEffect(() => {
    let countdown;

    if (timer > 0 && currentQuestion < questions.length && !showResult) {
      countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0 && currentQuestion < questions.length && !showResult) {
      handleNextQuestion();
    }

    return () => clearTimeout(countdown);
  }, [timer, currentQuestion, questions, showResult]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    clearTimeout();

    if (selectedAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    setTimer(20);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }


    const handleRestart = () => {
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer('');
      setTimer(20);
      setShowResult(false);
      handleRestartQuiz();

      let newResultMessage;

      switch (score) {
        case 0:
          newResultMessage = "Vous n'avez obtenu aucun point. Essayez encore !"
          break
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          newResultMessage = `Vous avez obtenu ${score}/${questions.length} points. Vous pouvez faire mieux !`
          break;
        case 6:
        case 7:
        case 8:
        case 9:
          newResultMessage = `Vous avez obtenu ${score}/${questions.length} points. Bon travail !`
          break
        case 10:
          newResultMessage = `Vous êtes incroyable ! Vous avez obtenu un score parfait de ${score}/${questions.length} points !`
          break
        default:
          newResultMessage = ""
      }

      setResultMessage(newResultMessage)
    };


    return (

      <div>
        <h2>Résultat</h2>
        <p>
          Votre score : {score} / {questions.length}
        </p>
        <p>{resultMessage}</p>
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
          {questions[currentQuestion].answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswerSelect(answer.option)}>
              {answer.option}
            </button>
          ))}
          <p>Temps restant : {timer} s</p>
          <button onClick={handleNextQuestion} disabled={selectedAnswer === ''}>
            Question suivante
          </button>

        </div>
      )
        : (
          <p>Chargement des questions...</p>
        )}
    </div>
  );
}

export default Quiz

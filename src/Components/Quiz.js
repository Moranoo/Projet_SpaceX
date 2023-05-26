import React, { useState, useEffect } from 'react'
import questionsData from '../data/quiz.json'

function Quiz({ restartQuiz, handleRestartQuiz }) {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        const shuffledQuestions = shuffle(questionsData.question).slice(0, 10);
        setQuestions(shuffledQuestions);
    }, [restartQuiz]);
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer)
    }

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }

        setSelectedAnswer('')
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true)
        }
    }

    const handleRestart = () => {
        setCurrentQuestion(0)
        setScore(0)
        setSelectedAnswer('')
        setShowResult(false)
        handleRestartQuiz()
    }

    if (showResult) {
        return (
            <div>
                <h2>Résultat</h2>
                <p>
                    Votre score : {score} / {questions.length}
                </p>
                <button onClick={handleRestart}>Recommencer</button>
            </div>
        )
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
            {questions[currentQuestion].type === 'trueFalse' ? (
                <div>
                    <button onClick={() => handleAnswerSelect('True')}>Vrai</button>
                    <button onClick={() => handleAnswerSelect('False')}>Faux</button>
                </div>
            ) : (
                <div>
                    {questions[currentQuestion].options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleAnswerSelect(option)}
                            disabled={selectedAnswer !== ''}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
            <button onClick={handleNextQuestion} disabled={selectedAnswer === ''}>
                Question suivante
            </button>
        </div>
    )
}

export default Quiz

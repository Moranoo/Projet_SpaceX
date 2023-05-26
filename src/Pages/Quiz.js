import React, { useState, useEffect } from 'react'
import Quiz from '../Components/Quiz'
import HomeQuiz from '../Components/HomeQuiz'

function QuizPage() {
    const [selectedQuiz, setSelectedQuiz] = useState(null)
    const [startQuiz, setStartQuiz] = useState(false)
    const [restartQuiz, setRestartQuiz] = useState(false)

    useEffect(() => {
        setStartQuiz(false)
        setRestartQuiz(false)
    }, [restartQuiz])

    const handleStartQuiz = (quizNumber) => {
        setSelectedQuiz(quizNumber)
        setStartQuiz(true)
    }

    const handleRestartQuiz = () => {
        setRestartQuiz(true)
    }

    return (
        <div className='App'>
            {startQuiz ? (
                <Quiz
                    restartQuiz={restartQuiz}
                    handleRestartQuiz={handleRestartQuiz}
                    quizNumber={selectedQuiz}
                />
            ) : (
                <HomeQuiz handleStartQuiz={handleStartQuiz} />
            )}
        </div>
    )
}

export default QuizPage

import React, { useState, useEffect } from 'react'
import Quiz from '../Components/Quiz'
import HomeQuiz from '../Components/HomeQuiz'

function QuizPage() {
    const [startQuiz, setStartQuiz] = useState(false)
    const [restartQuiz, setRestartQuiz] = useState(false)

    useEffect(() => {
        setStartQuiz(false)
        setRestartQuiz(false)
    }, [restartQuiz])

    const handleStartQuiz = () => {
        setStartQuiz(true)
    }

    const handleRestartQuiz = () => {
        setRestartQuiz(true)
    }

    return (
        <div className='App'>
            {startQuiz ? (
                <Quiz restartQuiz={restartQuiz} handleRestartQuiz={handleRestartQuiz} />
            ) : (
                <HomeQuiz handleStartQuiz={handleStartQuiz} />
            )}
        </div>
    )
}

export default QuizPage

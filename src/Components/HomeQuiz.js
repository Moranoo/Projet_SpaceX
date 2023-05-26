import React from 'react'

function HomeQuiz({ handleStartQuiz }) {
    return (
        <div>
            <h1>Quiz sur l'exploration spatiale</h1>
            <p>Testez vos connaissances sur l'exploration spatiale !</p>
            <button onClick={handleStartQuiz}>Commencer le quiz</button>
        </div>
    )
}

export default HomeQuiz

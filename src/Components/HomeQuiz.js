import React from 'react';
import quizzesData from '../data/quiz3.json';
import Button from 'react-bootstrap/Button';

function HomeQuiz({ handleStartQuiz }) {
    return (
        <div>
            <h2>Choisissez un quiz :</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {quizzesData.map((quiz, index) => (
                    <Button
                        key={quiz.id}
                        onClick={() => handleStartQuiz(quiz.id)}
                        variant={index % 2 === 0 ? 'primary' : 'secondary'}
                        className="mb-2 me-2"
                        style={{ width: '150px' }}
                    >
                        Quiz {quiz.quizNumber}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default HomeQuiz;

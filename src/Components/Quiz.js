import React, { useState, useEffect } from 'react';
import quizData from '../data/quiz3.json';

function Quiz({ restartQuiz, handleRestartQuiz }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [timer, setTimer] = useState(20);
    const [resultMessage, setResultMessage] = useState('');
    const [resultImage, setResultImage] = useState('');

    useEffect(() => {
        const shuffle = (array) => {
            const shuffledArray = [...array];
            for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            return shuffledArray;
        };

        const shuffledQuestions = shuffle(quizData[0].questions)
            .slice(0, 10)
            .map((question, index) => {
                return {
                    ...question,
                    id: index + 1,
                    answer: question.answers.find((answer) => answer.correct === true).option,
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

    useEffect(() => {
        let newResultMessage = '';
        let newResultImage = '';

        switch (score) {
            case 0:
                newResultMessage = "Vous n'avez obtenu aucun point. Essayez encore !";
                newResultImage =
                    "https://img.freepik.com/photos-premium/image-drole-gars-pointant-votre-appareil-photo-montrant-signe-du-perdant-se-moquant-personne-qui-perd-debout-fond-rose_1258-40264.jpg?w=996";
                break;
            case 1:
            case 2:
            case 3:
            case 4:
                newResultMessage = "Message d'encouragement correspondant au score " + score;
                newResultImage = "https://pic.clubic.com/v1/images/2054130/raw";
                break;
            case 5:
                newResultMessage = "C'est juste, vous avez la moyenne !";
                newResultImage =
                    "https://m1.quebecormedia.com/emp/emp/3b6a1a70-565d-11ed-a887-31c8a11499e9_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=0&h=0&width=968";
                break;
            case 6:
            case 7:
            case 8:
                newResultMessage = "Message de bon travail correspondant au score " + score;
                newResultImage = "https://www.slate.fr/sites/default/files/styles/1060x523/public/32ha39p-highres.jpg";
                break;
            case 9:
                newResultMessage = "Message correspondant au score 9";
                newResultImage =
                    "https://leseng.rosselcdn.net/sites/default/files/dpistyles_v2/ls_16_9_864w/2022/08/17/node_460066/29363237/public/2022/08/17/B9731813797Z.1_20220817090645_000%2BGKKL2V2SJ.1-0.jpg?itok=UQUWuMAE1660720061";
                break;
            case 10:
                newResultMessage = "Félicitations, vous êtes un champion !";
                newResultImage = "https://media2.ledevoir.com/images_galerie/nwd_1450825_1113695/image.jpg";
                break;
            default:
                break;
        }

        setResultMessage(newResultMessage);
        setResultImage(newResultImage);
    }, [score]);

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
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer('');
        setTimer(20);
        setShowResult(false);
        handleRestartQuiz();
    };

    return (
        <div>
            {showResult ? (
                <div>
                    <h2>Résultat</h2>
                    <p>Votre score : {score} / {questions.length}</p>
                    <p>{resultMessage}</p>
                    <img src={resultImage} alt="Image drôle" className="responsive-image" />
                    <button className="btn btn-primary" onClick={handleRestart}>Recommencer</button>
                </div>
            ) : (
                <div>
                    {questions.length > 0 ? (
                        <div>
                            <h2>Question {currentQuestion + 1}</h2>
                            <p>{questions[currentQuestion].question}</p>
                            {questions[currentQuestion].answers.map((answer, index) => (
                                <button className="btn btn-primary" key={index} onClick={() => handleAnswerSelect(answer.option)}>
                                    {answer.option}
                                </button>
                            ))}
                            <p>Temps restant : {timer} s</p>
                            <button className="btn btn-primary" onClick={handleNextQuestion} disabled={selectedAnswer === ''}>
                                Question suivante
                            </button>
                        </div>
                    ) : (
                        <p>Chargement des questions...</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Quiz;
"use client";
import React, { useState } from "react";
import { quiz } from "./quizData.js";

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [showResult, setShowResult] = useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];
  const onAnswerSelected = (answer, idx) => {
    setChecked(true)
    setSelectedAnswerIndex(idx)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
      console.log(('true'))
    } else {
      setSelectedAnswer(false)
      console.log('false')
    }
  }

  const nextQuestion = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer ?
      {
        ...prev,
        score: prev.score + 5,
        correctAnswers: prev.correctAnswers + 1
      } : {
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }
    )
    if (activeQuestion !== questions.length -1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
    setChecked(false)
  }

  return (
    <div className="container bg-blue-800 w-full rounded-sm border-2 border-slate-700 flex-row">
      <div>
        <h1>Quiz</h1>
        <h2>
          Question {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion}>
              {activeQuestion === question.length - 1? 'Finish' : 'Next'}
              </button>
            ): (
              <button onClick={nextQuestion} disabled></button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p>Total Questions: <span>{questions.length}</span></p>
            <p>Correct Answers: <span>{result.correctAnswers}</span></p>
            <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}

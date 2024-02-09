"use client"
import React, { useState } from "react";
import { quiz } from "./quizData.js"
// import Question from "./Question";

export default function Quiz() {
  // const { activeQ, setActiveQ } = useState(0);
  // const { index, setIndex } = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [checked, setChecked] = useState(false)
  const [showResult, setShowResult] = useState(null)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const {questions} = quiz;
  const {question, answers, correctAnswer} = questions[activeQuestion]

  return (
    <div className="container">
    <div>
      <h1>Quiz</h1>
      <h2>Question {activeQuestion + 1}<span>/{questions.length}</span></h2>
      {/* <Question /> */}
    </div>
    <div>
      {!showResult ? (
      <div className="quiz-container">
        <h3>{questions[activeQuestion].question}</h3>
        {answers.map((answer, idx) => (
          <li 
            key={idx}
            className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}
          >
            <span>{answer}</span>
          </li>
        //   <li
        //    key={idx}
        //    className={
        //     selectedAnswerIndex === idx ? 'li-selected : 'li-hover'
        // }
        // >
        //     <span>{answer}</span>
        //   </li>
        ))}
      </div>
      ) : (
        <div className="quiz-container"></div>
      )}
    </div>
    </div>
  );
}

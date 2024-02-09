"use client";
import { quiz } from "../quizData.js";
import React, { useState } from "react";
import "../style.css"
import Quiz from "../Quiz";

export default function Page() {
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
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };
  return (
    <div className="w-full bg-blue-800 min-h-[100vh] flex-col text-left align-center m-0-auto text-center list-none pt-24 justify-center">
      {/* <Quiz /> */}
      <div className="card bg-slate-300 w-[70%] m-auto p-12 min-h-fit">
        <div className=" py-4 text-left m-auto">
          <h1 className="font-black text-blue-700 text-2xl">Quiz</h1>
          <h2 className="font-bold text-xl">
            Question {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
        </div>
        <div className="text-xl text-left">
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
                <button onClick={nextQuestion} className="next bg-slate-500 p-3 rounded-lg">
                  {activeQuestion === question.length - 1 ? "Finish" : "Next"}
                </button>
              ) : (
                <button onClick={nextQuestion} disabled></button>
              )}
            </div>
          ) : (
            <div className="quiz-container">
              <h3>Results</h3>
              <h3>Overall {(result.score / 25) * 100}%</h3>
              <p>
                Total Questions: <span>{questions.length}</span>
              </p>
              <p>
                Correct Answers: <span>{result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers: <span>{result.wrongAnswers}</span>
              </p>
              <button className="bg-slate-500 p-3 rounded-lg" onClick={() => window.location.reload()}>Restart</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

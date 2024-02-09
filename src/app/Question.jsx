"use client";
import React from "react";

export default function Question(props) {
  return (
    <div value={questions}>
      {/* <div className="question1"></div>
      <p className="question1" >"</p> */}
      {[
        {
          id: 1,
          question: "What's the full-meaning of HTML?",
          answers: [
            "HyperText Markup Language",
            "HyperTextual Makeup Language",
            "Hyperlink MLanguage",
          ],
          correctAnswer: "HyperText Markup Language",
        },
        {
          id: 2,
          question: "What's the full-meaning of HTML?",
          answers: [
            "HyperText Markup Language",
            "HyperTextual Makeup Language",
            "Hyperlink MLanguage",
          ],
          correctAnswer: "HyperText Markup Language",
        },
        {
          id: 3,
          question: "What's the full-meaning of HTML?",
          answers: [
            "HyperText Markup Language",
            "HyperTextual Makeup Language",
            "Hyperlink MLanguage",
          ],
          correctAnswer: "HyperText Markup Language",
        },
        {
          id: 4,
          question: "What's the full-meaning of HTML?",
          answers: [
            "HyperText Markup Language",
            "HyperTextual Makeup Language",
            "Hyperlink MLanguage",
          ],
          correctAnswer: "HyperText Markup Language",
        },
        {
          id: 5,
          question: "What's the full-meaning of HTML?",
          answers: [
            "HyperText Markup Language",
            "HyperTextual Makeup Language",
            "Hyperlink MLanguage",
          ],
          correctAnswer: "HyperText Markup Language",
        },
      ]}
    </div>
  );
}

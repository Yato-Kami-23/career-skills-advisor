import React, { useState } from "react";
import styles from "../css/AssessmentPage.module.css"; // Custom CSS

const questions = [
  "Do you enjoy working with numbers and data?",
  "Do you like solving technical problems?",
  "Are you more interested in creative writing or storytelling?",
  "Do you enjoy designing visuals or graphics?",
  "Do you like analyzing how systems or businesses work?",
  "Are you drawn towards teaching or mentoring others?",
  "Do you enjoy experimenting with technology and coding?",
  "Do you prefer organizing events or coordinating tasks?",
  "Do you enjoy research and finding new information?",
  "Do you like public speaking and communicating ideas?",
  "Are you interested in entrepreneurship or starting new projects?",
  "Do you enjoy teamwork and collaboration?",
];

export default function AssessmentPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (choice) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = choice;
    setAnswers(newAnswers);
  };

  const nextQ = () => {
    if (currentQ < questions.length - 1) setCurrentQ(currentQ + 1);
  };

  const prevQ = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <div className={`min-h-screen flex items-center justify-center ${styles.assessmentBg}`}>
      <div className="p-8 bg-white dark:bg-dark-indigo rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-dark-indigo dark:text-light-yellow">
          Skill Assessment
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6 dark:bg-gray-700">
          <div
            className="bg-dark-orchid h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question */}
        <p className="text-lg font-medium text-dark-indigo dark:text-light-honeymilk mb-6">
          {questions[currentQ]}
        </p>

        {/* Answer Choices */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handleAnswer("Yes")}
            className={`px-6 py-2 rounded-lg shadow ${answers[currentQ] === "Yes" ? "bg-dark-orchid text-white" : "bg-light-crystal dark:bg-dark-peach"} hover:opacity-90`}
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("No")}
            className={`px-6 py-2 rounded-lg shadow ${answers[currentQ] === "No" ? "bg-dark-orchid text-white" : "bg-light-fairy dark:bg-dark-plum"} hover:opacity-90`}
          >
            No
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={prevQ}
            disabled={currentQ === 0}
            className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-600 text-dark-indigo dark:text-light-honeymilk disabled:opacity-50"
          >
            Previous
          </button>
          {currentQ < questions.length - 1 ? (
            <button
              onClick={nextQ}
              className="px-4 py-2 rounded-lg bg-dark-orchid text-white hover:opacity-90"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => alert("Assessment Complete!")}
              className="px-4 py-2 rounded-lg bg-green-500 text-white hover:opacity-90"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

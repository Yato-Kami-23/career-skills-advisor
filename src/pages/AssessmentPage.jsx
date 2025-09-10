import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();

  // Store answer for the current question
  const handleAnswer = (choice) => {
  const newAnswers = [...answers];
  newAnswers[currentQ] = choice;
  setAnswers(newAnswers);

  // Auto move to next question if not the last one
  if (currentQ < questions.length - 1) {
    setTimeout(() => setCurrentQ(currentQ + 1), 300); // small delay so user sees the button press
  } else {
    finishAssessment(); // if it's the last question, finish
  }
};


  // Move to next question
  const nextQ = () => {
    if (currentQ < questions.length - 1) setCurrentQ(currentQ + 1);
  };

  // Move to previous question
  const prevQ = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  // Handle assessment completion
  const finishAssessment = () => {
    /* ------------------------------------------------------------------
     🚧 BACKEND DEVELOPER NOTE 🚧

     Here is where the collected `answers` should be sent to the backend
     for analysis and storage.

     Example placeholder code (replace later):
       fetch("/api/assessment/submit", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ answers }),
       })
       .then(res => res.json())
       .then(data => {
         // Handle response (store recommendations, roadmap, etc.)
       });

     The backend should:
       - Save answers linked to the logged-in user.
       - Process answers to suggest a career path/roadmap.
       - Return recommendations for the dashboard/chatbot.
    ------------------------------------------------------------------ */

    // TEMPORARY SOLUTION (Frontend Only)
    localStorage.setItem("assessmentAnswers", JSON.stringify(answers));

    setFinished(true); // show "Go to Chatbot" button
  };

  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <div className={`min-h-screen flex items-center justify-center ${styles.assessmentBg}`}>
      <div className="p-8 bg-white dark:bg-dark-indigo rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-dark-indigo dark:text-light-yellow">
          Skill Assessment
        </h1>

        {/* Progress Bar */}
<div className={`${styles.progressBar} mb-6`}>
  <div
    className={styles.progressFill}
    style={{ width: `${progress}%` }}
  ></div>
</div>


        {/* If finished, show completion message */}
        {finished ? (
          <div>
            <p className="text-lg font-medium text-dark-indigo dark:text-light-honeymilk mb-6">
              🎉 Assessment Complete! Your responses have been recorded.
            </p>
            <button
              onClick={() => navigate("/chatbot")}
              className="px-6 py-2 rounded-lg bg-dark-orchid text-white hover:opacity-90"
            >
              Go to Chatbot
            </button>
          </div>
        ) : (
          <>
            {/* Question */}
            <p className="text-lg font-medium text-dark-indigo dark:text-light-honeymilk mb-6">
              {questions[currentQ]}
            </p>

            {/* Answer Choices */}
<div className="flex justify-center gap-4 mb-6">
  <button
    onClick={() => handleAnswer("Yes")}
    className={`${styles.assessmentButton} ${styles.assessmentButtonYes} ${
      answers[currentQ] === "Yes" ? "ring-2 ring-indigo-500" : ""
    }`}
  >
    Yes
  </button>
  <button
    onClick={() => handleAnswer("No")}
    className={`${styles.assessmentButton} ${styles.assessmentButtonNo} ${
      answers[currentQ] === "No" ? "ring-2 ring-indigo-500" : ""
    }`}
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
              

            </div>
          </>
        )}
      </div>
    </div>
  );
}

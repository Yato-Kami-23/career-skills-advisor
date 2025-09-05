import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from '../css/HomePage.module.css'; // Import with styles object

export default function HomePage() {
  return (
    <div className={`min-h-screen flex flex-col ${styles.homepageGradient} text-dark-indigo dark:bg-dark-indigo dark:text-light-yellow transition-colors duration-500`}>
      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <main className="flex-grow p-8">
        {/* Intro Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-light-dreamy dark:text-dark-orchid">
            Unlock Your Career Potential
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-dark-indigo/80 dark:text-light-dreamy/80">
            We help you discover which skills matter, how those skills map to
            careers, and give practical steps to learn them. Use our assessment
            and chatbot to build a personalised plan.
          </p>
          <div className="mt-6 flex justify-center">
            <div className={`h-64 w-96 bg-light-fairy dark:bg-dark-peach rounded-lg flex items-center justify-center shadow-lg ${styles.imagePlaceholder}`}>
              <span className="text-dark-indigo dark:text-light-yellow">
                [ Insert Image Here ]
              </span>
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="bg-light-crystal dark:bg-dark-plum rounded-xl shadow-lg p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-dark-indigo dark:text-light-dreamy">
            Meet Our Chatbot
          </h3>
          <p className="text-dark-indigo/80 dark:text-light-yellow/80 mb-6">
            Our intelligent chatbot helps you decide which skills to focus on
            and explains why those skills matter for the future. It can
            recommend learning paths, resources, and how to level up
            step-by-step.
          </p>
          <button className={`bg-light-honey dark:bg-dark-orchid text-dark-indigo dark:text-light-yellow px-6 py-2 rounded-full shadow hover:opacity-90 transition ${styles.chatbotButtonHover}`}>
            Try the Chatbot
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
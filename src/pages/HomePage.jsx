import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../css/HomePage.module.css"; // import styles

export default function HomePage() {
  return (
    <div className={styles.homepageWrapper}>
      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <main className={styles.mainBody}>
        {/* Intro Section */}
        <section className={styles.introSection}>
          <h2 className={styles.introTitle}>
            Unlock Your Career Potential
          </h2>
          <p className={styles.introText}>
            We help you discover which skills matter, how those skills map to
            careers, and give practical steps to learn them. Use our assessment
            and chatbot to build a personalised plan.
          </p>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <span>[ Insert Image Here ]</span>
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className={styles.chatbotSection}>
          <h3 className={styles.chatbotTitle}>
            Meet Our Chatbot
          </h3>
          <p className={styles.chatbotText}>
            Our intelligent chatbot helps you decide which skills to focus on
            and explains why those skills matter for the future. It can
            recommend learning paths, resources, and how to level up
            step-by-step.
          </p>
          <button className={styles.chatbotButton}>
            Try the Chatbot
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import React from "react";
import styles from "../css/LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={`min-h-screen flex items-center justify-center ${styles.loginBackground}`}>
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${styles.loginCard}`}>
        <h1 className="text-3xl font-bold text-center mb-6 text-light-dreamy dark:text-dark-peach">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
          Login to continue exploring your career path
        </p>

        {/* Login Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className={`${styles.inputField}`}
          />
          <input
            type="email"
            placeholder="Email"
            className={`${styles.inputField}`}
          />
          <input
            type="text"
            placeholder="Your Hobbies"
            className={`${styles.inputField}`}
          />
          <input
            type="text"
            placeholder="Your Interests"
            className={`${styles.inputField}`}
          />
          <input
            type="text"
            placeholder="What are you studying?"
            className={`${styles.inputField}`}
          />
          <input
            type="text"
            placeholder="Skills you're interested in"
            className={`${styles.inputField}`}
          />

          <button
            type="submit"
            className={`${styles.submitButton}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

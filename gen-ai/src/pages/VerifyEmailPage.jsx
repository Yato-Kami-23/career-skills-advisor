import React from "react";
import styles from "../css/VerifyEmailPage.module.css"; // Import CSS module

export default function VerifyEmailPage() {
  return (
    <div className={`min-h-screen flex items-center justify-center ${styles.verifyBg}`}>
      <div className="p-8 bg-white dark:bg-dark-indigo rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-dark-indigo dark:text-light-yellow mb-4">
          Verify Your Email
        </h1>
        <p className="text-lg text-dark-indigo/80 dark:text-light-honeymilk/80 mb-6">
          We’ve sent you a verification link. Please check your inbox and click the link to activate your account.
        </p>
        <div className="mt-4">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Didn’t receive the email? <a href="#" className="text-dark-orchid dark:text-light-yellow underline hover:opacity-80">Resend</a>
          </span>
        </div>
      </div>
    </div>
  );
}

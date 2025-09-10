import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/LoginPage.module.css";

export default function LoginPage() {
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hobbies: "",
    interests: "",
    studying: "",
    skills: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    /* ------------------------------------------------------------------
     🚧 BACKEND DEVELOPER NOTE 🚧
     
     At this point, instead of using localStorage, you will:
       1. Send `formData` to a backend API (via fetch/axios).
       2. The backend should validate and save data to a database.
          - Example: POST /api/users/login
          - Payload: { name, email, hobbies, interests, studying, skills }
       3. Backend should return a response (user object / JWT token).
       4. Store token in localStorage or cookies for authentication.

     Example placeholder code (replace later):
       fetch("/api/users/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
       })
       .then(res => res.json())
       .then(data => {
         // save token / user data securely
         localStorage.setItem("user", JSON.stringify(data));
         navigate("/assessment");
       });
    ------------------------------------------------------------------ */

    // TEMPORARY SOLUTION (for frontend only)
    localStorage.setItem("userData", JSON.stringify(formData));

    // Redirect to Assessment page
    navigate("/assessment");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${styles.loginBackground}`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${styles.loginCard}`}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-light-dreamy dark:text-dark-peach">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
          Login to continue exploring your career path
        </p>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.inputField}`}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.inputField}`}
            required
          />
          <input
            type="text"
            name="hobbies"
            placeholder="Your Hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            className={`${styles.inputField}`}
          />
          <input
            type="text"
            name="interests"
            placeholder="Your Interests"
            value={formData.interests}
            onChange={handleChange}
            className={`${styles.inputField}`}
          />
          <input
            type="text"
            name="studying"
            placeholder="What are you studying?"
            value={formData.studying}
            onChange={handleChange}
            className={`${styles.inputField}`}
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills you're interested in"
            value={formData.skills}
            onChange={handleChange}
            className={`${styles.inputField}`}
          />

          <button type="submit" className={`${styles.submitButton}`}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

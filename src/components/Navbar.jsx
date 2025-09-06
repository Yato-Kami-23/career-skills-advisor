import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-light-dreamy dark:bg-dark-indigo text-dark-indigo dark:text-light-yellow">
      <div className="text-lg font-bold">Career Skills Advisor</div>
      <div className="flex gap-4">
        <Link to="/" className="hover:opacity-80">
          Home
        </Link>
        <Link to="/contact" className="hover:opacity-80">
          Contact
        </Link>
        <Link to="/login" className="hover:opacity-80">
          Login
        </Link>
        <Link to="/chatbot" className="hover:opacity-80">
          Chatbot
        </Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="px-2 py-1 border rounded bg-light-honey dark:bg-dark-orchid text-dark-indigo dark:text-light-yellow"
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

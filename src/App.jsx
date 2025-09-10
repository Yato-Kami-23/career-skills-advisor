import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import AssessmentPage from "./pages/AssessmentPage";
import ChatbotPage from "./pages/ChatbotPage";
import LoadingPage from "./pages/LoadingPage"; // <-- create this new component

// A wrapper that listens to route changes
function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loading when location changes
    setLoading(true);

    // Simulate loading delay (e.g., data fetch or page prep)
    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timeout);
  }, [location]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/assessment" element={<AssessmentPage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

import React, { useState } from "react";
import styles from "../css/ChatbotPage.module.css"; // Import CSS Module

export default function ChatbotPage() {
  // State to store chat messages (user + bot)
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Function triggered when user sends a message
  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    // Clear input
    setInput("");

    // ==== BACKEND DEVELOPER NOTE ====
    // Here, you would call the backend (API/LLM) with "input"
    // Example (pseudo-code):
    // fetch("/api/chat", { method: "POST", body: JSON.stringify({ query: input }) })
    //   .then(res => res.json())
    //   .then(data => {
    //      const botMessage = { sender: "bot", text: data.reply };
    //      setMessages(prev => [...prev, botMessage]);
    //   });
    // ================================
    
    // Temporary mock bot response for now:
    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: "This is a sample chatbot response!",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className={styles.chatbotWrapper}>
      <div className={styles.chatContainer}>
        {/* Chat History */}
        <div className={styles.chatHistory}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                msg.sender === "user" ? styles.userMessage : styles.botMessage
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className={styles.inputArea}>
          <input
            type="text"
            className={styles.chatInput}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()} // Send on Enter
          />
          <button onClick={handleSend} className={styles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

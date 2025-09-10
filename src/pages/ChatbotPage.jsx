import React, { useState } from "react";
import styles from "../css/ChatbotPage.module.css"; // Import CSS Module

export default function ChatbotPage() {
  // Chat history (list of conversations)
  const [chats, setChats] = useState([]); 
  const [activeChat, setActiveChat] = useState(null);

  // Messages in the current conversation
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Handle starting a new chat
  const handleNewChat = () => {
    // Save current chat if it exists
    if (messages.length > 0 && activeChat !== null) {
      const updatedChats = [...chats];
      updatedChats[activeChat] = messages;
      setChats(updatedChats);
    }

    // Start new empty chat
    setMessages([]);
    setActiveChat(chats.length);
    setChats([...chats, []]);
  };

  // Switch between old chats
  const handleSelectChat = (index) => {
    // Save current chat before switching
    if (messages.length > 0 && activeChat !== null) {
      const updatedChats = [...chats];
      updatedChats[activeChat] = messages;
      setChats(updatedChats);
    }

    setActiveChat(index);
    setMessages(chats[index] || []);
  };

  // Handle sending a message
  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");

    /* ----------------------------------------------------------------
     🚧 BACKEND DEVELOPER NOTE 🚧

     Integration plan:
     1. "New Chat":
        - Send a POST request to backend to create a new conversation.
        - Example: POST /api/chats -> returns chatId
        - Store chatId with messages in state.

     2. "Chat History":
        - Fetch from backend: GET /api/chats -> returns list of chat summaries
        - Example: [{ chatId: 1, title: "Career Path Advice" }, ...]

     3. "Select Chat":
        - Fetch messages: GET /api/chats/:chatId/messages
        - Replace local `messages` state with backend data.

     4. "Send Message":
        - POST /api/chats/:chatId/messages
          Payload: { text: userMessage }
        - Backend should:
          a) Save user message
          b) Query LLM / advisor engine
          c) Save bot response
          d) Return bot reply

        Example:
        fetch(`/api/chats/${chatId}/messages`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: input }),
        })
        .then(res => res.json())
        .then(data => {
          const botMessage = { sender: "bot", text: data.reply };
          setMessages(prev => [...prev, botMessage]);
        });

     ---------------------------------------------------------------- */

    // Temporary mock bot response
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
      {/* Sidebar for history */}
      <div className={styles.sidebar}>
        <button onClick={handleNewChat} className={styles.newChatButton}>
          + New Chat
        </button>
        <div className={styles.chatHistoryList}>
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`${styles.chatHistoryItem} ${
                index === activeChat ? styles.activeChat : ""
              }`}
              onClick={() => handleSelectChat(index)}
            >
              Chat {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
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

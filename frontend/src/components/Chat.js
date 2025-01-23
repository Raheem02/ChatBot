import React, { useState } from "react";
import axios from "axios";
import "./Chat.css"; // Import the CSS file for styling

const Chat = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMessage = { sender: "user", text: query };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post("http://127.0.0.1:5000/ask", { query });
      const botMessage = { sender: "bot", text: res.data.response || res.data.error };
      setMessages([...messages, userMessage, botMessage]);
    } catch (err) {
      const errorMessage = { sender: "bot", text: "Error fetching response." };
      setMessages([...messages, userMessage, errorMessage]);
    }

    setQuery("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>CDP Support Chatbot</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me how to do things in Segment, mParticle, Lytics, or Zeotap!"
          rows={2}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
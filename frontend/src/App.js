import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file for styling

function App() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = { sender: 'user', text: inputText };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post('http://127.0.0.1:5000/ask', { query: inputText });
      const botMessage = { sender: 'bot', text: res.data.response || res.data.error };
      setMessages([...messages, userMessage, botMessage]);
    } catch (err) {
      const errorMessage = { sender: 'bot', text: 'Error fetching response.' };
      setMessages([...messages, userMessage, errorMessage]);
    }

    setInputText('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>What can I help with?</h1>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Message ChatGPT"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSend} className="boton-elegante">Send</button>
      </div>
    </div>
  );
}

export default App;
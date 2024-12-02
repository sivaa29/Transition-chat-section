import React, { useState } from 'react';
import './AskCatura.css';

const AskCatura = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'Catura', text: 'Hello, how can I assist you today?' },
  ]);

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    if (question.trim()) {
      setMessages([
        ...messages,
        { sender: 'User', text: question },
        { sender: 'Catura', text: `You asked: "${question}". How can I help you with that?` },
      ]);
      setQuestion('');
    }
  };

  return (
    <div className="ask-catura">
      <h3>Ask Catura</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
            <span className="sender">{msg.sender}:</span>
            <p className="text">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="Ask a question..."
          className="question-input"
        />
        <button onClick={handleSubmit} className="submit-button">
          Ask
        </button>
      </div>
    </div>
  );
};

export default AskCatura;

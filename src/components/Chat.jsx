import React, { useState } from "react";
import "../scss/components/_chat.scss";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Retflix ID",
      text: "Hello! I am a Retflix ID support bot, a single account for logging into our services and applications.",
    },
    {
      sender: "Retflix ID",
      text: "Choose what you want to ask about:\n- Retflix ID: difficulties logging in, account management\n- Sub: you need to cancel your subscription or no points have been awarded\n- Mail: emails are not being sent or need help setting up mail\n- Password: it is not possible to restore the password\n- Player: movie/TV series won't start",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "User", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Support</div>
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "User" ? "user" : "bot"}`}
          >
            <span className="sender">{message.sender}</span>
            <p className="text">{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

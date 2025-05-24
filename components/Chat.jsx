import React, { useState } from "react";
import "../scss/components/_chat.scss";

import send from "../assets/img/send.svg";
import smile from "../assets/img/smile.svg";
import add from "../assets/img/add.svg";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Retflix ID",
      text: "Hello! I am a Retflix ID support bot, a single account for logging into our services and applications. Choose what you want to ask about:\n- Retflix ID: difficulties logging in, account management\n- Sub: you need to cancel your subscription or no points have been awarded\n- Mail: emails are not being sent or need help setting up mail\n- Password: it is not possible to restore the password\n- Player: movie/TV series won't start",
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
      <div className="chat-flex">
        <div className="chat-container-side">
          <div className="chat-header">
            <h4>Support</h4>
          </div>
          <div className="chat-container-side-block">
            <div></div>
            <div>
              <p>Retflix ID</p>
              <p>
                Hello! I am a Retflix ID support bot, a single account for
                logging into...
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="chat-header2">
            <div></div>
            <p>Retflix ID</p>
          </div>
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.sender === "User" ? "user" : "bot"
                }`}
              >
                <span className="sender">{message.sender}</span>
                <p className="text">{message.text}</p>
              </div>
            ))}
          </div>
          <div className="input-area">
            <img src={add} alt="" />
            <img src={smile} alt="" />
            <input
              type="text"
              placeholder="Message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {/* <button> */}
            <img onClick={handleSendMessage} src={send} alt="" />
            {/* </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

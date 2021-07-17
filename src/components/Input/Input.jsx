import React from "react";
import "./Input.css";
const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Type a messasge..."
        className="input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button
        type="submit"
        className="sendButton"
        onChange={(e) => sendMessage(e)}
      >Send</button>
    </form>
  );
};

export default Input;

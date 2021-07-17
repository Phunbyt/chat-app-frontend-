import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message'
import './Messages.css'
const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className='messages'>
      {messages.map((msg, i) => (
        <div key={i}>
          <Message msg={msg} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages

import React, { useState } from 'react';
import Chatbar from './Chatbar';
import Chatlog from './Chatlog';

function Chat() {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (message) => {
    // Add the message to the messages array
    setMessages([...messages, message]);
  };

  return (
    <div className="chat">
      <Chatlog messages={messages} />
      <Chatbar onSubmit={handleSubmit} />
    </div>
  );
}

export default Chat;

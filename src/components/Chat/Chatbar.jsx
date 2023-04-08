import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import Chatlog from './Chatlog';
import { addMessage } from '../Auth/firebase';

function Chatbar() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== '') {
      const message = { sender: 'student', text: input };
      setMessages([...messages, message]);
      setInput('');
      addMessage(message);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="chat-input-holder">
      <form
        className="fixed bottom-0 left-0 right-0 p-6 text-center"
        onSubmit={handleSubmit}
      >
        <textarea
          rows={1}
          className=" @apply @apply rows={1} w-[50%] rounded border-none bg-neutral-900 p-3
        font-body text-xl text-white shadow-[0_0_8px_0_rgb(0,0,0,0.45)] outline-none"
          placeholder="Type your message here"
          onChange={handleChange}
          value={input}
        />
        <button
          type="submit"
          className="text-primary hover:bg-primary/50 rounded p-4 "
        >
          <MdSend />
        </button>
      </form>
      <Chatlog messages={messages} />
    </div>
  );
}

export default Chatbar;

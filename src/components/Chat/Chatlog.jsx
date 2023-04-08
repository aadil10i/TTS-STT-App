import React from 'react';

function Chatlog(props) {
  const { messages } = props;

  return (
    <div className="chat-log">
      {messages.map((message, index) => (
        <div key={index} className={`chat-${message.sender}`}>
          <div className="">
            <div className="chat-message-center">
              <div className=" ml-auto mr-auto flex max-w-3xl bg-neutral-950  p-3 pl-6 pr-6 shadow-[0_0_8px_0_rgb(0,0,0,0.45)] ">
                <div className="avatar">
                  <div className="h-10 w-10 rounded-full font-body text-base font-bold text-white">
                    {message.sender === 'student' ? 'You' : 'Teacher'}:
                  </div>
                </div>
                <div className="message">
                  <div className=" pl-10 pr-10 font-body text-lg text-white">
                    {message.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chatlog;

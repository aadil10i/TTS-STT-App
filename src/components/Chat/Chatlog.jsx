import { useTeacherSpeech } from '../Auth/firebase';
import { useEffect, useRef, useState } from 'react';

function Chatlog(props) {
  const { messages } = props;
  const [teacherSpeech, previousTeacherSpeech] = useTeacherSpeech();

  return (
    <div className="chat-log">
      {messages.map((message, index) => (
        <div key={index} className={`chat-${message.sender}`}>
          <div className="">
            <div className="chat-message-center">
              <div className=" max-w-screen-3xl ml-auto mr-auto flex bg-neutral-900 p-3 pl-96  pr-6 ">
                <div className="avatar">
                  <div className="h-10 w-10 rounded-full py-0.5 pl-80 pr-6 font-body  text-base font-bold text-white">
                    {message.sender === 'student' ? 'You' : 'Teacher'}:
                  </div>
                </div>
                <div className="message">
                  <div className="pl-10 pr-10 font-body text-lg text-white">
                    {message.sender === 'teacher' ? (
                      <span style={{ color: 'green' }}>{message.text}</span>
                    ) : (
                      <span>{message.text}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {(teacherSpeech || previousTeacherSpeech) && (
        <div className="chat-teacher">
          <div className="">
            <div className="chat-message-center">
              <div className=" max-w-screen-3xl ml-auto mr-auto flex bg-neutral-700 p-3 pl-96  pr-6 ">
                <div className="avatar">
                  <div className="h-10 w-10 rounded-full py-0.5 pl-80 font-body text-base font-bold text-white">
                    Teacher:
                  </div>
                </div>
                <div className="message">
                  <div className=" pl-20 pr-10 font-body text-lg text-white">
                    <span style={{ color: 'green' }}>
                      {teacherSpeech || previousTeacherSpeech}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatlog;

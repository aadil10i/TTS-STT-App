// import Link from "next/link"
import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import ButtonContainer from './buttons/ButtonContainer.jsx';
import Conversations from './conversation/Conversations.jsx';

function ChatSidebar() {
  // const { clearConversations } = useOpenAI();
  return (
    <div className="fixed left-0 top-0 h-min w-56 bg-sidebar">
      <div className="flex h-full min-h-screen flex-col items-stretch p-2">
        <div
          href="/"
          className=" flex items-center gap-3 rounded border-2 border-white/20 p-2 font-body font-semibold text-white transition-colors hover:bg-gray-500/10"
        >
          <span className="pl-1 pr-1 font-body font-bold ">+</span>
          New chat
        </div>

        <div className="flex-grow">
          <Conversations />
        </div>

        <div className="flex flex-col py-12">
          <div className="flex flex-col gap-y-2 border-b border-white/10"></div>
          <ButtonContainer>
            <MdDeleteOutline className="text-white" />
            <h1 className="font-body text-white ">Clear Conversation</h1>
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
}

export default ChatSidebar;

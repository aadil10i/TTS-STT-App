// import Link from "next/link"
import React from "react"
import { MdDeleteOutline } from "react-icons/md";
import ButtonContainer from "./buttons/ButtonContainer.jsx"
import Conversations from "./conversation/Conversations.jsx"

function ChatSidebar() {
    // const { clearConversations } = useOpenAI();
    return (
      <div className="w-60 fixed h-min top-0 left-0 bg-sidebar">
        <div className="flex h-full flex-col min-h-screen items-stretch p-2">
          <div
            href="/"
            className="text-white flex items-center gap-3 rounded border border-white/20 p-3 transition-colors hover:bg-gray-500/10"
          >
            + New chat
          </div>
  
          <div className="flex-grow">
            <Conversations />
          </div>
  
          <div className="flex flex-col py-12">
            <div className="flex flex-col border-b border-white/10 gap-y-2"></div>
            <ButtonContainer>
              <MdDeleteOutline className="text-white" />
              <h1 className="text-white ">Clear Conversations</h1>
            </ButtonContainer>
          </div>
        </div>
      </div>
    );
  }
  
  export default ChatSidebar;
  
  
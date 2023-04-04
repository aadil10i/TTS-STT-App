// import Link from "next/link"
import React from "react"
import ChatInput from "./input/ChatInput";

function ChatBar() {
    // const { clearConversations } = useOpenAI();
    return (
      <div className="w-60 fixed h-min top-0 left-0 bg-sidebar">
        <ChatInput/>
      </div>
    );
  }
  
  export default ChatBar;
  
  
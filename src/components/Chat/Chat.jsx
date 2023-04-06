// import Link from "next/link"
import React from "react"
import ChatInput from "./input/ChatInput";

function ChatBar() {
    // const { clearConversations } = useOpenAI();
    return (
      <div className="ChatBox">
        <div className="ChatInput"></div>
        <ChatInput/>
      </div>
    );
  }
  
  export default ChatBar;
  
  
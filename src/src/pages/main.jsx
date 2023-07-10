// import { useState } from 'react'
import ChatSidebar from '../components/sidebar/sidebar.jsx';
import Chat from '../components/Chat/Chat.jsx';

function Main() {
  return (
    <div className="Main">
      <div>
        <ChatSidebar />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
}

export default Main;

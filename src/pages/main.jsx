// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import ChatSidebar from '../components/sidebar/sidebar.jsx'
import ChatBar from '../components/Chat/Chat.jsx'
import '../styles/main.css'

function Main() {
  return (
    <div className="Main">
      <div>
        <ChatSidebar/>
      </div>
      <div>
        <ChatBar/>
      </div>
    </div>
  )
}

export default Main

import ChatHeader from "./ChatHeader"
import "./css/Chat.css"
import React from 'react'

function Chat() {
  return (
    <div className="chat">
        <ChatHeader />

        <div className="chat__messages">

        </div>
        <div className="chat__input">
            
        </div>
    </div>
  )
}

export default Chat
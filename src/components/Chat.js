import { AddCircleRounded } from "@material-ui/icons"
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
            <AddCircleRounded fontSize="large" />
        </div>
    </div>
  )
}

export default Chat
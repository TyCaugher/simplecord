import { AddCircleRounded, SendRounded } from "@material-ui/icons"
import ChatHeader from "./ChatHeader"
import "./css/Chat.css"
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { selectChannelId, selectChannelName } from "../features/appSlice"
import firebase from 'firebase/compat/app';
import db from "../Firebase"
import { Button } from "@material-ui/core"
import Message from "./Message"

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("")
  }

  return (
    <div className="chat">
        <ChatHeader channelName={channelName} />

        <div className="chat__messages">
          {messages.map((message) => (
            <Message
              timestamp={message.timestamp}
              message={message.message}
              user={message.user}
            />
          ))}
        </div>
        <div className="chat__input">
            <AddCircleRounded fontSize="large" />
            <form>
              <input 
                value={input}
                disabled={!channelId}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message #${channelName}`}
              />
              <Button
                disabled={!channelId}
                type="submit"
                onClick={sendMessage}
              >
                Send Message
              </Button>
            </form>
        </div>
    </div>
  )
}

export default Chat
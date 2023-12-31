import { Avatar } from '@material-ui/core'
import "./css/Message.css"
import React from 'react'

function Message( { message, user, timestamp } ) {
  return (
    <div className='message'>
        <Avatar src={user.photo} />
        <div className='message__info'>
          <h4>
            {user.displayName}
            <span className='message__timestamp'>
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </h4>

          <p>{message}</p>
        </div>
    </div>
  )
}

export default Message
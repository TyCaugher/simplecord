import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import "./css/ChatHeader.css"
import React from 'react'

function ChatHeader( { channelName }) {
    

    return (
        <div className="chatHeader">
            <div className='chatHeader__left'>
                <h3>
                    <span className='chatHeader__hash'>#</span>
                    {channelName}
                </h3>
            </div>

            <div className='chatHeader__right'>
                <Notifications />
                <EditLocationRounded />
                <PeopleAltRounded />

                <div className='chatHeader__search'>
                    <input placeholder='Search' />
                    <SearchRounded />
                </div>

                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader
import React, { useEffect, useState }  from "react";
import "./css/Sidebar.css";
import db, { auth } from "../Firebase";
// for importing a db class i'll make in the future.
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add"; 
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../features/userSlice"
import { HeadsetRounded, MicNoneRounded, Settings, SignalCellular3Bar } from "@material-ui/icons";
import { useSelector } from "react-redux";

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection("channels").onSnapshot((snapshot) =>
        setChannels(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                channel: doc.data(),
            }))
        )
    );
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt("Enter channel name");
        // Add the channel to firestore collection.
        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            });
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Simplecord</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon /*onClick={handleAddChannel}*/ className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel />
                </div>
            </div>
            {/* Voice info on bottom of sidebar */}
            <div className="sidebar__voice">
                <SignalCellular3Bar 
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__profile">
                    <Avatar />
                    <div className="sidebar__profileInfo">
                        <h3>Kroren</h3>
                        <p>#8008</p>
                    </div>
                </div>
                <div className="sidebar__profileIcons">
                    <MicNoneRounded />
                    <HeadsetRounded />
                    <Settings />
                </div>
            </div>
        </div>);

} export default Sidebar;
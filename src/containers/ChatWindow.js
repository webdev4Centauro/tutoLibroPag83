import React from "react";
import Chats from "../components/Chats";
import store from "../store";
import _ from "lodash";
//import MessageInput from "./MessageInput";
import Header from "../components/Header";
//import { state } from "../static_data";
import "./ChatWindow.css";

const ChatWindow=({activeUserId})=>{
    const state= store.getState();
    const activeMessages=state.messages[activeUserId];
    const activeUser= state.contacts[activeUserId];
    return(
    <div className="ChatWindow"> 
        <Header user={activeUser}/>
        <Chats messages={_.values(activeMessages)} />
    </div>
    );
};

export default ChatWindow;
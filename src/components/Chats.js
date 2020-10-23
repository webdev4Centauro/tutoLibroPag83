import React, {Component} from "react";
import "./Chat.css";

const Chats=({ messages })=>{
    const {text, is_user_msg}= messages;
    return(
        <span className={`Chat ${ is_user_msg ? "is-user-msg" : ""}`}>
            {text}
        </span>
    )
}

// const Chats =({ messages }) =>{
//     return(
//         <div className="Chats">
//             {messages.map((message)=>(
//                 <Chat message={message} key={message.number}/>
//             ))}
//         </div>
//     )
// }

export default Chats
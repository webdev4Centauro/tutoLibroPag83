
import React from "react";
import "./Sidebar.css";
//import  {contacts}  from "./static_data";
import  User  from "./User";

const Sidebar=({contacts})=>{
    
    console.log(contacts.typeOf)
    return (
    <aside className="Sidebar">
        {
        contacts.map(contact =>
        <User user={contact}
        key={contact.user_id} />)}
    </aside>
    )
};

export  default Sidebar;            
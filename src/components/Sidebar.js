
import React from "react";
//import  {contacts}  from "./static_data";
import  User  from "../containers/User";
import "./Sidebar.css";
import _ from "lodash";


//const Sidebar=({contacts:{persons}})=>{
const Sidebar=({ contacts })=>{
    //console.log("ContactosAntesMap",contacts)
    //console.log("SIDEBARLOG",persons);
    return (
    <aside className="Sidebar">
        {
        contacts.map(person=>{
                    return <User user={person} key={person.user_id}></User>
           //return <User user={person} key={person.user_id></User>
          })
        }
    </aside>
    )
};

export  default Sidebar;            
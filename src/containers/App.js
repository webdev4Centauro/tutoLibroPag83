import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main.js';
import store from '../store';
import _ from "lodash";

const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  //alert(user);

  //console.log("CONTACTOS",contacts);
  //console.log(typeof arrayContactos);
  //console.log(contacts);

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      {/* <Sidebar contacts={_.values(contacts)}/> */}
      <Main user={user} activeUserId={activeUserId} />
    </div>
  )

};

export default App;

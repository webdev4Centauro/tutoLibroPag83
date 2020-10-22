import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {register} from './serviceWorker';
import store from './store';


const render=()=>{
  fancyLog();
  return ReactDOM.render(<App></App>, document.getElementById("root"));
}

render()
store.subscribe(render);
register();

function fancyLog(){
  console.log("%c Rendered with 👉👉👇", "backgound:purple; color:#FFF");
  console.log(store.getState());
}


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



//serviceWorker.unregister();


import {createStore} from "redux";
import reducer from "../reducers";
import {contacts} from "../static_data";

//console.log("INDEX", contacts);
const store=createStore(reducer);

export default store;
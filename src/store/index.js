
import {createStore} from "redux";
import reducer from "../reducers/contacts";
// import {contacts} from "../static_data";

const store=createStore(reducer);

export default store;
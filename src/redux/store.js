import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducer";


const reducerPuc = combineReducers({
    counterReducer
})

export let store = createStore(reducerPuc)
window.store = store
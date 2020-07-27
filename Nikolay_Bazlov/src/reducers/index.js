import chatsReducer from "./chatsReducer";
import profileReducer from "./profileReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
});

export default rootReducer;
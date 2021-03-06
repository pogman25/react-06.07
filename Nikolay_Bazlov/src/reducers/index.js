import chatsReducer from "./chatsReducer";
import { combineReducers } from "redux";
import profileReducer from "./profileReducer"
import messagesReducer from "./messagesReducer";

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
});

export default rootReducer;
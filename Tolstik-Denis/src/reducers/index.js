import { combineReducers } from 'redux';
import ChatsReducer from './ChatsReducer';

const rootReducer = combineReducers({
    chats: ChatsReducer
}); 

export default rootReducer;
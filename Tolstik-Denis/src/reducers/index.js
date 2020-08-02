import { combineReducers } from 'redux';
import ChatsReducer from './chatsReducer';
import PropfileReducer from './profileReducer';

const rootReducer = combineReducers({
    chats: ChatsReducer,
    profile: PropfileReducer,
}); 

export default rootReducer;
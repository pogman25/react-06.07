import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  profile: profileReducer,
});

export default rootReducer;

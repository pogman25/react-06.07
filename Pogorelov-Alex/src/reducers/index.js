import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
});

export default rootReducer;

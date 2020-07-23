import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  chats: chatsReducer,
  prof: profileReducer,
});

console.log(profileReducer);



export default rootReducer;

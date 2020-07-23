import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import chatsReducer from './reducers/chatsReducer';
import messagesReducer from './reducers/messagesReducer'
import logger from 'redux-logger';

const reducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger),
);


export const store = createStore(reducer, enhancer);

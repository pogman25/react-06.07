import { combineReducers } from 'redux';
import messagesReducer from './reducers/messagesReducer'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import chatsReducer from './reducers/chatsReducer';
import rootSaga from './saga';
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga)

export default store

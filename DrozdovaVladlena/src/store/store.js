import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import chatsReducer from './reducers/chatsReducer';
import messagesReducer from './reducers/messagesReducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const reducer = combineReducers({
  chats: chatsReducer,
  // messages: messagesReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger),
);

export default () => {
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};

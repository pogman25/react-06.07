import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import updatedMessages from './updatedMessage';

export default () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [updatedMessages, ...getDefaultMiddleware(), logger],
  });
  return { store };
};

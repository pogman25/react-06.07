import { createActions } from 'redux-actions';

export const { getChatsSuccess, addMessage } = createActions(
  'GET_CHATS_SUCCESS',
  'ADD_MESSAGE',
  {
    prefix: 'chats',
  },
);

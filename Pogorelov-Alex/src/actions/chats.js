import { createActions } from 'redux-actions';

export const { getChatsSuccess } = createActions('GET_CHATS_SUCCESS', {
  prefix: 'chats',
});

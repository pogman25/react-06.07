import { createAction } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';
import { BOT_NAME } from '../utils/constants';
import { getFullName } from '../selectors/profile';

// simple actions

export const chatsRequest = createAction('chats/request');
export const getChatsSuccess = createAction('chats/GET_CHATS_SUCCESS');
export const getChatsFailure = createAction('chats/GET_CHATS_FAILURE');
export const getChatsEnd = createAction('chats/GET_CHATS_END');
export const saveMessage = createAction('chats/ADD_MESSAGE');

export const getMessagesSuccess = createAction('messages/GET_MESSAGES_SUCCESS');

export const addUpdatedMessage = createAction('chats/ADD_UPDATED_MESSAGE');
export const deleteUpdatedMessage = createAction('chats/DELETE_UPDATED_MESSAGE');

// smart actions

export const addMessage = data => (dispatch, getState) => {
  const fullName = getFullName(getState());
  if (data.message.author !== BOT_NAME) {
    setTimeout(() => {
      dispatch(
        saveMessage({
          chatId: data.chatId,
          message: { author: BOT_NAME, text: 'Не приставай ко мне, я - бот!!!', id: uuidv4() },
        }),
      );
    }, 500);
  }

  dispatch(
    saveMessage({
      chatId: data.chatId,
      message: { author: fullName, ...data.message },
    }),
  );
};

export const sendChatsRequest = () => async dispatch => {
  dispatch(chatsRequest());

  // async/await
  try {
    const res = await fetch('/api/chats.json');
    const data = await res.json();
    dispatch(getMessagesSuccess(data.messages));
    dispatch(getChatsSuccess(data.chats));
  } catch (e) {
    dispatch(getChatsFailure());
  } finally {
    dispatch(getChatsEnd());
  }
};

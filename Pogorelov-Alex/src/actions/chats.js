import { createAction } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';
import { BOT_NAME } from '../utils/constants';
import { getFullName } from '../selectors/profile';

// simple actions

export const getChatsSuccess = createAction('chats/GET_CHATS_SUCCESS');
export const saveMessage = createAction('chats/ADD_MESSAGE');

// smart actions

export const addMessage = data => (dispatch, getState) => {
  const fullName = getFullName(getState());
  if (data.message.author !== BOT_NAME) {
    setTimeout(() => {
      dispatch(
        saveMessage({
          chatId: data.chatId,
          message: { author: BOT_NAME, text: 'привет, я Бот', id: uuidv4() },
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

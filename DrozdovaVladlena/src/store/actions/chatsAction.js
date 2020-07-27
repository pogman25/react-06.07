import { chatsConst } from '../constants/chatsConst';
import uuid from 'react-uuid';
import { BOT_NAME } from '../../utils/constants';


export const getChatsSuccess = payload => ({
  type: chatsConst.GET_CHATS_SUCCESS,
  payload,
});

export const addMessage = ({chatId, message}) => ({
  type: chatsConst.ADD_MESSAGE_SUCCESS,
  chatId,
  message
});

export const dellMessage = (chatId, id) => ({
  type: chatsConst.DELL_MESSAGE_SUCCESS,
  chatId,
  id
});

export const addChats = chat => ({
  type: chatsConst.ADD_CHAT_SUCCESS,
  chat
});

export const notification = chatId => ({
  type: chatsConst.NOTIF_CHAT_SUCCESS,
  chatId
});

export const addMessageChat = (data, chatId) => (dispatch) => {
  if (data.author !== BOT_NAME) {
    setTimeout(() => {
      dispatch(
      addMessage({
          chatId: chatId,
          message: { author: BOT_NAME, text: 'привет, я Бот', id: uuid()},
        }),
      );
      dispatch(notification(chatId))
      setTimeout(() => {
        dispatch(notification(chatId))
      },5000)
    }, 500)

  }
  dispatch(
    addMessage({
      chatId: chatId,
      message: {...data},
    }),
  );
}
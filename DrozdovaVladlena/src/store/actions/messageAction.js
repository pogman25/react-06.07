import { messagesConst } from '../constants/messageConst'

export const getMessagesSuccess = payload => ({
  type: messagesConst.GET_MESSAGE_SUCCESS,
  payload,
});

export const botAnswerSuccess = (id, chatId) => ({
  type: messagesConst.BOT_ANSWER_SUCCESS,
  id, chatId
});

export const addMessageUser = ({id, text, author}, chatId) => ({
  type: messagesConst.ADD_MESSAGE_SUCCESS,
  id, text, author,
  chatId
});




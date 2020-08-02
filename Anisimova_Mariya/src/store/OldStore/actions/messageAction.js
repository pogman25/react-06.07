import { messagesConst } from '../constants/messageConst'

export const getMessagesSuccess = payload => ({
  type: messagesConst.GET_MESSAGE_SUCCESS,
  payload,
});
import { chatsConst } from '../constants/chatsConst';

export const getChatsSuccess = payload => ({
  type: chatsConst.GET_CHATS_SUCCESS,
  payload,
});

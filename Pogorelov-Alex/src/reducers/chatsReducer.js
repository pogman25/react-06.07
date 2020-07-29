import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { getFullName } from '../selectors/profile';
import { BOT_NAME } from '../utils/constants';
import { getMessagesSuccess, saveMessage } from './messagesReducer';

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    byIds: {},
    ids: [],
    isFetching: false,
  },
  reducers: {
    chatsRequest: state => {
      state.isFetching = true;
    },
    getChatsSuccess: (state, { payload }) => {
      payload.forEach(item => {
        state.byIds[item.id] = item;
      });
      state.ids = payload.map(({ id }) => id);
    },
    saveMessageToChat: (state, { payload }) => {
      state.byIds[payload.chatId].messageList.push(payload.message.id);
    },
    getChatsEnd: state => {
      state.isFetching = false;
    },
  },
});
export const {
  chatsRequest,
  getChatsSuccess,
  saveMessageToChat,
  getChatsEnd,
} = chatsSlice.actions;

export const sendChatsRequest = () => async dispatch => {
  dispatch(chatsRequest());

  // async/await
  try {
    const res = await fetch('/api/chats.json');
    const data = await res.json();
    dispatch(getMessagesSuccess(data.messages));
    dispatch(getChatsSuccess(data.chats));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(getChatsEnd());
  }
};

export const addMessage = data => (dispatch, getState) => {
  const fullName = getFullName(getState());
  if (data.message.author !== BOT_NAME) {
    setTimeout(() => {
      const message = {
        chatId: data.chatId,
        message: { author: BOT_NAME, text: 'привет, я Бот', id: uuidv4() },
      };
      dispatch(saveMessage(message));
      dispatch(saveMessageToChat(message));
    }, 500);
  }

  const message = {
    chatId: data.chatId,
    message: { author: fullName, ...data.message },
  };

  dispatch(saveMessage(message));
  dispatch(saveMessageToChat(message));
};

export default chatsSlice.reducer;

import { createAction as  createApiAction } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import { v4 as uuidv4 } from "uuid";
import { config } from '../config';

export const GET_CHAT_START = "chats/GET_START";
export const getChatsStart = createAction(GET_CHAT_START);

export const GET_CHAT_SUCCESS = "chats/GET_SUCCESS";
export const getChatsSuccess = createAction(GET_CHAT_SUCCESS);

export const GET_CHAT_FAILURE = "chats/GET_FAILURE";
export const getChatsFailure = createAction(GET_CHAT_FAILURE);

export const ADD_CHAT_MESSAGE = "chats/ADD_CHAT_MESSAGE";
export const addChatMessage = createAction(ADD_CHAT_MESSAGE);

export const getChats = () => { return createApiAction({
    endpoint: `http://${config.api.host}:${config.api.port}/api/chats.json`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [GET_CHAT_START, GET_CHAT_SUCCESS, GET_CHAT_FAILURE]
  });
};

export const postChatMessage = (data) => (dispatch) => {
    if (data.message.author !== 'bot') {
      setTimeout(() => {
        dispatch(
            addChatMessage({chatId: data.chatId, message: {author: 'bot', message: "Hi there!!!", id: uuidv4()}})
        );
      }, 500);
    }
  
    dispatch(
        addChatMessage({chatId: data.chatId, message: {...data.message}})
    );  
};

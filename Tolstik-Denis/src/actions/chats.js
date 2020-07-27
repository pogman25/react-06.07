import { createAction } from 'redux-actions';

export const GET_CHAT_SUCCESS = "chats/GET_CHAT_SUCCESS";
export const getChatsSuccess = createAction(GET_CHAT_SUCCESS);

export const ADD_CHAT_MESSAGE = "chats/ADD_CHAT_MESSAGE";
export const addChatMessage = createAction(ADD_CHAT_MESSAGE);


/*
export const getChatsSuccess = () => {
    return {
        type: GET_CHAT_SUCCESS,
        payload: {
            1 : { chatId: 1, slug: "/chat/1", title: 'Chat 1', messages: []},
            2 : { chatId: 2, slug: "/chat/2", title: 'Chat 2', messages: []},
            3 : { chatId: 3, slug: "/chat/3", title: 'Chat 3', messages: []}     
        }
    }
};
*/

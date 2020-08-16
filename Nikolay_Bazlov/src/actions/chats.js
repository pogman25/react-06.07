import { createAction } from "redux-actions";
import {BOT_NAME} from "../utils/constants";
import {v4 as uuidv4} from "uuid";
import {getFullName} from "../selectors/profile";

export const getChatsSuccess = createAction("chats/GET_CHATS_SUCCESS");
export const saveMessage = createAction("chats/ADD_MESSAGE");
export const addUpdatedMessage = createAction("chats/ADD_UPDATED_MESSAGE");
export const deleteUpdatedMessage = createAction("chats/DELETE_UPDATED_MESSAGE");

export const addMessage = (data) => (dispatch, getState) => {
    const fullName = getFullName(getState());
    if (data.message.author !== BOT_NAME) {
        setTimeout(() => {
            dispatch(
                saveMessage({
                    chatId: data.chatId,
                    message: { author: BOT_NAME, text: "привет, я бот", id: uuidv4() }
                })
            );
        }, 500);
    }
    dispatch(
        saveMessage({
            chatId: data.chatId,
            message: { author: fullName, ...data.message }
        })
    );
    dispatch(
        addUpdatedMessage({data}),
        setTimeout(() => {
            deleteUpdatedMessage({data});
        }, 2000),
    )
};


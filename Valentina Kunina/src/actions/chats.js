import { createActions } from "redux-actions";

// eslint-disable-next-line import/prefer-default-export
export const { getChatsSuccess, addMessage } = createActions(
  "GET_CHATS_SUCCESS",
  "ADD_MESSAGE",
  {
    prefix: "chats",
  },
);

// Экшен без redux-actions
// Action (импортируются в редюсерах)
// export const GET_CHATS_SUCCESS = "chats/GET_CHATS_SUCCESS"; // название экшена

// Action Creators (импортируются в комп-тах)
// export const getChatsSuccess = (data) => ({
//   type: GET_CHATS_SUCCESS,
//   payload: data, // то, что ожидаем получить
// });

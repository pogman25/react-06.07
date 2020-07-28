import { createAction } from "redux-actions";

export const getChatsSuccess = createAction("chats/GET_CHATS_SUCCESS", )

// Экшен без redux-actions
// export const GET_CHATS_SUCCESS = "chats/GET_CHATS_SUCCESS"; // название экшена

// export const getChatsSuccess = () => ({
//   type: GET_CHATS_SUCCESS,
//   payload: [
//     {
//       id: "1",
//       to: "/chats/1",
//       title: "Chat 1",
//     },
//     {
//       id: "2",
//       to: "/chats/2",
//       title: "Chat 2",
//     },
//     {
//       id: "3",
//       to: "/chats/3",
//       title: "Chat 3",
//     },
//   ],
// });

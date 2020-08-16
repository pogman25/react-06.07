import { handleActions } from "redux-actions";
import { getChatsSuccess, addMessage } from "../actions/chats";

const initialStore = {
  byIds: {},
  ids: [],
  messagesByIds: {},
  messagesIds: [],
};

const reducer = handleActions(
  {
    [getChatsSuccess]: (store, { payload }) => ({
      ...store,
      byIds: payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {}),
      ids: payload.map(({ id }) => id),
    }),
    [addMessage]: (store, { payload }) => ({
      ...store,
      byIds: {
        ...store.byIds,
        [payload.chatId]: {
          ...store.byIds[payload.chatId],
          messageList: [
            ...store.byIds[payload.chatId].messageList,
            payload.message,
          ],
        },
      },
    }),
  },
  initialStore,
);

// const reducer = (store = initialStore, action) => {
//   switch (action.type) {
//     case GET_CHATS_SUCCESS:
//       return action.payload;
//     default:
//       return store;
//   }
// };

export default reducer;

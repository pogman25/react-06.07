import { handleActions } from "redux-actions";
import { getChatsSuccess } from "../actions/chats";

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
      list: payload,
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

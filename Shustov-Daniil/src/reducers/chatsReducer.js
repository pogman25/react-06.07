import { handleActions } from 'redux-actions';
import { getChatsSuccess, saveMessage } from '../actions/chats';

const initialStore = {
  byIds: {},
  ids: [],
};

const reducer = handleActions(
  {
    [getChatsSuccess]: (store, { payload }) => ({
      ...store,
      byIds: payload.reduce((sum, item) => {
        sum[item.id] = item;
        return sum;
      }, {}),
      ids: payload.map(({ id }) => id),
    }),
    [saveMessage]: (store, { payload }) => ({
      ...store,
      byIds: {
        ...store.byIds,
        [payload.chatId]: {
          ...store.byIds[payload.chatId],
          messageList: [...store.byIds[payload.chatId].messageList, payload.message],
        },
      },
    }),
  },
  initialStore,
);

export default reducer;
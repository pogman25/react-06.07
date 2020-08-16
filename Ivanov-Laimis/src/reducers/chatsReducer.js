import { handleActions } from 'redux-actions';
import { getChatsSuccess, saveMessage, chatsRequest, getChatsEnd } from '../actions/chats';

const initialStore = {
  byIds: {},
  ids: [],
  isFetching: false,
};

const reducer = handleActions(
  {
    [chatsRequest]: store => ({ ...store, isFetching: true }),
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
          messageList: [...store.byIds[payload.chatId].messageList, payload.message.id],
        },
      },
    }),
    [getChatsEnd]: store => ({ ...store, isFetching: false }),
  },
  initialStore,
);

export default reducer;

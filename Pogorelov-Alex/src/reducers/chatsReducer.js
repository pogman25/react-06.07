import { handleActions } from 'redux-actions';
import produce from 'immer';
import { getChatsSuccess, saveMessage } from '../actions/chats';

const initialStore = {
  byIds: {},
  ids: [],
};

const reducer = handleActions(
  {
    [getChatsSuccess]: (store, { payload }) =>
      produce(store, draft => {
        payload.forEach(chat => {
          draft.byIds[chat.id] = chat;
        });
        draft.ids = Object.keys(draft.byIds);
      }),
    [saveMessage]: (store, { payload }) =>
      produce(store, draft => {
        draft.byIds[payload.chatId].messageList.push(payload.message);
      }),
  },
  initialStore,
);

export default reducer;

import { handleActions } from 'redux-actions';
import { getChatsSuccess } from '../actions/chats';

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
      list: payload,
    }),
  },
  initialStore,
);

export default reducer;
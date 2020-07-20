import { handleActions } from 'redux-actions';
import { getChatsSuccess } from '../actions/chats';

const initialStore = {
  list: [],
};

const reducer = handleActions(
  {
    [getChatsSuccess]: (store, { payload }) => ({ ...store, list: payload }),
  },
  initialStore,
);

export default reducer;

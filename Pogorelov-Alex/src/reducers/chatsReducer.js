import { GET_CHATS_SUCCESS } from '../actions/chats';

const initialStore = [];

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case GET_CHATS_SUCCESS:
      return action.payload;
    default:
      return store;
  }
};

export default reducer;

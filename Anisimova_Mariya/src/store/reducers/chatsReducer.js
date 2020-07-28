import { chatsConst } from '../constants/chatsConst';

const initialStore = {
  byIds: {},
  ids: [],
  list: []
};

const chatsReducer = (store = initialStore, action) => {
  switch (action.type) {
    case chatsConst.GET_CHATS_SUCCESS:
      return {
        ...store,
        byIds: action.payload.reduce((count, item) => {
          count[item.id] = item;
          return count;
        }, {}),
        ids: action.payload.map(({ id }) => id),
        list: action.payload
      };
    // case chatsConst.ADD_CHAT_SUCCESS:
    //     return {...store, }
    default:
      return store;
  }
};

export default chatsReducer;
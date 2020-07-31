import { chatsConst } from '../constants/chatsConst';

const initialStore = {
  byIds: {},
  ids: [],
  notification: {state: false, id: ''}
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
      };
      case chatsConst.ADD_MESSAGE_SUCCESS:
        return {
          ...store,
          byIds: {
            ...store.byIds,
            [action.chatId]: {
              ...store.byIds[action.chatId],
              messageList: [...store.byIds[action.chatId].messageList, action.message]
            }
          }
      }
      case chatsConst.DELL_MESSAGE_SUCCESS:
        return {
          ...store,
          byIds: {
            ...store.byIds,
            [action.chatId]: {
              ...store.byIds[action.chatId],
              messageList: [...store.byIds[action.chatId].messageList.filter(item => item.id !== action.id)]
            }
          }
      }
      case chatsConst.ADD_CHAT_SUCCESS:
        return {
          ...store,
          byIds: { ...store.byIds, [(+(action.chatId) + 1).toString()]: {id: (+(action.chatId) + 1).toString(), messageList: [], slug: `/chat/${+(action.chatId) + 1}`, title: action.chat}},
          ids: [...store.ids, (+(action.chatId) + 1).toString()],
        };
      case chatsConst.NOTIF_CHAT_SUCCESS:
        return {
          ...store,
          notification: {state: !store.notification.state, id: action.chatId}
        }
      
    // case chatsConst.ADD_CHAT_SUCCESS:
    //     return {...store, }
    default:
      return store;
  }
};

export default chatsReducer;
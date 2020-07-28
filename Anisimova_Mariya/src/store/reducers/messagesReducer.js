import { messagesConst } from '../constants/messageConst';

const initialStore = {
  byIds: {}
};

const messagesReducer = (store = initialStore, action) => {
  switch(action.type) {
    case messagesConst.GET_MESSAGE_SUCCESS:
      return {
        ...store,
        byIds: action.payload.reduce((count, item) => {
          count[item.id] = item.messageList;
          return count;
        }, {})
      }
    case messagesConst.BOT_ANSWER_SUCCESS:
      return {
        ...store, byIds: {...store.byIds, [action.chatId]: [...store.byIds[action.chatId], {id: action.id, text: 'Привет от бота', author: 'bot'}]}
    }
    case messagesConst.ADD_MESSAGE_SUCCESS:
      return {
        ...store, byIds: {...store.byIds, [action.chatId]: [...store.byIds[action.chatId], {id: action.id, text: action.text, author: action.author}]}
      }
    default:
      return store
  }
};

export default messagesReducer
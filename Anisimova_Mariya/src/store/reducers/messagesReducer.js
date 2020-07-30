import { messagesConst } from '../constants/messageConst';

const initialStore = {
  byIds: {}
};

const messagesReducer = (store = initialStore, action) => {
//   switch(action.type) {
//     case messagesConst.GET_MESSAGE_SUCCESS:
//       return {
//         ...store,
//         byIds: action.payload.reduce((count, item) => {
//           count[item.id] = item.messageList;
//           return count;
//         }, {})
//       }
//     default:
//       return store
//   }
};

export default messagesReducer;
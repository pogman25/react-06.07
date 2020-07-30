import { handleActions } from 'redux-actions';
import { addChatMessage, getChatsSuccess } from '../actions/chats';

const initialStore = {}

const reducer = handleActions({
    [getChatsSuccess]: (store, { payload }) => ({...store, ...payload}),
    [addChatMessage]: (store, { payload }) =>{
        const {chatId, message} = payload;
                
        /*
        let newStore = {...store};
        let chat = newStore[chatId];
        chat.messages = [...chat.messages, message];
        */
        return {...store,
            [chatId]: {...store[chatId],
                messages: [...store[chatId].messages, message]
            }
        };
    }
}, initialStore);



export default reducer;
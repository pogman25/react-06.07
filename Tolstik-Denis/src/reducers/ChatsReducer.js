import { handleActions } from 'redux-actions';
import { addChatMessage, getChatsSuccess } from '../actions/chats';

const initialStore = {}

/*
const reducer = (store = initialStore, action) => {
    switch(action.type) {
        case GET_CHAT_SUCCESS:
            return action.payload;
        default:
            return store;
    }
};
*/

const reducer = handleActions({
    [getChatsSuccess]: (store, { payload }) => ({...store, ...payload}),
    [addChatMessage]: (store, { payload }) =>{
        const {chatId, message} = payload;
                
        let newStore = {...store};
        let chat = newStore[chatId];
        chat.messages = [...chat.messages, message];
        console.log(newStore, 'addChatMessage chat');
        
        return {...store};
    }
}, initialStore);



export default reducer;
import { handleActions } from 'redux-actions';
import { addChatMessage, getChatsStart, getChatsSuccess, getChatsFailure } from '../actions/chats';

const initialStore = {list: {}, isLoading: false, loadingErr: null}

const reducer = handleActions({
    [getChatsStart]: (store, { payload }) => ({...store, list: {}, isLoading: true, loadingErr: null}),
    [getChatsSuccess]: (store, { payload }) => ({...store, list: payload, isLoading: false, loadingErr: null}),
    [getChatsFailure]: (store, { payload }) => ({...store, list: {}, loadingErr: payload, isLoading: false}),
    [addChatMessage]: (store, { payload }) =>{
        const {chatId, message} = payload;
                
        return {...store,
            [chatId]: {...store[chatId],
                messages: [...store[chatId].messages, message]
            }
        };
    }
}, initialStore);



export default reducer;
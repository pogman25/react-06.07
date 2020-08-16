import Axios from 'axios'
import { getChats, getChatsSuccess, getChatsError, addChats, addChatsError, dellChats } from '../reducers/chatsReducer'
import { takeEvery, call, put } from 'redux-saga/effects'

export function* watchChats() {
    yield takeEvery(getChats.type, fetchChats)
    yield takeEvery(addChats.type, addChatNew)
    yield takeEvery(dellChats.type, deleteChat)
}

function* fetchChats(){
    try {
        const data = yield call(() => Axios.get('http://localhost:3000/chats')
            .then(response => response)
            .catch(err => console.error(err))
        )
        yield put(getChatsSuccess(data.data))
    } catch(err) {
        console.error(err)
        yield put(getChatsError())
    } 
}

function* addChatNew(action){
    try {
        yield call(() => Axios.post('http://localhost:3000/chats/', {title: action.payload, slug: `/chats/`}))
        yield put(getChats())
    } catch(err) {
        console.error(err)
        yield put(addChatsError())
    } 
}

function* deleteChat(action){
    const [chatId] = action.payload
    try {
        yield call(() => Axios.delete(`http://localhost:3000/chats/${chatId}`))
        yield put(getChats())
    } catch(err) {
        console.error(err)
        yield put(dellChatsError())
    } 
}
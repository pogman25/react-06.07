import { takeEvery, call, put } from "redux-saga/effects";
import { getMessages, addMessage, dellMessage, getMessageSuccess, getMessageError, dellMessageError, addMessageBot, addMessageBotError } from "../reducers/messagesReducer";
import Axios from "axios";

export function* watchMessage() {
    yield takeEvery (getMessages.type, fetchMessages)
    yield takeEvery (addMessage.type, addMessageNew)
    yield takeEvery (dellMessage.type, deleteMessage)
    yield takeEvery (addMessageBot.type, addMessageBotAnswer)
}

function* fetchMessages() {
    try{
        const data = yield call(() => Axios.get('http://localhost:3000/messages')
            .then(response => response)
            .catch(err => console.error(err)))
        yield put(getMessageSuccess(data.data))
    } catch(err) {
        console.error(err)
        yield put(getMessageError())
    }
}

function* addMessageNew(action) {
    const {...message} = action.payload.message
    const [chatId] = action.payload.chatId
    try{
        yield call(() => Axios.post('http://localhost:3000/messages', {text: message.text, author: message.author, idUser: chatId}))
        yield put(getMessages())
    } catch(err){
        console.error(err)
        yield put(addMessageError())
    }
}

function* addMessageBotAnswer(action) {
    const [chatId] = action.payload
    try{
        yield call(() => Axios.post('http://localhost:3000/messages', {text: 'i am bot', author: 'Bot', idUser: chatId}))
        yield put(getMessages())
    } catch(err){
        console.error(err)
        yield put(addMessageBotError())
    }
}

function* deleteMessage(action) {
    try{
        yield call(() => Axios.delete(`http://localhost:3000/messages/${action.payload}`))
        yield put(getMessages())
    } catch(err) {
        console.error(err)
        yield put(dellMessageError())
    }
}
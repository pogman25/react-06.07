import { all, spawn } from 'redux-saga/effects'
import * as chatsSaga from './chatsSaga'
import * as messageSaga from './messageSaga'

export default function* rootSaga() {
    yield all([
      spawn(chatsSaga.watchChats),
      spawn(messageSaga.watchMessage)
    ])
  } 
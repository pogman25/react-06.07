import chatReduser from './chatReducer'
import { combineReducers } from 'redux'

const rootReduser = combineReducers({
    chat: chatReduser,
})

export default rootReduser;
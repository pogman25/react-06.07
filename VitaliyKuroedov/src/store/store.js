import { createStore } from 'redux'
import rootReduser from '../redusers'

const store = createStore(rootReduser)

export default store
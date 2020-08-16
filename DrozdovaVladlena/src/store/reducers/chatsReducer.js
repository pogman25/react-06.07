import { createSlice } from '@reduxjs/toolkit'
import produce from 'immer'

const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    chats: []
  },
  reducers: {
    getChats: (state) => ({...state}),
    getChatsSuccess: (state, action) => {
      const [ ...payload ] = action.payload
      return produce(state, draft => {
        payload.forEach(item => {
          draft.chats.push({...item, slug: item.slug + item.id})
        });
      })
      // return { ...state, chats: payload.map(item => ({...item, slug: item.slug+item.id}))}
    },
    getChatsError: (state) => ({...state}),
    addChats: (state) => ({...state}),
    addChatsError: (state) => ({...state}),
    dellChats: (state) => ({...state}),
    dellChatsError: (state) => ({...state})
  }
})

export const {getChats, getChatsSuccess, getChatsError, addChats, addChatsError, dellChats, dellMessageError} = chatsSlice.actions
const chatsReducer = chatsSlice.reducer
export default chatsReducer

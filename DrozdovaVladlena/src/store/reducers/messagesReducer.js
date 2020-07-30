import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: []
  },
  reducers: {
    getMessages: (state) => ({...state}),
    getMessageSuccess:(state, action) => {
      const [...payload] = action.payload
      return {...state, messages: payload}
    }, 
    getMessageError: (state) => ({...state}),
    addMessage: (state) => ({...state}),
    addMessageError: (state) => ({...state}),
    addMessageBot: (state) => ({...state}),
    addMessageBotError: (state) => ({...state}),
    dellMessage: (state) => ({...state}),
    dellMessageError: (state) => ({...state})
  }

})
export const {
  getMessages,
  getMessageSuccess,
  getMessageError,
  addMessage,
  addMessageError,
  addMessageBot,
  addMessageBotError,
  dellMessage,
  dellMessageError
} = messageSlice.actions

const messagesReducer = messageSlice.reducer
export default messagesReducer;

import { createReducer, createAction } from '@reduxjs/toolkit';

export const getMessagesSuccess = createAction('messages/GET_MESSAGES_SUCCESS');
export const addUpdatedMessage = createAction('messages/ADD_UPDATED_MESSAGE');
export const deleteUpdatedMessage = createAction('messages/DELETE_UPDATED_MESSAGE');
export const saveMessage = createAction('messages/SAVE_MESSAGE');

const initialStore = {
  byIds: {},
  ids: [],
  updated: [],
};

const reducer = createReducer(initialStore, {
  [getMessagesSuccess]: (store, { payload }) => {
    payload.forEach(item => {
      store.byIds[item.id] = item;
    });
    store.ids = payload.map(({ id }) => id);
  },
  [saveMessage]: (store, { payload }) => {
    store.byIds[payload.message.id] = payload.message;
    store.ids.push(payload.message.id);
  },
  [addUpdatedMessage]: (store, { payload }) => {
    store.updated.push(payload);
  },
  [deleteUpdatedMessage]: (store, { payload }) => {
    store.updated = store.updated.filter(i => i !== payload);
  },
});

export default reducer;

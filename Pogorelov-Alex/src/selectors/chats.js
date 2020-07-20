/* eslint-disable import/prefer-default-export */

export const getChats = (store, chatId) => {
  const currentChat = store.chats.list.find(({ id }) => id === chatId);
  if (currentChat) {
    return currentChat;
  }
  return {
    title: '',
    messageList: [],
  };
};

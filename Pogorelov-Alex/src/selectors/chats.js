export const getChats = (store, chatId) => {
  return store.chats.find(({ id }) => id === chatId);
};

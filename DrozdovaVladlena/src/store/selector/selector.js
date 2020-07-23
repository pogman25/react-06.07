export const getPageChat = (store, chatId) => {
  const currentChat = store.chats.byIds[chatId];
  if (currentChat) {
    return currentChat;
  }
  return {
    title: '',
  };
};

export const getAllChats = ({ chats }) => {
  const { ids, byIds } = chats;
  return ids.map(id => byIds[id]);
};


export const getMessages = (store, chatId) => {
  return store.messages.byIds[chatId]
}
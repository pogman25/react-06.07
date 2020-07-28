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
  return store.chats.byIds[chatId].messageList
}

export const getNotification = (store) => {
  return store.chats.notification
}
export const getPageChat = (store, chatId) => {
  const [...chats] = store.chats.chats
  const currentChat = chats.filter(item => {if (chatId === item.id) return item.id});
  if (currentChat.length) {
    return currentChat[0];
  }
  return {
    title: '',
  };
};

export const getAllChats = (store) => {
  const { chats } = store.chats;
  return chats;
};


export const getMessages = (store, chatId) => {
  const [...messages] = store.messages.messages
  return messages.filter(item => item.idUser === chatId)
}

export const getNotification = (store) => {
  return store.chats.notification
}
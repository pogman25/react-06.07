export const getMessagesByIds = store => {
  return store.messages.byIds;
};

export const getChats = (store, chatId) => {
  const currentChat = store.chats.byIds[chatId];
  const messagesByIds = getMessagesByIds(store);
  if (currentChat) {
    return {
      ...currentChat,
      messageList: currentChat.messageList.map(id => messagesByIds[id]),
    };
  }
  return {
    title: '',
    messageList: [],
  };
};

export const getAllChats = store => {
  const { ids, byIds } = store.chats;
  const messagesByIds = getMessagesByIds(store);
  return ids.map(id => ({
    ...byIds[id],
    messageList: byIds[id].messageList.map(messageId => messagesByIds[messageId]),
  }));
};

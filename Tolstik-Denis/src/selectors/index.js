

export const getChatMessages = (store, chatId) => {
    return store.chats[chatId] ? store.chats[chatId] : {};
}

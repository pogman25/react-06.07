

export const getChatMessages = (store, chatId) => {
    return store.chats.list[chatId] ? store.chats.list[chatId] : {};
}

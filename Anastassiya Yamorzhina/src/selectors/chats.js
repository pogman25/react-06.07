export const getChats = (store, chatId) => {
    const currentChat = store.chats.byIds[chatId];
    if (currentChat) {
        return currentChat;
    }
    return {
        title: '',
        messageList: [],
    };
};

export const getAllChats = ({ chats }) => {
    const { ids, byIds } = chats;
    return ids.map(id => byIds[id]);
};

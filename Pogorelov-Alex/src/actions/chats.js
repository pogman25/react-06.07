export const GET_CHATS_SUCCESS = 'chats/GET_CHATS_SUCCESS';

export const getChatsSuccess = () => ({
  type: GET_CHATS_SUCCESS,
  payload: [
    { id: '1', title: 'Chat 1', slug: '/chats/1' },
    { id: '2', title: 'Chat 2', slug: '/chats/2' },
  ],
});

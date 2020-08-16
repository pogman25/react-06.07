const GET_CHATS_SUCCESS = 'chats/GET_CHATS_SUCCESS'

const getChatsSuccess = () => ({
    type: GET_CHATS_SUCCESS,
    payload: [`${uuid()}`]

})
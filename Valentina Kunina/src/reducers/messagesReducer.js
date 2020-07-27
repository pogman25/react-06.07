import { handleActions } from "redux-actions";
import { getChatsSuccess } from "../actions/chats";

const initialStore = {};

const reducer = handleActions({}, initialStore);

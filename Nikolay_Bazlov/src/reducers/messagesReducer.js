import { handleActions } from "redux-actions";
import {saveMessage} from "../actions/chats";

const initialStore = {
    byIds: {},
    ids: [],
};

const reducer = handleActions({
    [saveMessage]: (store, { payload }) => ({...store}),
    },
    initialStore
);

export default reducer;
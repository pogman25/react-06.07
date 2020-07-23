import { handleActions } from "redux-actions";
import { getProfileSuccess } from "../actions/profile";

const initialStore = {
    list: [],
};

const reducer = handleActions(
    {
        [getProfileSuccess]: (store, {payload}) => ({...store, list: payload}),
    },
    initialStore,
);

export default reducer;

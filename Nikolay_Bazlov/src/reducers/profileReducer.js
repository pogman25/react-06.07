import { handleAction } from "redux-actions";

const initReducer = {
    name: "Kolya",
    lastName: "Bazlov",
};

const reducer = handleAction("", state => state, initReducer);

export default reducer;


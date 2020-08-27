import { handleAction } from "redux-actions";

const initReducer = {
  name: "Ivan",
  lastName: "Ivanov",
};

const reducer = handleAction("", state => state, initReducer);

export default reducer;

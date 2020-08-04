import { handleAction } from 'redux-actions';

const initReducer = {
  name: 'Ivan',
  lastName: 'Boychenko',
};

const reducer = handleAction('', state => state, initReducer);

export default reducer;

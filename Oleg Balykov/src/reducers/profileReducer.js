import { handleAction } from 'redux-actions';

const initReducer = {
  name: 'Alex',
  lastName: 'Pog',
};

const reducer = handleAction('', state => state, initReducer);

export default reducer;
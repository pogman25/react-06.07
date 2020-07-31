import { handleAction } from 'redux-actions';

const initReducer = {
  name: 'Kseniia',
  lastName: 'Pomortseva',
};

const reducer = handleAction('', state => state, initReducer);

export default reducer;

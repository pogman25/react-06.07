import { handleAction } from 'redux-actions';

const initReducer = {
  name: 'Daniil',
  lastName: 'Shustov',
};

const reducer = handleAction('', state => state, initReducer);

export default reducer;
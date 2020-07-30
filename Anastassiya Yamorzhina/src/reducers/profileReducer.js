import { handleAction } from 'redux-actions';

const initReducer = {
    name: 'Anastassiya',
    lastName: 'A',
};

const reducer = handleAction('', state => state, initReducer);

export default reducer;

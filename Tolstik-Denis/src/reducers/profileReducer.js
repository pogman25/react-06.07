import { handleActions } from 'redux-actions';
import { getProfileStart, getProfileSuccess, getProfileFailure } from '../actions/profile';

const initialStore = { data: {firstName: "", surName: ""}, isLoading: false, loadingErr: null}

const reducer = handleActions({
    [getProfileStart]: (store, { payload }) => ({...store, data: {firstName: "", surName: ""}, isLoading: true, loadingErr: null}),
    [getProfileSuccess]: (store, { payload }) => ({...store, data: payload, isLoading: false, loadingErr: null}),
    [getProfileFailure]: (store, { payload }) => ({...store, data: {firstName: "", surName: ""}, loadingErr: payload, isLoading: false}),
}, initialStore);

export default reducer;


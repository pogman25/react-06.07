import { createAction as  createApiAction } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import { config } from '../config';

export const GET_PROFILE_START = "profile/GET_START";
export const getProfileStart = createAction(GET_PROFILE_START);

export const GET_PROFILE_SUCCESS = "profile/GET_SUCCESS";
export const getProfileSuccess = createAction(GET_PROFILE_SUCCESS);

export const GET_PROFILE_FAILURE = "profile/GET_FAILURE";
export const getProfileFailure = createAction(GET_PROFILE_FAILURE);

export const getProfile = () => { return createApiAction({
    endpoint: `http://${config.api.host}:${config.api.port}/api/profile.json`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [GET_PROFILE_START, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE]
  });
};


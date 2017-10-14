import * as types from './actionTypes';
import {
    getUserProfileAsync
} from './api';
import { CACHE_USER_NAME } from '../Common/constants';


/**
 * Action(thunk) to fetch 'User Profile'.
 */
export const getUserProfile = (username) => (dispatch) => {
    return getUserProfileAsync(username).then((response) => {
        //Set the User Profile
        dispatch(setUserProfile(response.data));
    }).catch(error => {
        //For any invalid user profile data or for any kind of error handling.
        dispatch(userErrorMessage(error.response.data.message));
    });
};

/**
 * Action to set 'User Profile'.
 */
export const setUserProfile = (profile) => {
    return {
        type: types.SET_USER_PROFILE,
        profile
    };
};

/**
 * Action to set 'User Name'.
 */
export const setUserName = (username) => {
    sessionStorage.setItem(CACHE_USER_NAME, username);
    return {
        type: types.SET_USER_NAME,
        username
    };
};

/**
 * Action to set the error message for error handling.
 */
export const userErrorMessage = (message) => {
    return {
        type: types.SET_USER_ERROR_MESSAGE,
        message
    }
};
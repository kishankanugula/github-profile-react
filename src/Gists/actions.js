import * as types from './actionTypes';
import {
    getUserGistsAsync,
    getGistContentAsync
} from './api';

/**
 * Action(thunk) to fetch 'Gists' for User.
 */
export const getUserGists = (username) => (dispatch) => {
    if(username) {
        return getUserGistsAsync(username).then((response) => {
            //Set the 'Gists' data.
            dispatch(setUserGists(response.data));
        }).catch(error => {
            //For any invalid user data or for any kind of error handling.
            dispatch(userGistsErrorMessage(error.response.data.message));
        });
    }
};

/**
 * Action(thunk) to fetch particular Gist(gistId) content.
 */
export const getGistContent = (gistId) => (dispatch) => {
    if(gistId) {
        return getGistContentAsync(gistId).then((response) => {
            dispatch(setGistContent(response.data));
        });
    }
};

/**
 * Action to set 'Gists' for User.
 */
export const setUserGists = (userGists) => {
    return {
        type: types.SET_USER_GISTS,
        userGists
    };
};

/**
 * Action to set the error message for error handling.
 */
export const userGistsErrorMessage = (message) => {
    return {
        type: types.SET_USER_GISTS_ERROR_MESSAGE,
        message
    };
};

/**
 * Action to set the 'Gist' content.
 */
export const setGistContent = (content) => {
    return {
        type: types.SET_GIST_CONTENT,
        content
    }
};
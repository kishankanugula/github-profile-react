import * as types from './actionTypes';

const initialState = {
    profile: {},
    username: '',
    errorMessage: ''
};

/**
 * Reducer to manage the Gists State
 */
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case types.SET_USER_NAME:
            return {...state, username: action.username, errorMessage: ''};
        case types.SET_USER_ERROR_MESSAGE:
            return {...state, errorMessage: action.message};
        default:
            return state;
    }
};

export default userReducer;
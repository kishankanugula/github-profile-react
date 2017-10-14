import * as types from './actionTypes';

const initialState = {
    userGists: [],
    content: {},
    errorMessage: ''
};

/**
 * Reducer to manage the Gists State
 */
const gistReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_USER_GISTS:
			return {...state, userGists: action.userGists};
		case types.SET_GIST_CONTENT:
			return {...state, content: action.content};
        case types.SET_USER_GISTS_ERROR_MESSAGE:
            return {...state, errorMessage: action.message};
		default:
            return state;
	}
};

export default gistReducer;
import * as types from './actionTypes';

const initialState = {
	userRepositories: [],
    commits: [],
	errorMessage: ''
};

/**
 * Reducer to manage the Repository State
 */
const repositoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_USER_REPOSITORIES:
			return {...state, userRepositories: action.repositories};
		case types.SET_REPOSITORY_COMMITS:
			return {...state, commits: action.commits};
		case types.SET_USER_REPOSITORIES_ERROR_MESSAGE:
			return {...state, errorMessage: action.message};
		default:
            return state;
	}
};

export default repositoryReducer;
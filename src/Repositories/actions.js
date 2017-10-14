import * as types from './actionTypes';
import {
  getUserRepositoriesAsync,
  getRepositoryCommitsAsync
} from './api';

/**
 * Action(thunk) to fetch User 'Repositories'.
 */
export const getUserRepositories = (username) => (dispatch) => {
    if(username) {
        return getUserRepositoriesAsync(username).then((response) => {
            //Set the Repositories
            dispatch(setUserRepositories(response.data));
        }).catch(error => {
            //Set the error message for any invalid user data.
            dispatch(userRepositoriesErrorMessage(error.response.data.message));
        });
    }
};

/**
 * Action(thunk) to fetch Repository Commits for User.
 */
export const getRepositoryCommits = (username, repoName, since) => (dispatch) => {
    if(username) {
        return getRepositoryCommitsAsync(username, repoName, since).then((response) => {
            //Set the Repository Commits.
            dispatch(setRepositoryCommits(response.data));
        });
    }
};

/**
 * Action to set 'Repositories' data for User.
 */
export const setUserRepositories = (repositories) => {
  return {
    type: types.SET_USER_REPOSITORIES,
    repositories
  };
};

/**
 * Action to set the error message for error handling.
 */
export const userRepositoriesErrorMessage = (message) => {
    return {
        type: types.SET_USER_REPOSITORIES_ERROR_MESSAGE,
        message
    };
};

/**
 * Action to set 'Commits' for Repository .
 */
export const setRepositoryCommits = (commits) => {
    return {
        type: types.SET_REPOSITORY_COMMITS,
        commits
    }
};
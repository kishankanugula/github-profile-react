import * as types from './actionTypes';
import repositoryReducer from './reducer';

describe('Repositories Reducer', () => {
    const initialState = {
        userRepositories: [],
        commits: [],
        errorMessage: ''
    };
    it(types.SET_USER_REPOSITORIES, () => {
        const userRepositories = [{id:1, name:'repository name 1'}, {id:2, name:'repository name 2'}];
        const newState = repositoryReducer(initialState, {type:types.SET_USER_REPOSITORIES, repositories: userRepositories});
        expect(newState.userRepositories).toEqual(userRepositories);
    });

    it(types.SET_USER_REPOSITORIES_ERROR_MESSAGE, () => {
        const message = "Not Found";
        const newState = repositoryReducer(initialState, {type:types.SET_USER_REPOSITORIES_ERROR_MESSAGE, message});
        expect(newState.errorMessage).toEqual(message);
    });

    it(types.SET_REPOSITORY_COMMITS, () => {
        const commits = [{id:1, name:'commit name 1'}, {id:2, name:'commit name 2'}];
        const newState = repositoryReducer(initialState, {type:types.SET_REPOSITORY_COMMITS, commits});
        expect(newState.commits).toEqual(commits);
    });
});
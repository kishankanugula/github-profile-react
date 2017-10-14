import * as types from './actionTypes';
import repositoryReducer from './reducer';

describe('User Profile Reducer', () => {
    const initialState = {
        fetchInProgress: true,
        profile: {},
        username: '',
        errorMessage: ''
    };
    it(types.SET_USER_NAME, () => {
        const username = "Test Name";
        const newState = repositoryReducer(initialState, {type:types.SET_USER_NAME, username});
        expect(newState.username).toEqual(username);
    });

    it(types.SET_USER_PROFILE, () => {
        const profile = {name: 'test'};
        const newState = repositoryReducer(initialState, {type:types.SET_USER_PROFILE, profile});
        expect(newState.profile).toEqual(profile);
    });

    it(types.SET_USER_ERROR_MESSAGE, () => {
        const message = "Not Found";
        const newState = repositoryReducer(initialState, {type:types.SET_USER_ERROR_MESSAGE, message});
        expect(newState.errorMessage).toEqual(message);
    });
});
import * as types from './actionTypes';
import gistReducer from './reducer';

describe('Gists Reducer', () => {
    const initialState = {
        userGists: [],
        content: {},
        errorMessage: ''
    };
    it(types.SET_USER_GISTS, () => {
        const userGists = [{id:1, name:'gist name 1'}, {id:2, name:'gist name 2'}];
        const newState = gistReducer(initialState, {type:types.SET_USER_GISTS, userGists: userGists});
        expect(newState.userGists).toEqual(userGists);
    });

    it(types.SET_USER_GISTS_ERROR_MESSAGE, () => {
        const message = "Not Found";
        const newState = gistReducer(initialState, {type:types.SET_USER_GISTS_ERROR_MESSAGE, message});
        expect(newState.errorMessage).toEqual(message);
    });

    it(types.SET_GIST_CONTENT, () => {
        const content = {code: 'html code'};
        const newState = gistReducer(initialState, {type:types.SET_GIST_CONTENT, content});
        expect(newState.content).toEqual(content);
    });
});
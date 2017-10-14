import * as types from './actionTypes';

describe('Gists Action Types', () => {
    it('Should Create actiontypes for all kinds of actions', () => {
        expect(types.SET_USER_GISTS).toEqual('GISTS.USER_GISTS');
        expect(types.SET_GIST_CONTENT).toEqual('GISTS.CONTENT');
        expect(types.SET_USER_GISTS_ERROR_MESSAGE).toEqual('GISTS.USER_GISTS_ERROR');
    });
});
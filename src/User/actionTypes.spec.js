import * as types from './actionTypes';

describe('Repositories Action Types', () => {
    it('Should Create actiontypes for all kinds of actions', () => {
        expect(types.SET_USER_PROFILE).toEqual('USER.PROFILE');
        expect(types.SET_USER_NAME).toEqual("USER.NAME");
        expect(types.SET_USER_ERROR_MESSAGE).toEqual("USER.USER_ERROR_MESSAGE");
    });
});
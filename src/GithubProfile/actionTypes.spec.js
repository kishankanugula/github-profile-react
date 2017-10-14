import * as types from './actionTypes';

describe('Github Profile Action Types', () => {
    it('Should Create actiontypes for all kinds of actions', () => {
        expect(types.SET_SELECTED_TAB_INDEX).toEqual('TAB.SELECTED_INDEX');
    });
});
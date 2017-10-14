import * as types from './actionTypes';

describe('Repositories Action Types', () => {
    it('Should Create actiontypes for all kinds of actions', () => {
        expect(types.SET_USER_REPOSITORIES).toEqual('REPOSITORY.USER_RESPOSITORIES');
        expect(types.SET_USER_REPOSITORIES_ERROR_MESSAGE).toEqual('REPOSITORY.USER_REPO_ERROR_MESSAGE');
        expect(types.SET_REPOSITORY_COMMITS).toEqual('REPOSITORY.COMMITS');
    });
});
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { GITHUB_USERS_API, GITHUB_REPOS_API } from '../Common/constants';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);

describe('Repositories Actions List', () => {

    afterEach(() => {
        mock.reset();
    });

    it('Should Create an action to fetch the user repositories', () => {
        const userName = "mocktest";
        const repositories = [{name: 'test'}];
        mock.onGet(`${GITHUB_USERS_API}/${userName}/repos`).reply(200, repositories);
        const expectedAction = {
            type: actionTypes.SET_USER_REPOSITORIES,
            repositories
        };
        const store = mockStore({ repositories: [] });

        return store.dispatch(actions.getUserRepositories(userName)).then(() => {
            expect(store.getActions()).toEqual([expectedAction])
        });
    });

    it('Should Create an action to handle error on fetching the user repositories', () => {
        const userName = "3453454";
        const message = "Not Found";
        mock.onGet(`${GITHUB_USERS_API}/${userName}/repos`).reply(500 , { message });
        const expectedAction = {
            type: actionTypes.SET_USER_REPOSITORIES_ERROR_MESSAGE,
            message
        };
        const store = mockStore({ repositories: [] });

        return store.dispatch(actions.getUserRepositories(userName)).then(() => {
            expect(store.getActions()).toEqual([expectedAction])
        });
    });

    it('Should Create an action to fetch the user repository commits', () => {
        const userName = "mockusername";
        const repoName = 'mockrepository';
        const commits = [{commit: 'test'}];

        mock.onGet(`${GITHUB_REPOS_API}/${userName}/${repoName}/commits`).reply(200, commits);
        const expectedAction = {
            type: actionTypes.SET_REPOSITORY_COMMITS,
            commits
        };
        const store = mockStore({ commits: [] });

        return store.dispatch(actions.getRepositoryCommits(userName, repoName)).then(() => {
            expect(store.getActions()).toEqual([expectedAction])
        });
    });

    it('Should Create an action to set the user repositories', () => {
        const repositories = [{name: 'test'}];
        const expectedAction = {
            type: actionTypes.SET_USER_REPOSITORIES,
            repositories
        };
        expect(actions.setUserRepositories(repositories)).toEqual(expectedAction);
    });

    it('Should Create an action to set the user repositories fetch error messsage', () => {
        const message = "User Not Found";
        const expectedAction = {
            type: actionTypes.SET_USER_REPOSITORIES_ERROR_MESSAGE,
            message
        };
        expect(actions.userRepositoriesErrorMessage(message)).toEqual(expectedAction);
    });

    it('Should Create an action to set the user repository commits', () => {
        const commits = [{sha: '3454354353sfsdf3454354'}];
        const expectedAction = {
            type: actionTypes.SET_REPOSITORY_COMMITS,
            commits
        };
        expect(actions.setRepositoryCommits(commits)).toEqual(expectedAction);
    });

});
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { GITHUB_USERS_API, GITHUB_API_URL } from '../Common/constants';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);

describe('Gists Actions List', () => {

    afterEach(() => {
        mock.reset();
    });

    it('Should Create an action to fetch the user gists', () => {
        const userName = "mocktest";
        const gists = [{name: 'test'}];
        mock.onGet(`${GITHUB_USERS_API}/${userName}/gists`).reply(200, gists);
        const expectedAction = {
            type: actionTypes.SET_USER_GISTS,
            userGists: gists
        };
        const store = mockStore({ gists: [] });

        return store.dispatch(actions.getUserGists(userName)).then(() => {
            expect(store.getActions()).toEqual([expectedAction])
        });
    });

    it('Should Create an action to handle error on fetching the user gists', () => {
        const userName = "3453454";
        const message = "Not Found";
        mock.onGet(`${GITHUB_USERS_API}/${userName}/gists`).reply(500 , { message });
        const expectedAction = {
            type: actionTypes.SET_USER_GISTS_ERROR_MESSAGE,
            message
        };
        const store = mockStore({ gists: [] });

        return store.dispatch(actions.getUserGists(userName)).then(() => {
            expect(store.getActions()).toEqual([expectedAction])
        });
    });

    it('Should Create an action to fetch the user gist content', () => {
        const gistId = '1234';
        const content = [{code: 'test'}];

        mock.onGet(`${GITHUB_API_URL}/gists/${gistId}`).reply(200, content);
        const expectedAction = {
            type: actionTypes.SET_GIST_CONTENT,
            content
        };
        const store = mockStore({ content: {} });

        return store.dispatch(actions.getGistContent(gistId)).then(() => {
            expect(store.getActions()).toEqual([expectedAction])
        });
    });

    it('Should Create an action to set the user gists', () => {
        const userGists = [{name: 'test'}];
        const expectedAction = {
            type: actionTypes.SET_USER_GISTS,
            userGists
        };
        expect(actions.setUserGists(userGists)).toEqual(expectedAction);
    });

    it('Should Create an action to set the user gists fetch error messsage', () => {
        const message = "User Not Found";
        const expectedAction = {
            type: actionTypes.SET_USER_GISTS_ERROR_MESSAGE,
            message
        };
        expect(actions.userGistsErrorMessage(message)).toEqual(expectedAction);
    });

    it('Should Create an action to set the user gists content', () => {
        const content = {data: '3454354353sfsdf3454354'};
        const expectedAction = {
            type: actionTypes.SET_GIST_CONTENT,
            content
        };
        expect(actions.setGistContent(content)).toEqual(expectedAction);
    });

});
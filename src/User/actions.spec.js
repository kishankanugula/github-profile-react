import * as actions from './actions';
import * as actionTypes from './actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { GITHUB_USERS_API } from '../Common/constants';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);

describe('Users Actions List', () => {

    beforeEach(() => {
        global.sessionStorage = {
            setItem: function (key, value) {
                this[key] = value;
            }
        };
    });

    afterEach(() => {
        mock.reset();
    });

    it('Should Create an action to fetch the user Profile', () => {
        const userName = "mocktest";
        const profile ={name: userName};
        mock.onGet(`${GITHUB_USERS_API}/${userName}`).reply(200, profile);
        const expectedAction = [{
            type: actionTypes.SET_USER_PROFILE,
            profile
        }];
        const store = mockStore({ profile: {} });

        return store.dispatch(actions.getUserProfile(userName)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        });
    });

    it('Should Create an action to handle error on fetching the user profile', () => {
        const userName = "3453454";
        const message = "Not Found";
        mock.onGet(`${GITHUB_USERS_API}/${userName}`).reply(500 , { message });
        const expectedAction = [{
            type: actionTypes.SET_USER_ERROR_MESSAGE,
            message
        }];
        const store = mockStore({ profile: {} });

        return store.dispatch(actions.getUserProfile(userName)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        });
    });

    it('Should Create an action to set the user profile', () => {
        const profile = {name: 'test'};
        const expectedAction = {
            type: actionTypes.SET_USER_PROFILE,
            profile
        };
        expect(actions.setUserProfile(profile)).toEqual(expectedAction);
    });

    it('Should Create an action to set the user profile fetch error messsage', () => {
        const message = "User Not Found";
        const expectedAction = {
            type: actionTypes.SET_USER_ERROR_MESSAGE,
            message
        };
        expect(actions.userErrorMessage(message)).toEqual(expectedAction);
    });

    it('Should Create an action to set the user name', () => {
        const username = "test";
        const expectedAction = {
            type: actionTypes.SET_USER_NAME,
            username
        };
        expect(actions.setUserName(username)).toEqual(expectedAction);
    });

});
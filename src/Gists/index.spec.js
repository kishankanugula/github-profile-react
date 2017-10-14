import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Gists } from './index';
import ProvideUser from '../Common/Components/provideUser';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { CACHE_USER_NAME } from '../Common/constants';

configure({ adapter: new Adapter() });

let props = {
    userGists: [],
    errorMessage: '',
    setSelectedTabIndex: () => {},
    getUserGists: () => {}
};

describe('Gists', () => {
    beforeEach(() => {
        global.sessionStorage = {
            getItem: function (key) {
                return this[key];
            },
            setItem: function (key, value) {
                this[key] = value;
            }
        };
    });

    it('should mount full DOM', () => {
        const wrapper = mount( <Router>
            <Route exact path="/" render={()=><Gists {...props} />}/>
        </Router>);
        const body = wrapper.find('.gists');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class gists', () => {
        expect(shallow(<Gists {...props} />).is('.gists')).toBe(true);
    });

    it('should show message when usergists empty', () => {
        expect(shallow(<Gists {...props} />).contains(<ProvideUser setTabIndex={props.setSelectedTabIndex}/>)).toBe(true);
    });

    it('should show message when userGists populated', () => {
        sessionStorage.setItem(CACHE_USER_NAME, 'User Test');
        props.userGists = [{
            id: 'gist1'
        }, {
            id: 'gist2'
        }];
        expect(shallow(<Gists {...props} />).find('.list-item').length).toBe(2);
    });

    it('should show error message when there is error in fetching user gists', () => {
        props.errorMessage = "User Not Found";
        expect(shallow(<Gists {...props} />).contains(<ProvideUser
            setTabIndex={props.setSelectedTabIndex} message={props.errorMessage}/>)).toBe(true);
    });

});
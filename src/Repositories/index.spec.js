import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Repositories } from './index';
import ProvideUser from '../Common/Components/provideUser';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { CACHE_USER_NAME } from '../Common/constants';

configure({ adapter: new Adapter() });

let props = {
    userRepositories: [],
    errorMessage: '',
    setSelectedTabIndex: () => {},
    getUserRepositories: () => {}
};

describe('Repositories', () => {
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
                <Route exact path="/" render={()=><Repositories {...props}/>}/>
            </Router>);
        const body = wrapper.find('.repositories');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class repositories', () => {
        expect(shallow(<Repositories {...props} />).is('.repositories')).toBe(true);
    });

    it('should show message when userRepositories empty', () => {
        expect(shallow(<Repositories {...props} />).contains(<ProvideUser setTabIndex={props.setSelectedTabIndex}/>)).toBe(true);
    });

    it('should show message when userRepositories populated', () => {
        sessionStorage.setItem(CACHE_USER_NAME, 'User Test');
        props.userRepositories = [{
            id: 'repository1'
        }, {
            id: 'repository2'
        }];
        expect(shallow(<Repositories {...props} />).find('.list-item').length).toBe(2);
    });

    it('should show error message when there is error in fetching user repositories', () => {
        props.errorMessage = "User Not Found";
        expect(shallow(<Repositories {...props} />).contains(<ProvideUser
            setTabIndex={props.setSelectedTabIndex} message={props.errorMessage}/>)).toBe(true);
    });

});
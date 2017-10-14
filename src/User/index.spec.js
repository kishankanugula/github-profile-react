import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { User } from './index';
import ProvideUser from '../Common/Components/provideUser';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

configure({ adapter: new Adapter() });

let props = {
    profile: {},
    errorMessage: '',
    fetchInProgress: false,
    getUserProfile: () => {}
};

describe('User', () => {
    beforeEach(() => {
        global.sessionStorage = {
            getItem: function (key) {
                return this[key];
            }
        };
    });

    it('should mount full DOM', () => {

        const wrapper = mount( <Router>
            <Route exact path="/" render={()=><User {...props}/>}/>
        </Router>);
        const body = wrapper.find('.user-profile');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class user-profile', () => {
        expect(shallow(<User {...props} />).is('.user-profile')).toBe(true);
    });

    it('should show message when profile not selected', () => {
        expect(shallow(<User {...props} />).contains(<p>Please provide a Username</p>)).toBe(true);
    });

    it('should show message when profile exists', () => {
        props.profile = { name: 'test'};
        expect(shallow(<User {...props} />).find('.profile').length).toBe(1);
    });

    it('should show error message when there is error in fetching user profile', () => {
        props.errorMessage = "Not Found";
        expect(shallow(<User {...props} />).contains( <span> {`User ${props.errorMessage}`} </span>)).toBe(true);
});

});
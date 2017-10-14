import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logo from './Assets/logo.png';

configure({ adapter: new Adapter() });

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

let props = {
    selectedIndex: 0,
    setSelectedTabIndex: () => {}
};

const mockstore = {
    user: {
        profile: {}
    },
    githubProfile: {
        selectedIndex: 0
    }
};

describe('App Tests', () => {

    beforeEach(() => {
        global.sessionStorage = {
            getItem: function (key) {
                return this[key];
            }
        };
    });

    it('should mount full DOM', () => {
        const wrapper = mount( <Provider store={mockStore(mockstore)}><App {...props}/></Provider>);
        const body = wrapper.find('.App');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class app', () => {
        expect(shallow(<App {...props} />).is('.App')).toBe(true);
    });

    it('should contain header', () => {
        expect(shallow(<App {...props} />).contains( <header><img src={logo} className='logo' alt="logo" /></header>)).toBe(true);
    });

    it('should contain Router', () => {
        expect(shallow(<App {...props} />).find('.container').length).toBe(1);
    });

});
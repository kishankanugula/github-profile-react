import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GithubProfile } from './index';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

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
    }
};

describe('Github Profile', () => {

    beforeEach(() => {
        global.sessionStorage = {
            getItem: function (key) {
                return this[key];
            }
        };
    });


    it('should mount full DOM', () => {
        const wrapper = mount( <Provider store={mockStore(mockstore)}><GithubProfile {...props}/></Provider>);
        const body = wrapper.find('.react-tabs');
        expect(body.length).toBe(2);
    });

    it('should be selectable by class react tabs', () => {
        expect(shallow(<GithubProfile {...props} />).find('.react-tabs__tab').length).toBe(3);
    });

});
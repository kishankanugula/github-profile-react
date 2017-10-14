import React from 'react';
import ProvideUser from './provideUser';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


configure({ adapter: new Adapter() });

let props = {
    message : '',
    setTabIndex: () => {}
};

describe('Back Page Component', () => {

    it('should mount full DOM', () => {
        const wrapper = mount( <Router>
            <Route exact path="/" render={()=><ProvideUser {...props}/>}/>
        </Router>);
        expect(wrapper.length).toBe(1);
    });

    it('should render the provide user properties', () => {
        expect(shallow(<ProvideUser {...props}/>).text()).toEqual('Please provide a Username in <Link /> tab');
    });

    it('should render the provide user properties', () => {
        props.message = "error message";
        expect(shallow(<ProvideUser {...props}/>).contains(<p className='error-message'> User {props.message}</p>)).toBe(true);
    });
});
import React from 'react';
import BackPage from './backPage';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import KeyboardBckspaceIcon from 'react-icons/lib/md/keyboard-backspace';


configure({ adapter: new Adapter() });

describe('Back Page Component', () => {

    it('should mount full DOM', () => {
        const wrapper = mount( <Router>
            <Route exact path="/" render={()=><BackPage/>}/>
        </Router>);
        expect(wrapper.length).toBe(1);
    });

    it('should render the backpage properties', () => {
        expect(shallow(<BackPage />).contains(<KeyboardBckspaceIcon/>)).toBe(true);
    });
});
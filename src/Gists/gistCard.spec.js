import React from 'react';
import GistCard from './gistCard';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


configure({ adapter: new Adapter() });

let props = {
    gist: {
        id: 'Test',
        description: "repository description",
        files: []
    }
};

describe('Gist Card', () => {

    it('should mount full DOM', () => {
        const wrapper = mount( <Router>
            <Route exact path="/" render={()=><GistCard {...props} />}/>
        </Router>);
        const body = wrapper.find('.gist-card');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class gist-card', () => {
        expect(shallow(<GistCard {...props} />).is('.gist-card')).toBe(true);
    });

    it('should render the gist properties', () => {
        expect(shallow(<GistCard {...props} />).contains( <p className='description'> {props.gist.description} </p>)).toBe(true);
    });
});
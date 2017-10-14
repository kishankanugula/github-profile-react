import React from 'react';
import RepositoryCard from './repositoryCard';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


configure({ adapter: new Adapter() });

let props = {
    repository: {
        name: 'Test',
            description: "repository description",
        language: "react",
        watchers_count: "10",
        forks_count: "10"
    }
};

describe('Repository Card', () => {

    it('should mount full DOM', () => {
        const wrapper = mount( <Router>
            <Route exact path="/" render={()=><RepositoryCard {...props}/>}/>
        </Router>);
        const body = wrapper.find('.repository-card');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class repository-card', () => {
        expect(shallow(<RepositoryCard {...props} />).is('.repository-card')).toBe(true);
    });

    it('should render the repository properties', () => {
        expect(shallow(<RepositoryCard {...props} />).contains( <p className='description'> {props.repository.description} </p>)).toBe(true);
    });
});
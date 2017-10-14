import React from 'react';
import RepositoryCommit from './repositoryCommit';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


configure({ adapter: new Adapter() });

let props = {
    commit: {
        sha: 'Test',
        commit: {
            message: "Commit Message",
            author: {
                name: "Test User"
            }
        }
    }
};

describe('Repository Commit', () => {

    it('should mount full DOM', () => {
        const wrapper = mount( <Router>
            <Route exact path="/"  render={()=><RepositoryCommit {...props}/>}/>
        </Router>);
        const body = wrapper.find('.card-container');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class container(repository commit)', () => {
        expect(shallow(<RepositoryCommit {...props} />).is('.card-container')).toBe(true);
    });

    it('should render the repository properties', () => {
        expect(shallow(<RepositoryCommit {...props} />).contains(<div className="sha">
            <span>{props.commit.sha}</span>
        </div>)).toBe(true);
    });
});
import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RepositoryCommits } from './repositoryCommits';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

configure({ adapter: new Adapter() });

let props = {
    repoCommits: [{
        sha: 'Test1',
        commit: {
            message: "Commit Message",
            author: {
                name: "Test User"
            }
        }
    }, {
        sha: 'Test2',
        commit: {
            message: "Commit Message",
            author: {
                name: "Test User"
            }
        }
    }],
    match: {
        params: 'reponame'
    },
    getRepositoryCommits: () => {}
};

describe('Repository Commits', () => {

    beforeEach(() => {
        global.sessionStorage = {
            getItem: function (key) {
                return this[key];
            }
        };
    });


    it('should mount full DOM', () => {
        const wrapper = mount(<Router>
            <Route exact path="/" render={()=><RepositoryCommits {...props}/>}/>
        </Router>);
        const body = wrapper.find('.commits');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class repository commit', () => {
        expect(shallow(<RepositoryCommits {...props} />).find('.commits').length).toBe(1);
    });


    it('should show message when commits exists', () => {
        expect(shallow(<RepositoryCommits {...props} />).find('.commit').length).toBe(2);
    });

    it('should show message when no commits', () => {
        props.repoCommits = [];
        expect(shallow(<RepositoryCommits {...props} />).contains( <h4 className="message"> No Commits in the last one month </h4>)).toBe(true);
    });
});
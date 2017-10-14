import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GistFiles } from './gistFiles';
import GistContent from './gistContent';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

configure({ adapter: new Adapter() });

let props = {
    content: {
        files: {}
    },
    match: {
        params: 'gistId'
    },
    getGistContent: () => {}
};

describe('Gist Files', () => {

    it('should mount full DOM', () => {
        const wrapper = mount( <Router>
            <Route exact path="/" render={()=><GistFiles {...props} />}/>
        </Router>);
        const body = wrapper.find('.gist-files');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class gist files', () => {
        expect(shallow(<GistFiles {...props} />).find('.gist-files').length).toBe(1);
    });

    it('should call GistContent to render gist file contents', () => {
        expect(shallow(<GistFiles {...props} />).contains(<GistContent files = {props.content.files}/>)).toBe(true);
    });
});
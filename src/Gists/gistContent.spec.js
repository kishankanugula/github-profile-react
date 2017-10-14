import React from 'react';
import GistContent from './gistContent';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


configure({ adapter: new Adapter() });

let props = {
    files: {
        'file1': {
            content: 'code here'
        }
    }
};

describe('Gist Content', () => {

    it('should mount full DOM', () => {
        const wrapper = mount( <Router>
            <Route exact path="/" render={()=><GistContent {...props} />}/>
        </Router>);
        const body = wrapper.find('.gist-content-list');
        expect(body.length).toBe(1);
    });

    it('should be selectable by class container(gist content)', () => {
        expect(shallow(<GistContent {...props} />).is('.gist-content-list')).toBe(true);
    });

    it('should render the gist content', () => {
        expect(shallow(<GistContent {...props} />).contains(<code className='gist-content'>{props.files['file1'].content}
        </code>)).toBe(true);
    });
});
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGistContent } from './actions';
import GistContent from './gistContent';
import BackPage from '../Common/Components/backPage';
import './style.css';

/**
 * Container Component to render Gist Content Data. Iterates through Gist files to render
 * each gist file.
 */
export class GistFiles extends Component {

    componentDidMount() {
        const {gistId} = this.props.match.params;
        //Call the action(api call) to get the gist details based on gistId(From Url)
        this.props.getGistContent(gistId);
    }

    render() {
        const {content : content = {}} = this.props;
        return (
            <div className='gist-files'>
                <BackPage />
                <div>
                    <GistContent files = {content.files}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    content: state.gists.content
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getGistContent
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GistFiles);
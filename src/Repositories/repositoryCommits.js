import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepositoryCommits } from './actions';
import RepositoryCommit from './repositoryCommit';
import BackPage from '../Common/Components/backPage';
import { CACHE_USER_NAME } from '../Common/constants';

/**
 * Container Component to render Repository Commits Data. Iterates through Commits to render
 * each repository commits.
 */
export class RepositoryCommits extends Component {

    componentDidMount() {
        const {repoName} = this.props.match.params;
        const username = sessionStorage.getItem(CACHE_USER_NAME);
        //Commits for last 30 days. Calculate Date past 30 days.
        let lastMonth = new Date();
        lastMonth.setDate(lastMonth.getDate()-30);
        //Fetch the Repository Commits for last 30 days.
        this.props.getRepositoryCommits(username, repoName, lastMonth.toISOString());
    }

    renderCommits() {
        const {repoCommits : repoCommits = []} = this.props;
        if(repoCommits.length > 0) {
            return (
                <div className='commits'>
                    <h4> Commits for last one month </h4>
                    <ul>
                        {repoCommits.map(repoCommit =>
                            <li className='commit' key={repoCommit.sha}>
                                <RepositoryCommit commit = {repoCommit}/>
                            </li>
                        )}
                    </ul>
                </div>
            )
        } else {
            //Message if there are not commits.
            return (
                <h4 className="message"> No Commits in the last one month </h4>
            )
        }
    }

    render() {
        return (
            <div>
                <BackPage />
                {this.renderCommits()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    repoCommits: state.repository.commits
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getRepositoryCommits
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryCommits);
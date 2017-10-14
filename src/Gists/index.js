import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserGists } from './actions';
import GistCard from './gistCard';
import { setSelectedTabIndex } from '../GithubProfile/actions';
import ProvideUser from '../Common/Components/provideUser';
import '../Common/App.css';
import { CACHE_USER_NAME } from '../Common/constants';

/**
 * Container Component to render Gist Tab Content. Iterates through User Gist's data and renders them
 * in responsive list.
 */
export class Gists extends Component {

    componentDidMount() {
        //Fetch the Gists for User. Username pulled from sessionStorage
        this.props.getUserGists(sessionStorage.getItem(CACHE_USER_NAME));
    }

    renderUserGists() {
        const { userGists,
            setSelectedTabIndex,
            errorMessage} = this.props;

        if(errorMessage) {
            //Show the error message, if there is an error on fetching user gists data.
            return (
                <ProvideUser setTabIndex={setSelectedTabIndex}
                             message={errorMessage}/>
            )
        } else if(!sessionStorage.getItem(CACHE_USER_NAME)) {
            //Show the message, to enter the username if doesn't exists.
            return (
                <ProvideUser setTabIndex={setSelectedTabIndex}/>
            )
        }
        else if(userGists.length > 0) {
            //Render the 'Gists' list
            return (<ul className="list">
                {userGists.map(userGist =>
                    <li className="list-item" key={userGist.id}>
                        <div>
                            <GistCard gist = {userGist}/>
                        </div>
                    </li>
                    )}
            </ul>)
        } else {
            //If there are no gists available for user
            return (
                <h4 className="message"> No Gists for User </h4>
            )
        }
    }

    render() {
        return (
            <div className='gists'>
                {this.renderUserGists()}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    userGists: state.gists.userGists,
    errorMessage: state.gists.errorMessage
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getUserGists,
        setSelectedTabIndex
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Gists);
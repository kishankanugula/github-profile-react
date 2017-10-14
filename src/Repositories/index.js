import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserRepositories } from './actions';
import RepositoryCard from './repositoryCard';
import { setSelectedTabIndex } from '../GithubProfile/actions';
import ProvideUser from '../Common/Components/provideUser';
import '../Common/App.css';
import './style.css';
import { CACHE_USER_NAME } from '../Common/constants';

/**
 * Container Component to render Repositories Tab Content. Iterate through Repositories data and renders them
 * in responsive list.
 */
export class Repositories extends Component {

	componentDidMount() {
        const username = sessionStorage.getItem(CACHE_USER_NAME);
        //Action to fetch the repositories for user.
        this.props.getUserRepositories(username);
	}

	renderUserRepositories() {
        const { userRepositories,
			setSelectedTabIndex,
            errorMessage} = this.props;

        if(errorMessage) {
            //Show the error message, if there is an error on fetching user repositories data.
            return (
                <ProvideUser setTabIndex={setSelectedTabIndex}
                             message={errorMessage}/>
            )
        }
        else if(!sessionStorage.getItem(CACHE_USER_NAME)) {
            //Show the message, to enter the username if doesn't exists.
            return (
                <ProvideUser setTabIndex={setSelectedTabIndex}/>
            )
        }
        else if(userRepositories.length > 0) {
            //Render the 'Repositories' list
        	return (<ul className="list">
                {userRepositories.map(userRepository =>
                    <li className="list-item"  key={userRepository.id}>
                        <div className="list-content">
                            <RepositoryCard repository = {userRepository}/>
                        </div>
                    </li>
                )}
			</ul>)
		} else {
            //If there are no repositories available for user
            return (
                <h4 className="message"> No Repositories for User </h4>
            )
        }
	}

	render() {
		return (
			<div className='repositories'>
				{this.renderUserRepositories()}
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	userRepositories: state.repository.userRepositories,
	errorMessage: state.repository.errorMessage
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
	  getUserRepositories,
      setSelectedTabIndex
  }, dispatch)
);  

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
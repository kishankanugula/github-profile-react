import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserProfile, setUserName } from './actions';
import './style.css';
import { CACHE_USER_NAME } from '../Common/constants';

/**
 * Container Component to render User Tab Content. Shows the profile pic, name and location
 */
export class User extends Component {

    componentDidMount() {
        this.props.getUserProfile(sessionStorage.getItem(CACHE_USER_NAME));
    }

    renderUserProfile() {
        //Render method for Profile details
        const { profile} = this.props;
        return profile && profile.name ?  <div>
                <div>
                    <img className='profile' src={profile.avatar_url} alt='profile'/>
                </div>
                <div>
                    <span className='profile-name'>{profile.name}</span>
                </div>
                <div>
                    <span className='profile-location'> {profile.location} </span>
                </div>
            </div> : <p>Please provide a Username</p>;
    }

    renderUserForm() {
        const { errorMessage }= this.props;
        //Show the Error Message if Username is invalid.
        const message = errorMessage ? `User ${errorMessage}` : '';
        //Input and action button to change the username
        return (
            <div>
                <input className='user-input' type="text"  name="username" placeholder="User Name.."
                       onChange={(e)=>{setUserName(e.target.value)}} />
                <button className='user-submit' onClick={()=>{window.location.reload()}}> LOAD USER</button>
                <div> <span> {message} </span> </div>
            </div>
        )
    }

    render() {
        return (
            <div className='user-profile'>
                {this.renderUserProfile()}
                {this.renderUserForm()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.user.profile,
    errorMessage: state.user.errorMessage,
    fetchInProgress: state.user.fetchInProgress
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getUserProfile,
        setUserName
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(User);
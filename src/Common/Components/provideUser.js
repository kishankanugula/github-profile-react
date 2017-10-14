import React from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import '../App.css';

/**
 * Reusable Component to show the Error Message or Message to provide Username.
 */
const ProvideUser = (props) => {
    const { setTabIndex, message }  = props;
    let content = null;
    //Add the error message content only when error message exists
    if(message) {
        content =  <p className='error-message'> User {message}</p>
    }
    return ( <div>
        {content}
        <p className='message'>
            Please provide a Username in <Link to='/' onClick={() => setTabIndex(0)}>User</Link> tab</p>
    </div>);
};

ProvideUser.propTypes = {
    setTabIndex: PropTypes.func.isRequired,
    message: PropTypes.string
};

export default ProvideUser;
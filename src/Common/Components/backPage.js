import React from 'react';
import KeyboardBckspaceIcon from 'react-icons/lib/md/keyboard-backspace';
import {
    Link
} from 'react-router-dom';

/**
 * Reusable Component to traverse back to home page(User, Repositories & Gists)
 */
const BackPage = () => {
    return (  <Link to='/' >
        <span> <KeyboardBckspaceIcon/> Back </span>
    </Link>
    );
};

export default BackPage;
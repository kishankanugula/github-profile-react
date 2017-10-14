import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {
    Link
} from 'react-router-dom';

/**
 * Presentation Component to render each Gist Card Details.
 */
const GistCard = (props) => {
    const { id,
        description,
        files}  = props.gist;
    const name = Object.keys(files)[0];
    return (<div className='gist-card'>
            <h3 className='title'>
                <Link to={`gist/${id}`}> {name} </Link>
            </h3>
            <p className='description'> {description} </p>
    </div>);
};

GistCard.propTypes = {
    gist: PropTypes.object.isRequired
};

export default GistCard;
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Star from 'react-icons/lib/md/star';
import Fork from 'react-icons/lib/md/device-hub';
import {
    Link
} from 'react-router-dom';

/**
 * Presentation Component to render each Repository Card Details.
 */
const RepositoryCard = (props) => {
  const {name,
      description,
      language,
      watchers_count,
      forks_count
  }  = props.repository;
  return (
      <div className='repository-card'>
          <h3 className='title'>
              <Link to={`${name}/commits`}> {name} </Link>
          </h3>
          <p className='description'> {description} </p>
          <div>
              <span className="list-subContext"> {language} </span>
              <span className="list-subContext"> <Star className='icons'/> {watchers_count}</span>
              <span className="list-subContext"> <Fork className='icons'/> {forks_count}</span>
          </div>
      </div>
  );
};

RepositoryCard.propTypes = {
    repository: PropTypes.object.isRequired
};

export default RepositoryCard;
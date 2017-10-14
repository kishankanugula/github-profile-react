import React from 'react';
import PropTypes from 'prop-types';

/**
 * Presentation Component to render each Commit details.
 */
const RepositoryCommit = (props) => {
    const { sha,
        commit: {
            message: commitMessage,
            author: {
                name: authorName
            }
        }
    }  = props.commit;
    return (<div className="card-container">
        <div>
            <span className="message">{commitMessage}</span>
        </div>
        <div>
            <span className="author">{authorName}</span>
        </div>
        <div className="sha">
            <span>{sha}</span>
        </div>
    </div>);
};

RepositoryCommit.propTypes = {
    commit: PropTypes.object.isRequired
};

export default RepositoryCommit;
import React from 'react';

/**
 * Presentation Component to render each Gist Content Details.
 */
const GistContent = (props) => {
    const {files : files = {}} = props;
    return (<ui className='gist-content-list'>
            {Object.keys(files).map((name, index) => {
                return (
                    <li key={index} className='card-container'>
                        <h3>{name}</h3>
                        <code className='gist-content'>{files[name].content}</code>
                    </li>
                );
            })}
        </ui>);
};

export default GistContent;
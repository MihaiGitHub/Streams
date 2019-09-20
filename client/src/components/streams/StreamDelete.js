import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
    // Way to pass buttons JSX to Modal component
    // React.Fragment meets one wrapper element requirement, but has no impact on DOM whatsoever
    // Can't use a div wrapper due to Semantic UI style breaking
    const actions = (
        <React.Fragment>
            <button className="ui button">Cancel</button>
            <button className="ui button negative">Delete</button>
        </React.Fragment>
    );

    return (
        <div>
            StreamDelete
            <Modal 
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
                />
        </div>
    );
};

export default StreamDelete;
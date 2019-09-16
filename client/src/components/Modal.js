import React from 'react';
import ReactDOM from 'react-dom';

// Modal to attach to other <body><div id="modal"> element
const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                Delete this stream?
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
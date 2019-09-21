import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){
        // Way to pass buttons JSX to Modal component
        // React.Fragment meets one wrapper element requirement, but has no impact on DOM whatsoever
        // Can't use a div wrapper due to Semantic UI style breaking
        return (
                <React.Fragment>
                    <button className="ui button">Cancel</button>
                    <button className="ui button negative">Delete</button>
                </React.Fragment>
            );
    }

    render(){
        return (
            <div>
                StreamDelete
                <Modal 
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream?"
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                    />
            </div>
        );
    }
}

export default connect(null, { fetchStream })(StreamDelete);
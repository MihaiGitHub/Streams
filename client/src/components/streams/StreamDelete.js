import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){
        const { id } = this.props.match.params;
        // Way to pass buttons JSX to Modal component
        // React.Fragment meets one wrapper element requirement, but has no impact on DOM whatsoever
        // Can't use a div wrapper due to Semantic UI style breaking
        return (
                <React.Fragment>
                    <Link to="/" className="ui button">Cancel</Link>
                    {/* With () => you can call deleteStream at some point in the future with the id */}
                    <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                </React.Fragment>
            );
    }

    renderContent(){
        if(!this.props.stream){
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
    }

    render(){
        return (
                <Modal 
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                    />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps, 
    { fetchStream, deleteStream }
)(StreamDelete);
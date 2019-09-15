import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    };
    
    render(){
        if(!this.props.stream){
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                {/* initialValues is a special property name with reduxForm which puts these values in the textbox */}
                <StreamForm 
                    initialValues={{ title: 'EDIT ME', description: 'CHANGE ME TOO' }} 
                    onSubmit={this.onSubmit} />
            </div>
        );
    }
};

// Get list of streams into component
// ownProps -> reference to props object which shows up inside this component
const mapStateToProps = (state, ownProps) => {
    // Get stream id from URL which is coming into this component as props.match.params.id
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
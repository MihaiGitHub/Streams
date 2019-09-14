import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    
    render(){
        if(!this.props.stream){
            return <div>Loading...</div>;
        }

        return <div>{this.props.stream.title}</div>;
    }
};

// Get list of streams into component
// ownProps -> reference to props object which shows up inside this component
const mapStateToProps = (state, ownProps) => {
    // Get stream id from URL which is coming into this component as props.match.params.id
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
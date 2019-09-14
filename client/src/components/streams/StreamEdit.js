import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {
    console.log(props)
    return <div>StreamEdit</div>;
};

// Get list of streams into component
// ownProps -> reference to props object which shows up inside this component
const mapStateToProps = (state, ownProps) => {
    // Get stream id from URL which is coming into this component as props.match.params.id
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);
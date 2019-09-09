import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderList(){
        // Map over array of streams
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // Turn into array before it goes into component to make it easier to loop over
    // Object.values takes all values from object argument and turns them into an array
    return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
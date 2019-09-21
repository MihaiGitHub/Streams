import React from 'react';
// Similar to axios, reach out to a remote server, get some resource and serve up that data 
// to our application to be served on the screen
import flv from 'flv.js';
import {connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    constructor(props){
        super(props);

        this.videoRef = React.createRef();
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    // At any render attempt to build a player
    componentDidUpdate(){
        this.buildPlayer();
    }

    // Setup video player after appropriate stream has been fetched
    buildPlayer(){
        // But if a player is already built then no need
        if(this.player || !this.props.stream){
            return;
        }

        const { id } = this.props.match.params;

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render(){
        if(!this.props.stream){
            return <div>Loading...</div>;
        }

        const { title, description } = this.props.stream;

        return (
            <div> {/* controls -> controls={true} */}
                <video ref={this.videoRef} style={{ width: '100%' }} controls />
                <h1>{title}</h1>
                <h5>{description}</h5>    
            </div>
        );
    }
};

// Get stream out of Redux store and into this component
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
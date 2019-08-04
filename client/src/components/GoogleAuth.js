import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            // Callback after this library has loaded
            window.gapi.client.init({
                clientId: 'xxxx',
                scope: 'email'
            }).then(() => {
                // Once library is initialized
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                // Listen when user auth status changes and call onAuthChange below
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    // Arrow function because it is a callback
    onSignInClick = () => {
        this.auth.signIn();
    };

    // Arrow function because it is a callback
    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            console.log('returned null')
            return null;
        }
        else if (this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {
    signIn,
    signOut
})(GoogleAuth);
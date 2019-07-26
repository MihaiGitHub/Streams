import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            // Callback after this library has loaded
            window.gapi.client.init({
                clientId: 'xxxxxxxxxxxxxxxxxxx',
                scope: 'email'
            }).then(() => {
                // Once library is initialized
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                // Listen when user auth status changes and call onAuthChange below
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        // this.auth is reference to auth object directly stored in window object
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    // Arrow function because it is a callback
    onSignIn = () => {
        this.auth.signIn();
    };

    // Arrow function because it is a callback
    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        }
        else if (this.state.isSignedIn){
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
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

export default GoogleAuth;
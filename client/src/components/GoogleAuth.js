import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            // Callback after this library has loaded
            window.gapi.client.init({
                clientId: 'xxxxxxxxxxxxxx',
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

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>Don't know if signed in</div>;
        }
        else if (this.state.isSignedIn){
            return <div>I am signed in</div>;
        }
        else {
            return <div>Not signed in</div>;
        }
    }

    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;
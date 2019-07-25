import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            // Callback after this library has loaded
            window.gapi.client.init({
                clientId: 'xxxxxxxxxxxxxxxxxxxx',
                scope: 'email'
            });
        });
    }

    render(){
        return (
            <div>GoogleAuth</div>
        );
    }
}

export default GoogleAuth;
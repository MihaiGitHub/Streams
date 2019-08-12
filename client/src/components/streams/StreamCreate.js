import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput(){
        return <input />;
    }

    render(){
        // this.props will have a lot of props due to reduxForm
        console.log(this.props)

        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
};

// This component will be passed a lot of new props now
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
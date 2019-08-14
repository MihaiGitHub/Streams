import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    // Destructure input argument from properties coming from this.renderInput
    // Properties sent from redux form <Field> element
    renderInput({input}){
        // Take all props from input argument and add them to the input element
        return <input {...input} />;
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
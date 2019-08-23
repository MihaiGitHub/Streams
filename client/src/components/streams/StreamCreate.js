import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    // Destructure input argument from properties coming from this.renderInput
    // Properties sent from redux form <Field> element
    renderInput({ input, label }){
        // Take all props from input argument and add them to the input element
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    onSubmit(formValues){
        console.log(formValues);
    }

    render(){
        // this.props will have a lot of props due to reduxForm
        console.log(this.props)

        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                {/* Field element will pass label prop through to renderInput */}
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

// This component will be passed a lot of new props now
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);
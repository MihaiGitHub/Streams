// Form that can be used between two components
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    // Destructure error/touched from meta object
    renderError({error, touched }){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // Destructure input argument from properties coming from this.renderInput
    // Properties sent from redux form <Field> element
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;

        // Take all props from input argument and add them to the input element
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        console.log(formValues);

        this.props.onSubmit(formValues);
    }

    render(){
        // this.props will have a lot of props due to reduxForm
        console.log(this.props)

        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {/* Field element will pass label prop through to renderInput */}
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

// validate function will get called anytime the user does anything to the form
const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title = 'You must enter a title';
    }

    if(!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
};

// This component will be passed a lot of new props now
export default reduxForm({
    form: 'streamForm',
    validate // validate: validate
})(StreamForm); 
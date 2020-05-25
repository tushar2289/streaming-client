import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class StreamForm extends Component {
  renderInput({ input, label, meta }) {
    const errorAvailable = meta.error && meta.touched ? true : false;
    return (
      <div className={`field ${errorAvailable ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <span>{errorAvailable ? meta.error : ""}</span>
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter title"
        ></Field>
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        ></Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};

  if (!formValues.title) {
    error.title = "You must enter a title";
  }

  if (!formValues.description) {
    error.description = "You must enter a description";
  }

  return error;
};

export default reduxForm({
  form: "streamForm",
  validate,
  enableReinitialize: true,
})(StreamForm);

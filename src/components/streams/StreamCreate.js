import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  //destructuring
  renderInput({ input, label }) {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <div style={{ marginTop: "1rem" }}>
          <button className="ui button primary">Submit</button>
        </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

//reduxForm is like a connect function but this function only takes single object as an argument
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);

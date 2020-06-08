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

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}
//reduxForm is like a connect function but this function only takes single object as an argument
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);

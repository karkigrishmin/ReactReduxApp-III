import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  //destructuring
  renderInput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}
//reduxForm is like a connect function but this function only takes single object as an argument
export default reduxForm({
  form: "streamCreate",
})(StreamCreate);

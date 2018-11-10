import React, { Component } from "react";
import { Field } from "redux-form";

import EmailInput from "./EmailInput.js";

class EmailComponent extends Component {
  render() {
    return <Field type="email" name="email" component={EmailInput} />;
  }
}

export default EmailComponent;

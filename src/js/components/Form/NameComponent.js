import React, { PureComponent } from "react";
import { Field } from "redux-form";

import NameInput from "./NameInput.js";

class NameComponent extends PureComponent {
  render() {
    return <Field type="text" name="name" component={NameInput} />;
  }
}

export default NameComponent;

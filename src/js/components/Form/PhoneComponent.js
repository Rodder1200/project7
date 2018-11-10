import React, { PureComponent } from "react";
import { Field } from "redux-form";

import PhoneInput from "./PhoneInput.js";

class PhoneComponent extends PureComponent {
  render() {
    return <Field type="text" name="phone" component={PhoneInput} />;
  }
}

export default PhoneComponent;

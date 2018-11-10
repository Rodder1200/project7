import React, { PureComponent } from "react";
import { Field } from "redux-form";

import PhotoInput from "./PhotoInput.js";

class PhotoComponent extends PureComponent {
  render() {
    return <Field type="file" name="photo" component={PhotoInput} />;
  }
}

export default PhotoComponent;

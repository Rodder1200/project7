import React, { Component } from "react";

import Form from "./Form";
import ModalSuccess from "./ModalSuccess";

class Registration extends Component {
  render() {
    return (
      <section id="registration" className="registration">
        <ModalSuccess />
        <div className="container">
          <h2 className="heading-2">Register to get a work</h2>
          <h5 className="heading-5">
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </h5>
          <Form />
        </div>
      </section>
    );
  }
}

export default Registration;

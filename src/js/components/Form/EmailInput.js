import React, { Component } from "react";
import { connect } from "react-redux";

import { checkEmail } from "../../actions/formActions";

const EmailInput = props => (
  <label className="field">
    <fieldset id="form_email" className={props.email_error ? "error" : null}>
      <legend>Email</legend>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        onChange={event => {
          props.input.onChange(event);
          props.checkEmail(event.target.value);
        }}
        onBlur={event => {
          document.querySelector("#form_email").classList.remove("border-bold");
        }}
        onFocus={() => {
          document.querySelector("#form_email").classList.add("border-bold");
        }}
      />
    </fieldset>
    <div
      className={
        props.email_error
          ? "assistive error"
          : "assistive error visually-hidden"
      }
    >
      error
    </div>
  </label>
);

const mapStateToProps = state => ({
  email_value: state.formData.email.value,
  email_error: state.formData.email.error,
  email_valid: state.formData.email.valid
});

export default connect(
  mapStateToProps,
  { checkEmail }
)(EmailInput);

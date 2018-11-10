import React, { Component } from "react";
import { connect } from "react-redux";
import MaskedInput from "react-maskedinput";

import { checkPhone } from "../../actions/formActions";

const PhoneInput = props => (
  <label className="field">
    <fieldset id="form_phone" className={props.phone_error ? "error" : null}>
      <legend>Phone</legend>
      <MaskedInput
        name="phone"
        type="text"
        mask="+381111111111"
        placeholder="+38 (___) ___ __ __"
        onChange={event => {
          props.input.onChange(event);
          props.checkPhone(event.target.value);
        }}
        onFocus={event => {
          document.querySelector("#form_phone").classList.add("border-bold");
        }}
        onBlur={() => {
          document.querySelector("#form_phone").classList.remove("border-bold");
        }}
      />
    </fieldset>
    <div
      className={
        props.phone_error
          ? "assistive error"
          : "assistive error visually-hidden"
      }
    >
      error
    </div>
  </label>
);

// export default PhoneInput;

const mapStateToProps = state => ({
  phone_value: state.formData.phone.value,
  phone_error: state.formData.phone.error,
  phone_valid: state.formData.phone.valid
});

export default connect(
  mapStateToProps,
  { checkPhone }
)(PhoneInput);

import React, { Component } from "react";
import { connect } from "react-redux";

import { checkName } from "../../actions/formActions";
const NameInput = props => (
  <label className="field">
    <fieldset id="form_name" className={props.name_error ? "error" : null}>
      <legend>Name</legend>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        onChange={event => {
          props.input.onChange(event);
          props.checkName(event.target.value);
        }}
        onBlur={() => {
          document.querySelector("#form_name").classList.remove("border-bold");
        }}
        onFocus={() => {
          document.querySelector("#form_name").classList.add("border-bold");
        }}
      />
    </fieldset>
    <div
      className={
        props.name_error ? "assistive error" : "assistive error visually-hidden"
      }
    >
      error
    </div>
  </label>
);

const mapStateToProps = state => ({
  name_value: state.formData.name.value,
  name_error: state.formData.name.error,
  name_valid: state.formData.name.valid
});

export default connect(
  mapStateToProps,
  { checkName }
)(NameInput);

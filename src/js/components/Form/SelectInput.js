import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import ArrowDown from "../../../imgs/icons/caret-down.svg";
import { checkPosition } from "../../actions/formActions";

const customStyles = {
  option: (base, state) => ({
    ...base,
    color: state.isSelected ? "rgb(239, 108, 0)" : "black",
    backgroundColor: state.isFocused ? "#fce2cc" : "white",
    padding: 10,
    cursor: "pointer"
  }),
  control: base => ({
    ...base,
    borderColor: "inherit",
    height: "56px",
    cursor: "pointer"
  }),
  indicatorSeparator: () => ({}),
  group: base => ({
    ...base,
    border: "none"
  })
};

const customTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#fce2cc",
    primary: "#b7b7b7"
  }
});

const customArrow = ({ innerProps, isDisabled }) =>
  !isDisabled ? (
    <div {...innerProps}>
      <ArrowDown className="select-arrow" />
    </div>
  ) : null;

const SelectInput = props => (
  <div
    id="form_select"
    className={
      props.position_error ? "field field__select error" : "field field__select"
    }
  >
    <Select
      {...props}
      name="position_id"
      onChange={event => {
        props.input.onChange(event.value);
        props.checkPosition(event.value);
      }}
      options={props.options}
      isSearchable={false}
      components={{ DropdownIndicator: customArrow }}
      styles={customStyles}
      placeholder="Select your position"
      theme={customTheme}
    />
    <div
      className={
        props.position_error
          ? "assistive error"
          : "assistive error visually-hidden"
      }
    >
      error
    </div>
  </div>
);

const mapStateToProps = state => ({
  position_value: state.formData.position.value,
  position_error: state.formData.position.error,
  position_valid: state.formData.position.valid
});

export default connect(
  mapStateToProps,
  { checkPosition }
)(SelectInput);

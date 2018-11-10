import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

import { fetchPositions } from "../../actions/formActions";

import SelectInput from "./SelectInput.js";

class SelectComponent extends PureComponent {
  componentWillMount() {
    this.props.fetchPositions();
  }
  render() {
    const options = this.props.positions.map(option => ({
      value: option.id,
      label: option.name
    }));
    return (
      <Field name="position_id" options={options} component={SelectInput} />
    );
  }
}

const mapStateToProps = state => ({
  positions: state.formData.positions
});

export default connect(
  mapStateToProps,
  { fetchPositions }
)(SelectComponent);

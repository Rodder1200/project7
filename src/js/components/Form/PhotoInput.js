import React, { Component } from "react";
import { connect } from "react-redux";

import { checkPhoto } from "../../actions/formActions";

const file_info = (
  <div className="assistive file-info">
    File format jpg up to 5 MB, the minimum size of 70x70px
  </div>
);

const PhotoInput = props => (
  <label
    id="form_photo"
    className={
      props.photo_error ? "field field__file error" : "field field__file"
    }
  >
    <div
      className={
        props.photo_value
          ? "field__file_placeholder field__file_value"
          : "field__file_placeholder"
      }
    >
      {props.photo_name ? props.photo_name : "Upload your photo"}
    </div>
    <div className="btn btn__sec">Upload</div>
    <input
      name="photo"
      type="file"
      accept=".jpg,.jpeg"
      className="hiddenInput"
      onChange={event => {
        props.input.onChange(event.target.value);
        props.checkPhoto(event.target.files[0]);
      }}
    />
    {props.photo_error ? (
      <div className="assistive error">error</div>
    ) : (
      file_info
    )}
  </label>
);

const mapStateToProps = state => ({
  photo_error: state.formData.photo.error,
  photo_valid: state.formData.photo.valid,
  photo_name: state.formData.photo.name
});

export default connect(
  mapStateToProps,
  { checkPhoto }
)(PhotoInput);

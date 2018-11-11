import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, reset } from "redux-form";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

import {
  fetchToken,
  clearFormData,
  showModal
} from "../../actions/formActions";

import {
  fetchUsers,
  clearMoreUsers,
  getMoreUsers,
  getLinkToNext
} from "../../actions/userActions";

import NameComponent from "./NameComponent";
import EmailComponent from "./EmailComponent";
import PhoneComponent from "./PhoneComponent";
import SelectComponent from "./SelectComponent";
import PhotoComponent from "./PhotoComponent";

class Form extends Component {
  componentWillMount() {
    this.props.fetchToken();
  }

  handleSubmit = event => {
    event.preventDefault();

    const {
      name_value,
      email_value,
      phone_value,
      position_value,
      photo_value,
      token,
      modal,
      width,
      users,
      fetchUsers,
      getMoreUsers,
      getLinkToNext,
      reset,
      clearFormData,
      showModal
    } = this.props;

    const formData = new FormData();
    formData.append("name", name_value);
    formData.append("email", email_value);
    formData.append("phone", phone_value);
    formData.append("position_id", position_value);
    formData.append("photo", photo_value);

    const options = {
      method: "post",
      headers: new Headers({
        Token: token
      }),
      body: formData
    };

    fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      options
    )
      .then(res => res.json())
      .then(res => {
        isWidthDown("sm", width) ? fetchUsers(6) : fetchUsers(3);
        getMoreUsers("reset");
        getLinkToNext("reset");
      })
      .catch(error => {
        console.log(error.message);
      });

    reset();
    clearFormData();
    showModal(modal);
  };

  render() {
    const {
      name_valid,
      email_valid,
      phone_valid,
      position_valid,
      photo_valid
    } = this.props;

    const btn_disabled = (
      <button type="submit" className="btn btn__dis" disabled>
        Sign Up
      </button>
    );

    const btn_active = (
      <button type="submit" className="btn btn__prim" label="submit">
        Sign Up
      </button>
    );

    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <div className="flex-cont">
          <NameComponent />
          <EmailComponent />
          <PhoneComponent />
          <div className="flex-cont">
            <SelectComponent />
            <PhotoComponent />
          </div>
        </div>
        {name_valid &&
        email_valid &&
        phone_valid &&
        position_valid &&
        photo_valid
          ? btn_active
          : btn_disabled}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  name_value: state.formData.name.value,
  email_value: state.formData.email.value,
  phone_value: state.formData.phone.value,
  position_value: state.formData.position.value,
  photo_value: state.formData.photo.value,
  name_valid: state.formData.name.valid,
  email_valid: state.formData.email.valid,
  phone_valid: state.formData.phone.valid,
  position_valid: state.formData.position.valid,
  photo_valid: state.formData.photo.valid,
  token: state.formData.token,
  modal: state.formData.modal,
  users: state.users.items
});

Form = connect(
  mapStateToProps,
  {
    fetchToken,
    fetchUsers,
    getMoreUsers,
    getLinkToNext,
    clearFormData,
    showModal
  }
)(Form);

export default (Form = reduxForm({
  form: "unicForm"
})(Form));

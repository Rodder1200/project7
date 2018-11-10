import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchFirstUser } from "../actions/userActions";
import SignOut from "../../imgs/icons/sign-out.svg";

class UserPanel extends Component {
  componentWillMount() {
    this.props.fetchFirstUser();
  }

  render() {
    const user = this.props.user;

    return (
      <div className="user-panel">
        <div className="user-panel__text-wrapper">
          <p className="user-panel__name"> {user.name} </p>
          <p className="user-panel__email"> {user.email} </p>
        </div>
        <a href="#" aria-label="User" className="user-panel__img-wrapper">
          <img src={user.photo} alt={user.name} className="user-panel__img" />
        </a>
        <a href="#" aria-label="Sign Out">
          <SignOut className="sign-out" />
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.item
});

export default connect(
  mapStateToProps,
  { fetchFirstUser }
)(UserPanel);

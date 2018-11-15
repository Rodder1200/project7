import React, { Component } from "react";
import { connect } from "react-redux";

import SignOut from "../../imgs/icons/sign-out.svg";

class UserPanel extends Component {
  render() {
    const { user, first_user_error, first_user_fails } = this.props;

    return (
      <React.Fragment>
        {user ? (
          <div className="user-panel">
            <div className="user-panel__text-wrapper">
              <p className="user-panel__name">{user.name}</p>
              <p className="user-panel__email">{user.email}</p>
            </div>
            <a href="#" aria-label="User" className="user-panel__img-wrapper">
              <img
                src={user.photo}
                alt={user.name}
                className="user-panel__img"
              />
            </a>
            <a href="#" aria-label="Sign Out">
              <SignOut className="sign-out" />
            </a>
          </div>
        ) : null}
        <div className="user-panel">
          {first_user_error ? (
            <p className="error">{first_user_error}</p>
          ) : null}
          {first_user_fails.userId ? (
            <p className="error">{first_user_fails.userId}</p>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.item,
  first_user_error: state.users.first_user_error,
  first_user_fails: state.users.first_user_fails
});

export default connect(
  mapStateToProps,
  null
)(UserPanel);

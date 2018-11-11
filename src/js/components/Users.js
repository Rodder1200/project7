import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Tooltip from "@material-ui/core/Tooltip";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

import {
  fetchUsers,
  getLinkToNext,
  getMoreUsers
} from "../actions/userActions";

class Users extends Component {
  componentWillMount() {
    const { width, fetchUsers, getLinkToNext } = this.props;

    if (isWidthDown("sm", width)) {
      fetchUsers(3);
      getLinkToNext(3);
    } else {
      fetchUsers(6);
      getLinkToNext(6);
    }
  }

  render() {
    const {
      users,
      moreUsers,
      link,
      width,
      getMoreUsers,
      getLinkToNext
    } = this.props;

    const newArr = moreUsers ? users.concat(moreUsers) : users;

    const userItems = newArr.map(user => (
      <div className="user" key={user.id}>
        <img
          src={user.photo}
          srcSet={user.photo + " 2x"}
          alt={user.name}
          className="user__img"
        />
        <div className="user__text">
          <Tooltip
            title={
              !isWidthDown("sm", width) && user.name.length > 15
                ? user.name
                : ""
            }
          >
            <h4
              className={
                "user__name heading-4 " +
                (!isWidthDown("sm", width) ? "truncate" : "")
              }
            >
              {user.name}
            </h4>
          </Tooltip>
          <p className="par-3">{user.position}</p>
          <Tooltip
            title={
              !isWidthDown("sm", width) && user.email.length > 20
                ? user.email
                : ""
            }
          >
            <p className="par-3 truncate">{user.email}</p>
          </Tooltip>
          <p className="par-3">{user.phone}</p>
        </div>
      </div>
    ));
    const button = (
      <button
        id="show_more"
        className="btn btn__sec"
        onClick={() => {
          getMoreUsers(moreUsers, link);
          getLinkToNext(link);
        }}
      >
        Show more
      </button>
    );

    return (
      <section id="users" className="users">
        <div className="container">
          <h2 className="heading-2">Our cheerful users</h2>
          <h5 className="heading-5">
            Attention! Sorting users by registration date
          </h5>
          <div className="flex-cont">{userItems}</div>
          {link ? button : null}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.items,
  link: state.users.link,
  moreUsers: state.users.moreItems
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    {
      fetchUsers,
      getLinkToNext,
      getMoreUsers
    }
  )
)(Users);

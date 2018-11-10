import React, { Component } from "react";

import UserPanel from "./UserPanel";
import Nav from "./Nav";

class SideNav extends Component {
  render() {
    return (
      <div
        className="side-nav hide"
        onClick={() =>
          document.querySelector(".side-nav").classList.add("hide")
        }
      >
        <div className="side-nav__main">
          <UserPanel />
          <div className="side-nav__hr" />
          <Nav />
          <a href="#" aria-label="Sign Out" className="nav__item nav__link">
            Sign Out
          </a>
        </div>
        <div className="side-nav__aside" />
      </div>
    );
  }
}

export default SideNav;

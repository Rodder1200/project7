import React, { Component } from "react";

import Nav from "./Nav";
import Logo from "./Logo";
import UserPanel from "./UserPanel";
import LineMenu from "../../imgs/icons/line-menu.svg";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="header" className="header">
          <div className="container">
            <Logo />
            <div className="hidable">
              <Nav />
            </div>
            <div className="hidable">
              <UserPanel />
            </div>
            <button
              className="line-menu line-menu__hidden"
              onClick={() =>
                document.querySelector(".side-nav").classList.remove("hide")
              }
            >
              <LineMenu />
            </button>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

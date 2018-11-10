import React, { Component } from "react";
import LogoImg from "../../imgs/logo/logo.svg";

export default class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="logo">
          <a
            href="#"
            rel="home"
            aria-label="logo__title"
            className="logo__title"
          >
            <LogoImg className="logo__img" />
          </a>
        </h1>
      </React.Fragment>
    );
  }
}

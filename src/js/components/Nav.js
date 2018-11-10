import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li className="nav__item">
            <a href="#about_me" className="nav__link" aria-label="About me">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#relationships"
              className="nav__link"
              aria-label="Relationships"
            >
              Relationships
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#requirements"
              className="nav__link"
              aria-label="Requirements"
            >
              Requirements
            </a>
          </li>
          <li className="nav__item">
            <a href="#users" className="nav__link" aria-label="Users">
              Users
            </a>
          </li>
          <li className="nav__item">
            <a href="#registration" className="nav__link" aria-label="Sign Up">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

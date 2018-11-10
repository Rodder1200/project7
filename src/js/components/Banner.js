import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <section id="banner" className="banner">
        <div className="container">
          <h1 className="heading-1">
            Test assignment for Frontend Developer position
          </h1>
          <div className="par-1">
            <p className="banner-text-top">
              We kindly remind you that your test assignment should be submitted
              as a link to github/bitbucket repository.
            </p>
            <p className="banner-text-bottom">
              Please be patient, we consider and respond to every application
              that meets minimum requirements. We look forward to your
              submission. Good luck!
            </p>
          </div>
          <button
            className="btn btn__prim"
            onClick={() => (location.href = "#registration")}
          >
            Sign Up
          </button>
        </div>
      </section>
    );
  }
}

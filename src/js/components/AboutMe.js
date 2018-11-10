import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <section id="about_me" className="about-me">
        <div className="container">
          <h2 className="heading-2">Let's get acquainted</h2>
          <div className="flex-cont">
            <img
              src="../../imgs/man-mobile.svg"
              alt="man-mobile"
              className="about-img"
            />
            <div className="about-info">
              <h3 className="heading-3">I am cool frontend developer</h3>
              <p className="par-2">
                When real users have a slow experience on mobile, they're much
                less likely to find what they are looking for or purchase from
                you in the future. For many sites this equates to a huge missed
                opportunity, especially when more than half of visits are
                abandoned if a mobile page takes over 3 seconds to load.
              </p>
              <p className="par-2">
                Last week, Google Search and Ads teams announced two new speed
                initiatives to help improve user-experience on the web.{" "}
              </p>
              <button
                className="btn btn__text"
                href="#"
                aria-label="Sign Up"
                onClick={() => (location.href = "#registration")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

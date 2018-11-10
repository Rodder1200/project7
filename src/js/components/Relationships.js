import React, { Component } from "react";

export default class Relationships extends Component {
  render() {
    return (
      <section id="relationships" className="relationships">
        <div className="container">
          <h2 className="heading-2">
            About my relationships with web-development
          </h2>
          <div className="flex-cont">
            <article className="web">
              <img src="../../imgs/html.svg" alt="html" className="web-img" />
              <div className="web-text">
                <h3 className="heading-3">I'm in love with HTML</h3>
                <p className="par-2">
                  Hypertext Markup Language (HTML) is the standard markup
                  language for creating web pages and web applications.
                </p>
              </div>
            </article>
            <article className="web">
              <img src="../../imgs/css.svg" alt="css" className="web-img" />
              <div className="web-text">
                <h3 className="heading-3">CSS is my best friend</h3>
                <p className="par-2">
                  Cascading Style Sheets (CSS) is a style sheet language used
                  for describing the presentation of a document written in a
                  markup language like HTML.
                </p>
              </div>
            </article>
            <article className="web">
              <img
                src="../../imgs/javascript.svg"
                alt="javascript"
                className="web-img"
              />
              <div className="web-text">
                <h3 className="heading-3">JavaScript is my passion</h3>
                <p className="par-2">
                  JavaScript is a high-level, interpreted programming language.
                  It is a language which is also characterized as dynamic,
                  weekly typed, prototype-based and multi-paradigm.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

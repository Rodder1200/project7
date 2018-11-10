import React, { Component } from "react";

import Logo from "./Logo";
import Nav from "./Nav";
import Mail from "../../imgs/icons/mail.svg";
import Phone from "../../imgs/icons/phone.svg";
import Cellphone from "../../imgs/icons/cellphone.svg";
import Facebook from "../../imgs/icons/facebook.svg";
import Linkedin from "../../imgs/icons/linkedin.svg";
import Instagram from "../../imgs/icons/instagram.svg";
import Twitter from "../../imgs/icons/twitter.svg";
import Pinterest from "../../imgs/icons/pinterest.svg";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer" className="footer">
          <div className="container">
            <header className="footer-top">
              <Logo className="footer-logo" />
              <Nav />
            </header>
          </div>
          <hr className="footer-hr" />
          <div className="container">
            <div className="footer-middle">
              <ul className="footer-contacts">
                <li className="footer-contacts__item">
                  <a
                    href="mailto:work.of.future@gmail.com"
                    className="par-1"
                    aria-label="mail"
                  >
                    <Mail className="footer-contacts__icon" />
                    work.of.future@gmail.com
                  </a>
                </li>
                <li className="footer-contacts__item">
                  <a
                    href="tel:+38(050)7892498"
                    className="par-1"
                    aria-label="phone"
                  >
                    <Phone className="footer-contacts__icon" />
                    +38 (050) 789 24 98
                  </a>
                </li>
                <li className="footer-contacts__item">
                  <a
                    href="tel:+38(095)5560845"
                    className="par-1"
                    aria-label="cellphone"
                  >
                    <Cellphone className="footer-contacts__icon" />
                    +38 (095) 556 08 45
                  </a>
                </li>
              </ul>
              <nav>
                <ul className="footer-nav">
                  <li className="footer-nav__block">
                    <ul className="footer-nav__item">
                      <li className="footer-nav__link">
                        <a href="#" aria-label="News">
                          News
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Blog">
                          Blog
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Partners">
                          Partners
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Shop">
                          Shop
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer-nav__block">
                    <ul className="footer-nav__item">
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Overview">
                          Overview
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Design">
                          Design
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Code">
                          Code
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Collaborate">
                          Collaborate
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer-nav__block">
                    <ul className="footer-nav__item">
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Tutorials">
                          Tutorials
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Resources">
                          Resources
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Guides">
                          Guides
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Examples">
                          Examples
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer-nav__block">
                    <ul className="footer-nav__item">
                      <li className="footer-nav__link">
                        <a href="#" aria-label="FAQ">
                          FAQ
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Terms">
                          Terms
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Conditions">
                          Conditions
                        </a>
                      </li>
                      <li className="footer-nav__link">
                        <a href="#" aria-label="Help">
                          Help
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <footer className="footer-bottom">
              <p className="footer-copyright">
                © abz.agency specially for the test task
              </p>
              <ul className="footer-social">
                <li className="footer-social__link">
                  <a
                    href="#"
                    aria-label="Facebook"
                    rel="noopener"
                    target="_blank"
                  >
                    <Facebook />
                    <span className="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li className="footer-social__link">
                  <a
                    href="#"
                    aria-label="Linkedin"
                    rel="noopener"
                    target="_blank"
                  >
                    <Linkedin />
                    <span className="visually-hidden">Linkedin</span>
                  </a>
                </li>
                <li className="footer-social__link">
                  <a
                    href="#"
                    aria-label="Instagram"
                    rel="noopener"
                    target="_blank"
                  >
                    <Instagram />
                    <span className="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li className="footer-social__link">
                  <a
                    href="#"
                    aria-label="Twitter"
                    rel="noopener"
                    target="_blank"
                  >
                    <Twitter />
                    <span className="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li className="footer-social__link">
                  <a
                    href="#"
                    aria-label="Pinterest"
                    rel="noopener"
                    target="_blank"
                  >
                    <Pinterest />
                    <span className="visually-hidden">Pinterest</span>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

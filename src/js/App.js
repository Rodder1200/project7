import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "../js/store";

import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Relationships from "./components/Relationships";
import Requirements from "./components/Requirements";
import Users from "./components/Users";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <SideNav />
          <Banner />
          <AboutMe />
          <Relationships />
          <Requirements />
          <Users />
          <Registration />
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}

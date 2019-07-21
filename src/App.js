import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavContainer from "./containers/NavContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContainer from "./containers/HomeContainer";
import PressKitContainer from "./containers/PressKitContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavContainer />
          <Header />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/press-kit" component={PressKitContainer} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

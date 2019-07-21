import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  jQueryFullHeight,
  jQueryBurgerMenu,
  jQueryShowHideNavMenu
} from "../services/jquery-to-refactor";

class NavContainer extends Component {
  componentDidMount() {
    jQueryFullHeight();
    jQueryBurgerMenu();
  }

  handleClick = e => {
    console.log("click");
    jQueryShowHideNavMenu();
  };

  render() {
    return (
      <nav id="colorlib-main-nav" role="navigation">
        <a className="js-colorlib-nav-toggle colorlib-nav-toggle active">
          <i />
        </a>
        <div className="js-fullheight colorlib-table">
          <div className="colorlib-table-cell js-fullheight">
            <ul>
              <li>
                <Link to="/" onClick={this.handleClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/press-kit" onClick={this.handleClick}>
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavContainer;

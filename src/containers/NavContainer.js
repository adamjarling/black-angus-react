import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  jQueryFullHeight,
  jQueryBurgerMenu,
  jQueryShowHideNavMenu
} from "../services/jquery-to-refactor";
import { withRouter } from "react-router-dom";

class NavContainer extends Component {
  componentDidMount() {
    jQueryFullHeight();
    jQueryBurgerMenu();
  }

  handleClick = e => {
    e.preventDefault();

    const { pathname } = this.props.location;

    if (e.target.innerHTML === "Home" && pathname !== "/") {
      this.props.history.push("/");
    } else if (
      e.target.innerHTML === "Press Kit" &&
      pathname !== "/press-kit"
    ) {
      this.props.history.push("/press-kit");
    }
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

export default withRouter(NavContainer);

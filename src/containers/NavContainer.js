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

  styles = {
    navButton: {
      border: "0"
    }
  };

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
    } else if (e.target.innerHTML === "Shows" && pathname !== "/shows") {
      this.props.history.push("/shows");
    } else if (e.target.innerHTML === "Photos" && pathname !== "/photos") {
      this.props.history.push("/photos");
    } else if (e.target.innerHTML === "Booking" && pathname !== "/booking") {
      this.props.history.push("/booking");
    }
    jQueryShowHideNavMenu();
  };

  render() {
    return (
      <nav id="colorlib-main-nav" role="navigation">
        <button
          className="js-colorlib-nav-toggle colorlib-nav-toggle active"
          style={this.styles.navButton}
        >
          <i />
        </button>
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
              <li>
                <Link to="/shows" onClick={this.handleClick}>
                  Shows
                </Link>
              </li>
              <li>
                <Link to="/photos" onClick={this.handleClick}>
                  Photos
                </Link>
              </li>
              <li>
                <Link to="/booking" onClick={this.handleClick}>
                  Booking
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

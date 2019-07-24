import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/black-angus-font-logo-white.png";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Header = ({ location }) => {
  const Logo = styled.img`
    display: inline-block;
    width: 200px;
  `;

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {location.pathname !== "/" && (
              <div className="colorlib-navbar-brand">
                <Link className="colorlib-logo" to="/">
                  <Logo src={logo} alt="Black Angus logo" />
                </Link>
              </div>
            )}

            <span
              href="#"
              className="js-colorlib-nav-toggle colorlib-nav-toggle"
            >
              <i />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);

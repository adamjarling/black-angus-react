import React from "react";
import { withRouter } from "react-router-dom";

const Header = props => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
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

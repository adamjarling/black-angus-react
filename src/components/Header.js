import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="colorlib-navbar-brand">
            
              <Link className="colorlib-logo" to="/">
                Black Angus
              </Link>
            </div>
            <span href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle">
              <i />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);

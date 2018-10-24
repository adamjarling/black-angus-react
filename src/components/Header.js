import React from 'react';

const Header = props => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="colorlib-navbar-brand">
              <a className="colorlib-logo" href="index.html">
                Black Angus
              </a>
            </div>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle">
              <i />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

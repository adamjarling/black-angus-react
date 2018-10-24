import React from 'react';

const Nav = props => {
  return (
    <nav id="colorlib-main-nav" role="navigation">
      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active">
        <i />
      </a>
      <div className="js-fullheight colorlib-table">
        <div className="colorlib-table-cell js-fullheight">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="band.html">Band</a>
            </li>

            <li>
              <a href="shows.html">Shows</a>
            </li>
            <li>
              <a href="press-kit.html">Press Kit</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

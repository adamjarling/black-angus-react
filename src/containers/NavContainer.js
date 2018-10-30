import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavContainer extends Component {
  handleClick = e => {
    console.log('click');
    window.location.reload();
  }
  render() {
    let { showNav } = this.props;

    return (
      <nav id="colorlib-main-nav" role="navigation">
        <a
          className="js-colorlib-nav-toggle colorlib-nav-toggle active"
        >
          <i />
        </a>
        <div className="js-fullheight colorlib-table">
          <div className="colorlib-table-cell js-fullheight">
            <ul>
              <li>
                <Link to="/" onClick={this.handleClick}>Home</Link>
              </li>
              <li>
                <Link to="/band" onClick={this.handleClick}>Band</Link>
              </li>
              <li>
                <Link to="/shows" onClick={this.handleClick}>
                  Shows
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

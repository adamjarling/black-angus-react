import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/black-angus-font-logo-white.png';


const HeroWithContent = props => {
  return (
    <aside id="colorlib-hero">
      <div className="flexslider">
        <ul className="slides">
          <li style={{ backgroundImage: `url(${props.bgImage})` }}>
            
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-xs-12 col-md-offset-2 text-center slider-text">
                  <div className="slider-text-inner">
                    <h2>{props.h2}</h2>
                    <img src={logo} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
    </aside>
  );
};

HeroWithContent.propTypes = {
  bgImage: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string
};

export default HeroWithContent;

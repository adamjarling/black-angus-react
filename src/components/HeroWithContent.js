import React from 'react';
import PropTypes from 'prop-types';

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
                    <h1>{props.h1}</h1>
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

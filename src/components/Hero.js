import React from 'react';
import PropTypes from 'prop-types';

const Hero = props => {
  return (
    <aside id="colorlib-hero">
      <div className="flexslider">
        <ul className="slides">
          <li style={{ backgroundImage: `url(${props.bgImage})` }}>
            <div className="overlay" />
          </li>
        </ul>
      </div>
    </aside>
  );
};

Hero.propTypes = {
  bgImage: PropTypes.string
};

export default Hero;

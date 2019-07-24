import React, { useEffect } from "react";
import PropTypes from "prop-types";
import logo from "../images/black-angus-font-logo-white.png";
import { jQueryFlexSlider } from "../services/jquery-to-refactor";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const HeroWithContent = props => {
  useEffect(() => {
    jQueryFlexSlider();

    return () => console.log("unmounting...");
  }, []);

  const LI = styled.li`
    background-image: url(${props.bgImage});
  `;

  return (
    <aside id="colorlib-hero">
      <div className="flexslider">
        <ul className="slides">
          <LI>
            <div className="overlay" />
            <div className="container">
              {props.location.pathname === "/" && (
                <div className="row">
                  <div className="col-md-8 col-sm-12 col-xs-12 col-md-offset-2 text-center slider-text">
                    <div className="slider-text-inner">
                      <h2>{props.h2}</h2>
                      <img src={logo} alt="Logo" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </LI>
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

export default withRouter(HeroWithContent);

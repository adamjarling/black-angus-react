import React, { useEffect } from "react";
import PropTypes from "prop-types";
import logo from "../images/black-angus-font-logo-white.png";
import { jQueryFlexSlider } from "../services/jquery-to-refactor";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const HeroWithContent = props => {
  const location = useLocation();

  useEffect(() => {
    jQueryFlexSlider();

    //return () => console.log("unmounting...");
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
              <div className="row">
                <div className="col-md-8 col-sm-12 col-xs-12 col-md-offset-2 text-center slider-text">
                  <div className="slider-text-inner">
                    <h2>{props.h2}</h2>
                    {location.pathname === "/" ? (
                      <img src={logo} alt="Logo" />
                    ) : (
                      <h1>{props.h1}</h1>
                    )}
                  </div>
                </div>
              </div>
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

export default HeroWithContent;

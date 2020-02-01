import React, { useEffect } from "react";
import HeroWithContent from "../components/HeroWithContent";
import bgImage2 from "../images/DSC03193-ANIMATION.gif";
import Band from "../components/homepage/Band";
import TestimonialContainer from "./TestimonialsContainer";
import Hire from "../components/Hire";
import Video from "../components/Video";
import ShowListPosters from "../components/ShowListPosters";
import { jQueryWaypoint } from "../services/jquery-to-refactor";
import IntroHeading from "../components/IntroHeading";
import { useHistory } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";

const HomeContainer = () => {
  const history = useHistory();

  const handlePressClick = () => {
    history.push("/press-kit");
  };

  useEffect(() => {
    jQueryWaypoint();
  }, []);

  return (
    <div>
      <HeroWithContent bgImage={bgImage2} h1="The Band" h2="Introducing" />
      <IntroHeading>
        <p className="home-intro-p">
          Black Angus is an AC/DC tribute band hailing from Chicago, USA.{" "}
        </p>
        <div className="home-hi-contacts">
          <SocialMedia />
          <a href="mailto:info@blackangusrock.com">info@blackangusrock.com</a>
          <button className="button btn btn-primary" onClick={handlePressClick}>
            View the Press Kit
          </button>
        </div>
      </IntroHeading>

      <div className="container">
        <Video embedUrl="https://www.youtube.com/embed/WYGFRIrze4c" />
        <p>
          Just released, a new promo video featuring audio recordings from a
          Black Angus session last month (engineered by Tony McQuaid), covering
          "Walk All Over You", "Girls Got Rhythm" and "If You Want Blood"
        </p>
      </div>

      <ShowListPosters />
      <Band />
      <TestimonialContainer />
      <Hire />
      <div className="container">
        <Video embedUrl="https://www.youtube.com/embed/XrUlh03HY4w" />
      </div>
    </div>
  );
};

export default HomeContainer;

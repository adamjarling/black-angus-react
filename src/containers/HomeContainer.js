import React, { useEffect } from "react";
import HeroWithContent from "../components/HeroWithContent";
import bgImage from "../images/web-banner-cutup.jpg";
import Band from "../components/homepage/Band";
import TestimonialContainer from "./TestimonialsContainer";
import Hire from "../components/Hire";
import Video from "../components/Video";
import ShowListPosters from "../components/ShowListPosters";
import FollowUs from "../components/homepage/FollowUs";
import { jQueryWaypoint } from "../services/jquery-to-refactor";

const HomeContainer = () => {
  const styles = {
    introParagraph: {
      marginTop: "5rem"
    },
    socialMediaIcon: {
      marginRight: "10px"
    }
  };

  useEffect(() => {
    jQueryWaypoint();
  }, []);

  return (
    <div>
      <HeroWithContent bgImage={bgImage} h1="The Band" h2="Introducing" />
      <div className="col-md-8 col-md-offset-2 text-center animate-box intro-heading fadeInUp animated">
        <p style={styles.introParagraph}>
          Black Angus is an AC/DC tribute band hailing from Chicago, USA.{" "}
          <a href="mailto:info@blackangusrock.com">info@blackangusrock.com</a>
        </p>
        <FollowUs />
      </div>

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

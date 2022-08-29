import React, { useEffect } from "react";
import HeroWithContent from "../components/HeroWithContent";
import bgImage from "../images/hob/rb-hob.JPG";
import IntroHeading from "../components/IntroHeading";
import styled from "styled-components";
import { jQueryWaypoint } from "../services/jquery-to-refactor";

const BookingContainer = () => {
  useEffect(() => {
    jQueryWaypoint();
  }, []);

  const BookingHeadline = styled.h2`
    margin: 4rem 0 8rem;
    text-align: center;
  `;

  return (
    <div>
      <HeroWithContent bgImage={bgImage} h2="Black Angus" h1="Booking" />

      <div className="container">
        <IntroHeading>
          <p>For USA and UK booking, contact:</p>
        </IntroHeading>
        <BookingHeadline>
          <a href="mailto:underthewirebooking@gmail.com">
            underthewirebooking@gmail.com
          </a>
        </BookingHeadline>
      </div>
    </div>
  );
};

export default BookingContainer;

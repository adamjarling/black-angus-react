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

  const PastShowsHeadline = styled.h2`
    margin-top: 4rem;
    padding-top: 4rem;
    border-top: 1px solid #ccc;
  `;

  const BookingHeadline = styled.h2`
    margin: 4rem 0 8rem;
    text-align: center;
  `;

  return (
    <div>
      <HeroWithContent bgImage={bgImage} h2="Black Angus" h1="Booking" />

      <div className="container">
        <IntroHeading>
          <p>“Festivals, clubs, cruises, outer space, book the Black Angus.”</p>
        </IntroHeading>
        <BookingHeadline>
          <a href="mailto:info@blackangusrock.com">info@blackangusrock.com</a>
        </BookingHeadline>
      </div>
    </div>
  );
};

export default BookingContainer;

import React, { useEffect } from "react";
import HeroWithContent from "../components/HeroWithContent";
import bgImage from "../images/stage-shot-bw.jpg";
import IntroHeading from "../components/IntroHeading";
import styled from "styled-components";
import ShowList from "../components/ShowList";
import { jQueryWaypoint } from "../services/jquery-to-refactor";
import { shows, pastShows } from "../services/shows";

const ShowsContainer = () => {
  useEffect(() => {
    jQueryWaypoint();
  }, []);

  const PastShowsHeadline = styled.h2`
    margin-top: 4rem;
    padding-top: 4rem;
    border-top: 1px solid #ccc;
  `;

  return (
    <div>
      <HeroWithContent
        bgImage={bgImage}
        h2="Clubs, festivals, backyard bbqs"
        h1="Live shows"
      />

      <div className="container">
        {/* <IntroHeading>
          <p>
            “BLACK ANGUS is closest thing you'll get to experiencing the feeling
            of live AC/DC. The band kicks ass.”
          </p>{" "}
          <p>— Black Angus's manager</p>
        </IntroHeading> */}
        <ShowList shows={shows} />
        <IntroHeading>
          <PastShowsHeadline>Past Shows</PastShowsHeadline>
        </IntroHeading>
        <ShowList shows={pastShows} />
      </div>
    </div>
  );
};

export default ShowsContainer;

import React from "react";
import promoPic1 from "../images/DSC03584.JPG";
import hvac1 from "../images/hvac1.jpg";
import HeroWithContent from "../components/HeroWithContent";
import bgImage from "../images/DSC03193-ANIMATION.gif";
import IntroHeading from "../components/IntroHeading";
import Video from "../components/Video";
import girls from "../assets/Girls got Rhythm.ref1.mp3";
import walkMp3 from "../assets/Walk all over You.mstrref1.mp3";
import styled from "styled-components";
import fontLogo from "../images/black-angus-font-logo.png";
import biggerLogo from "../images/black-angus-logo2.png";

const PressKitContainer = () => {
  const Audio = styled.audio`
    width: 100%;
  `;
  const Logo = styled.img`
    padding-bottom: 3rem;
  `;
  const BioText = styled.div`
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  `;

  return (
    <div>
      <div>
        <HeroWithContent bgImage={bgImage} />

        <div id="colorlib-presskit" className="container">
          <IntroHeading>
            <h2>Press Kit</h2>
            {/* <p>
              “BLACK ANGUS is closest thing you'll get to experiencing the
              feeling of live AC/DC. The band kicks ass.”
            </p>{" "}
            <p>— Kory Clarke</p> */}
          </IntroHeading>
          <BioText>
            <p>
              BLACK ANGUS is the premier North American AC/DC tribute band
              re-creating the sound, energy and rhythms of AC/DC.
            </p>
            <p>
              Far beyond your average wig-wearing cover band, BLACK ANGUS
              consists of veteran Chicago rock & blues touring and recording
              musicians from the likes of Loudmouth, Cathedral, Urge Overkill,
              Skinwalker, The Last Vegas, Frank Bang’s Secret Stash,
              Thunderwing, Maiden Chicago, Head On, Fierce Atmospheres, The
              Cynics and more.
            </p>
            <p>
              "Our current line-up are just great players" says Taran De Pablos,
              singer of BLACK ANGUS. "Our guys have toured the world, released
              hit albums, done multiple stadium tours, you name it we've done
              it. When performing with Black Angus, it's a bunch of dudes having
              fun, breathing fresh life into some of the best rock songs of all
              time. People love it."
            </p>
            <p>
              Throughout 2018 and 2019 BLACK ANGUS has been playing the club and
              festival circuit, building out a Grade A set list. They've
              released 2 promo videos, and recently recorded studio versions of
              three classic AC/DC jams; "Girls Got Rhythm", "Shot Down in
              Flames", and "Walk All Over You".
            </p>
            <p>AC/DC rules. BLACK ANGUS aims to rule, almost as much. </p>
            <p>Book the best AC/DC tribute act of the pack today.</p>
          </BioText>

          <h3 className="fancy">Press Photos</h3>

          <div className="row">
            <div className="col-md-6">
              <img
                src={promoPic1}
                alt="Black Angus Promo Pic 1"
                className="img-responsive"
              />
            </div>
            <div className="col-md-6">
              <img
                src={hvac1}
                alt="Black Angus Promo Pic 2"
                className="img-responsive"
              />
            </div>
          </div>

          <h3 className="fancy">Sample Track</h3>
          <figure>
            <figcaption>Black Angus - "Girls Got Rhythm"</figcaption>
            <Audio controls src={girls}>
              Your browser does not support the
              <code>audio</code> element.
            </Audio>
          </figure>

          <figure>
            <figcaption>Black Angus - "Walk All Over You"</figcaption>
            <Audio controls src={walkMp3}>
              Your browser does not support the
              <code>audio</code> element.
            </Audio>
          </figure>

          <h3 className="fancy">Sample Video</h3>
          <Video embedUrl="https://www.youtube.com/embed/WYGFRIrze4c" />

          <h3 className="fancy">Promo Assets</h3>
          <Logo
            src={fontLogo}
            alt="Black Angus logo"
            className="img-responsive"
          />
          <Logo
            src={biggerLogo}
            alt="Black Angus logo"
            className="img-responsive"
          />

          <h3 className="fancy">Booking USA/Canada</h3>
          <p className="text-center">
            <a href="mailto:info@blackangusrock.com">info@blackangusrock.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PressKitContainer;

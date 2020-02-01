import React from "react";
import promoPic1 from "../images/DSC03584.JPG";
import hvac1 from "../images/hvac1.jpg";
import HeroWithContent from "../components/HeroWithContent";
import bgImage from "../images/hob-2019-ANIMATION.gif";
import Video from "../components/Video";
import girls from "../assets/Girls got Rhythm.ref1.mp3";
import walkMp3 from "../assets/Walk all over You.mstrref1.mp3";
import styled from "styled-components";
import fontLogo from "../images/black-angus-font-logo.png";
import biggerLogo from "../images/black-angus-logo2.png";
import rb from "../images/hob/rb-hob2.JPG";
import stageHob from "../images/gallery/stage-hob.JPG";

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
        <HeroWithContent bgImage={bgImage} h2="Black Angus" h1="Press Kit" />

        <div id="colorlib-presskit" className="container">
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
              hit albums, done stadium tours, you name it we've done it. When
              performing with Black Angus, it's a band having fun, breathing
              some life into some of the best rock songs of all time. The bull
              has found the unmistakable, AC/DC boogie. People love it."
            </p>
            <p>
              Since 2018 BLACK ANGUS has been touring the club and festival
              circuit, building out a Grade A set list. They've released 2 promo
              videos, and recently recorded studio versions of three classic
              AC/DC jams; "Girls Got Rhythm", "Shot Down in Flames", and "Walk
              All Over You".
            </p>
            <p>AC/DC rules. BLACK ANGUS aims to rule, almost as much. </p>
            <p>Book the best AC/DC tribute act of the pack today.</p>
          </BioText>

          <h3 className="fancy">Press Photos</h3>

          <div className="row">
            <div className="col-md-6">
              <img
                src={rb}
                alt="Black Angus Promo Pic 3"
                className="img-responsive"
              />
            </div>
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
            <div className="col-md-6">
              <img
                src={stageHob}
                alt="Black Angus Promo Pic 4"
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

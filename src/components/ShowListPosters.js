import React from "react";
import Gallery from "react-photo-gallery";
import reggies from "../images/black-angus-reggies-2018-11-17.png";
import reggiesOfficial from "../images/posters/2018-reggies.jpg";
import nye from "../images/posters/2018-nye.jpg";
import hvac from "../images/posters/2019-hvac-3-bands.jpg";
import hvacPrint from "../images/posters/2019-hvac-3-bands-print.jpg";
import reggies10 from "../images/posters/reggies-10th-anniversary.jpg";
import hvacPoster from "../images/posters/2019-04-26-hvac.jpg";
import reggiesRobbyBDay from "../images/posters/2019-08-08-reggies.jpg";
import ghettoKarts2019 from "../images/posters/facebook-event-2019-07-04.png";
import brauerhouse from "../images/posters/2019-09-21-brauerhouse.jpg";
import hvacCubs from "../images/posters/facebook-event-2019-08-31.png";
import publicHouse from "../images/posters/2019-12-21-public-house.jpg";
import ShowList from "./ShowList";
import { shows } from "../services/shows";

const styles = {
  sectionStyles: {
    paddingBottom: "7rem"
  }
};

const photos = [
  {
    src: publicHouse,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/2202566386717178/"
  },
  {
    src: reggiesRobbyBDay,
    width: 5,
    height: 8,
    fbeventurl: ""
  },
  {
    src: hvacCubs,
    width: 8,
    height: 4,
    fbeventurl: ""
  },
  {
    src: brauerhouse,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/340843310125045/"
  },
  {
    src: ghettoKarts2019,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/2366748116872436/"
  },
  {
    src: hvacPoster,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/2060105220711141/"
  },
  {
    src: nye,
    width: 3,
    height: 2,
    fbeventurl: "https://www.facebook.com/events/1634691659964625/"
  },
  {
    src: hvac,
    width: 5,
    height: 3,
    fbeventurl: "https://www.facebook.com/events/266652840698888/"
  },
  {
    src: hvacPrint,
    width: 5,
    height: 8,
    fbeventurl: "https://www.facebook.com/events/266652840698888/"
  },
  {
    src: reggiesOfficial,
    width: 5,
    height: 3,
    fbeventurl: "https://www.facebook.com/events/1948656285438913/"
  },
  {
    src: reggies,
    width: 5,
    height: 3,
    fbeventurl: "https://www.facebook.com/events/1948656285438913/"
  },
  {
    src: reggies10,
    width: 3,
    height: 5
  }
];

const ShowListPosters = props => {
  const handleClick = (e, obj) => {
    if (obj.photo.fbeventurl) {
      window.open(obj.photo.fbeventurl, "_blank");
    }
  };

  return (
    <section style={styles.sectionStyles}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center intro-heading animate-box">
            <h2>Shows</h2>
          </div>
        </div>
        <ShowList shows={shows} />

        <div className="row">
          <Gallery
            photos={photos}
            direction={"column"}
            columns={2}
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default ShowListPosters;

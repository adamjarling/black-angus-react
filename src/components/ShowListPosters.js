import Gallery from "react-photo-gallery";
import React from "react";
import ShowList from "./ShowList";
import brauer2023 from "../images/posters/2023-02-23-brauer.avif";
import brauerhouse from "../images/posters/2019-09-21-brauerhouse.jpg";
import dec2023Rochaus from "../images/posters/2023-12-09-rochaus.jpeg";
import fireSaloon from "../images/posters/2020-02-27-facebook-event.png";
import ghettoKarts2019 from "../images/posters/facebook-event-2019-07-04.png";
import hardRockCasino from "../images/posters/2023-10-07-hardrock.jpeg";
import hob from "../images/posters/2019-house-of-blues.jpg";
import hvac from "../images/posters/2019-hvac-3-bands.jpg";
import hvacCubs from "../images/posters/facebook-event-2019-08-31.png";
import hvacPoster from "../images/posters/2019-04-26-hvac.jpg";
import hvacPrint from "../images/posters/2019-hvac-3-bands-print.jpg";
import nye from "../images/posters/2018-nye.jpg";
import publicHouse from "../images/posters/2019-12-21-public-house.jpg";
import reggies from "../images/black-angus-reggies-2018-11-17.png";
import reggies10 from "../images/posters/reggies-10th-anniversary.jpg";
import reggies2023 from "../images/posters/2023-03-04-reggies.jpeg";
import reggiesBeach from "../images/posters/2021-reggies-beach.jpeg";
import reggiesOfficial from "../images/posters/2018-reggies.jpg";
import reggiesRobbyBDay from "../images/posters/2019-08-08-reggies.jpg";
import saveRnRFest from "../images/posters/2022-05-01-save-rnr.jpeg";
import { shows } from "../services/shows";
import westChicago2021 from "../images/posters/2021-12-18-flyer.jpeg";

const styles = {
  sectionStyles: {
    paddingBottom: "7rem",
  },
};

export const photos = [
  {
    src: dec2023Rochaus,
    width: 2,
    height: 2,
    fbeventurl: "https://www.facebook.com/events/714821100504164",
  },
  {
    src: hardRockCasino,
    width: 3,
    height: 2,
    fbeventurl: "",
  },
  {
    src: reggies2023,
    width: 2,
    height: 4,
    fbeventurl: "",
  },
  {
    src: brauer2023,
    width: 5,
    height: 3,
    fbeventurl: "",
  },
  {
    src: saveRnRFest,
    width: 2,
    height: 5,
    fbeventurl: "",
  },
  {
    src: westChicago2021,
    width: 5,
    height: 5,
    fbeventurl:
      "https://skeletix.com/1376-diver-down-van-halen-tribute-the-wc-soc/",
  },
  {
    src: reggiesBeach,
    width: 8,
    height: 5,
    fbeventurl: "",
  },
  {
    src: fireSaloon,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/2565162720403475/",
  },
  {
    src: hob,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/2464016177173365/",
  },
  {
    src: publicHouse,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/2202566386717178/",
  },
  {
    src: reggiesRobbyBDay,
    width: 5,
    height: 8,
    fbeventurl: "",
  },
  {
    src: hvacCubs,
    width: 8,
    height: 4,
    fbeventurl: "",
  },
  {
    src: brauerhouse,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/340843310125045/",
  },
  {
    src: ghettoKarts2019,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/2366748116872436/",
  },
  {
    src: hvacPoster,
    width: 8,
    height: 5,
    fbeventurl: "https://www.facebook.com/events/2060105220711141/",
  },
  {
    src: nye,
    width: 3,
    height: 2,
    fbeventurl: "https://www.facebook.com/events/1634691659964625/",
  },
  {
    src: hvac,
    width: 5,
    height: 3,
    fbeventurl: "https://www.facebook.com/events/266652840698888/",
  },
  {
    src: hvacPrint,
    width: 5,
    height: 8,
    fbeventurl: "https://www.facebook.com/events/266652840698888/",
  },
  {
    src: reggiesOfficial,
    width: 5,
    height: 3,
    fbeventurl: "https://www.facebook.com/events/1948656285438913/",
  },
  {
    src: reggies,
    width: 5,
    height: 3,
    fbeventurl: "https://www.facebook.com/events/1948656285438913/",
  },
  {
    src: reggies10,
    width: 3,
    height: 5,
  },
];

const ShowListPosters = (props) => {
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

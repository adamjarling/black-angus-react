import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import HeroWithContent from "../components/HeroWithContent";
import bgImage from "../images/hob/rb-hob.JPG";
import fullBand from "../images/hob/full-band-hob.JPG";
import rbHob2 from "../images/hob/rb-hob2.JPG";
import taran from "../images/hob/taran-hob.JPG";
import daveTonyRocking from "../images/hob/tony-dave-rockin-hob.gif";
import baDave from "../images/ba-dave.jpg";
import baTony from "../images/ba-tony.jpg";
import hvacPhoto from "../images/hvac1.jpg";
import stageShot from "../images/stage-shot-bw.jpg";
import ghettoKarts from "../images/gallery/ghetto-karts-ANIMATION.gif";
import bikes from "../images/gallery/bikes.JPG";
import daveBrauer from "../images/gallery/dave-brauerhaus.JPG";
import taranRb from "../images/gallery/taran-rb-brauerhaus-ANIMATION.gif";
import taranRbHob from "../images/hob/taran-rb-hob.JPG";
import taranRbHob2 from "../images/hob/taran-rb-hob2.JPG";
import bandBW from "../images/hob/taran-tony-rb-hob.JPG";
import tonyHob from "../images/hob/tony-hob.JPG";
import rbBrauer from "../images/gallery/rb-brauerhaus.JPG";
import adam from "../images/gallery/adam-brauerhaus2.JPG";
import taranLivewire from "../images/gallery/taran-livewire.JPG";
import taranWild from "../images/gallery/taran-wild.JPG";
import stageDark from "../images/gallery/stage-dark.JPG";

const styles = {
  image: {
    maxWidth: "500px"
  },
  sectionStyles: {
    paddingBottom: "7rem"
  },
  section: {
    // background: "#000"
  }
};

const photos = [
  {
    src: fullBand,
    width: 8,
    height: 5
  },
  {
    src: rbHob2,
    width: 8,
    height: 5
  },

  {
    src: taranWild,
    width: 5,
    height: 8
  },
  {
    src: taranRbHob2,
    width: 4,
    height: 2
  },
  {
    src: baTony,
    width: 3,
    height: 3
  },
  {
    src: stageDark,
    width: 4,
    height: 2
  },
  {
    src: adam,
    width: 2,
    height: 4
  },
  {
    src: daveBrauer,
    width: 3,
    height: 5
  },
  {
    src: taran,
    width: 5,
    height: 8
  },
  {
    src: rbBrauer,
    width: 8,
    height: 5
  },
  {
    src: baDave,
    width: 5,
    height: 5
  },
  {
    src: daveTonyRocking,
    width: 8,
    height: 5
  },
  {
    src: hvacPhoto,
    width: 8,
    height: 5
  },

  {
    src: stageShot,
    width: 3,
    height: 2
  },
  {
    src: tonyHob,
    width: 3,
    height: 5
  },
  {
    src: taranRbHob,
    width: 8,
    height: 4
  },
  {
    src: ghettoKarts,
    width: 8,
    height: 5
  },
  {
    src: taranRb,
    width: 5,
    height: 8
  },
  {
    src: bikes,
    width: 8,
    height: 5
  },

  {
    src: bandBW,
    width: 8,
    height: 5
  },
  {
    src: bgImage,
    width: 8,
    height: 5
  }
];

const PhotosContainer = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section style={styles.section}>
      {/* <HeroWithContent bgImage={bgImage} h1="Photos" h2="On stage, backstage" /> */}
      <div className="container-fluid" style={styles.sectionStyles}>
        <div className="row">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
      <div className="container">
        <h2>Special thanks to Mako for all the awesome photos!</h2>
      </div>
    </section>
  );
};

export default PhotosContainer;

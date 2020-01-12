import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import HeroWithContent from "../components/HeroWithContent";
import bgImage from "../images/hob/rb-hob.JPG";
import fullBand from "../images/hob/full-band-hob.JPG";
import rbHob2 from "../images/hob/rb-hob2.JPG";

const styles = {
  image: {
    maxWidth: "500px"
  },
  sectionStyles: {
    paddingBottom: "7rem"
  },
  section: {
    background: "#000"
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
      <HeroWithContent bgImage={bgImage} h1="Photos" h2="On stage, backstage" />
      <div className="container-fluid">
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
    </section>
  );
};

export default PhotosContainer;

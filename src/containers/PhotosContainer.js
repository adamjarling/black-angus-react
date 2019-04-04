import React from 'react';
import bonImage from '../images/ACDC-bon-scott.jpg';
import angus from '../images/angus-young.jpg';

const styles = {
  image: {
    maxWidth: '500px'
  },
  sectionStyles: {
    paddingBottom: '7rem'
  }
};

const PhotosContainer = props => {
  return (
    <section style={styles.sectionStyles}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center intro-heading animate-box">
            <h2>Photos</h2>
          </div>
        </div>
        <div className="row" />
      </div>
    </section>
  );
};

export default PhotosContainer;

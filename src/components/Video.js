import React from 'react';

const styles = {
  vidWrapper: {
    textAlign: 'center',
    marginBottom: '8rem'
  }
};

const Video = props => {
  return (
    <div style={styles.vidWrapper}>
      <iframe
        title="Black Angus promo video"
        width="768"
        height="432"
        src={props.embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
import React from 'react';

const styles = {
  socialMediaIcon: {
    marginRight: '10px'
  }
};

const FollowUs = props => {
  return (
    <React.Fragment>
      <h2>Follow Us</h2>
      <p className="colorlib-social-icons colorlib-social-icons2">
        <a
          style={styles.socialMediaIcon}
          href="https://www.facebook.com/Black-Angus-Chicago-117537881596118/"
        >
          <i className="icon-facebook4" />
        </a>
        <a
          style={styles.socialMediaIcon}
          href="https://www.youtube.com/channel/UCGzpFZEvHz1iHQ1B9ScB8rg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-youtube2" />
        </a>
        <a
          href="https://plus.google.com/u/0/117197120647228422486"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-googleplus" />
        </a>
      </p>
    </React.Fragment>
  );
};

export default FollowUs;

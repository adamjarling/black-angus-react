import React from 'react';

const BandMemberSquare = props => {
  return (
    <div className="col-md-6 animate-box text-center">
      <a
        href="band.html"
        className="work-img"
        style={{ backgroundImage: `url(${props.bgImage})` }}
      >
        <div className="overlay" />
        <div className="desc">
          <p className="tag">
            <span>{props.position}</span>
          </p>
          <h3>
            {props.label}
          </h3>
          <span className="read-more">
            Read more
            <i className="icon-arrow-right3" />
          </span>
        </div>
      </a>
    </div>
  );
};

export default BandMemberSquare;

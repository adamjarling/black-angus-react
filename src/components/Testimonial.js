import React from 'react';
import PropTypes from 'prop-types';

const Testimonial = props => {
  return (
    <div className="item">
      <div className="testimony-slide text-center active">
        <figure>
          <img src={props.authorImage} alt="user" />
        </figure>
        <blockquote>
          <p>
            <i className="icon-quotes-left" /> {props.text}
          </p>
          <span>{props.author}</span>
        </blockquote>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
    authorImage: PropTypes.string,
    text: PropTypes.string,
    author: PropTypes.string
}

export default Testimonial;

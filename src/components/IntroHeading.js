import React from "react";

const IntroHeading = ({ children, headingText }) => {
  return (
    <div className="row">
      <div className="col-md-8 col-md-offset-2 text-center animate-box intro-heading fadeInUp animated">
        {headingText && <h2>{headingText}</h2>}
        {children}
      </div>
    </div>
  );
};

export default IntroHeading;

import React from "react";

const IntroHeading = ({ children, headingText }) => {
  return (
    <div className="text-center animate-box intro-heading fadeInUp animated">
      {headingText && <h2>{headingText}</h2>}
      {children}
    </div>
  );
};

export default IntroHeading;

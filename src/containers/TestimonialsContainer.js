import React, { useEffect } from "react";
import Testimonial from "../components/Testimonial";
import bonPhoto from "../images/bon-scott-acdc-04.jpg";
import mulletPhoto from "../images/mullett2.jpg";
import angusPhoto from "../images/angus.jpg";
import { jQueryOwlCarousel } from "../services/jquery-to-refactor";

const TestimonialsContainer = props => {
  useEffect(() => {
    jQueryOwlCarousel();
  }, []);

  return (
    <div id="colorlib-testimony" className="colorlib-light-grey">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center animate-box intro-heading">
            <h2>Testimonials:</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row animate-box">
              <div className="owl-carousel1">
                <Testimonial
                  text="We've got so many ideas for songs
            and good riffs, and the more we work, the more we tour, we're
            getting more ideas, just more. It's just gonna get better and
            better. I can't see an end to it. It's like infinity rock and roll."
                  author="Bon Scott"
                  authorImage={bonPhoto}
                />
                <Testimonial
                  text="Dude, I saw Black Angus last week and it was better than Minus The Bear."
                  author="Ferguson Davis"
                  authorImage={mulletPhoto}
                />

                <Testimonial
                  text="I'm sick to death of people saying we've made 11 albums that sounds exactly the same. In fact, we've made
												12 albums that sound exactly the same."
                  author="Angus Young"
                  authorImage={angusPhoto}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsContainer;

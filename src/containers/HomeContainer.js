import React, { Component } from 'react';
import Hero from '../components/Hero';
import ShowList from '../components/ShowList';
import Band from '../components/homepage/Band';
import TestimonialContainer from './TestimonialsContainer';
import Hire from '../components/Hire';
import bgImage from '../images/black-angus-logo2.png';


class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Hero bgImage={bgImage} />
        <ShowList />
        <Band />
        <TestimonialContainer />
        <Hire />
      </div>
    );
  }
}

export default HomeContainer;

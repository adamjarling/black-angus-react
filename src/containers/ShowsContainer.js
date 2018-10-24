import React, { Component } from 'react';
import ShowsList from '../components/ShowList';
import Hero from '../components/Hero';
import bgImage from '../images/web-banner-cutup.jpg';

class ShowsContainer extends Component {
  render() {
    return (
      <div>
        <Hero bgImage={bgImage} />
        <ShowsList />
      </div>
    );
  }
}

export default ShowsContainer;

import React, { Component } from 'react';
import ShowsList from '../components/ShowList';
import HeroWithContent from '../components/HeroWithContent';
import bgImage from '../images/web-banner-cutup.jpg';
import Band from '../components/homepage/Band';
import TestimonialContainer from './TestimonialsContainer';
import Hire from '../components/Hire';
import Video from '../components/Video';

class ShowsContainer extends Component {
  styles = {
    introParagraph: {
      marginTop: '5rem',
    }
  };

  render() {
    return (
      <div>
        <HeroWithContent bgImage={bgImage} h1="The Band" h2="Introducing" />
        <div className="col-md-8 col-md-offset-2 text-center animate-box intro-heading fadeInUp animated">
          <p style={this.styles.introParagraph}>
            Black Angus is a Bon Scott-era AC/DC tribute band hailing from Chicago, USA.  <a href="mailto:info@blackangusrock.com">info@blackangusrock.com</a>
          </p>
        </div>
        <Video embedUrl="https://www.youtube.com/embed/XrUlh03HY4w" />
        <Band />
        <ShowsList />
        <TestimonialContainer />
        <Hire />
      </div>
    );
  }
}

export default ShowsContainer;

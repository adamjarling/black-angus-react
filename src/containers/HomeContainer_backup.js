import React, { Component } from 'react';
import HeroWithContent from '../components/Hero';
import ShowList from '../components/ShowList';
import Band from '../components/homepage/Band';
import TestimonialContainer from './TestimonialsContainer';
import Hire from '../components/Hire';
import bgImage from '../images/black-angus-logo2.png';

class HomeContainer extends Component {
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
            Black Angus is a Bon Scott era AC/DC tribute musical act based out of Chicago USA.  The lineup consists of veteran musicians who deliver 'the boogie', that unmistakable, shake-your-ass, AC/DC signature sound.
          </p>
        </div>
        <ShowList />
        <Band />
        <TestimonialContainer />
        <Hire />
      </div>
    );
  }
}

export default HomeContainer;

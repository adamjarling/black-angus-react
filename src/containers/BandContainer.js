import React, { Component } from 'react';
import HeroWithContent from '../components/HeroWithContent';
import bgImage from '../images/acdc-promo-shot2-dark.jpg';

class ShowsContainer extends Component {
  render() {
    return (
      <div>
        <HeroWithContent bgImage={bgImage} h1="The Band" h2="Introducing" />
        <div id="colorlib-band">
          <div class="container">
            <div class="row">
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowsContainer;

import React from 'react';
import { FACEBOOK_URL } from '../services/Constants';

const shows = [
  {
    date: 'Friday, April 5th',
    venue: 'Live Wire Lounge',
    venueUrl: 'http://livewireloungechicago.com/',
    location: 'Chicago, IL',
    ticketUrl: 'https://www.ticketfly.com/purchase/event/1787836',
    image: null,
    socialLink: 'https://www.facebook.com/events/814722865572710/'
  },
  {
    date: 'Friday, April 26th',
    venue: 'HVAC Pub',
    venueUrl: 'https://www.hvacpub.com/',
    location: 'Chicago, IL',
    ticketUrl: 'https://www.facebook.com/events/2060105220711141/',
    image: null,
    socialLink: 'https://www.facebook.com/events/2060105220711141/'
  }
];

const styles = {
  showImage: {
    marginTop: '2rem',
    width: '75%'
  }
};

const ShowList = props => {
  return (
    <div className="row">
      <div className="col-md-12 animate-box">
        {shows.map(show => (
          <div className="show-listing" key={show.date}>
            {show.date}
            <br /> @{' '}
            <a
              href={show.venueUrl ? show.venueUrl : '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {show.venue}
            </a>
            <br /> {show.location}
            {show.ticketUrl ? (
              <div>
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Tickets
                </a>
              </div>
            ) : null}
            {show.socialLink && (
              <div>
                <a href={show.socialLink ? show.socialLink : FACEBOOK_URL}>
                  <i className="icon-facebook4" />
                </a>
              </div>
            )}
            {show.image ? (
              <div>
                <img
                  src={show.image}
                  style={styles.showImage}
                  alt={`Black Angus rocks ${show.venue}`}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;

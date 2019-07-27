import React from 'react';

const shows = [
    {
      date: "Thursday, August 8th",
      venue: "Reggies - Robby Birthday Bash",
      venueUrl: "https://www.reggieslive.com",
      location: "Chicago, IL",
      ticketUrl:
        "https://www.reggieslive.com/show/black-angus-a-tribute-to-ac-dc/",
      image: null,
      socialLink: "https://www.facebook.com/events/312829506288575/"
    },
    {
      date: "Saturday, September 21st",
      venue: "Brauer house w/ Phat Kiss and Too Bad",
      venueUrl: "https://www.brauerhouse.com/",
      location: "Lombard, IL",
      ticketUrl:
        "https://www.eventbrite.com/e/black-angus-phat-kiss-too-bad-company-tickets-65936751599",
      image: null,
      socialLink: "https://www.facebook.com/events/340843310125045/"
    },
    {
      date: "Saturday, December 21st",
      venue: "Public House",
      venueUrl: "https://www.publichouseoncicero.com/",
      location: "Crestwood, IL",
      ticketUrl: "",
      image: null,
      socialLink: ""
    }
  ];

const ShowTable = () => {
    return (
        <table>
            <thead>
                <th>Date</th>
                <th>City</th>
                <th>Venue</th>
                <th>Tickets</th>
                <th>Facebook Event</th>
            </thead>
            <tbody>
                {shows.map(show => (
                    <tr>
                        <td>{show.date}</td>
                        <td>{show.city}</td>
                        <td>{show.venue}</td>
                        <td>Buy tickets</td>
                        <td>Facebook url</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ShowTable;
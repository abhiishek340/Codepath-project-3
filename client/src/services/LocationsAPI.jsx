import React, { useState, useEffect } from 'react';

const LocationsAPI = () => {
  const [eventsData, setEventsData] = useState([]);
  const [venue1, setVenue1] = useState([]);
  const [venue2, setVenue2] = useState([]);
  const [venue3, setVenue3] = useState([]);
  const [venue4, setVenue4] = useState([]);

  useEffect(() => {
    // Fetch your events data from the API or use your existing data source
    const fetchData = async () => {
      try {
        // Replace this with your API call or data source
        const response = await fetch('http://localhost:3001/api/events');
        const data = await response.json();
        setEventsData(data);

        // Separate events by location
        const groupedEvents = groupEventsByLocation(data);
        setVenue1(groupedEvents['Central Park, New York'] || []);
        setVenue2(groupedEvents['The Fillmore, San Francisco'] || []);
        setVenue3(groupedEvents['Ultra Music Festival, Miami'] || []);
        setVenue4(groupedEvents['Carnegie Hall, New York'] || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Function to group events by location
  const groupEventsByLocation = (events) => {
    return events.reduce((grouped, event) => {
      const location = event.location;
      if (!grouped[location]) {
        grouped[location] = [];
      }
      grouped[location].push(event);
      return grouped;
    }, {});
  };

  return (
    <div>
      
    </div>
  );
};

export default LocationsAPI;

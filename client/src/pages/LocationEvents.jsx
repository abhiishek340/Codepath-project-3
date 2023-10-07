import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])
    const [eventsData, setEventsData] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
              // Replace this with your API call or data source
              const response = await fetch('http://localhost:3001/api/events');
              const data = await response.json();
              setEvents(data);
              
      
             
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
        <div className='location-events'>
            <header>
                <div className='location-image'>
                   
                </div>

                <div className='location-info'>
                    <h2>Texas</h2>
                    
                </div>
            </header>

            <main>
  {events && events.length > 0 ? (
    events.map((event, index) => {
      // Check if the index is less than 2 to limit the loop to the first two events
      if (index < 2) {
        return (
            <Event
            key={event.id}
            id={event.id}
            title={event.name}
            date={event.date}
            performer = {event.performer}
            image={event.image}
        />
        );
      }
      return null; // Return null for events beyond the first two
    })
  ) : (
    <h2>
      <i className="fa-regular fa-calendar-xmark fa-shake"></i> No events scheduled at this location yet!
    </h2>
  )}
</main>

        </div>
    )
}

export default LocationEvents
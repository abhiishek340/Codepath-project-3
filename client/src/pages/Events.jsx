import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const Events = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await fetch('http://localhost:3001/api/events');
            const data = await response.json();
            setEvents(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchEvents();
      }, []);

    return (
        <div className='location-events'>
           

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                    <>  
                    {console.log("This is the event", event)}
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            performer = {event.performer}
                            image={event.image}
                        />

                    </>
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default Events


/**
 *  <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>
 */
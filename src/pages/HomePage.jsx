import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import NavBar from '../components/NavBar';


const HomePage = () => {
    const [userEvents, setUserEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/events')
            .then((response) => response.json())
            .then((data) => setUserEvents(data))
            .catch((error) => console.error('there was an error fetching le data', error))
    }, []);
    return (
        <div style={{ display: 'flex' }}>
            <NavBar />
          <div style={{ flex: '1 0 50%', padding: '20px' }}>
            <h2>My Events</h2>
            <ul>
                {userEvents.map((event) => (
                    <li key={event._id}>
                        {event.eventName} 
                    </li>
                ))}
            </ul>

          </div>

          <div style={{ flex: '1 0 50%', padding: '20px' }}>
            <h2>Full Calendar</h2>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[

              ]}
            />
          </div>
        </div>
      );
    };

export default HomePage
import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import NavBar from '../components/NavBar';


const HomePage = () => {
    const [userEvents, setUserEvents] = useState([])

    useEffect(() => {
        fetch('https://coordinate-backend.onrender.com')
            .then((response) => response.json())
            .then((data) => setUserEvents(data))
            .catch((error) => console.error('there was an error fetching le data', error))
    }, []);
    return (
        <div>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <div style={{flex: '1 0 50%', padding: '20px' }}>
            <h2>My Events</h2>
            <ul>
                {userEvents.map((event) => (
                    <li key={event._id}>
                        {event.eventName} 
                    </li>
                ))}
            </ul>

          </div>

          <div style={{ flex: ' 0 50%', padding: '20px' }}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[

              ]}
            />
          </div>
        </div>
        </div>
      );
    };

export default HomePage
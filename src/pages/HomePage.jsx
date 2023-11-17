import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import NavBar from '../components/NavBar';


const HomePage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <NavBar />
          {/* Left side for "My Events" */}
          <div style={{ flex: '1 0 50%', padding: '20px' }}>
            <h2>My Events</h2>
            {/* You can map through the user's events and display them here */}
            {/* Example:
                {userEvents.map(event => (
                  <div key={event.id}>{event.name}</div>
                ))}
            */}
          </div>
    
          {/* Right side for FullCalendar */}
          <div style={{ flex: '1 0 50%', padding: '20px' }}>
            <h2>Full Calendar</h2>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[
                // Sample events data, replace this with your actual data
                { title: 'Event 1', date: '2023-08-10' },
                { title: 'Event 2', date: '2023-08-15' },
              ]}
            />
          </div>
        </div>
      );
    };

export default HomePage
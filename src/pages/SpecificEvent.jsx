import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import NavBar from '../components/NavBar';


const HomePage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <NavBar />

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
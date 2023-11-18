import React, {useEffect} from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import NavBar from '../components/NavBar';


const SpecificEvent = ({location}) => {
    useEffect(() => {
        const calendarDuration = new URLSearchParams(location.search).get('calendarDuration')

        const calendarEl = document.getElementById('calendar')
        const currentDate = new Date();
        let initialView = 'dayGridMonth';

        if (calendarDuration >= 3 && calendarDuration < 6) {
            initialView = 'dayGridMonth';
        } else if (calendarDuration >= 6 && calendarDuration < 12) {
            initialView = 'dayGridMonth';
        }
        
        const calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: [dayGridPlugin],
            initialView: initialView,
            height: '100%',
            validRange: {
                start: currentDate,
                end: new Date(currentDate.getFullYear(), currentDate.getMonth() + calendarDuration + 1)
            }
        })
        calendar.render()
    }, [])
    return (
        <div style={{ display: 'flex' }}>
            <NavBar />
            
            <div style={{ flex: '1 0 50%', padding: '20px' }}>
                <h2>Everyone's Events</h2>
            </div>


          <div style={{ flex: '1 0 50%', padding: '20px' }}>
            <h2>Full Calendar</h2>
            <FullCalendar
                plugins={[dayGridPlugin]}
                className='calendar'
                initialView="dayGridMonth"
                events={[]}
            />
          </div>
        </div>
      );
    };

export default SpecificEvent
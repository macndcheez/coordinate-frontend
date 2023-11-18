import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [userEvents, setUserEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/event')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserEvents(data);
      })
      .catch((error) => console.error('there was an error fetching le data', error));
  }, []);

  const handleEdit = (uniqueUrl) => {
    navigate(`/event/edit/${uniqueUrl}`);
  };

  const handleDelete = (uniqueUrl) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete this event?`);

    if (isConfirmed) {
      fetch(`http://localhost:4000/event/${uniqueUrl}`, {
        method: 'DELETE',
        credentials: 'include',
      })
        .then((response) => {
          if (response.ok) {
          } else {
            console.error('Failed to delete event');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1 0 50%', padding: '20px' }}>
          <h2 className='event-title'>My Events</h2>
          <ul>
            {userEvents.map((event) => (
              <li key={event._id}>
                <span
                  className='event-name'
                  onClick={() => navigate(`/event/${event.uniqueUrl}`)}
                >
                  {event.eventName}
                </span> <br />
                <button onClick={() => handleEdit(event.uniqueUrl)}>Edit</button>
                <button onClick={() => handleDelete(event.uniqueUrl)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <div className='calendar-container' style={{ flex: ' 0 50%', padding: '20px' }}>
          <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' events={[]} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
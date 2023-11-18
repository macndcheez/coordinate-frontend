import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import NavBar from '../components/NavBar';
import './HomePage.css';
import '../components/NavBar.css';

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
      .catch((error) => console.error('There was an error fetching data', error));
  }, []);

  const handleEdit = (eventId) => {
    // Replace this with your logic to navigate to the edit page for the specific event
    navigate(`/event/edit/${eventId}`);
  };

  const handleDelete = async (eventId) => {
    // Replace this with your logic to delete the event
    try {
      const response = await fetch(`http://localhost:4000/event/${eventId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        setUserEvents(userEvents.filter((event) => event._id !== eventId));
      } else {
        console.error('Event deletion failed');
      }
    } catch (error) {
      console.error('Error:', error);
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
                <Link to={`/event/${event.uniqueUrl}`} className='event-name'>
                  {event.eventName}
                </Link> <br/>
                <button onClick={() => handleEdit(event._id)}>Edit</button>
                <button onClick={() => handleDelete(event._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <div className='calendar-container' style={{ flex: ' 0 50%', padding: '20px' }}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            events={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
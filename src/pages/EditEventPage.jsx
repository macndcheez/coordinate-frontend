import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEventPage = () => {
    const [eventName, setEventName] = useState('');
    const [calendarDuration, setCalendarDuration] = useState('3');
    const { uniqueUrl } = useParams(); 
  
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`https://coordinate-backend.onrender.com/event/${uniqueUrl}`)
        .then((response) => response.json())
        .then((data) => {
          setEventName(data.eventName);
          setCalendarDuration(data.calendarDuration);
        })
        .catch((error) => console.error('Error fetching event data:', error));
    }, [uniqueUrl]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(eventName, calendarDuration);
      try {
        const response = await fetch(`https://coordinate-backend.onrender.com/event/${uniqueUrl}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ eventName, calendarDuration }),
          credentials: 'include',
        });
  
        if (response.ok) {
          console.log('Event updated successfully');
          navigate(`/event/${uniqueUrl}`);
        } else {
          console.error('Event update failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <div className="center-container">
        <div className="new-event-container">
          <h1>Edit Event</h1>
          <form onSubmit={handleSubmit} className="event-form">
            <label htmlFor="eventName">Event Name:</label>
            <input
              onChange={(e) => setEventName(e.target.value)}
              type="text"
              id="eventName"
              name="eventName"
              value={eventName} 
              required
              className="rounded-input"
            /><br />
  
            <label htmlFor="calendarDuration">Month Duration:</label>
            <select
              onChange={(e) => setCalendarDuration(e.target.value)}
              name="calendarDuration"
              id="calendarDuration"
              value={calendarDuration}
              required
              className="rounded-input"
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="12">12</option>
            </select><br />
  
            <button type="submit" className="rounded-button">
              Update Event
            </button>
          </form>
        </div>
      </div>
    );
}

export default EditEventPage
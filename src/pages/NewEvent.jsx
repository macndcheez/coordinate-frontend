import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewEvent.css'; 

const NewEvent = () => {
const [eventName, setEventName] = useState('');
const [calendarDuration, setCalendarDuration] = useState('3');

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(eventName, calendarDuration);
  try {
    const response = await fetch('http://localhost:4000/event/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventName, calendarDuration }),
      credentials: 'include',
  });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      navigate(`/event/${result.uniqueUrl}`);
      } else {
        console.error('Event creation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
};

return (
  <div className="center-container">
    <div className="new-event-container">
      <h1>Create a New Event!</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <label htmlFor="eventName">Event Name:</label>
        <input
          onChange={(e) => setEventName(e.target.value)}
          type="text"
          id="eventName"
          name="eventName"
          required
          className="rounded-input"
        /><br />

        <label htmlFor="calendarDuration">Month Duration:</label>
          <select
            onChange={(e) => setCalendarDuration(e.target.value)}
            name="calendarDuration"
            id="calendarDuration"
            required
            className="rounded-input"
          >
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="12">12</option>
          </select><br />

          <button type="submit" className="rounded-button">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewEvent;
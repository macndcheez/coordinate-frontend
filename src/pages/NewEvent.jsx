import React from 'react';

const NewEvent = () => {
  return (
    <div>
      <h1>Create a New Event!</h1>
      <form action="/events/new" method="POST">
        <label htmlFor="eventName">Event Name:</label>
        <input type="text" id="eventName" name="eventName" required /><br />

        <label htmlFor="calendarDuration">Month Duration:</label>
        <select name="calendarDuration" id="calendarDuration" required>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="12">12</option>
        </select><br />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default NewEvent;
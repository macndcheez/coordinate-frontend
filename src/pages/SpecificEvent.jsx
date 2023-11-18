import React, { useEffect, useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import NavBar from '../components/NavBar';

const SpecificEvent = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const getUserId = () => {
    const userId = sessionStorage.getItem('userid');
    return userId
  }
  const userId = getUserId()

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
    setCurrentEvents(storedEvents)
  }, [userId]);


  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };

      calendarApi.addEvent(newEvent);
      saveEvent(newEvent);
      setCurrentEvents([...currentEvents, newEvent]);
    }
  };

  const handleEventClick = (clickInfo) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`);

    if (isConfirmed) {
      deleteEvent(clickInfo.event.id)
      setCurrentEvents(currentEvents.filter((event) => event.id !== clickInfo.event.id));
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  const renderEventContent = (eventInfo) => (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );

  const renderSidebarEvent = (event) => (
    <li key={event.id}>
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i>{event.title}</i>
    </li>
  );

  const createEventId = () => String(new Date().getTime());

  const saveEvent = (event) => {
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
    const updatedEvents = [...storedEvents, event];
    localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents))
  }

  const deleteEvent = (eventId) => {
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
    const updatedEvents = storedEvents.filter((event) => event.id !== eventId);
    localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
  };

  return (
    <div className=''>
      {renderSidebar()}
      <div className=''>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={currentEvents}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>
    </div>
  );

  function renderSidebar() {
    return (
      <div className=''>
        <NavBar />
        <div className=''></div>
        <div className=''>
          <label>
            <input
              type='checkbox'
              checked={weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className=''>
          <h2>All Events ({currentEvents.length})</h2>
          <ul>{currentEvents.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  }
};

export default SpecificEvent;
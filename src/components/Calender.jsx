<<<<<<< HEAD
import React from 'react';
import { calendarEvents } from '../Data'; // Adjust path as needed
import { TagIcon, PaperClipIcon } from '@heroicons/react/24/outline';

const CalendarView = () => {
  return (
    <div className="p-4 ">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Team Project - Timeline</h3>

        {/* Legend */}
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>All Team</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>Important</span>
          </span>
          <span>11 Meetings</span>
        </div>

        {/* Date Picker & Settings */}
        <div className="flex items-center space-x-4">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center hover:bg-gray-200 transition">
            24 Sept - 27 Sept 2024
            <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <button className="text-gray-500 hover:text-gray-700 transition">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6-2h12M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-4 gap-4">
        {calendarEvents.map((dayData, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">{dayData.day}</h4>

            <div className="space-y-3">
              {dayData.events.map((event, eventIndex) => (
                <div key={eventIndex} className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                  {/* Event Title */}
                  <h5 className="text-sm font-semibold text-indigo-600">{event.title}</h5>
                  <p className="text-xs text-gray-500">{event.time}</p>
                  <p className="text-xs text-gray-700">{event.description?.substring(0, 60)}</p>

                  {/* Tags & Materials */}
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                    {event.tags?.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                    {event.materials && (
                      <span className="flex items-center">
                        <PaperClipIcon className="h-3 w-3 mr-1" />
                        Materials
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  {event.action && (
                    <button className="mt-3 bg-indigo-500 text-white px-3 py-1 rounded-md text-xs hover:bg-indigo-600 transition">
                      {event.action}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
=======
import React, { useState, useEffect, useCallback } from 'react';
import { eventData } from './Data';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, MagnifyingGlassIcon, CalendarIcon, ViewColumnsIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month'); // 'month', 'week', 'day'
  const [holidays, setHolidays] = useState({});
  const [events, setEvents] = useState(eventData || []);
  const [newEventModalOpen, setNewEventModalOpen] = useState(false);
  const [newEventDate, setNewEventDate] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedDate, setHighlightedDate] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'weekdays', 'weekends'

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=IN&year=${year}`
        );
        const data = await response.json();
        if (data.response && data.response.holidays) {
          const formattedHolidays = {};
          data.response.holidays.forEach(holiday => {
            const date = new Date(holiday.date.iso);
            const dateISO = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            formattedHolidays[dateISO] = holiday.name;
          });
          setHolidays(formattedHolidays);
        }
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

    fetchHolidays();
  }, [year]);

  const navigate = (direction) => {
    const newDate = new Date(currentDate);
    if (view === 'month') {
      newDate.setMonth(newDate.getMonth() + direction);
    } else if (view === 'week') {
      newDate.setDate(newDate.getDate() + (direction * 7));
    } else { // day view
      newDate.setDate(newDate.getDate() + direction);
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const getDaysArray = useCallback(() => {
    const days = [];
    
    if (view === 'month') {
      const firstDay = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      const daysFromPrevMonth = firstDay.getDay();
      const daysInCurrentMonth = lastDayOfMonth.getDate();

      // Previous Month Days
      for (let i = 0; i < daysFromPrevMonth; i++) {
        const day = prevMonthLastDay - daysFromPrevMonth + 1 + i;
        days.push({ day, date: new Date(year, month - 1, day), isOutsideMonth: true });
      }

      // Current Month Days
      for (let i = 1; i <= daysInCurrentMonth; i++) {
        const date = new Date(year, month, i);
        const dateISO = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        days.push({ 
          day: i, 
          date, 
          isOutsideMonth: false, 
          isHoliday: holidays[dateISO] 
        });
      }

      // Next Month Days
      const remainingDays = 42 - days.length;
      for (let i = 1; i <= remainingDays; i++) {
        days.push({ day: i, date: new Date(year, month + 1, i), isOutsideMonth: true });
      }
    } else if (view === 'week') {
      const currentDay = currentDate.getDay();
      const startDate = new Date(currentDate);
      startDate.setDate(currentDate.getDate() - currentDay);
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        const dateISO = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        days.push({ 
          day: date.getDate(), 
          date, 
          isOutsideMonth: date.getMonth() !== month,
          isHoliday: holidays[dateISO]
        });
      }
    } else { // day view
      const dateISO = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      days.push({ 
        day, 
        date: currentDate, 
        isOutsideMonth: false,
        isHoliday: holidays[dateISO]
      });
    }

    return days;
  }, [year, month, day, view, currentDate, holidays]);

  const daysArray = getDaysArray();

  const openNewEventModal = (date) => {
    setNewEventModalOpen(true);
    setNewEventDate(date);
  };

  const closeNewEventModal = () => {
    setNewEventModalOpen(false);
    setNewEventDate(null);
    setNewEventTitle('');
  };

  const handleAddEvent = () => {
    if (newEventDate && newEventTitle) {
      const dateISO = newEventDate.toISOString().split('T')[0];
      const newEvent = {
        id: Date.now(),
        date: dateISO,
        title: newEventTitle,
      };
      setEvents([...events, newEvent]);
      closeNewEventModal();
    }
  };

  const getEventsForDay = (date) => {
    if (!date) return [];
    const dateISO = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateISO);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const foundEvent = events.find(event =>
        event.title.toLowerCase().includes(term.toLowerCase())
      );
      if (foundEvent) {
        setHighlightedDate(new Date(foundEvent.date));
        setTimeout(() => setHighlightedDate(null), 1500);
      } else {
        setHighlightedDate(null);
      }
    } else {
      setHighlightedDate(null);
    }
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const isWeekend = (date) => {
    return !isWeekday(date);
  };

  const filteredDaysArray = daysArray.filter(dayInfo => {
    if (!dayInfo.date) return false;
    if (filter === 'weekdays' && dayInfo.isOutsideMonth === false) {
      return isWeekday(dayInfo.date);
    }
    if (filter === 'weekends' && dayInfo.isOutsideMonth === false) {
      return isWeekend(dayInfo.date);
    }
    return true;
  });

  const renderMonthView = () => (
    <div className="grid grid-cols-7 gap-1">
      {dayNames.map(day => (
        <div key={day} className="text-center font-semibold py-2">{day}</div>
      ))}
      {filteredDaysArray.map((dayInfo, index) => (
        <div
          key={index}
          className={`relative border p-2 min-h-24 ${
            dayInfo.isOutsideMonth ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700'
          } ${
            dayInfo.date && new Date().toDateString() === dayInfo.date.toDateString() && !dayInfo.isOutsideMonth ? 'ring-2 ring-indigo-500' : ''
          } ${
            highlightedDate && dayInfo.date && highlightedDate.toDateString() === dayInfo.date.toDateString() && !dayInfo.isOutsideMonth ? 'bg-indigo-100' : ''
          } cursor-pointer hover:bg-gray-50 transition-colors duration-150`}
          onClick={() => !dayInfo.isOutsideMonth && openNewEventModal(dayInfo.date)}
        >
          <div className="flex justify-end text-sm">{dayInfo.day}</div>
          {dayInfo.isHoliday && <div className="text-xs text-red-500">{dayInfo.isHoliday}</div>}
          <div className="mt-1 overflow-hidden">
            {getEventsForDay(dayInfo.date).map(event => (
              <div
                key={event.id}
                className="bg-blue-100 text-blue-700 text-xs rounded-sm py-0.5 px-1 mb-0.5 truncate"
                title={event.title}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderWeekView = () => (
    <div className="grid grid-cols-7 gap-1">
      {filteredDaysArray.map((dayInfo, index) => (
        <div key={index} className="border">
          <div className="p-2 font-semibold border-b">
            {fullDayNames[dayInfo.date.getDay()]} {dayInfo.day}
          </div>
          <div 
            className="p-2 min-h-32 cursor-pointer hover:bg-gray-50"
            onClick={() => openNewEventModal(dayInfo.date)}
          >
            {dayInfo.isHoliday && <div className="text-xs text-red-500 mb-1">{dayInfo.isHoliday}</div>}
            <div className="space-y-1">
              {getEventsForDay(dayInfo.date).map(event => (
                <div
                  key={event.id}
                  className="bg-blue-100 text-blue-700 text-xs rounded-sm py-1 px-2 truncate"
                  title={event.title}
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDayView = () => {
    const dayInfo = filteredDaysArray[0];
    if (!dayInfo) return null;
    
    const hours = Array.from({ length: 24 }, (_, i) => i);
    
    return (
      <div className="border rounded-lg">
        <div className="p-4 font-semibold border-b text-center">
          {fullDayNames[dayInfo.date.getDay()]}, {monthNames[dayInfo.date.getMonth()]} {dayInfo.day}, {dayInfo.date.getFullYear()}
        </div>
        <div className="divide-y">
          {hours.map(hour => {
            const hourEvents = getEventsForDay(dayInfo.date).filter(event => {
              const eventDate = new Date(event.date);
              return eventDate.getHours() === hour;
            });
            
            return (
              <div key={hour} className="flex min-h-16">
                <div className="w-16 p-2 border-r text-right">
                  {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                </div>
                <div 
                  className="flex-1 p-2 cursor-pointer hover:bg-gray-50"
                  onClick={() => {
                    const date = new Date(dayInfo.date);
                    date.setHours(hour);
                    openNewEventModal(date);
                  }}
                >
                  {hourEvents.map(event => (
                    <div
                      key={event.id}
                      className="bg-blue-100 text-blue-700 text-sm rounded-sm py-1 px-2 mb-1"
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setView('month')} 
            className={`px-3 py-1 rounded-md flex items-center ${view === 'month' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <Squares2X2Icon className="h-4 w-4 mr-1" />
            Month
          </button>
          <button 
            onClick={() => setView('week')} 
            className={`px-3 py-1 rounded-md flex items-center ${view === 'week' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <ViewColumnsIcon className="h-4 w-4 mr-1" />
            Week
          </button>
          <button 
            onClick={() => setView('day')} 
            className={`px-3 py-1 rounded-md flex items-center ${view === 'day' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <CalendarIcon className="h-4 w-4 mr-1" />
            Day
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate(-1)} className="focus:outline-none">
            <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
          </button>
          
          <h2 className="text-xl font-semibold text-center">
            {view === 'month' ? `${monthNames[month]} ${year}` : 
             view === 'week' ? `Week of ${monthNames[month]} ${day}, ${year}` : 
             `${monthNames[month]} ${day}, ${year}`}
          </h2>
          
          <button onClick={() => navigate(1)} className="focus:outline-none">
            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
          </button>
          
          <button onClick={goToToday} className="px-3 py-1 rounded-md bg-gray-100 text-gray-700">
            Today
          </button>
          
          <button
            onClick={() => openNewEventModal(new Date())}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Event
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search events..."
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-3 py-1 rounded-md ${filter === 'all' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            All Days
          </button>
          <button 
            onClick={() => setFilter('weekdays')} 
            className={`px-3 py-1 rounded-md ${filter === 'weekdays' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Weekdays
          </button>
          <button 
            onClick={() => setFilter('weekends')} 
            className={`px-3 py-1 rounded-md ${filter === 'weekends' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Weekends
          </button>
        </div>
      </div>

      {/* Calendar View */}
      {view === 'month' && renderMonthView()}
      {view === 'week' && renderWeekView()}
      {view === 'day' && renderDayView()}

      {/* New Event Modal */}
      {newEventModalOpen && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-white rounded-md p-6 shadow-lg w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Add New Event</h2>
      {newEventDate && (
        <p className="mb-2">
          {view === 'day' 
            ? `${newEventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} on ${newEventDate.toDateString()}` 
            : newEventDate.toDateString()}
        </p>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Event Title:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
          autoFocus
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={closeNewEventModal}
        >
          Cancel
        </button>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddEvent}
        >
          Add Event
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Calendar;
>>>>>>> e34ec79 (first commit)

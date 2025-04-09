import React, { useState, useEffect} from 'react';
import { eventData } from '../Data';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PlusIcon,
    MagnifyingGlassIcon,
    CalendarIcon,
    ViewColumnsIcon,
    Squares2X2Icon,
    XMarkIcon
} from '@heroicons/react/24/outline';
import DayView from './DayView';
import WeekView from './WeekView';
import MonthView from './MonthView';
import YearView from './YearView';
import ScheduleView from './ScheduleView';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState('day');
    const [holidays, setHolidays] = useState({});
    const [events, setEvents] = useState(eventData || []);
    const [newEventModalOpen, setNewEventModalOpen] = useState(false);
    const [newEventDate, setNewEventDate] = useState(null);
    const [newEventTitle, setNewEventTitle] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [highlightedDate, setHighlightedDate] = useState(null);
    const [filter, setFilter] = useState('all');

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
        } else if (view === 'year') {
            newDate.setFullYear(newDate.getFullYear() + direction);
        } else {
            newDate.setDate(newDate.getDate() + direction);
        }
        setCurrentDate(newDate);
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

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

    const renderView = () => {
        switch (view) {
            case 'day':
                return <DayView currentDate={currentDate} events={events} openNewEventModal={openNewEventModal} />;
            case 'week':
                return <WeekView currentDate={currentDate} events={events} openNewEventModal={openNewEventModal} />;
            case 'month':
                return <MonthView currentDate={currentDate} events={events} openNewEventModal={openNewEventModal} holidays={holidays} highlightedDate={highlightedDate} filter={filter} />;
            case 'year':
                return <YearView currentDate={currentDate} events={events} openNewEventModal={openNewEventModal} />;
            case 'schedule':
                return <ScheduleView currentDate={currentDate} events={events} />;
            default:
                return <DayView currentDate={currentDate} events={events} openNewEventModal={openNewEventModal} />;
        }
    };

    const getViewTitle = () => {
        if (view === 'month') {
            return `${monthNames[month]} ${year}`;
        } else if (view === 'week') {
            const startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            return `${monthNames[startOfWeek.getMonth()]} ${startOfWeek.getDate()} - ${monthNames[endOfWeek.getMonth()]} ${endOfWeek.getDate()}, ${year}`;
        } else if (view === 'day') {
            return `${monthNames[month]} ${day}, ${year}`;
        } else if (view === 'year') {
            return `${year}`;
        } else if (view === 'schedule') {
            return `Schedule for ${monthNames[month]} ${year}`;
        }
        return '';
    };

    return (
        <div className="container mx-auto p-4 md:p-6 bg-white rounded-xl shadow-sm">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
                    <button
                        onClick={() => setView('day')}
                        className={`px-3 py-1.5 rounded-lg flex items-center text-sm font-medium transition-colors ${view === 'day' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                    >
                        <CalendarIcon className="h-4 w-4 mr-1.5" />
                        Day
                    </button>
                    <button
                        onClick={() => setView('week')}
                        className={`px-3 py-1.5 rounded-lg flex items-center text-sm font-medium transition-colors ${view === 'week' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                    >
                        <ViewColumnsIcon className="h-4 w-4 mr-1.5" />
                        Week
                    </button>
                    <button
                        onClick={() => setView('month')}
                        className={`px-3 py-1.5 rounded-lg flex items-center text-sm font-medium transition-colors ${view === 'month' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                    >
                        <Squares2X2Icon className="h-4 w-4 mr-1.5" />
                        Month
                    </button>
                    <button
                        onClick={() => setView('year')}
                        className={`px-3 py-1.5 rounded-lg flex items-center text-sm font-medium transition-colors ${view === 'year' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                    >
                        <CalendarIcon className="h-4 w-4 mr-1.5" />
                        Year
                    </button>
                    <button
                        onClick={() => setView('schedule')}
                        className={`px-3 py-1.5 rounded-lg flex items-center text-sm font-medium transition-colors ${view === 'schedule' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                    >
                        <ViewColumnsIcon className="h-4 w-4 mr-1.5" />
                        Schedule
                    </button>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="flex items-center bg-gray-50 rounded-lg p-1">
                        <button 
                            onClick={() => navigate(-1)} 
                            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        
                        <button 
                            onClick={goToToday} 
                            className="px-3 py-1.5 mx-1 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                        >
                            Today
                        </button>
                        
                        <button 
                            onClick={() => navigate(1)} 
                            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </div>

                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 min-w-[180px] text-center">
                        {getViewTitle()}
                    </h2>

                    <button
                        onClick={() => openNewEventModal(new Date())}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors shadow-md"
                    >
                        <PlusIcon className="h-4 w-4 mr-1.5" />
                        <span className="hidden sm:inline">Add Event</span>
                        <span className="sm:hidden">Add</span>
                    </button>
                </div>
            </div>

            {/* Filters (for Month View) */}
            {view === 'month' && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                    <div className="relative flex-grow max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className="flex space-x-2">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${filter === 'all' ? 'bg-indigo-600 text-white shadow' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                        >
                            All Days
                        </button>
                        <button
                            onClick={() => setFilter('weekdays')}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${filter === 'weekdays' ? 'bg-indigo-600 text-white shadow' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                        >
                            Weekdays
                        </button>
                        <button
                            onClick={() => setFilter('weekends')}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${filter === 'weekends' ? 'bg-indigo-600 text-white shadow' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                        >
                            Weekends
                        </button>
                    </div>
                </div>
            )}

            {/* Calendar View */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {renderView()}
            </div>

            {/* New Event Modal */}
            {newEventModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
                        <div className="flex justify-between items-center border-b border-gray-100 p-4">
                            <h2 className="text-lg font-semibold text-gray-800">Add New Event</h2>
                            <button 
                                onClick={closeNewEventModal}
                                className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-50"
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        </div>
                        
                        <div className="p-4">
                            {newEventDate && (
                                <p className="mb-4 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                    {view === 'day'
                                        ? `${newEventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} on ${newEventDate.toDateString()}`
                                        : newEventDate.toDateString()}
                                </p>
                            )}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Event Title
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    value={newEventTitle}
                                    onChange={(e) => setNewEventTitle(e.target.value)}
                                    placeholder="Enter event title"
                                    autoFocus
                                />
                            </div>
                        </div>
                        
                        <div className="flex justify-end space-x-3 p-4 bg-gray-50 rounded-b-xl">
                            <button
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onClick={closeNewEventModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                                onClick={handleAddEvent}
                                disabled={!newEventTitle}
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
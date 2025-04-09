import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const WeekView = ({ currentDate, events, openNewEventModal, onNavigate }) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const hours = Array.from({ length: 24 }, (_, i) => i);

    // Event type colors
    const eventColors = {
        meeting: { bg: 'bg-blue-100', border: 'border-blue-200', text: 'text-blue-800' },
        holiday: { bg: 'bg-green-100', border: 'border-green-200', text: 'text-green-800' },
        task: { bg: 'bg-purple-100', border: 'border-purple-200', text: 'text-purple-800' },
        reminder: { bg: 'bg-yellow-100', border: 'border-yellow-200', text: 'text-yellow-800' },
        default: { bg: 'bg-indigo-100', border: 'border-indigo-200', text: 'text-indigo-800' }
    };

    // Calculate week range
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const weekDates = daysOfWeek.map((_, index) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + index);
        return date;
    });

    // Get current time position
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const isCurrentWeek = now >= startOfWeek && now <= endOfWeek;
    const currentDayIndex = isCurrentWeek ? now.getDay() : -1;

    // Get events for specific day
    const getEventsForDay = (date) => {
        return events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === date.toDateString();
        });
    };

    // Calculate event position and height
    const calculateEventStyle = (event) => {
        const eventDate = new Date(event.date);
        const startMinutes = eventDate.getHours() * 60 + eventDate.getMinutes();
        const duration = event.duration || 30; // default 30 minutes
        const endMinutes = startMinutes + duration;
        
        return {
            top: `${(startMinutes / 1440) * 100}%`,
            height: `${(duration / 1440) * 100}%`,
        };
    };

    // Get color scheme for event type
    const getEventColors = (type) => {
        return eventColors[type] || eventColors.default;
    };

    // Navigation handlers
    const handlePreviousWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 7);
        onNavigate(newDate);
    };

    const handleNextWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7);
        onNavigate(newDate);
    };

    const handleToday = () => {
        onNavigate(new Date());
    };

    // Format day for display
    const formatDayHeader = (date) => {
        const isToday = date.toDateString() === new Date().toDateString();
        const isSelected = date.toDateString() === currentDate.toDateString();
        const dayName = shortDays[date.getDay()];
        const dayNumber = date.getDate();
        
        return (
            <div className={`flex flex-col items-center ${isToday || isSelected ? 'font-semibold' : ''}`}>
                <span className="text-xs">{dayName}</span>
                <span className={`text-sm ${
                    isToday ? 'bg-indigo-600 text-white' : 
                    isSelected ? 'bg-indigo-100 text-indigo-800' : ''
                } w-6 h-6 flex items-center justify-center rounded-full`}>
                    {dayNumber}
                </span>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            {/* Header with Navigation */}
            <div className="flex items-center justify-between p-2 border-b bg-gray-50">
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={handleToday}
                        className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Today
                    </button>
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={handlePreviousWeek}
                            className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <div className="text-sm font-medium text-gray-800">
                            {startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - 
                            {endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <button 
                            onClick={handleNextWeek}
                            className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="text-xs text-gray-500">
                    GMT+5:30
                </div>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-8 border-b bg-gray-50">
                <div className="p-2 border-r"></div>
                {weekDates.map((date, index) => (
                    <div 
                        key={index} 
                        className={`p-2 text-center ${index < 6 ? 'border-r' : ''} cursor-pointer hover:bg-gray-100`}
                        onClick={() => onNavigate(new Date(date))}
                    >
                        {formatDayHeader(date)}
                    </div>
                ))}
            </div>

            {/* Time Grid */}
            <div className="flex flex-1 overflow-hidden">
                {/* Time Column */}
                <div className="w-16 flex flex-col border-r">
                    {hours.map(hour => (
                        <div key={hour} className="h-16 relative">
                            <div className="absolute -top-2.5 right-1 text-xs text-gray-400">
                                {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Day Columns */}
                <div className="grid grid-cols-7 flex-1 relative">
                    {/* Current Time Indicator */}
                    {isCurrentWeek && currentDayIndex >= 0 && (
                        <div 
                            className="absolute h-0.5 bg-red-500 z-10"
                            style={{
                                top: `${(currentMinutes / 1440) * 100}%`,
                                left: `${(currentDayIndex / 7) * 100}%`,
                                width: `${100 / 7}%`
                            }}
                        >
                            <div className="absolute -left-1.5 -top-1.5 w-3 h-3 rounded-full bg-red-500"></div>
                        </div>
                    )}

                    {/* Day Columns */}
                    {weekDates.map((date, dayIndex) => {
                        const dayEvents = getEventsForDay(date);
                        const isToday = date.toDateString() === new Date().toDateString();
                        const isSelected = date.toDateString() === currentDate.toDateString();
                        
                        return (
                            <div 
                                key={dayIndex} 
                                className={`relative ${dayIndex < 6 ? 'border-r' : ''} ${
                                    isToday ? 'bg-indigo-50/30' : 
                                    isSelected ? 'bg-gray-50' : ''
                                }`}
                                onClick={() => onNavigate(new Date(date))}
                            >
                                {/* Hour Slots */}
                                {hours.map(hour => (
                                    <div 
                                        key={hour} 
                                        className="h-16 border-b border-gray-100 relative"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const newDateTime = new Date(date);
                                            newDateTime.setHours(hour, 0, 0, 0);
                                            openNewEventModal(newDateTime);
                                        }}
                                    >
                                        {/* Half-hour marker */}
                                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100"></div>
                                    </div>
                                ))}

                                {/* Events */}
                                {dayEvents.map((event, eventIndex) => {
                                    const style = calculateEventStyle(event);
                                    const eventDate = new Date(event.date);
                                    const endDate = new Date(eventDate.getTime() + (event.duration || 30) * 60000);
                                    const colors = getEventColors(event.type);
                                    
                                    return (
                                        <div
                                            key={eventIndex}
                                            className={`absolute left-1 right-1 rounded-md ${colors.bg} ${colors.border} ${colors.text} text-xs p-1 overflow-hidden z-20`}
                                            style={{
                                                top: style.top,
                                                height: style.height
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openNewEventModal(new Date(event.date));
                                            }}
                                            title={`${event.title}\n${eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                                        >
                                            <div className="font-medium truncate">{event.title}</div>
                                            <div className="text-opacity-70 text-xxs truncate">
                                                {eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WeekView;